import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Sparkles, Wand2 } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const AiNeonDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setPhase((prev) => {
        const next = (prev + 1) % 3;
        if (next === 1) sounds.playWhoosh();
        if (next === 2) sounds.playSuccess();
        return next;
      });
    }, 2200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#050508] text-white p-6 flex flex-col justify-between select-none relative overflow-hidden font-sans border border-pink-900/30 rounded-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between text-xs text-pink-300/60 pb-2 border-b border-zinc-800">
        <span className="font-mono">AE DeepGlow FX Plugin</span>
        <span className="text-[10px] bg-pink-950/80 border border-pink-500/30 text-pink-300 px-2 py-0.5 rounded">
          Neon Kinetic Path
        </span>
      </div>

      {/* Main Visual Arena with Glowing Trail */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-4">
        {/* Animated Neon Glowing Pill Border */}
        <div className="relative p-1 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-cyan-400 p-[2px] shadow-[0_0_35px_rgba(236,72,153,0.5)]">
          <div className="bg-[#0A0A0F] px-8 py-3 rounded-full flex items-center gap-3">
            <AnimatePresence mode="wait">
              {phase === 0 && (
                <motion.div
                  key="chatbot"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-xl font-bold text-white tracking-wide"
                >
                  <Bot className="w-6 h-6 text-cyan-400" />
                  <span>AI Chatbot</span>
                </motion.div>
              )}

              {phase >= 1 && (
                <motion.div
                  key="organize"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300"
                >
                  <Sparkles className="w-5 h-5 text-pink-400 animate-spin" />
                  <span>Organize My Work</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Ambient neon backdrop glow */}
        <div className="absolute w-48 h-16 bg-pink-600/20 blur-3xl rounded-full pointer-events-none" />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800">
        <span className="text-pink-400/60">Dynamic Optical Flares & Easing</span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setPhase(i)}
              className={`w-2 h-2 rounded-full transition-all ${phase === i ? 'w-5 bg-pink-500' : 'bg-zinc-800'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
