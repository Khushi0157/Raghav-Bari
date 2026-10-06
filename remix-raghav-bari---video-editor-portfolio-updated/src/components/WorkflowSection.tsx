import React from 'react';
import { WORKFLOW_STEPS, TECH_STACK } from '../data/portfolioData';
import { FileText, Palette, PlayCircle, Sliders, CheckCircle2, Zap } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-5 h-5 text-rose-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'PlayCircle': return <PlayCircle className="w-5 h-5 text-pink-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-amber-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default: return <Zap className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="workflow" className="relative py-20 sm:py-28 bg-[#07060C] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-xs font-space font-semibold tracking-widest text-rose-400 uppercase mb-2 block">
            [04 // PRODUCTION PROCESS]
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit tracking-tight uppercase text-white hover:text-rose-400 transition-colors cursor-default">
            WORKFLOW
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-xs sm:text-sm text-zinc-400 font-sans">
            A battle-tested production pipeline crafted for clear communication, fast turnarounds, and pixel precision.
          </p>
        </div>

        {/* 5 Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#12101C]/85 border border-white/[0.08] rounded-3xl p-5 flex flex-col justify-between hover:border-rose-500/30 transition-all group hover:-translate-y-1 shadow-lg backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-outfit text-zinc-600 group-hover:text-rose-400 transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-2xl bg-[#171424] border border-white/[0.08]">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <h3 className="font-bold text-sm text-white font-outfit tracking-wide mb-1.5">
                  {step.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-space text-zinc-500">
                <span>Pacing:</span>
                <span className="text-rose-300 font-semibold">{step.timeframe}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Software & Toolchain Badges */}
        <div className="mt-14 p-6 rounded-3xl bg-[#12101C]/80 border border-white/[0.08] text-center backdrop-blur-xl">
          <div className="text-xs font-space font-semibold uppercase tracking-widest text-zinc-400 mb-4">
            Mastered Production Software Suite
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#171424] border border-white/[0.06] text-xs font-semibold text-zinc-200"
              >
                <span className="w-5 h-5 rounded-lg bg-[#221E34] border border-white/[0.08] flex items-center justify-center font-space font-bold text-[10px] text-white">
                  {tech.icon}
                </span>
                <span className="font-outfit">{tech.name}</span>
                <span className="text-[10px] text-zinc-500 font-space">({tech.category})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
