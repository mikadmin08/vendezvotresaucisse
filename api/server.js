import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 3001);
const TWITCH_ID = process.env.TWITCH_CLIENT_ID;
const TWITCH_SECRET = process.env.TWITCH_CLIENT_SECRET;
const CACHE_SECONDS = Number(process.env.CACHE_SECONDS || 30);
const REQUEST_TIMEOUT_MS = Number(process.env.REQUEST_TIMEOUT_MS || 5000);
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

if (!TWITCH_ID || !TWITCH_SECRET) {
  console.error("❌ Manque TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET dans .env");
  process.exit(1);
}

// CORS (autorise ton front)
app.use(cors({ origin: ALLOWED_ORIGIN }));

// Limiteur simple (évite l’abus)
const limiter = rateLimit({
  windowMs: 60_000, // 1 min
  max: 120,         // 120 req/min par IP
});
app.use("/api/", limiter);

// Cache token en mémoire
let appToken = null;
let appTokenExpiresAt = 0;

// Helper: fetch avec timeout
async function fetchWithTimeout(resource, options = {}) {
  const { timeout = REQUEST_TIMEOUT_MS, ...rest } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(resource, { signal: controller.signal, ...rest });
  } finally {
    clearTimeout(id);
  }
}

// Récupère (ou réutilise) un App Access Token
async function getAppToken() {
  const now = Date.now();
  if (appToken && now < appTokenExpiresAt - 60_000) return appToken;

  const resp = await fetchWithTimeout("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: TWITCH_ID,
      client_secret: TWITCH_SECRET,
      grant_type: "client_credentials",
    }),
  });

  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`OAuth token error: ${resp.status} ${txt}`);
  }

  const data = await resp.json();
  appToken = data.access_token;
  appTokenExpiresAt = Date.now() + data.expires_in * 1000;
  return appToken;
}

// Appel Helix
async function helix(path, params = {}) {
  const token = await getAppToken();
  const url = new URL(`https://api.twitch.tv/helix/${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));

  const resp = await fetchWithTimeout(url, {
    headers: { "Client-ID": TWITCH_ID, Authorization: `Bearer ${token}` },
  });
  if (!resp.ok) {
    const txt = await resp.text();
    throw new Error(`Helix ${path} error: ${resp.status} ${txt}`);
  }
  return resp.json();
}

// Micro-cache de réponses (en mémoire)
const responseCache = new Map(); // key -> { expiresAt, payload }
function setCache(key, payload, seconds = CACHE_SECONDS) {
  responseCache.set(key, { expiresAt: Date.now() + seconds * 1000, payload });
}
function getCache(key) {
  const v = responseCache.get(key);
  if (v && Date.now() < v.expiresAt) return v.payload;
  responseCache.delete(key);
  return null;
}

// Endpoint: /api/twitch/status?login=monstercat
app.get("/api/twitch/status", async (req, res) => {
  try {
    const login = String(req.query.login || "").trim().toLowerCase();
    if (!login) return res.status(400).json({ error: "Missing ?login=" });

    const cacheKey = `status:${login}`;
    const cached = getCache(cacheKey);
    if (cached) {
      return res.set("Cache-Control", `public, max-age=${CACHE_SECONDS}`).json(cached);
    }

    // 1) users -> id
    const users = await helix("users", { login });
    const user = users.data?.[0];
    if (!user) {
      const payload = { live: false, display_name: login };
      setCache(cacheKey, payload);
      return res.set("Cache-Control", `public, max-age=${CACHE_SECONDS}`).json(payload);
    }

    // 2) streams -> live?
    const streams = await helix("streams", { user_id: user.id, type: "live" });
    const live = streams.data?.[0];

    if (!live) {
      const payload = {
        live: false,
        display_name: user.display_name,
        profile_image_url: user.profile_image_url,
      };
      setCache(cacheKey, payload);
      return res.set("Cache-Control", `public, max-age=${CACHE_SECONDS}`).json(payload);
    }

    // 3) channels -> game_name
    const channels = await helix("channels", { broadcaster_id: user.id });
    const channel = channels.data?.[0];

    const payload = {
      live: true,
      display_name: user.display_name,
      profile_image_url: user.profile_image_url,
      viewer_count: live.viewer_count,
      title: live.title,
      game_name: channel?.game_name ?? null,
      started_at: live.started_at,
      login,
    };

    setCache(cacheKey, payload);
    return res.set("Cache-Control", `public, max-age=${CACHE_SECONDS}`).json(payload);
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: "twitch_upstream_error" });
  }
});

app.get("/api/twitch/debug", async (req, res) => {
  try {
    const login = String(req.query.login || "").trim().toLowerCase();
    if (!login) return res.status(400).json({ error: "Missing ?login=" });

    const users = await helix("users", { login });
    const user = users.data?.[0] || null;

    let streams = null;
    let channels = null;

    if (user?.id) {
      streams = await helix("streams", { user_id: user.id, type: "live" });
      channels = await helix("channels", { broadcaster_id: user.id });
    }

    return res.json({ users, streams, channels });
  } catch (e) {
    console.error(e);
    return res.status(502).json({ error: "twitch_upstream_error" });
  }
});


app.get("/health", (_, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`✅ Twitch status API running on http://localhost:${PORT}`);
});
