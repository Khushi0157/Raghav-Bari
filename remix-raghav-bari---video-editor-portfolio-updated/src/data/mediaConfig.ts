// Central place for the portfolio's local media.
// To replace a video later, swap the imported file below and rebuild.
// To remove the background video, set BACKGROUND_VIDEO_CONFIG.enabled = false.

import backgroundVideo from '../assets/videos/portfolio-background.mp4';
import featuredClientVideo from '../assets/videos/featured-client-edit.mp4';
import madisonAiVideo from '../assets/videos/madison-ai.mp4';
import creatorReelsVideo from '../assets/videos/creator-reels.mp4';
import claudeAiVideo from '../assets/videos/claude-ai.mp4';
import notionVideo from '../assets/videos/notion.mp4';
import hdfcSbiVideo from '../assets/videos/hdfc-sbi.mp4';

export const BACKGROUND_VIDEO_CONFIG = {
  enabled: true,
  videoUrl: backgroundVideo,
  opacity: 0.14,
  muted: true,
  videoName: 'Raghav Portfolio Background',
};

// Match each project ID to the real video you want displayed.
// Remove a line to make that project fall back to its built-in motion demo.
export const LOCAL_PROJECT_VIDEOS: Record<string, string> = {
  'youtube-client-edit': featuredClientVideo,
  'madison-ai-explainer': madisonAiVideo,
  'high-retention-reels': creatorReelsVideo,
  'claude-ai-explainer': claudeAiVideo,
  'notion-kinetic-text': notionVideo,
  'hdfc-sbi-fintech': hdfcSbiVideo,
};
