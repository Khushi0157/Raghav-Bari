import React, { useState } from 'react';
import { ProjectCategory, ProjectItem } from '../types';
import { InteractiveProjectViewer } from './demos/InteractiveProjectViewer';
import { Play, Send } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ProjectsProps {
  projects: ProjectItem[];
  onInquire: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsProps> = ({
  projects,
  onInquire,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || 'high-retention-reels');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'reels-shorts', label: 'Shorts & Reels' },
    { id: 'saas-product', label: 'SaaS & UI Motion' },
    { id: 'kinetic-motion', label: 'Kinetic Typography' },
    { id: 'brand-explainer', label: '3D & Explainers' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleSelectCategory = (cat: ProjectCategory) => {
    sounds.playClick();
    setActiveCategory(cat);
  };

  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-[#09080F]/90 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-space font-semibold tracking-widest text-rose-400 uppercase mb-2 block">
            [03 // FEATURED WORK]
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-outfit tracking-tight uppercase text-white hover:text-rose-400 transition-colors cursor-default">
            PROJECT SHOWCASE
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-xs sm:text-sm text-zinc-400 font-sans">
            Interactive client animations, After Effects workflows, and high-retention video edits.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold font-outfit tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg shadow-rose-500/25 scale-105'
                    : 'bg-[#141220] border border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:bg-[#1A172A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top Active Interactive Stage: Live Interactive Project Viewer */}
        <div className="mb-14 bg-[#12101C]/90 border border-white/[0.08] rounded-3xl p-4 sm:p-8 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left: Project Info & Selector */}
            <div className="w-full lg:w-5/12 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 font-space text-[10px] font-semibold">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-zinc-500 font-space">• {selectedProject.year}</span>
                {selectedProject.customVideoUrl && (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-space text-[10px] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Custom Video Attached</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white tracking-tight leading-snug">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                {selectedProject.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="bg-[#171424] border border-white/[0.06] p-2.5 rounded-2xl text-center">
                    <div className="font-extrabold text-white text-sm sm:text-base font-outfit">{m.value}</div>
                    <div className="text-[9px] text-zinc-400 font-space uppercase mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tools Tags */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[10px] text-zinc-500 uppercase font-space font-semibold block">Software Toolchain</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-lg bg-[#1D192C] text-zinc-300 text-[10px] font-space border border-white/[0.05]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions: Inquire */}
              <div className="pt-3">
                <button
                  onClick={() => onInquire(selectedProject.title)}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs font-outfit tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20 cursor-pointer transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Inquire Similar Video</span>
                </button>
              </div>
            </div>

            {/* Right: Embedded Live Interactive Player */}
            <div className="w-full lg:w-7/12">
              <InteractiveProjectViewer
                project={selectedProject}
                onInquire={onInquire}
              />
            </div>
          </div>
        </div>

        {/* Project Gallery List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-2 mb-3">
            <span className="text-xs font-space font-semibold text-zinc-400 uppercase tracking-widest">
              Video Compositions & Edits ({filteredProjects.length})
            </span>
            <span className="text-[11px] text-zinc-500 font-sans">
              Select any project to watch the finished edit
            </span>
          </div>

          {filteredProjects.map((proj, idx) => {
            const isSelected = selectedProject.id === proj.id;

            return (
              <div
                key={proj.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedProjectId(proj.id);
                }}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#151222] border-rose-500/60 shadow-lg shadow-rose-500/10'
                    : 'bg-[#0E0C16] border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Number 01, 02 */}
                  <span className="text-lg sm:text-xl font-black font-outfit text-zinc-500">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-bold font-outfit text-white">
                        {proj.title}
                      </h4>
                      {proj.customVideoUrl && (
                        <span className="px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 text-[10px] font-mono font-bold">
                          MY EDIT
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5 line-clamp-1">
                      {proj.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                  <span className="text-xs text-zinc-400 font-mono bg-[#181528] px-2.5 py-1 rounded-lg border border-white/[0.05]">
                    {proj.duration}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      sounds.playSuccess();
                      setSelectedProjectId(proj.id);
                      const el = document.getElementById('projects');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-rose-500/20 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
