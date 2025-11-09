import { useEffect, useState } from "react";
import {
  getStoredToken,
  saveToken,
  readTokenFromHash,
  validateToken,
  redirectToTwitchLogin,
  clearToken,
} from "./twitchAuth";
import { getChannelStatus } from "./twitchApi";

type Props = { channelLogin: string; refreshMs?: number };

export default function TwitchLiveBadgeFront({
  channelLogin,
  refreshMs = 60_000,
}: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  const [err, setErr] = useState<string | null>(null);

  // Récupère token depuis hash (après login) ou storage
  useEffect(() => {
    const fromHash = readTokenFromHash();
    if (fromHash) {
      saveToken(fromHash.token, fromHash.expiresIn);
      setToken(fromHash.token);
      return;
    }
    const stored = getStoredToken();
    if (stored) setToken(stored);
  }, []);

  // Valide périodiquement le token
  useEffect(() => {
    if (!token) return;
    let mounted = true;
    (async () => {
      try {
        await validateToken(token);
      } catch {
        clearToken();
        if (mounted) setToken(null);
      }
    })();
    const id = setInterval(async () => {
      try {
        await validateToken(token);
      } catch {
        clearToken();
        if (mounted) setToken(null);
      }
    }, 60 * 60 * 1000); // toutes les heures
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [token]);

  // Polling status
  useEffect(() => {
    if (!token) return;
    let stop = false;
    const load = async () => {
      try {
        setErr(null);
        const s = await getChannelStatus(channelLogin, token);
        if (!stop) setData(s);
      } catch (e: any) {
        if (!stop) setErr(e.message || "error");
      }
    };
    load();
    const id = setInterval(load, refreshMs);
    return () => {
      stop = true;
      clearInterval(id);
    };
  }, [token, channelLogin, refreshMs]);

  if (!token) {
    return (
      <button
        onClick={redirectToTwitchLogin}
        className="px-3 py-2 rounded bg-black text-white"
      >
        Se connecter à Twitch
      </button>
    );
  }

  const live = !!data?.live;
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl border">
      {data?.profile_image_url ? (
        <img
          src={data.profile_image_url}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-200" />
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <strong className="truncate">
            {data?.display_name ?? channelLogin}
          </strong>
          <span
            title={live ? "En live" : "Hors ligne"}
            className={`inline-block w-3 h-3 rounded-full ${
              live ? "bg-green-500 animate-pulse" : "bg-gray-400"
            }`}
          />
        </div>
        {live ? (
          <div className="text-sm text-gray-700">
            <span className="font-medium">{data?.viewer_count ?? 0}</span>{" "}
            spectateur(s)
            {data?.game_name ? (
              <>
                {" "}
                • Catégorie :{" "}
                <span className="font-medium">{data.game_name}</span>
              </>
            ) : null}
            {data?.title ? (
              <div className="truncate text-gray-600">« {data.title} »</div>
            ) : null}
          </div>
        ) : (
          <div className="text-sm text-gray-500">Hors ligne</div>
        )}
        {err && <div className="text-xs text-red-500 mt-1">Erreur: {err}</div>}
      </div>
      <a
        className="ml-auto text-sm underline"
        href={`https://twitch.tv/${channelLogin}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ouvrir la chaîne
      </a>
    </div>
  );
}
