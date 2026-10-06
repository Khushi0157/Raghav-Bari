import React, { useState } from 'react';
import { SocialLinks } from '../types';
import { Play, ArrowUpRight, MessageCircle, Sparkles, Film, Award, CheckCircle2, Zap, Instagram } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { motion } from 'motion/react';
import { RAGHAV_AVATAR } from '../assets/avatar';

interface HeroProps {
  socials: SocialLinks;
  onOpenShowreel: () => void;
  onOpenContact: () => void;
  avatar?: string;
}

export const HeroSection: React.FC<HeroProps> = ({ 
  socials, 
  onOpenShowreel, 
  onOpenContact,
  avatar,
}) => {
  const currentAvatar = avatar || RAGHAV_AVATAR;
  const [avatarHovered, setAvatarHovered] = useState<boolean>(false);

  const marqueeBrands = [
    { name: 'Adobe After Effects', tag: 'Motion Design' },
    { name: 'Adobe Premiere Pro', tag: 'High-Retention Cuts' },
    { name: 'SaaS Product Demos', tag: 'Conversion Focus' },
    { name: 'Kinetic Typography', tag: 'Dynamic Hooks' },
    { name: '3D & Brand Explainers', tag: 'Visual Impact' },
    { name: 'Figma UI Animation', tag: 'Vector Polish' },
    { name: '@saasanimatorguy', tag: 'Creator Brand' },
  ];

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Aesthetic Burgundy & Obsidian Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-rose-700/20 via-purple-800/20 to-amber-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-rose-950/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-950/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14121F]/80 border border-white/[0.08] text-xs text-zinc-300 backdrop-blur-xl mb-6 shadow-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold text-zinc-200 font-outfit tracking-wide">Video Editor & SaaS Motion Designer</span>
            <span className="text-zinc-600">•</span>
            <span className="text-rose-400 font-medium font-space">After Effects Specialist</span>
          </motion.div>

          {/* Stylish Hero Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight font-outfit uppercase text-white leading-none">
              HI, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200">RAGHAV</span>
            </h1>
          </motion.div>

          {/* Center Avatar Profile matching uploaded picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
            onMouseEnter={() => {
              sounds.playPop();
              setAvatarHovered(true);
            }}
            onMouseLeave={() => setAvatarHovered(false)}
            className="relative my-7 sm:my-9 group"
          >
            {/* Glowing Ring Backdrop in ruby & rose */}
            <div className="absolute -inset-3 bg-gradient-to-r from-rose-600 via-purple-600 to-amber-500 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition duration-500 group-hover:scale-105" />

            {/* Avatar Circle Container */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-[#14121F] border-2 border-rose-500/40 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center">
              <img
                src={currentAvatar}
                alt="Raghav Bari - Video Editor"
                className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Floating Instagram Handle Pill */}
              <div className="absolute bottom-2.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5 text-[11px] text-white font-space font-medium shadow-lg pointer-events-none">
                <Instagram className="w-3 h-3 text-pink-400" />
                <span>@saasanimatorguy</span>
              </div>
            </div>

            {/* Floating Aesthetic Badges around Avatar */}
            <div className="absolute -top-1 -left-6 bg-[#13111C]/95 border border-rose-500/20 px-3.5 py-1.5 rounded-2xl text-xs font-bold text-white shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-float hidden sm:flex font-space">
              <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px]">Ae</span>
              <span>After Effects</span>
            </div>

            <div className="absolute -bottom-1 -right-6 bg-[#13111C]/95 border border-purple-500/20 px-3.5 py-1.5 rounded-2xl text-xs font-bold text-white shadow-2xl backdrop-blur-xl flex items-center gap-2 animate-float hidden sm:flex [animation-delay:2s] font-space">
              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[10px]">Pr</span>
              <span>Premiere Pro</span>
            </div>
          </motion.div>

          {/* Refined Aesthetic Subtitle / Value Proposition matching Raghav's resume */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-3xl text-sm sm:text-base text-zinc-300 font-normal leading-relaxed tracking-wide font-sans mb-7"
          >
            Specializing in <span className="text-white font-semibold">premium-quality editing and motion graphics</span> for personal branding and business content. Elevating reels & long-form videos with clean subtitle animations, smooth transitions, and high-retention visual storytelling.
          </motion.p>

          {/* Action Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {/* Primary Contact CTA */}
            <button
              onClick={() => {
                sounds.playSuccess();
                onOpenContact();
              }}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs sm:text-sm tracking-wider font-outfit shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Direct WhatsApp Chat CTA */}
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playPop()}
              className="px-6 py-3.5 rounded-full bg-[#161424]/90 hover:bg-[#1E1A30] border border-white/[0.08] hover:border-emerald-500/40 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm tracking-wide font-outfit hover:scale-105 transition-all flex items-center gap-2 backdrop-blur-xl"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Watch Showreel CTA */}
            <button
              onClick={() => {
                sounds.playWhoosh();
                onOpenShowreel();
              }}
              className="px-6 py-3.5 rounded-full bg-[#161424]/90 hover:bg-[#1E1A30] border border-white/[0.08] hover:border-rose-500/40 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm tracking-wide font-outfit hover:scale-105 transition-all flex items-center gap-2 backdrop-blur-xl cursor-pointer"
            >
              <Play className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>Watch Showreel</span>
            </button>
          </motion.div>

          {/* Key Metric Counters in aesthetic glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 w-full max-w-4xl"
          >
            {[
              { value: '15M+', label: 'Organic Views Generated', icon: Zap },
              { value: '68%', label: 'Avg Audience Retention', icon: Award },
              { value: '40+', label: 'Completed Projects', icon: Film },
              { value: '100%', label: 'On-Time Delivery', icon: CheckCircle2 }
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#12101C]/80 border border-white/[0.08] rounded-2xl p-4 text-center backdrop-blur-xl shadow-lg group hover:border-rose-500/30 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black font-outfit text-white tracking-tight group-hover:text-rose-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1 font-space">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Marquee Infinite Scrolling Tech Stack Bar */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-white/[0.06] overflow-hidden relative">
          <div className="text-center text-xs uppercase tracking-widest text-zinc-400 font-semibold font-space mb-4">
            Specialized Toolchain & Formats
          </div>

          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
              {[...marqueeBrands, ...marqueeBrands].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#14121F]/70 border border-white/[0.06] text-zinc-300 text-xs font-semibold backdrop-blur-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="text-white font-outfit font-bold">{item.name}</span>
                  <span className="text-[10px] text-zinc-400 font-space">[{item.tag}]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
