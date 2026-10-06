/**
 * Video helper utilities for Raghav Bari's portfolio
 * Supports YouTube (Standard, Shorts, youtu.be), Vimeo, and direct MP4/WebM URLs
 */

export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  
  // Standard watch?v=ID or &v=ID
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch && watchMatch[1]) return watchMatch[1];

  // youtu.be/ID
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch && shortMatch[1]) return shortMatch[1];

  // youtube.com/shorts/ID
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch && shortsMatch[1]) return shortsMatch[1];

  // youtube.com/embed/ID
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch && embedMatch[1]) return embedMatch[1];

  return null;
}

export function isYouTubeUrl(url: string): boolean {
  return !!extractYouTubeId(url);
}

export function getYouTubeEmbedUrl(url: string, autoplay: boolean = true, mute: boolean = true, loop: boolean = true): string | null {
  const id = extractYouTubeId(url);
  if (!id) return null;
  const autoParam = autoplay ? '1' : '0';
  const muteParam = mute ? '1' : '0';
  const loopParam = loop ? `1&playlist=${id}` : '0';
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoParam}&mute=${muteParam}&loop=${loopParam}&controls=1&rel=0&modestbranding=1&playsinline=1`;
}

export function isDirectVideoUrl(url: string): boolean {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url) || url.startsWith('blob:') || url.startsWith('data:video');
}
