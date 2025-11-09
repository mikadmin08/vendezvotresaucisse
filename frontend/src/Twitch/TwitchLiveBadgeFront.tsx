import { useEffect, useState } from "react";
import LiveDot from "../components/LiveIcon/LiveDot";
import "./index.scss";

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
    <div className="badge-twitch-container">
      <div className="badge-twitch-body">
        <div className="online">
          {live && <img src={data.profile_image_url} alt="imageprofile" />}
          <div className="online-info">
            {live && data.login}
            <div className="online-status">
              <span>{live ? "ONLINE" : "OFFLINE"}</span>
              <LiveDot live={live} />
            </div>
          </div>
        </div>

        {live && (
          <div className="stream-info">
            <div className="viewers">
              <i className="pi pi-eye" style={{ fontSize: "1rem" }}></i>
              <span>{data?.viewer_count ?? 0}</span>
            </div>
            {data?.game_name ? (
              <span>
                Catégorie : <span>{data.game_name}</span>
              </span>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
