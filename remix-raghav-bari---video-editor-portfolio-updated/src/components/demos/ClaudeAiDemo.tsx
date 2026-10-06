import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal, Mic, ChevronDown, CheckCircle2, Play } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const ClaudeAiDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [phase, setPhase] = useState<number>(0);
  const [selectedModel, setSelectedModel] = useState<string>('Sonnet 5 Medium');
  const [typedText, setTypedText] = useState<string>('');

  const fullPrompt = 'Create an e-commerce website for me';

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (phase === 0) {
      setTypedText('');
      setSelectedModel('Sonnet 5 Medium');
    } else if (phase === 1) {
      // simulate typewriter
      let i = 0;
      setTypedText('');
      const typeInterval = setInterval(() => {
        if (i < fullPrompt.length) {
          setTypedText(fullPrompt.slice(0, i + 1));
          if (i % 3 === 0) sounds.playClick();
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 45);
      return () => clearInterval(typeInterval);
    } else if (phase === 2) {
      sounds.playPop();
      setSelectedModel('Opus 5 Deep Research');
    } else if (phase === 3) {
      sounds.playSuccess();
    }
  }, [phase]);

  return (
    <div className="w-full h-full bg-[#0A0706] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#0A0706] to-[#050404] p-4 sm:p-6 flex flex-col justify-between select-none relative overflow-hidden font-sans border border-amber-900/30 rounded-xl">
      {/* Top Brand Bar */}
      <div className="flex items-center justify-between text-xs text-amber-200/60 pb-3 border-b border-amber-900/40">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#CC785C] flex items-center justify-center text-white font-serif font-bold text-xs shadow-md shadow-[#CC785C]/20">
            ❋
          </div>
          <span className="font-semibold text-amber-100 tracking-wider">Claude Next-Gen Motion</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
            Live Preview
          </span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative flex-1 flex flex-col justify-center my-4 space-y-4">
        {/* Phase 0 & 1: Greeting & Prompt Bar */}
        <AnimatePresence mode="wait">
          {phase <= 2 ? (
            <motion.div
              key="chat-stage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4 max-w-lg mx-auto w-full"
            >
              {/* Greeting */}
              <div className="flex items-center gap-2">
                <span className="text-[#CC785C] text-xl">❋</span>
                <h3 className="text-xl sm:text-2xl font-serif text-amber-50 font-normal tracking-wide">
                  Good evening, <span className="font-semibold text-amber-200">Raghav</span>
                </h3>
              </div>

              {/* Glowing Chat Input Pill */}
              <div className="relative bg-[#1A1412]/90 border border-amber-700/40 rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl group">
                <div className="flex items-center justify-between gap-2 min-h-[44px]">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-amber-400/40 text-lg">+</span>
                    <div className="font-mono text-xs sm:text-sm text-amber-100 tracking-wide">
                      {typedText || <span className="text-zinc-500">Ask Claude anything or describe a project...</span>}
                      {phase === 1 && <span className="inline-block w-2 h-4 bg-amber-400 ml-1 animate-pulse" />}
                    </div>
                  </div>

                  {/* Model Selector Pill */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-950/60 border border-amber-600/30 text-[11px] text-amber-200 font-medium">
                      <span>{selectedModel}</span>
                      <ChevronDown className="w-3 h-3 text-amber-400" />
                    </div>
                    <button className="p-1.5 text-amber-400/70 hover:text-amber-200">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Model dropdown popover simulation when in phase 2 */}
                {phase === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-3 pt-3 border-t border-amber-900/40 grid grid-cols-3 gap-2 text-[10px]"
                  >
                    <div className="p-2 rounded-lg bg-amber-900/20 border border-amber-800/40 text-amber-200">
                      <div className="font-bold flex items-center justify-between">
                        Sonnet 5 <span className="text-[8px] bg-amber-600/30 px-1 rounded">Fast</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-[#CC785C]/20 border border-[#CC785C] text-white ring-1 ring-[#CC785C]">
                      <div className="font-bold flex items-center justify-between">
                        Opus 5 <span className="text-[8px] bg-amber-500 text-black px-1 rounded font-extrabold">Pro</span>
                      </div>
                      <div className="text-[9px] text-amber-200/80 mt-0.5">Deep Research</div>
                    </div>
                    <div className="p-2 rounded-lg bg-amber-900/20 border border-amber-800/40 text-amber-300">
                      <div className="font-bold">Fable 5</div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Phase 3: High-Tech Code Terminal Window */
            <motion.div
              key="code-terminal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#0D0B0A] border border-amber-800/40 rounded-xl overflow-hidden shadow-2xl font-mono text-[11px] max-w-lg mx-auto w-full"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-amber-950/40 border-b border-amber-900/40">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-amber-300/60 ml-2">app.js — NeuralEngine</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Compiled in 18ms
                </span>
              </div>

              {/* Code snippet */}
              <div className="p-3 space-y-1 text-zinc-300 leading-relaxed overflow-x-auto">
                <div><span className="text-purple-400">import</span> &#123; NeuralEngine, Pipeline &#125; <span className="text-purple-400">from</span> <span className="text-amber-300">'./raghav-motion'</span>;</div>
                <div><span className="text-blue-400">const</span> app = express();</div>
                <div><span className="text-blue-400">const</span> engine = <span className="text-purple-400">new</span> <span className="text-amber-400">NeuralEngine</span>(&#123; layers: [512, 256, 128] &#125;);</div>
                <div className="text-emerald-400 bg-emerald-950/30 p-1 rounded my-1">
                  // Output: 4K Explainer Video Generated
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Controls Footnote */}
      <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-amber-950/60">
        <span className="text-amber-200/50">After Effects Dark Luxury Composition</span>
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              onClick={() => setPhase(idx)}
              className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                phase === idx ? 'bg-[#CC785C] text-white font-bold' : 'bg-zinc-900 text-zinc-400'
              }`}
            >
              Step {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
