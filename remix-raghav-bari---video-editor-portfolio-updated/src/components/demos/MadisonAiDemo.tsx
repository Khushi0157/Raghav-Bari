import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star, TrendingUp, Calendar, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const MadisonAiDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPhase((prev) => {
        const next = (prev + 1) % 4;
        if (next === 1) sounds.playWhoosh();
        if (next === 2) sounds.playPop();
        if (next === 3) sounds.playSuccess();
        return next;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full bg-[#0B0D18] flex flex-col justify-between p-3 sm:p-5 select-none relative overflow-hidden font-sans border border-purple-500/20 rounded-2xl">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white text-[11px]">
            M
          </div>
          <div>
            <div className="font-extrabold text-white font-outfit text-xs sm:text-sm">Madison AI</div>
            <div className="text-[10px] text-zinc-400 font-mono">Digital Marketing Specialist • MeetMadison.ai</div>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-[10px] font-bold">
          SaaS Feature Launch
        </span>
      </div>

      {/* Main Visual Animation Stage */}
      <div className="relative flex-1 flex items-center justify-center my-3 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Phase 0: Local Business Google Presence */}
          {phase === 0 && (
            <motion.div
              key="phase-0"
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm bg-[#131626] border border-white/[0.1] rounded-2xl p-4 shadow-2xl space-y-3"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C2036] border border-white/[0.08] text-xs font-mono text-zinc-300">
                <span className="text-blue-400 font-bold">G</span>
                <span>Restaurants near me</span>
              </div>

              <div className="bg-[#181C30] p-3 rounded-xl border border-white/[0.06] space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-bold text-white text-xs">Your Business</h5>
                    <div className="flex items-center gap-1 text-amber-400 text-[10px] mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                      ))}
                      <span className="text-zinc-400 font-mono ml-1">(2K+) • $$</span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                    #1 Ranked
                  </span>
                </div>
                <div className="text-[10px] text-zinc-400 font-sans">
                  SEO optimized Google Business profile & review responses
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 1: Brand Introduction: Meet Madison */}
          {phase === 1 && (
            <motion.div
              key="phase-1"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
              transition={{ duration: 0.45 }}
              className="text-center space-y-3"
            >
              <div className="inline-block p-4 rounded-3xl bg-gradient-to-tr from-purple-950/60 to-indigo-950/40 border border-purple-500/40 shadow-2xl backdrop-blur-md">
                <span className="text-3xl sm:text-4xl font-black font-outfit text-white tracking-tight">
                  Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300">Madison</span>
                </span>
                <p className="text-xs text-purple-200 mt-1 font-space">
                  Your New AI-Powered Digital Marketing Specialist
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                  <span>As low as $99/month</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Phase 2: Live Analytics Dashboard & KPI Cards */}
          {phase === 2 && (
            <motion.div
              key="phase-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md bg-[#131628] border border-white/[0.1] rounded-2xl p-4 shadow-2xl space-y-3"
            >
              <div className="flex items-center justify-between text-xs pb-1 border-b border-white/[0.06]">
                <span className="font-bold text-white font-outfit">Welcome back, Cameron</span>
                <span className="text-[10px] text-zinc-400 font-mono">Performance: Nov 2024</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#1A1F38] p-2.5 rounded-xl border border-white/[0.05] text-center">
                  <div className="text-[10px] text-zinc-400 font-space uppercase">Rating</div>
                  <div className="text-base font-black text-amber-400 font-outfit">4.6 ★</div>
                  <div className="text-[9px] text-emerald-400 font-mono">+0.4</div>
                </div>
                <div className="bg-[#1A1F38] p-2.5 rounded-xl border border-white/[0.05] text-center">
                  <div className="text-[10px] text-zinc-400 font-space uppercase">Impressions</div>
                  <div className="text-base font-black text-white font-outfit">34,589</div>
                  <div className="text-[9px] text-emerald-400 font-mono">+18%</div>
                </div>
                <div className="bg-[#1A1F38] p-2.5 rounded-xl border border-white/[0.05] text-center">
                  <div className="text-[10px] text-zinc-400 font-space uppercase">Actions</div>
                  <div className="text-base font-black text-purple-400 font-outfit">5,431</div>
                  <div className="text-[9px] text-emerald-400 font-mono">+32%</div>
                </div>
              </div>

              {/* Mini Net Promoter Score Bar */}
              <div className="bg-[#181C32] p-2 rounded-xl flex items-center justify-between text-[10px] font-mono">
                <span className="text-zinc-300">Net Promoter Score:</span>
                <span className="text-emerald-400 font-bold">62% Promoters</span>
              </div>
            </motion.div>
          )}

          {/* Phase 3: AI Review Generator & Social Campaign Scheduler */}
          {phase === 3 && (
            <motion.div
              key="phase-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm bg-[#131628] border border-white/[0.1] rounded-2xl p-4 shadow-2xl space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white font-outfit">New Year's Eve Campaign</span>
                <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold">
                  Scheduled
                </span>
              </div>

              <div className="p-3 bg-[#1A1E35] rounded-xl border border-white/[0.06] text-xs font-sans text-zinc-300 space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] text-purple-300 font-mono">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span>Tone: Celebratory & Friendly</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  "Ring in 2024 with style! Our special New Year's Eve menu is a feast for the senses. Join us!"
                </p>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-300 text-[9px] flex items-center justify-center font-bold">IG</span>
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] flex items-center justify-center font-bold">FB</span>
                  <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 text-[9px] flex items-center justify-center font-bold">X</span>
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] flex items-center justify-center font-bold">G</span>
                </div>
                <div className="px-3 py-1 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold font-outfit flex items-center gap-1">
                  <span>MeetMadison.ai</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Timeline Indicator */}
      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] text-zinc-400 font-mono">
        <div className="flex items-center gap-2">
          {['Google SEO', 'Madison Intro', 'Analytics UI', 'Social Scheduling'].map((stepName, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 rounded transition-colors ${
                phase === i ? 'bg-purple-500/30 text-purple-200 font-bold' : 'text-zinc-500'
              }`}
            >
              {stepName}
            </span>
          ))}
        </div>
        <span className="text-zinc-500">Duration: 1:52</span>
      </div>
    </div>
  );
};
