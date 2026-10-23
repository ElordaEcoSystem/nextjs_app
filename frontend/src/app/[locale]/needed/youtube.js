// Из любой обычной ссылки на YouTube получает безопасный адрес для встраивания.
// Редактор может вставить что угодно: youtube.com/watch?v=…, youtu.be/…,
// /shorts/…, /live/…, ссылку со временем (&t=1m30s), ссылку с http:// или даже
// весь код <iframe>. Возвращает https://www.youtube-nocookie.com/embed/ID
// или null, если это не ссылка на видео YouTube.
const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;

// "90", "90s", "1m30s", "1h2m3s" -> секунды
function parseStart(value) {
  if (!value) return 0;
  if (/^\d+$/.test(value)) return Number(value);
  const m = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!m) return 0;
  return Number(m[1] || 0) * 3600 + Number(m[2] || 0) * 60 + Number(m[3] || 0);
}

export function youtubeEmbedUrl(input) {
  if (!input || typeof input !== "string") return null;

  let raw = input.trim();
  const iframeSrc = raw.match(/<iframe[^>]*\ssrc=["']([^"']+)["']/i);
  if (iframeSrc) raw = iframeSrc[1];
  if (raw.startsWith("//")) raw = `https:${raw}`;
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }

  const host = url.hostname.toLowerCase().replace(/^(www\.|m\.|music\.)/, "");
  let id = null;
  if (host === "youtu.be") {
    id = url.pathname.slice(1).split("/")[0];
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (url.pathname === "/watch") {
      id = url.searchParams.get("v");
    } else {
      id = url.pathname.match(/^\/(?:embed|shorts|live|v)\/([^/?]+)/)?.[1] ?? null;
    }
  }
  if (!id || !VIDEO_ID.test(id)) return null;

  const start = parseStart(url.searchParams.get("t") || url.searchParams.get("start"));
  return `https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${start}` : ""}`;
}
