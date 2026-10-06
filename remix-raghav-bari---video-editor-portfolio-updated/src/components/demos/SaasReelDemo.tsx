import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Sliders, MousePointer, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const SaasReelDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setPhase((prev) => {
        const next = (prev + 1) % 4;
        if (next === 1) sounds.playPop();
        if (next === 2) sounds.playWhoosh();
        if (next === 3) sounds.playSuccess();
        return next;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#0A0B10] text-zinc-100 p-4 sm:p-5 flex flex-col justify-between select-none relative overflow-hidden font-sans border border-purple-900/30 rounded-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center font-bold text-[10px]">
            Pr
          </div>
          <span className="font-semibold text-purple-200">Premiere Pro Timeline & Sound Master</span>
        </div>
        <span className="text-[10px] text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded">
          High Retention SaaS Reel
        </span>
      </div>

      {/* Main Reel Animation */}
      <div className="relative flex-1 flex flex-col justify-center my-2">
        <AnimatePresence mode="wait">
          {/* Phase 0: Timeline Audio Stack Simulation */}
          {phase === 0 && (
            <motion.div
              key="p0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1.5 max-w-sm mx-auto w-full font-mono text-[10px]"
            >
              <div className="text-xs text-purple-300 font-bold flex items-center gap-1.5 mb-1 font-sans">
                <Music className="w-3.5 h-3.5 text-purple-400" /> Multi-Track Sound Foley
              </div>
              {['tech (43).mp3', 'tech (42).mp3', 'tech (41).mp3', 'tech (39).mp3', 'tech (36).mp3'].map((trk, i) => (
                <div key={trk} className="flex items-center gap-2 bg-zinc-900/90 p-1.5 rounded border border-zinc-800">
                  <div className="w-3.5 h-3.5 rounded-sm bg-emerald-500/80 flex items-center justify-center text-[8px] font-bold">
                    ♫
                  </div>
                  <span className="text-zinc-300 flex-1 truncate">{trk}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 8 }).map((_, b) => (
                      <div
                        key={b}
                        className="w-1 bg-purple-400/80 rounded-full"
                        style={{ height: `${Math.sin(i * 2 + b) * 8 + 10}px` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Phase 1: Raghav Hero Introduction Badge */}
          {phase === 1 && (
            <motion.div
              key="p1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-2 max-w-xs mx-auto"
            >
              <div className="p-4 bg-gradient-to-tr from-purple-950/60 to-indigo-950/40 border border-purple-500/40 rounded-2xl backdrop-blur-xl">
                <div className="text-2xl font-extrabold text-white">RAGHAV</div>
                <div className="text-xs font-semibold text-purple-300">SaaS Motion Designer</div>
                <div className="text-[11px] text-zinc-400 mt-2">
                  "I animate the products your SaaS team builds so they get more clicks, more trust, more users."
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 2: Cursor click sound & Timeline Pill Tags */}
          {phase === 2 && (
            <motion.div
              key="p2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="px-3 py-1 bg-cyan-400 text-black font-bold text-xs rounded-lg shadow-md flex items-center gap-1.5">
                <Sliders className="w-3 h-3" /> Timeline
              </div>
              <div className="px-3 py-1 bg-emerald-400 text-black font-bold text-xs rounded-lg shadow-md flex items-center gap-1.5">
                <Music className="w-3 h-3" /> BGM Synchronization
              </div>
              <div className="px-3 py-1 bg-emerald-900 text-emerald-200 border border-emerald-500/40 font-bold text-xs rounded-lg flex items-center gap-1.5">
                <span>Sound Design Layer</span>
              </div>
              <motion.div
                animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-purple-400"
              >
                <MousePointer className="w-5 h-5 fill-purple-400" />
              </motion.div>
            </motion.div>
          )}

          {/* Phase 3: Trade & Revenue Metric Card */}
          {phase === 3 && (
            <motion.div
              key="p3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-2 max-w-xs mx-auto text-center"
            >
              <div className="bg-zinc-900/90 border border-purple-500/40 rounded-xl p-3 shadow-xl">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span>Trade Product SaaS</span>
                  <span className="text-emerald-400 font-bold">+148%</span>
                </div>
                <div className="text-2xl font-extrabold text-white">$450k+ Revenue</div>
                <div className="text-[10px] text-zinc-500">Video Conversion Uplift</div>
              </div>
              <div className="text-sm font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                MORE TRUST • MORE USERS
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800">
        <span className="text-purple-300/50">Custom Premiere NLE Flow</span>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              onClick={() => setPhase(i)}
              className={`w-2 h-2 rounded-full transition-all ${phase === i ? 'w-5 bg-purple-500' : 'bg-zinc-800'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
