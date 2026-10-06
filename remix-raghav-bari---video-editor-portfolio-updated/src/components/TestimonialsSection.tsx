import React from 'react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 bg-[#09080F] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="text-xs font-space font-semibold tracking-widest text-rose-400 uppercase mb-2 block">
            [05 // CLIENT TESTIMONIALS]
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit tracking-tight uppercase text-white hover:text-rose-400 transition-colors cursor-default">
            REVIEWS & FEEDBACK
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-xs sm:text-sm text-zinc-400 font-sans">
            Direct feedback from SaaS founders, marketing leaders, and high-impact creators.
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#12101C]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-xl hover:border-rose-500/30 transition-all flex flex-col justify-between space-y-4 group"
            >
              {/* Top rating stars & Metric Highlight */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <span className="px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-300 font-space text-[10px] font-semibold">
                  {t.metricHighlight}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans italic">
                "{t.text}"
              </p>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-white font-outfit">{t.name}</div>
                    <div className="text-[11px] text-zinc-400 font-space">{t.role} • <span className="text-zinc-300">{t.company}</span></div>
                  </div>
                </div>

                <div className="text-[10px] text-zinc-500 font-space text-right hidden sm:block">
                  {t.projectDone}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
