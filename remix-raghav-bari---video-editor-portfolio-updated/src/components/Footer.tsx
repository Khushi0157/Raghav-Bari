import React from 'react';
import { SocialLinks } from '../types';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, ArrowUp, Globe } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface FooterProps {
  socials: SocialLinks;
  onOpenSocialsModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ socials, onOpenSocialsModal }) => {
  const scrollToTop = () => {
    sounds.playWhoosh();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050408] border-t border-white/[0.06] pt-16 pb-12 overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Geometric Abstract Icons Banner */}
        <div className="bg-[#0E0C16] border border-white/[0.06] rounded-3xl p-6 sm:p-8 flex items-center justify-between overflow-x-auto gap-4 shadow-xl">
          {['✦', '✺', '⬡', '◈', '❖', '▲', '⬤', '⬢', '𖣠', '✦'].map((geo, i) => (
            <div
              key={i}
              className="w-11 h-11 rounded-2xl bg-[#141220] border border-white/[0.06] flex items-center justify-center text-lg text-zinc-400 hover:text-white hover:border-rose-500/40 hover:scale-110 transition-all select-none shrink-0 cursor-default"
            >
              {geo}
            </div>
          ))}
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black font-outfit tracking-tight uppercase text-white">
              RAGHAV BARI
            </h2>
            <p className="text-zinc-400 max-w-md leading-relaxed text-xs sm:text-sm font-sans">
              Video Editor & SaaS Motion Designer specializing in clean UI micro-interactions, kinetic typography, and high-retention video narratives.
            </p>
            <div className="text-[11px] text-zinc-500 font-space">
              Based in Haryana & Jaipur, India • Available Globally
            </div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-space uppercase font-semibold text-zinc-400 tracking-wider text-[11px]">
              Social Channels
            </div>
            <ul className="space-y-2 font-sans">
              <li>
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram ({socials.instagramHandle})</span>
                </a>
              </li>
              <li>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Quick Actions */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-space uppercase font-semibold text-zinc-400 tracking-wider text-[11px]">
              Direct Contact
            </div>
            <div className="space-y-1.5 text-zinc-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <a href={`mailto:${socials.email}`} className="hover:underline font-space text-[11px]">
                  {socials.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${socials.phone}`} className="hover:underline font-space text-[11px]">
                  {socials.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSocialsModal}
                className="text-[11px] text-zinc-400 hover:text-white underline font-space cursor-pointer"
              >
                Customize Social URLs & Contact Info
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px] font-space">
          <div>
            © {new Date().getFullYear()} Raghav Bari. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#141220] hover:bg-[#1C182E] border border-white/[0.06] text-zinc-300 hover:text-white transition-all cursor-pointer font-outfit"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
