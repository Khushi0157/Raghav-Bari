import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShieldCheck, ArrowUpRight, ArrowDownLeft, Sparkles, RefreshCw } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
  progress: number; // 0 to 1
  onProgressChange?: (p: number) => void;
  speed?: number;
}

export const PaymentsAppDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [step, setStep] = useState<number>(0);
  const [showAETimeline, setShowAETimeline] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = setInterval(() => {
      setStep((prev) => {
        const next = (prev + 1) % 6;
        if (next === 1) sounds.playWhoosh();
        if (next === 2) sounds.playPop();
        if (next === 3) sounds.playPop();
        if (next === 4) sounds.playWhoosh();
        if (next === 5) sounds.playSuccess();
        return next;
      });
    }, 1800);

    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#0D0F18] flex flex-col justify-between p-4 sm:p-6 select-none relative overflow-hidden font-sans">
      {/* AE Top Header Tag */}
      <div className="flex items-center justify-between z-10 text-xs text-zinc-400 font-mono pb-2 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-zinc-300 font-semibold">raghav.editing.aep</span>
          <span className="text-zinc-500">1920x1080 @ 60fps</span>
        </div>
        <button
          onClick={() => setShowAETimeline(!showAETimeline)}
          className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition-colors"
        >
          {showAETimeline ? 'Hide AE Layers' : 'Show AE Layers'}
        </button>
      </div>

      {/* Main Canvas Area simulating After Effects Composition */}
      <div className="relative flex-1 flex items-center justify-center my-3 bg-[#F4F4F5] rounded-xl overflow-hidden shadow-2xl min-h-[220px]">
        {/* Soft Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Step 0: Introducing The Payments App */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center px-4"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2 block">
                SaaS UI Motion
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight flex items-center justify-center gap-2 flex-wrap">
                <span>Introducing</span>
                <span className="inline-flex items-center justify-center p-1.5 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-lg text-white shadow-md">
                  <Sparkles className="w-5 h-5 animate-spin" />
                </span>
                <span className="text-blue-600">The payments</span>
                <span>app</span>
              </h3>
            </motion.div>
          )}

          {/* Step 1 & 2: Balance & Transactions */}
          {(step === 1 || step === 2) && (
            <motion.div
              key="balance-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm px-4 space-y-2.5"
            >
              {/* Balance Card */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-zinc-200/80 flex items-center justify-between"
              >
                <div>
                  <div className="text-zinc-500 text-xs font-medium">State Bank Of India</div>
                  <div className="text-zinc-900 font-bold text-lg">Savings Account</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-400">Available Balance</div>
                  <div className="text-xl font-extrabold text-zinc-900 tracking-tight">₹17,456</div>
                </div>
              </motion.div>

              {/* Transactions List */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-1.5"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl p-2.5 shadow-sm border border-zinc-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-800">Raju Mistri</div>
                        <div className="text-[10px] text-zinc-400">13 March • Tea Stall</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-rose-600">-₹100</span>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl p-2.5 shadow-sm border border-zinc-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-800">Relax Chai</div>
                        <div className="text-[10px] text-zinc-400">13 March • Refreshment</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-rose-600">-₹22</span>
                  </motion.div>

                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl p-2.5 shadow-sm border border-emerald-200/80 bg-emerald-50/40 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                        <ArrowDownLeft className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900">Editing Agency</div>
                        <div className="text-[10px] text-emerald-600 font-medium">13 March • Motion Payout</div>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-600">+₹5000</span>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Step 3: Pay to anyone & Avatars */}
          {step === 3 && (
            <motion.div
              key="pay-anyone"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center px-4"
            >
              <h4 className="text-2xl font-bold text-zinc-900 mb-4">Pay to anyone</h4>
              <div className="flex items-center justify-center gap-3">
                {[
                  { name: 'Pooja', bg: 'bg-rose-400', initial: 'P' },
                  { name: 'Amit', bg: 'bg-blue-500', initial: 'A' },
                  { name: 'Raghav', bg: 'bg-emerald-500', initial: 'R' },
                  { name: 'Sarah', bg: 'bg-amber-500', initial: 'S' }
                ].map((user, i) => (
                  <motion.div
                    key={user.name}
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: [0, 1.2, 1], y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`w-12 h-12 rounded-full ${user.bg} text-white font-bold flex items-center justify-center shadow-lg border-2 border-white text-sm`}>
                      {user.initial}
                    </div>
                    <span className="text-[11px] font-medium text-zinc-600 mt-1">{user.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4 & 5: Checkmark & Verification Confetti */}
          {(step === 4 || step === 5) && (
            <motion.div
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center relative flex flex-col items-center"
            >
              {/* Surrounding particle dots */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                  className="absolute -inset-4 border-2 border-dashed border-blue-400/50 rounded-full"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/30"
                >
                  <Check className="w-10 h-10 stroke-[3]" />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 font-extrabold text-zinc-900 text-lg flex items-center gap-1.5"
              >
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Payment Verified</span>
              </motion.div>
              <div className="text-xs text-zinc-500 font-medium mt-0.5">Smooth After Effects Easing Curves</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step indicator badges */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`h-1.5 rounded-full transition-all ${step === i ? 'w-5 bg-blue-400' : 'w-1.5 bg-white/40'}`}
              title={`Jump to frame ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Simulated After Effects Timeline / Layer Track Stack */}
      {showAETimeline && (
        <div className="bg-[#08090D] border border-zinc-800/80 rounded-lg p-2 font-mono text-[10px] space-y-1">
          <div className="flex items-center justify-between text-zinc-500 pb-1 border-b border-zinc-800/50">
            <span className="font-semibold text-zinc-400">AE Comp: [PaymentFlow_60fps]</span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">RAM Preview: Cached</span>
              <button onClick={() => setStep((s) => (s + 1) % 6)} className="hover:text-white flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Step
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-1 items-center">
            <span className="col-span-3 text-zinc-400 truncate">01 ⬩ Intro_Title.mov</span>
            <div className="col-span-9 h-2 bg-zinc-900 rounded overflow-hidden relative">
              <div className={`h-full bg-blue-500/80 transition-all duration-300 ${step === 0 ? 'w-full' : 'w-1/6'}`} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-1 items-center">
            <span className="col-span-3 text-zinc-400 truncate">02 ⬩ Balance_Card.shape</span>
            <div className="col-span-9 h-2 bg-zinc-900 rounded overflow-hidden relative">
              <div className={`h-full bg-indigo-500/80 transition-all duration-300 ${step >= 1 && step <= 2 ? 'w-full' : 'w-1/3'}`} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-1 items-center">
            <span className="col-span-3 text-zinc-400 truncate">03 ⬩ Stagger_List_SFX.wav</span>
            <div className="col-span-9 h-2 bg-zinc-900 rounded overflow-hidden relative">
              <div className={`h-full bg-emerald-500/80 transition-all duration-300 ${step === 2 ? 'w-full' : 'w-1/4'}`} />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-1 items-center">
            <span className="col-span-3 text-zinc-400 truncate">04 ⬩ Checkmark_Burst.comp</span>
            <div className="col-span-9 h-2 bg-zinc-900 rounded overflow-hidden relative">
              <div className={`h-full bg-amber-500/80 transition-all duration-300 ${step >= 4 ? 'w-full' : 'w-1/6'}`} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
