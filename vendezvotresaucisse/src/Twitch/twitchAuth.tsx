// twitchAuth.ts
const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID as string;
const REDIRECT_URI = import.meta.env.VITE_TWITCH_REDIRECT_URI as string;

const AUTH_URL = "https://id.twitch.tv/oauth2/authorize";
const VALIDATE_URL = "https://id.twitch.tv/oauth2/validate";

// Sauvegarde basique du token côté client
export function saveToken(token: string, expiresInSec: number) {
  const expiresAt = Date.now() + expiresInSec * 1000 - 30_000; // marge 30s
  localStorage.setItem("tw_access_token", token);
  localStorage.setItem("tw_expires_at", String(expiresAt));
}

export function getStoredToken(): string | null {
  const t = localStorage.getItem("tw_access_token");
  const exp = Number(localStorage.getItem("tw_expires_at") || 0);
  if (!t || Date.now() >= exp) return null;
  return t;
}

export function clearToken() {
  localStorage.removeItem("tw_access_token");
  localStorage.removeItem("tw_expires_at");
}

export function redirectToTwitchLogin() {
  const u = new URL(AUTH_URL);
  u.searchParams.set("client_id", CLIENT_ID);
  u.searchParams.set("redirect_uri", REDIRECT_URI);
  u.searchParams.set("response_type", "token"); // implicit
  u.searchParams.set("scope", ""); // lecture publique => scopes vides
  u.searchParams.set("state", crypto.randomUUID());
  window.location.assign(u.toString());
}

// À appeler au chargement de la page pour extraire le token du hash
export function readTokenFromHash(): {
  token: string;
  expiresIn: number;
} | null {
  if (!window.location.hash.startsWith("#")) return null;
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const token = hash.get("access_token");
  const expiresIn = Number(hash.get("expires_in") || 0);
  if (!token) return null;
  // Nettoie l’URL
  history.replaceState(
    null,
    "",
    window.location.pathname + window.location.search
  );
  return { token, expiresIn };
}

// Validation token (obligatoire régulièrement)
export async function validateToken(token: string) {
  const r = await fetch(VALIDATE_URL, {
    headers: { Authorization: `OAuth ${token}` },
  });
  if (!r.ok) throw new Error("invalid_token");
  return r.json();
}
