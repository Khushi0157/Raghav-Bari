import React from 'react';
import { SocialLinks } from '../types';
import { 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  Instagram, 
  Video, 
  Film, 
  Cpu, 
  Phone, 
  Mail, 
  Layers, 
  Sliders, 
  ExternalLink,
  Flame,
  Check
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { RAGHAV_AVATAR } from '../assets/avatar';

interface AboutProps {
  socials: SocialLinks;
  onOpenContact: () => void;
  avatar?: string;
}

export const AboutSection: React.FC<AboutProps> = ({ 
  socials, 
  onOpenContact,
  avatar,
}) => {
  const currentAvatar = avatar || RAGHAV_AVATAR;
  const experiences = [
    {
      role: 'Video Editor & Motion Designer',
      company: 'Freelance / Self-Employed',
      period: '2023 – Present',
      location: 'Remote (Clients worldwide)',
      badge: 'Active Practice',
      bullets: [
        'Edited short-form and long-form videos for social media platforms including YouTube, Instagram Reels, and promotional content.',
        'Created engaging motion graphics and visual effects using Adobe After Effects and Premiere Pro.',
        'Worked on color correction, sound synchronization, transitions, and storytelling to improve video quality.',
        'Designed SaaS-style explainer videos and social media ads with clean and minimal animation.',
        'Collaborated with clients to understand content goals and deliver videos optimized for audience engagement and retention.',
        'Managed complete editing workflow including cutting footage, adding B-roll, subtitles, motion graphics, and final export.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Data Science (CSE)',
      institution: 'Arya College of Engineering, Jaipur, Rajasthan',
      period: 'July 2024 – Present',
      focus: 'AI, Data Science, and Computer Science Engineering'
    },
    {
      degree: 'Schooling, Science Stream',
      institution: 'M.A.S.D Public School, Narnaul, Haryana',
      period: 'January 2009 – July 2024',
      focus: 'Physics, Chemistry, Mathematics & Computer Science'
    }
  ];

  const keySkills = [
    { name: 'Motion Graphics', level: '96%', tool: 'After Effects' },
    { name: 'Video Editing', level: '98%', tool: 'Premiere Pro' },
    { name: 'SaaS Product Animation', level: '94%', tool: 'AE & Figma' },
    { name: 'Smooth Transitions & Pacing', level: '95%', tool: 'Speed Graphs' },
    { name: 'Retention & Engagement', level: '92%', tool: 'Audience Analytics' },
    { name: 'Kinetic Subtitles & Typography', level: '95%', tool: 'Expression Rigging' },
    { name: 'Foley Sound Design', level: '90%', tool: 'Adobe Audition' },
    { name: 'Color Correction & LUTs', level: '88%', tool: 'Lumetri Color' },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#09080E] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-rose-900/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-space font-semibold tracking-widest text-rose-400 uppercase mb-2 block">
            [01 // ABOUT ME & CREDENTIALS]
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit tracking-tight uppercase text-white hover:text-rose-400 transition-colors cursor-default">
            ABOUT RAGHAV
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-sans max-w-xl mx-auto">
            Video editor and motion designer specializing in premium-quality editing and motion graphics for personal branding and business-focused content.
          </p>
        </div>

        {/* Top Grid: Avatar Profile Card + Authentic Bio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Avatar & Quick Contact Card */}
          <div className="lg:col-span-4 bg-[#12101C]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-between text-center backdrop-blur-2xl shadow-xl hover:border-rose-500/30 transition-all">
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-rose-500 via-purple-600 to-amber-400 shadow-2xl overflow-hidden group">
                <img
                  src={currentAvatar}
                  alt="Raghav Bari"
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black font-outfit text-white">Raghav Bari</h3>
                <p className="text-xs text-rose-400 font-space font-semibold mt-0.5">Video Editor & Motion Designer</p>
              </div>

              {/* Verified Contact Details from Resume */}
              <div className="w-full space-y-2 pt-2 text-left text-xs font-space">
                <a
                  href={`tel:${socials.phone}`}
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#171424] hover:bg-[#1E1A30] border border-white/[0.05] text-zinc-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate font-semibold">{socials.whatsappNumber}</span>
                </a>

                <a
                  href={`mailto:${socials.email}`}
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#171424] hover:bg-[#1E1A30] border border-white/[0.05] text-zinc-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="truncate">{socials.email}</span>
                </a>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#171424] border border-white/[0.05] text-zinc-300">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">Sanghiwara Narnaul, Haryana, India</span>
                </div>
              </div>
            </div>

            {/* Social & Contact Actions */}
            <div className="w-full space-y-2 pt-6">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-500/15 via-rose-500/15 to-purple-500/15 hover:from-pink-500/25 hover:to-purple-500/25 border border-pink-500/30 text-xs font-bold text-pink-200 flex items-center justify-center gap-2 transition-all font-outfit"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Follow on Instagram (@saasanimatorguy)</span>
              </a>
            </div>
          </div>

          {/* Right Narrative Story & Authentic Resume Quote */}
          <div className="lg:col-span-8 bg-[#12101C]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-9 backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-space font-semibold">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                <span>Professional Bio & Mission</span>
              </div>

              {/* Exact Words from Raghav's Resume */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#171426] to-[#12101E] border border-white/[0.08] relative">
                <p className="text-base sm:text-lg font-medium text-zinc-100 leading-relaxed font-sans">
                  "My name is <span className="text-white font-bold underline decoration-rose-500/60 decoration-2">Raghav Bari</span>, and I'm a video editor specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 font-semibold">premium-quality editing and motion graphics</span> for personal branding and business-focused content.
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans mt-3">
                  I help creators enhance their reels and long-form videos with clean subtitle animation, smooth transitions, dynamic motion text, and engaging visual storytelling that strengthens brand authority. If you're looking to elevate your content quality and engagement, I'd love to connect."
                </p>
                <div className="mt-3 text-right">
                  <span className="text-xs font-mono font-bold text-rose-400">— Raghav Bari</span>
                </div>
              </div>

              {/* Software Toolchain & Core Specialties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#171424] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center font-bold text-xs font-mono">Ae</span>
                    <h4 className="font-bold text-xs sm:text-sm text-white font-outfit">Adobe After Effects</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal font-sans">
                    Kinetic text animation, Figma vector reconstruction, easing graphs, and visual effects.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#171424] border border-white/[0.06] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs font-mono">Pr</span>
                    <h4 className="font-bold text-xs sm:text-sm text-white font-outfit">Adobe Premiere Pro</h4>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal font-sans">
                    Multi-track footage cutting, B-roll pacing, vocal mastering, and color correction.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  sounds.playSuccess();
                  onOpenContact();
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs tracking-wider font-outfit shadow-lg shadow-rose-500/25 hover:scale-105 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>WORK WITH RAGHAV</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playPop()}
                className="px-5 py-3 rounded-full bg-[#181528] hover:bg-[#201C34] border border-white/[0.08] text-zinc-200 hover:text-white font-semibold text-xs tracking-wide font-outfit hover:scale-105 transition-all"
              >
                WhatsApp (+91 8396881056)
              </a>

              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playPop()}
                className="px-5 py-3 rounded-full bg-[#181528] hover:bg-[#201C34] border border-white/[0.08] text-zinc-200 hover:text-white font-semibold text-xs tracking-wide font-outfit hover:scale-105 transition-all flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle Two-Column Section: Experience & Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Professional Experience */}
          <div className="bg-[#12101C]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-outfit text-white">Professional Experience</h3>
                <span className="text-xs text-zinc-400 font-space">Production history & editing achievements</span>
              </div>
            </div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-base font-bold font-outfit text-white">{exp.role}</h4>
                    <p className="text-xs text-rose-400 font-space font-medium">{exp.company}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-zinc-300 font-sans">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Academic Background */}
          <div className="bg-[#12101C]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-outfit text-white">Education & Academics</h3>
                  <span className="text-xs text-zinc-400 font-space">Technical foundation & degree details</span>
                </div>
              </div>

              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#171424] border border-white/[0.06] space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold font-outfit text-white">{edu.degree}</h4>
                      <span className="text-[10px] text-zinc-400 font-mono shrink-0 px-2 py-0.5 rounded bg-zinc-800">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-purple-300 font-space">{edu.institution}</p>
                    <p className="text-[11px] text-zinc-400 font-sans">{edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Technical Background Matters */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 to-rose-950/30 border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-200 font-outfit mb-1">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Why Computer Science & Video Editing Align</span>
              </div>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                Combining AI & Computer Science principles with video editing allows Raghav to write custom After Effects expressions, automate keyframe math, understand deep technical codec pipelines (ProRes, H.264/H.265), and accurately convey complex SaaS software workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Key Skills Matrix */}
        <div className="bg-[#12101C]/80 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-xl font-bold font-outfit text-white">Key Skills & Technical Mastery</h3>
              <p className="text-xs text-zinc-400 font-space">Production-tested competencies from client work</p>
            </div>
            <span className="text-xs text-rose-400 font-mono font-semibold">
              Updated from Official Resume
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {keySkills.map((skill, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-[#171424] border border-white/[0.06] hover:border-rose-500/30 transition-all group">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-zinc-200 font-outfit group-hover:text-white transition-colors">{skill.name}</span>
                  <span className="font-mono text-[10px] text-rose-400 font-bold">{skill.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-rose-500 to-purple-500 rounded-full transition-all duration-700" 
                    style={{ width: skill.level }}
                  />
                </div>
                <span className="text-[10px] text-zinc-500 font-space">Tool: {skill.tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
