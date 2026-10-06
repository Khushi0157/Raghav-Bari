import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle2, Sparkles, Laptop, Type, Smartphone, Layers, Volume2, Plus, Minus } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>('srv-1');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-5 h-5 text-rose-400" />;
      case 'Type': return <Type className="w-5 h-5 text-purple-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-rose-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    sounds.playClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#07060C] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-xs font-space font-semibold tracking-widest text-rose-400 uppercase mb-2 block">
            [02 // WHAT I DO]
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit tracking-tight uppercase text-white hover:text-rose-400 transition-colors cursor-default">
            SERVICES
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-xs sm:text-sm text-zinc-400 font-sans">
            Tailored video editing and motion graphics engineered for high engagement and measurable results.
          </p>
        </div>

        {/* Numbered Services Stack */}
        <div className="space-y-3.5">
          {SERVICES_DATA.map((srv) => {
            const isExpanded = expandedId === srv.id;

            return (
              <div
                key={srv.id}
                className={`transition-all duration-300 rounded-3xl border ${
                  isExpanded
                    ? 'bg-[#13111F] border-rose-500/40 shadow-2xl shadow-rose-500/10'
                    : 'bg-[#0E0C16] border-white/[0.06] hover:border-white/[0.15]'
                } overflow-hidden`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(srv.id)}
                  className="p-5 sm:p-7 flex items-center justify-between cursor-pointer gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Big Number */}
                    <span className="text-2xl sm:text-4xl font-black font-outfit text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
                      {srv.number}
                    </span>

                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-2xl bg-[#181526] border border-white/[0.08] hidden sm:flex">
                        {getIcon(srv.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base sm:text-xl font-bold font-outfit text-white tracking-wide">
                            {srv.title}
                          </h3>
                          {srv.popular && (
                            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-[10px] text-rose-300 font-space font-semibold hidden sm:inline-block">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 line-clamp-1 font-sans">
                          {srv.shortDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="w-9 h-9 rounded-full bg-[#181526] border border-white/[0.08] flex items-center justify-center text-zinc-300 shrink-0">
                    {isExpanded ? <Minus className="w-4 h-4 text-rose-400" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="px-5 sm:px-7 pb-6 sm:pb-8 pt-2 border-t border-white/[0.06] space-y-5 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl font-sans">
                      {srv.fullDesc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Deliverables */}
                      <div className="bg-[#171424] p-4.5 rounded-2xl border border-white/[0.06]">
                        <span className="text-xs font-space font-semibold text-rose-300 uppercase block mb-2.5">
                          Deliverables & Specifications
                        </span>
                        <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                          {srv.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Toolchain & Inquire CTA */}
                      <div className="bg-[#171424] p-4.5 rounded-2xl border border-white/[0.06] flex flex-col justify-between space-y-4">
                        <div>
                          <span className="text-xs font-space font-semibold text-rose-300 uppercase block mb-2.5">
                            Toolchain
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {srv.tools.map((t) => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-lg bg-[#201C30] text-zinc-200 text-xs font-space border border-white/[0.05]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={() => onSelectService(srv)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs font-outfit tracking-wider shadow-lg flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                        >
                          <span>Request Quote for {srv.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
