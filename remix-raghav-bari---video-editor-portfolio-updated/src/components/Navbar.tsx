import React, { useState, useEffect } from 'react';
import { SocialLinks } from '../types';
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Settings2, Sparkles, Palette } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { RAGHAV_AVATAR } from '../assets/avatar';
import { ThemeId, THEMES } from '../utils/theme';

interface NavbarProps {
  socials: SocialLinks;
  onOpenSocialsModal: () => void;
  onOpenContact: () => void;
  avatar?: string;
  activeTheme?: ThemeId;
  onSelectTheme?: (t: ThemeId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  socials, 
  onOpenSocialsModal, 
  onOpenContact,
  avatar,
  activeTheme = 'ruby',
  onSelectTheme,
}) => {
  const currentAvatar = avatar || RAGHAV_AVATAR;
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.setEnabled(next);
    if (next) sounds.playPop();
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A080E]/92 backdrop-blur-2xl border-b border-white/[0.08] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-rose-500 via-purple-500 to-amber-400 shadow-lg shadow-rose-500/20 overflow-hidden">
            <img
              src={currentAvatar}
              alt="Raghav Bari"
              className="w-full h-full rounded-full object-cover bg-zinc-900"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5 font-outfit">
              <span>RAGHAV BARI</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium font-space">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#130F19]/80 border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-xl shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1 text-xs font-semibold text-zinc-300 hover:text-white rounded-full hover:bg-rose-500/15 hover:text-rose-200 transition-all font-outfit cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Theme Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                sounds.playClick();
                setThemeDropdownOpen(!themeDropdownOpen);
              }}
              className="p-2 rounded-xl bg-[#14101A] border border-white/[0.08] hover:border-rose-500/30 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-outfit cursor-pointer"
              title="Change Theme Palette"
            >
              <Palette className="w-4 h-4 text-rose-400" />
              <span className="hidden xl:inline text-[11px] font-space text-zinc-400">
                {THEMES[activeTheme]?.name.split(' ')[0]}
              </span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-[#120F1A] border border-white/[0.12] rounded-2xl p-2 shadow-2xl z-50 animate-fadeIn space-y-1">
                <div className="px-2.5 py-1 text-[10px] font-space font-semibold uppercase text-zinc-400 border-b border-white/[0.06] mb-1">
                  Choose Color Theme
                </div>
                {Object.values(THEMES).map((th) => (
                  <button
                    key={th.id}
                    onClick={() => {
                      sounds.playPop();
                      onSelectTheme?.(th.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full px-2.5 py-2 rounded-xl text-left text-xs font-outfit flex items-center justify-between transition-colors cursor-pointer ${
                      activeTheme === th.id
                        ? 'bg-rose-500/20 text-white font-bold border border-rose-500/40'
                        : 'text-zinc-300 hover:bg-[#1A1524]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border border-white/30"
                        style={{ backgroundColor: th.accent }}
                      />
                      <span>{th.name}</span>
                    </div>
                    {activeTheme === th.id && <span className="text-[10px] text-rose-400 font-mono">Active</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sound toggle button */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-xl border text-xs transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-[#14101A] border-white/[0.08] text-zinc-300 hover:text-white hover:border-rose-500/30'
                : 'bg-zinc-900/40 border-zinc-800/40 text-zinc-600'
            }`}
            title={soundEnabled ? 'Sound FX Enabled (Click to Mute)' : 'Sound FX Muted'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-rose-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Social Links Configurator Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenSocialsModal();
            }}
            className="p-2 rounded-xl bg-[#14101A] border border-white/[0.08] text-zinc-300 hover:text-white hover:border-rose-500/30 transition-colors cursor-pointer"
            title="Edit Contact & Social Links"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          {/* Primary CTA Contact button */}
          <button
            onClick={() => {
              sounds.playSuccess();
              onOpenContact();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs tracking-wider shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all hover:scale-105 cursor-pointer font-outfit"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#14101A] border border-white/[0.08] text-zinc-300 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0C16] border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-2 animate-fadeIn text-sm">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left py-2 px-3 rounded-xl text-zinc-300 hover:text-white hover:bg-rose-500/15 font-outfit font-semibold"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold text-xs font-outfit"
            >
              Contact Raghav
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
