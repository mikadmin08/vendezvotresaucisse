import { useEffect, useState } from "react";
import LiveDot from "../components/LiveIcon/LiveDot";

type TwitchStatus = {
  live: boolean;
  display_name?: string;
  profile_image_url?: string;
  viewer_count?: number;
  game_name?: string | null;
  title?: string | null;
  login?: string;
};

export default function TwitchLiveBadge({
  channelLogin,
  refreshMs = 30_000,
  endpoint = "/api/twitch/status",
}: {
  channelLogin: string;
  refreshMs?: number;
  endpoint?: string;
}) {
  const [data, setData] = useState<TwitchStatus | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function fetchStatus(abort?: AbortSignal) {
    try {
      setErr(null);
      const url = new URL(endpoint, window.location.origin);
      url.searchParams.set("login", channelLogin);
      const res = await fetch(url.toString(), { signal: abort });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      console.log("[UI] twitch status", json); // <-- vois-tu live:true ici ?
      setData(json);
    } catch (e: any) {
      if (e?.name !== "AbortError") setErr(e.message ?? "fetch_error");
    }
  }

  useEffect(() => {
    const ctrl = new AbortController();
    fetchStatus(ctrl.signal);
    const id = setInterval(() => fetchStatus(), refreshMs);
    return () => {
      ctrl.abort();
      clearInterval(id);
    };
  }, [channelLogin, endpoint, refreshMs]);

  const live = !!data?.live;

  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl shadow-sm border">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`inline-block w-3 h-3 rounded-full ${
              live ? "bg-green-500 animate-pulse" : "bg-gray-400"
            }`}
          >
            {live ? "En ligne" : "Hors ligne"}
            <LiveDot live={live} />
          </span>
        </div>

        {live && (
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
          </div>
        )}

        {err && <div className="text-xs text-red-500 mt-1">Erreur: {err}</div>}
      </div>
    </div>
  );
}
