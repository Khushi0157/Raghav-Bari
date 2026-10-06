import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Film, Volume2, FastForward, Play, Pause, Layers, Wand2 } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
  onOpenAddVideo?: () => void;
}

export const ReelsMotionDemo: React.FC<DemoProps> = ({ isPlaying, onOpenAddVideo }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [activeStyle, setActiveStyle] = useState<'hormozi' | 'minimal' | 'cyber'>('hormozi');
  const [bRollActive, setBRollActive] = useState<boolean>(true);
  const [speedRamp, setSpeedRamp] = useState<boolean>(false);

  const scriptLines = [
    {
      words: [
        { text: 'CLEAN', highlight: true, color: 'text-amber-400' },
        { text: 'SUBTITLE', highlight: true, color: 'text-white' },
        { text: 'ANIMATION', highlight: true, color: 'text-rose-400' },
      ],
      tag: 'Kinetic Hook',
      broll: 'AFTER EFFECTS TIMELINE',
    },
    {
      words: [
        { text: 'SMOOTH', highlight: true, color: 'text-cyan-400' },
        { text: 'TRANSITIONS', highlight: true, color: 'text-white' },
        { text: '&', highlight: false, color: 'text-zinc-400' },
        { text: 'SPEED RAMPS', highlight: true, color: 'text-emerald-400' },
      ],
      tag: 'Dynamic Pacing',
      broll: 'SPEED GRAPH EASING',
    },
    {
      words: [
        { text: 'KEEP', highlight: false, color: 'text-zinc-300' },
        { text: 'VIEWERS', highlight: true, color: 'text-purple-400' },
        { text: 'GLUED', highlight: true, color: 'text-amber-300' },
        { text: 'TILL END', highlight: true, color: 'text-rose-500' },
      ],
      tag: 'Retention Boost',
      broll: 'AUDIENCE RETENTION 88%',
    },
    {
      words: [
        { text: 'EDITED', highlight: true, color: 'text-white' },
        { text: 'BY', highlight: false, color: 'text-zinc-400' },
        { text: 'RAGHAV BARI', highlight: true, color: 'text-amber-400' },
      ],
      tag: 'Brand Authority',
      broll: 'PRORESR 4K MASTER',
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentLineIndex((prev) => {
        const next = (prev + 1) % scriptLines.length;
        if (next === 1) sounds.playWhoosh();
        if (next === 2) sounds.playPop();
        if (next === 3) sounds.playSuccess();
        return next;
      });
      setSpeedRamp(true);
      setTimeout(() => setSpeedRamp(false), 400);
    }, 2200);

    return () => clearInterval(interval);
  }, [isPlaying, scriptLines.length]);

  const line = scriptLines[currentLineIndex];

  return (
    <div className="w-full h-full bg-[#08070D] flex flex-col justify-between p-3 sm:p-5 select-none relative overflow-hidden font-sans border border-rose-500/20 rounded-2xl">
      {/* Top Editor Bar */}
      <div className="flex items-center justify-between z-10 text-xs text-zinc-400 font-mono pb-2 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-zinc-200 font-semibold font-outfit text-xs">Raghav_Reels_Master.prproj</span>
          <span className="text-[10px] text-zinc-500 hidden sm:inline">1080x1920 @ 60FPS</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              sounds.playClick();
              setActiveStyle(activeStyle === 'hormozi' ? 'minimal' : activeStyle === 'minimal' ? 'cyber' : 'hormozi');
            }}
            className="text-[10px] px-2 py-0.5 rounded-lg bg-[#181528] hover:bg-[#221D38] text-rose-300 border border-rose-500/20 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Wand2 className="w-2.5 h-2.5" />
            <span>Style: {activeStyle.toUpperCase()}</span>
          </button>
          <button
            onClick={() => {
              sounds.playClick();
              setBRollActive(!bRollActive);
            }}
            className="text-[10px] px-2 py-0.5 rounded-lg bg-[#181528] hover:bg-[#221D38] text-zinc-300 border border-white/[0.08] transition-colors hidden sm:block cursor-pointer"
          >
            {bRollActive ? 'B-Roll ON' : 'B-Roll OFF'}
          </button>
        </div>
      </div>

      {/* Main Canvas Area: 9:16 Vertical Smartphone Simulation */}
      <div className="relative flex-1 flex items-center justify-center my-2 sm:my-3">
        <div className="relative w-56 sm:w-64 h-[270px] sm:h-[310px] bg-gradient-to-b from-[#12101E] via-[#0E0C18] to-[#0A0912] rounded-3xl border-2 border-white/[0.12] overflow-hidden shadow-2xl flex flex-col justify-between p-4">
          {/* Subtle Ambient Video Scanlines & Vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/80 pointer-events-none" />
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.05)_3px)] pointer-events-none" />

          {/* Top Reel UI Header */}
          <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-400">
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 font-mono font-bold">
              {line.tag}
            </span>
            <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>RETENTION 89%</span>
            </div>
          </div>

          {/* Center Stage: Kinetic Subtitles & Animated B-Roll Card */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center space-y-3">
            {/* Dynamic B-Roll Overlay Banner */}
            {bRollActive && (
              <motion.div
                key={`broll-${currentLineIndex}`}
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.15] text-[10px] font-space text-zinc-300 font-semibold tracking-wider flex items-center gap-1.5 shadow-lg"
              >
                <Film className="w-3 h-3 text-purple-400" />
                <span>[B-ROLL: {line.broll}]</span>
              </motion.div>
            )}

            {/* Kinetic Dynamic Animated Subtitle Line */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLineIndex}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: speedRamp ? 1.08 : 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex flex-wrap items-center justify-center gap-2 px-2"
              >
                {line.words.map((word, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.25, type: 'spring', stiffness: 350 }}
                    className={`font-black font-outfit uppercase tracking-tight text-lg sm:text-xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] ${
                      activeStyle === 'hormozi'
                        ? word.highlight
                          ? `${word.color} bg-black/70 px-2 py-0.5 rounded-lg border border-white/20 shadow-md`
                          : 'text-zinc-200'
                        : activeStyle === 'cyber'
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 font-mono'
                        : 'text-white tracking-widest font-sans font-extrabold'
                    }`}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Audio Waveform Bar Pulsing */}
            <div className="flex items-center gap-1 h-5 pt-2">
              {[40, 75, 100, 60, 90, 45, 80, 100, 70, 50, 85, 30].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: isPlaying ? [`${h * 0.2}%`, `${h}%`, `${h * 0.4}%`] : `${h * 0.3}%` }}
                  transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.06 }}
                  className="w-1 bg-gradient-to-t from-rose-500 to-amber-400 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Bottom Watermark & Social Indicator */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/[0.08] text-[9px] text-zinc-400 font-space">
            <span className="font-semibold text-rose-300">@saasanimatorguy</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <FastForward className="w-2.5 h-2.5 text-amber-400" />
              <span>Speed Ramped 1.2x</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Premiere Pro Multi-Track Scrubber Simulation */}
      <div className="pt-2 border-t border-white/[0.08] space-y-1.5">
        <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-rose-400 font-bold">V1:</span> 4K ProRes Video Track
            <span className="text-zinc-600">|</span>
            <span className="text-purple-400 font-bold">V2:</span> Dynamic Subtitles
            <span className="text-zinc-600">|</span>
            <span className="text-amber-400 font-bold">A1:</span> Foley Sound FX
          </div>
          <span className="text-zinc-500">Timeline: 0:15 / 0:60</span>
        </div>

        {/* Visual Layer Bars */}
        <div className="grid grid-cols-4 gap-1 h-3">
          <div className="rounded bg-rose-500/40 border border-rose-500/60 flex items-center px-1 text-[8px] text-rose-200 truncate">
            Hook Cut
          </div>
          <div className="rounded bg-purple-500/40 border border-purple-500/60 flex items-center px-1 text-[8px] text-purple-200 truncate">
            Kinetic Type
          </div>
          <div className="rounded bg-cyan-500/40 border border-cyan-500/60 flex items-center px-1 text-[8px] text-cyan-200 truncate">
            B-Roll In
          </div>
          <div className="rounded bg-amber-500/40 border border-amber-500/60 flex items-center px-1 text-[8px] text-amber-200 truncate">
            Foley Whoosh
          </div>
        </div>
      </div>
    </div>
  );
};
