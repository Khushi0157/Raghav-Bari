import React, { useState } from 'react';
import { INITIAL_SOCIAL_LINKS, PROJECTS_DATA } from './data/portfolioData';
import { SocialLinks, ServiceItem, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { SocialLinksModal } from './components/SocialLinksModal';
import { BackgroundVideoPlayer } from './components/BackgroundVideoPlayer';
import { Footer } from './components/Footer';
import { InteractiveProjectViewer } from './components/demos/InteractiveProjectViewer';
import { X, Play, Sparkles, MessageCircle, Send } from 'lucide-react';
import { sounds } from './utils/soundEffects';
import { RAGHAV_AVATAR } from './assets/avatar';
import { ThemeId, THEMES, DEFAULT_THEME_ID } from './utils/theme';
import { BACKGROUND_VIDEO_CONFIG, LOCAL_PROJECT_VIDEOS } from './data/mediaConfig';

export default function App() {
  const [socials, setSocials] = useState<SocialLinks>(() => {
    try {
      const saved = localStorage.getItem('raghav_portfolio_socials');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_SOCIAL_LINKS;
  });

  // The portfolio uses the local profile image from src/assets/images.
  const avatar = RAGHAV_AVATAR;
  // Active Theme State (Ruby Crimson & Slate by default)
  const [theme, setTheme] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem('raghav_portfolio_theme') as ThemeId;
      if (saved && THEMES[saved]) return saved;
    } catch {
      // ignore
    }
    return DEFAULT_THEME_ID;
  });

  // Local portfolio media is defined in src/data/mediaConfig.ts so it is easy to swap later.

  const [socialModalOpen, setSocialModalOpen] = useState<boolean>(false);
  const [showreelModalOpen, setShowreelModalOpen] = useState<boolean>(false);
  const [inquiryPrefill, setInquiryPrefill] = useState<string>('');

  // Attach the local portfolio videos to their projects.
  // Merge default PROJECTS_DATA with custom user video attachments
  const mergedProjects: ProjectItem[] = PROJECTS_DATA.map((proj) => {
    const localVideo = LOCAL_PROJECT_VIDEOS[proj.id];
    if (localVideo) {
      return {
        ...proj,
        customVideoUrl: localVideo,
        videoType: 'mp4',
      };
    }
    return proj;
  });

  const handleSaveSocials = (updated: SocialLinks) => {
    setSocials(updated);
    try {
      localStorage.setItem('raghav_portfolio_socials', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleSelectTheme = (t: ThemeId) => {
    setTheme(t);
    try {
      localStorage.setItem('raghav_portfolio_theme', t);
    } catch {
      // ignore
    }
  };

  const handleScrollToContact = (prefill?: string) => {
    if (prefill) {
      setInquiryPrefill(prefill);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    sounds.playPop();
    handleScrollToContact(service.title);
  };

  const handleInquireProject = (projectTitle: string) => {
    sounds.playPop();
    handleScrollToContact(projectTitle);
  };

  // Find showreel project (Featured YouTube Edit or Madison AI)
  const showreelProject = mergedProjects[0] || PROJECTS_DATA[0];

  return (
    <div 
      className="min-h-screen text-[#F3F4F6] relative overflow-x-hidden font-sans selection:bg-rose-500 selection:text-white transition-colors duration-500"
      style={{ backgroundColor: THEMES[theme].bgMain }}
    >
      {/* Background Ambient Video Layer */}
      <BackgroundVideoPlayer config={BACKGROUND_VIDEO_CONFIG} />

      {/* Top Fixed Navigation */}
      <div className="relative z-30">
        <Navbar
          socials={socials}
          onOpenSocialsModal={() => setSocialModalOpen(true)}
          onOpenContact={() => handleScrollToContact()}
          avatar={avatar}
          activeTheme={theme}
          onSelectTheme={handleSelectTheme}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection
          socials={socials}
          onOpenShowreel={() => setShowreelModalOpen(true)}
          onOpenContact={() => handleScrollToContact()}
          avatar={avatar}
        />

        {/* About Section - Enhanced with Authentic Resume Details */}
        <AboutSection
          socials={socials}
          onOpenContact={() => handleScrollToContact()}
          avatar={avatar}
        />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Projects Showcase & Interactive Player */}
        <ProjectsSection
          projects={mergedProjects}
          onInquire={handleInquireProject}
        />

        {/* Workflow & Tech Stack Section */}
        <WorkflowSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section & Package Cost Calculator */}
        <ContactSection socials={socials} />

        {/* Footer */}
        <Footer
          socials={socials}
          onOpenSocialsModal={() => setSocialModalOpen(true)}
        />
      </div>

      {/* Social Links Configurator Modal */}
      <SocialLinksModal
        isOpen={socialModalOpen}
        onClose={() => setSocialModalOpen(false)}
        socials={socials}
        onSave={handleSaveSocials}
      />

      {/* Interactive Showreel Modal */}
      {showreelModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0C0E18] border border-zinc-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-4 animate-fadeIn">
            <button
              onClick={() => setShowreelModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
                <Play className="w-4 h-4 fill-rose-400" />
              </span>
              <div>
                <h3 className="text-xl font-extrabold font-outfit text-white">
                  {showreelProject.title}
                </h3>
                <p className="text-xs text-zinc-400">
                  {showreelProject.subtitle}
                </p>
              </div>
            </div>

            <InteractiveProjectViewer
              project={showreelProject}
              onInquire={(title) => {
                setShowreelModalOpen(false);
                handleScrollToContact(title);
              }}
            />

            <div className="flex flex-wrap justify-between items-center gap-2 pt-2">
              <span className="text-[11px] text-zinc-500 font-mono">
                Duration: {showreelProject.duration} • 60 FPS Master
              </span>
              <div className="flex gap-2">
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Raghav</span>
                </a>
                <button
                  onClick={() => {
                    setShowreelModalOpen(false);
                    handleScrollToContact(showreelProject.title);
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inquire This Style</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
