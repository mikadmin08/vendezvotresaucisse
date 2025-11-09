// twitchApi.ts
const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID as string;

async function helix<T>(
  path: string,
  token: string,
  params: Record<string, string>
) {
  const url = new URL(`https://api.twitch.tv/helix/${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: { "Client-Id": CLIENT_ID, Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`${path} ${res.status}`);
  return (await res.json()) as T;
}

export async function getChannelStatus(login: string, token: string) {
  // 1) users -> id
  const users = await helix<{ data: any[] }>("users", token, { login });
  const user = users.data?.[0];
  if (!user) return { live: false, display_name: login };

  // 2) streams -> live?
  const streams = await helix<{ data: any[] }>("streams", token, {
    user_id: user.id,
  });
  const live = streams.data?.[0];

  if (!live) {
    return {
      live: false,
      display_name: user.display_name,
      profile_image_url: user.profile_image_url,
    };
  }

  // 3) channels -> game_name
  const channels = await helix<{ data: any[] }>("channels", token, {
    broadcaster_id: user.id,
  });
  const channel = channels.data?.[0];

  return {
    live: true,
    display_name: user.display_name,
    profile_image_url: user.profile_image_url,
    viewer_count: live.viewer_count,
    title: live.title,
    game_name: channel?.game_name ?? null,
  };
}
