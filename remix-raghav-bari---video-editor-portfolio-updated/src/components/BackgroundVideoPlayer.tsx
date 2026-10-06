import React from 'react';
import { getYouTubeEmbedUrl, isYouTubeUrl } from '../utils/videoUtils';

export interface BgVideoConfig {
  enabled: boolean;
  videoUrl: string; // YouTube URL, direct MP4, or blob URL
  opacity: number; // 0.1 to 0.6
  muted: boolean;
  videoName: string;
}

export const DEFAULT_BG_VIDEO_CONFIG: BgVideoConfig = {
  enabled: true,
  // The local abstract video is configured centrally in src/data/mediaConfig.ts.
  videoUrl: '',
  opacity: 0.18,
  muted: true,
  videoName: 'SaaS Motion Design & Code Glow',
};

interface BgVideoProps {
  config: BgVideoConfig;
}

export const BackgroundVideoPlayer: React.FC<BgVideoProps> = ({ config }) => {
  if (!config.enabled || !config.videoUrl) return null;

  const isYt = isYouTubeUrl(config.videoUrl);
  const ytEmbed = isYt ? getYouTubeEmbedUrl(config.videoUrl, true, config.muted, true) : null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-opacity duration-700"
      style={{ opacity: config.opacity }}
    >
      {isYt && ytEmbed ? (
        <div className="absolute inset-0 w-full h-full scale-125 transform">
          <iframe
            src={ytEmbed}
            title="Background Video"
            className="w-full h-full object-cover pointer-events-none"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        </div>
      ) : (
        <video
          key={config.videoUrl}
          src={config.videoUrl}
          autoPlay
          loop
          muted={config.muted}
          playsInline
          className="w-full h-full object-cover pointer-events-none"
        />
      )}

      {/* Dark cinematic vignette gradient overlay so portfolio text remains 100% readable and pristine */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08070B]/85 via-[#08070B]/60 to-[#08070B]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#08070B]/40 to-[#08070B]/90 pointer-events-none" />
    </div>
  );
};
