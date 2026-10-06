import React, { useState } from 'react';
import { ProjectItem } from '../../types';
import { ReelsMotionDemo } from './ReelsMotionDemo';
import { MadisonAiDemo } from './MadisonAiDemo';
import { ClaudeAiDemo } from './ClaudeAiDemo';
import { NotionKineticDemo } from './NotionKineticDemo';
import { HdfcFintechDemo } from './HdfcFintechDemo';
import { AirbnbStoryDemo } from './AirbnbStoryDemo';
import { SaasReelDemo } from './SaasReelDemo';
import { AiNeonDemo } from './AiNeonDemo';
import { SocialCarouselDemo } from './SocialCarouselDemo';
import { Play, Pause, Volume2, VolumeX, Layers, Send } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';
import { getYouTubeEmbedUrl, isYouTubeUrl } from '../../utils/videoUtils';

interface ViewerProps {
  project: ProjectItem;
  onInquire?: (projectTitle: string) => void;
}

export const InteractiveProjectViewer: React.FC<ViewerProps> = ({
  project,
  onInquire,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [showInspector, setShowInspector] = useState<boolean>(false);

  const togglePlay = () => {
    sounds.playClick();
    setIsPlaying(!isPlaying);
  };

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    sounds.setEnabled(!next);
    if (!next) sounds.playPop();
  };

  const renderDemo = () => {
    // A real portfolio video takes priority over the built-in demo.
    if (project.customVideoUrl) {
      const isYt = isYouTubeUrl(project.customVideoUrl);
      if (isYt) {
        const embedUrl = getYouTubeEmbedUrl(project.customVideoUrl, isPlaying, isMuted, true);
        return (
          <div className="w-full h-full relative rounded-2xl overflow-hidden aspect-[16/9]">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={project.title}
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-6 text-zinc-400">Invalid YouTube URL</div>
            )}
          </div>
        );
      } else {
        return (
          <div className="w-full h-full relative rounded-2xl overflow-hidden aspect-[16/9] bg-black">
            <video
              src={project.customVideoUrl}
              autoPlay={isPlaying}
              loop
              muted={isMuted}
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        );
      }
    }

    // Otherwise render high-fidelity interactive motion demo
    switch (project.interactiveType) {
      case 'madison-ai':
        return <MadisonAiDemo isPlaying={isPlaying} />;
      case 'reels-motion':
        return <ReelsMotionDemo isPlaying={isPlaying} />;
      case 'claude-ai':
        return <ClaudeAiDemo isPlaying={isPlaying} />;
      case 'notion-kinetic':
        return <NotionKineticDemo isPlaying={isPlaying} />;
      case 'hdfc-fintech':
        return <HdfcFintechDemo isPlaying={isPlaying} />;
      case 'airbnb-story':
        return <AirbnbStoryDemo isPlaying={isPlaying} />;
      case 'saas-reel':
        return <SaasReelDemo isPlaying={isPlaying} />;
      case 'ai-neon':
        return <AiNeonDemo isPlaying={isPlaying} />;
      case 'social-carousel':
        return <SocialCarouselDemo isPlaying={isPlaying} />;
      default:
        return <ReelsMotionDemo isPlaying={isPlaying} />;
    }
  };

  return (
    <div className="w-full bg-[#100E1A] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      {/* Player Header Control Bar */}
      <div className="bg-[#151222] px-4 py-3 flex items-center justify-between border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-bold text-zinc-200 font-outfit truncate">{project.title}</span>
          <span className="hidden sm:inline-block text-zinc-500 font-space text-[11px]">
            [{project.categoryLabel}]
          </span>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-1.5 shrink-0">


          <button
            onClick={toggleSound}
            className={`p-1.5 rounded-xl border text-xs transition-colors cursor-pointer ${
              isMuted
                ? 'bg-[#1D192C] border-white/[0.06] text-zinc-500 hover:text-zinc-300'
                : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
            }`}
            title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setShowInspector(!showInspector);
            }}
            className={`px-3 py-1 rounded-xl border text-xs flex items-center gap-1 font-outfit font-semibold transition-colors cursor-pointer ${
              showInspector
                ? 'bg-gradient-to-r from-rose-500 to-purple-600 border-transparent text-white'
                : 'bg-[#1D192C] border-white/[0.06] text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span className="hidden sm:inline">Timeline Specs</span>
          </button>
        </div>
      </div>

      {/* Interactive Stage Canvas Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#08070C] flex items-center justify-center p-2 sm:p-4">
        {renderDemo()}

        {/* Floating Play/Pause Overlay Indicator when paused and in interactive mode */}
        {!isPlaying && (!project.customVideoUrl) && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center cursor-pointer z-20"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white translate-x-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Player Bottom Control Deck */}
      <div className="bg-[#151222] px-4 py-2.5 flex items-center justify-between border-t border-white/[0.06] text-xs font-outfit">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="px-2.5 py-1 bg-[#201C32] hover:bg-[#2A2542] rounded-xl text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3 h-3 text-rose-400" /> : <Play className="w-3 h-3 fill-rose-400 text-rose-400" />}
            <span className="text-[11px] font-semibold">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <span className="text-zinc-400 font-space text-[11px]">Duration: {project.duration}</span>
        </div>

        <div className="flex items-center gap-2">
          {onInquire && (
            <button
              onClick={() => onInquire(project.title)}
              className="px-3.5 py-1 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white rounded-full font-bold text-[11px] flex items-center gap-1.5 shadow-md shadow-rose-500/20 transition-all hover:scale-102 cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Inquire This Style</span>
            </button>
          )}
        </div>
      </div>

      {/* Inspector Details Panel */}
      {showInspector && (
        <div className="bg-[#0B0914] border-t border-white/[0.08] p-4 text-xs space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-300 font-space uppercase tracking-wider text-[11px]">
              Production Workflow & Deliverables
            </span>
            <span className="text-rose-300 font-space text-[11px]">Status: Production Ready</span>
          </div>

          <p className="text-zinc-400 leading-relaxed font-sans">{project.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <div className="bg-[#151222] p-3 rounded-2xl border border-white/[0.06]">
              <span className="text-zinc-500 text-[10px] uppercase font-space font-bold block mb-1">Key Highlights</span>
              <ul className="space-y-1 text-zinc-300 text-[11px] font-sans">
                {project.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-rose-400">✦</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#151222] p-3 rounded-2xl border border-white/[0.06] space-y-2">
              <div>
                <span className="text-zinc-500 text-[10px] uppercase font-space font-bold block mb-1">Software & Plugins</span>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded-lg bg-[#201C32] text-zinc-300 text-[10px] font-space">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-zinc-500 text-[10px] uppercase font-space font-bold block mb-1">Impact Metrics</span>
                <div className="grid grid-cols-3 gap-1">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-[#0D0B14] p-1.5 rounded-xl text-center">
                      <div className="font-bold text-white text-xs font-outfit">{m.value}</div>
                      <div className="text-[9px] text-zinc-500 font-space">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
