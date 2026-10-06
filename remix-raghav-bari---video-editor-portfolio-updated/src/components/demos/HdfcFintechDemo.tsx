import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, TrendingUp, Users, ArrowRight, Award } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const HdfcFintechDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [frame, setFrame] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setFrame((prev) => {
        const next = (prev + 1) % 3;
        if (next === 1) sounds.playWhoosh();
        if (next === 2) sounds.playPop();
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#080D1A] text-white p-5 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden font-sans border border-blue-900/40 rounded-xl shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-blue-900/30 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-[10px]">
            HDFC
          </div>
          <span className="font-semibold text-blue-100">Fintech 3D Business Explainer</span>
        </div>
        <span className="text-[10px] text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2 py-0.5 rounded">
          3.4M+ YouTube Views
        </span>
      </div>

      {/* Main Visual Arena */}
      <div className="relative flex-1 flex flex-col justify-center my-3">
        <AnimatePresence mode="wait">
          {/* Frame 0: 3D Corporate Character / HDFC Building */}
          {frame === 0 && (
            <motion.div
              key="f0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -15 }}
              className="text-center space-y-3"
            >
              <div className="inline-block p-4 bg-gradient-to-b from-blue-900/30 to-indigo-900/10 rounded-2xl border border-blue-500/30 backdrop-blur-md">
                <div className="text-4xl mb-1">🏦</div>
                <div className="text-xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                  <span>HDFC Bank</span>
                  <span className="text-xs bg-blue-600 px-2 py-0.5 rounded text-white font-mono">3D Narrative</span>
                </div>
                <div className="text-xs text-blue-300/80 mt-1 font-mono">Executive: Mr. H.T. Pareek Case Study</div>
              </div>
            </motion.div>
          )}

          {/* Frame 1: Comparison Stats (SBI vs HDFC Branches) */}
          {frame === 1 && (
            <motion.div
              key="f1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-2 gap-3 max-w-md mx-auto w-full"
            >
              {/* SBI */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 text-center">
                <div className="text-xs text-zinc-400 font-semibold mb-1">State Bank of India</div>
                <div className="text-2xl font-extrabold text-white tracking-tight">22,900</div>
                <div className="text-[10px] text-zinc-500">Total Branches</div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-zinc-400 h-full w-full" />
                </div>
              </div>

              {/* HDFC */}
              <div className="bg-blue-950/60 border border-blue-600/50 rounded-xl p-3 text-center relative overflow-hidden">
                <div className="absolute top-1 right-1 text-[8px] bg-blue-500 text-white px-1.5 py-0.5 rounded font-bold">
                  High Yield
                </div>
                <div className="text-xs text-blue-300 font-semibold mb-1">HDFC Bank</div>
                <div className="text-2xl font-extrabold text-blue-400 tracking-tight">9,400</div>
                <div className="text-[10px] text-blue-300/60">Total Branches</div>
                <div className="w-full bg-blue-950 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-blue-500 h-full w-[41%]" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Frame 2: 300 Crore per Branch & +60% Output */}
          {frame === 2 && (
            <motion.div
              key="f2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-2 max-w-sm mx-auto"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" /> 60% Higher Efficiency
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200 tracking-tight">
                ₹300 CRORE
              </div>
              <div className="text-xs text-blue-300/80">Average Revenue Generated Per Branch</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-blue-900/30">
        <span className="text-blue-300/60">Data Visualizer & Color Grade</span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setFrame(i)}
              className={`w-2 h-2 rounded-full transition-all ${frame === i ? 'w-5 bg-blue-500' : 'bg-blue-950'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
