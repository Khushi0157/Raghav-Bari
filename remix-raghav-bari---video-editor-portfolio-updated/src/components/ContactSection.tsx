import React, { useState } from 'react';
import { SocialLinks } from '../types';
import { PackageCalculator } from './PackageCalculator';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, Check, Sparkles, Instagram, Linkedin, Globe } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

interface ContactProps {
  socials: SocialLinks;
}

export const ContactSection: React.FC<ContactProps> = ({ socials }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'SaaS Product Demo',
    budget: '$250 - $500',
    message: '',
  });

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSuccess();
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }
    setFormSubmitted(true);

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${socials.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#07060C] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-700/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Interactive Package Calculator */}
        <PackageCalculator socials={socials} />

        {/* Main "LET'S GET IN TOUCH" Container */}
        <div className="bg-[#12101C]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-12 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Headline, Email & Socials */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-space font-semibold tracking-widest text-rose-400 uppercase mb-2 block">
                  [06 // INITIATE COLLABORATION]
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-outfit tracking-tight uppercase text-white leading-none">
                  LET'S GET IN TOUCH
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Ready to elevate your SaaS product demo, motion graphics, or video retention? Send a direct brief or message on WhatsApp.
              </p>

              {/* Copyable Email Pill */}
              <div
                onClick={handleCopyEmail}
                className="group p-4 bg-[#171424] hover:bg-[#201C32] border border-white/[0.06] hover:border-rose-500/30 rounded-2xl cursor-pointer transition-all flex items-center justify-between shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-space font-semibold">Direct Email</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-space">{socials.email}</div>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-[#221E34] group-hover:bg-[#2C2742] text-zinc-300">
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              {/* Phone & WhatsApp Quick Connect */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playPop()}
                  className="p-3.5 bg-[#171424] hover:bg-[#201C32] border border-emerald-500/30 rounded-2xl flex items-center gap-3 transition-all hover:scale-102"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400 font-space font-semibold">Instant Chat</div>
                    <div className="text-xs font-bold text-white font-outfit">WhatsApp</div>
                  </div>
                </a>

                <a
                  href={`tel:${socials.phone}`}
                  onClick={() => sounds.playClick()}
                  className="p-3.5 bg-[#171424] hover:bg-[#201C32] border border-white/[0.06] rounded-2xl flex items-center gap-3 transition-all"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 font-space font-semibold">Call Direct</div>
                    <div className="text-xs font-bold text-white font-outfit">{socials.phone}</div>
                  </div>
                </a>
              </div>

              {/* Social Channels List */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#171424] border border-white/[0.06] text-zinc-300 hover:text-white hover:border-pink-500/30 transition-colors flex items-center gap-2 text-xs font-space"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>{socials.instagramHandle}</span>
                </a>

                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#171424] border border-white/[0.06] text-zinc-300 hover:text-white hover:border-blue-500/30 transition-colors flex items-center gap-2 text-xs font-space"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form */}
            <div className="lg:col-span-7 bg-[#0D0B14] border border-white/[0.06] rounded-2xl p-6 sm:p-8 shadow-inner">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-white">Inquiry Received!</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto font-sans">
                    Thank you! Raghav will review your project brief and respond shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 rounded-full bg-[#181528] text-xs font-bold text-zinc-300 font-outfit"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400 font-space uppercase font-semibold text-[11px]">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400 font-space uppercase font-semibold text-[11px]">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-zinc-400 font-space uppercase font-semibold text-[11px]">Project Archetype</label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-rose-500 transition-colors font-sans"
                      >
                        <option value="SaaS Product Demo">SaaS Product Demo / UI Motion</option>
                        <option value="Kinetic Typography">Kinetic Typography & Motion</option>
                        <option value="3D & Brand Explainer">3D & Brand Explainer Video</option>
                        <option value="Short-Form Reels Series">High-Retention Reels / Shorts</option>
                        <option value="Full Video Production">Full Video Production & Sound</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-400 font-space uppercase font-semibold text-[11px]">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-rose-500 transition-colors font-sans"
                      >
                        <option value="$200 - $350">$200 - $350 USD</option>
                        <option value="$350 - $700">$350 - $700 USD</option>
                        <option value="$700 - $1,500">$700 - $1,500 USD</option>
                        <option value="$1,500+">$1,500+ (Monthly Retainer / Suite)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 font-space uppercase font-semibold text-[11px]">Project Scope & Timeline *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your video goals, timeline, reference links, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#171424] border border-white/[0.08] rounded-xl p-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500 transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs font-outfit tracking-wider shadow-lg shadow-rose-500/25 hover:scale-102 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
