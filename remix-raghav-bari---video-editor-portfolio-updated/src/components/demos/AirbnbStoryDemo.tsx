import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BedDouble, BrickWall, Heart, Sparkles } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const AirbnbStoryDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % 3;
        if (next === 1) sounds.playPop();
        if (next === 2) sounds.playSuccess();
        return next;
      });
    }, 2400);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#FFFFFF] text-[#222222] p-5 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden font-sans border border-zinc-200 rounded-xl shadow-xl">
      {/* Top Airbnb search bar simulation */}
      <div className="max-w-xs mx-auto w-full bg-white rounded-full border border-zinc-300 px-3 py-2 flex items-center justify-between shadow-sm text-xs">
        <div className="flex items-center gap-2 text-zinc-700 font-medium">
          <Search className="w-3.5 h-3.5 text-zinc-400" />
          <span>Hotels in Singapore</span>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#FF385C] flex items-center justify-center text-white">
          <Search className="w-3 h-3" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center my-3">
        <AnimatePresence mode="wait">
          {/* Step 0: Search & Hotel grid */}
          {step === 0 && (
            <motion.div
              key="hotels"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center space-y-2"
            >
              <div className="text-xs text-zinc-500 font-semibold">Finding a place to stay...</div>
              <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                {['Pool Suite', 'Guest Fav', 'City View'].map((item, idx) => (
                  <div key={idx} className="bg-zinc-100 rounded-lg p-2 border border-zinc-200 text-[10px] text-zinc-600 font-medium">
                    🏨 {item}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 1: Same lifeless experience */}
          {step === 1 && (
            <motion.div
              key="lifeless"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-3 max-w-xs mx-auto w-full text-center"
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <BedDouble className="w-5 h-5 mx-auto text-zinc-500 mb-1" />
                  <div className="font-bold text-xs">Room</div>
                  <div className="text-[9px] text-zinc-400">Same layout</div>
                </div>
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3">
                  <BrickWall className="w-5 h-5 mx-auto text-zinc-500 mb-1" />
                  <div className="font-bold text-xs">Walls</div>
                  <div className="text-[9px] text-zinc-400">Same texture</div>
                </div>
              </div>
              <div className="text-sm font-extrabold text-zinc-800 tracking-tight">
                Same Lifeless Experience
              </div>
            </motion.div>
          )}

          {/* Step 2: Then Airbnb Changed Everything */}
          {step === 2 && (
            <motion.div
              key="airbnb-hero"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15 }}
              className="text-center space-y-3"
            >
              <div className="w-14 h-14 bg-[#FF385C] rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg shadow-[#FF385C]/30">
                <Heart className="w-8 h-8 fill-white" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight">
                Then <span className="text-[#FF385C]">Airbnb</span> Changed Everything
              </div>
              <div className="text-xs text-zinc-500 font-medium flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF385C]" /> High-impact Brand Narrative
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-2 border-t border-zinc-100">
        <span>Visual Storytelling & Fast Cuts</span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`w-2 h-2 rounded-full transition-all ${step === i ? 'w-5 bg-[#FF385C]' : 'bg-zinc-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
