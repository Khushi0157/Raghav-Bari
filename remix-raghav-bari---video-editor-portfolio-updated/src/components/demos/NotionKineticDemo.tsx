import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Edit3, FolderKanban, Briefcase, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const NotionKineticDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setPhase((prev) => {
        const next = (prev + 1) % 4;
        if (next === 1) sounds.playWhoosh();
        if (next === 2) sounds.playPop();
        if (next === 3) sounds.playSuccess();
        return next;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#F6F5F4] text-[#222222] p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden font-sans rounded-xl border border-zinc-300/80 shadow-2xl">
      {/* Top Notion Brand Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-zinc-900 text-white rounded-md flex items-center justify-center font-bold text-sm shadow-sm">
            N
          </div>
          <span className="font-bold text-base tracking-tight text-zinc-900">Notion Kinetic</span>
        </div>
        <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-200 text-zinc-700">
          60fps Kinetic AE
        </span>
      </div>

      {/* Main Kinetic Typography Animation Area */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-4">
        {/* Step 0: Logo reveal */}
        <AnimatePresence mode="wait">
          {phase === 0 && (
            <motion.div
              key="logo-hero"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                <span className="font-extrabold text-4xl font-serif">N</span>
              </div>
              <div className="text-3xl font-extrabold tracking-tight text-zinc-900">Notion</div>
            </motion.div>
          )}

          {/* Step 1: "Not only for Taking notes" */}
          {phase === 1 && (
            <motion.div
              key="step-strike"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-3"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight flex items-center justify-center gap-2 flex-wrap">
                <span>Not only for</span>
                <span className="relative inline-block px-3 py-1 bg-zinc-200 rounded-md">
                  <span className="text-zinc-600">Taking notes ✏️</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="absolute top-1/2 left-0 h-0.5 bg-zinc-900"
                  />
                </span>
              </div>
            </motion.div>
          )}

          {/* Step 2 & 3: "Organize -> Projects & Work" with dynamic SVG brace */}
          {(phase === 2 || phase === 3) && (
            <motion.div
              key="step-organize"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center max-w-md w-full"
            >
              {/* Strike top */}
              <div className="text-sm font-semibold text-zinc-400 line-through mb-1">
                Not only for Taking notes
              </div>

              {/* Huge ORGANIZE with gradient */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent tracking-tight my-1"
              >
                Organize
              </motion.div>

              {/* Dynamic SVG Curly Branch */}
              <div className="w-48 sm:w-64 h-12 relative flex items-center justify-center">
                <svg className="w-full h-full stroke-zinc-900 stroke-2 fill-none" viewBox="0 0 240 48">
                  <path d="M 120 0 L 120 18 Q 120 28 80 28 L 40 28 Q 20 28 20 48" />
                  <path d="M 120 0 L 120 18 Q 120 28 160 28 L 200 28 Q 220 28 220 48" />
                </svg>
              </div>

              {/* Branch Items */}
              <div className="flex items-center justify-between w-full px-4 sm:px-8 mt-1">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-1.5 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shadow-sm font-bold text-xs text-zinc-900"
                >
                  <FolderKanban className="w-4 h-4 text-emerald-600" />
                  <span>Projects</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-1.5 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shadow-sm font-bold text-xs text-zinc-900"
                >
                  <Briefcase className="w-4 h-4 text-teal-600" />
                  <span>Work</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Step Indicator */}
      <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-zinc-200">
        <span>Clean Kinetic Typography & Sound Sync</span>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setPhase(i)}
              className={`w-2 h-2 rounded-full transition-all ${phase === i ? 'w-5 bg-zinc-900' : 'bg-zinc-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
