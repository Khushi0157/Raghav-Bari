export type ThemeId = 'ruby' | 'emerald' | 'cobalt' | 'amber';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  badge: string;
  bgMain: string;
  bgCard: string;
  accent: string;
  accentHover: string;
  accentText: string;
  accentBorder: string;
  accentGlow: string;
  gradientFrom: string;
  gradientTo: string;
  tagBg: string;
  tagText: string;
}

export const THEMES: Record<ThemeId, ThemeConfig> = {
  ruby: {
    id: 'ruby',
    name: 'Obsidian & Burgundy',
    badge: 'Burgundy Luxury',
    bgMain: '#070608',
    bgCard: '#12090D',
    accent: '#B11226',
    accentHover: '#7A0C1E',
    accentText: 'text-rose-300',
    accentBorder: 'border-rose-500/25',
    accentGlow: 'rgba(177, 18, 38, 0.28)',
    gradientFrom: 'from-red-700',
    gradientTo: 'to-rose-500',
    tagBg: 'bg-rose-500/12',
    tagText: 'text-rose-300',
  },
  emerald: {
    id: 'emerald',
    name: 'Cyber Emerald & Mint',
    badge: 'SaaS Modern',
    bgMain: '#060B09',
    bgCard: '#0D1612',
    accent: '#10B981',
    accentHover: '#059669',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30',
    accentGlow: 'rgba(16, 185, 129, 0.25)',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-600',
    tagBg: 'bg-emerald-500/15',
    tagText: 'text-emerald-300',
  },
  cobalt: {
    id: 'cobalt',
    name: 'Electric Cobalt & Blue',
    badge: 'Deep Tech',
    bgMain: '#060812',
    bgCard: '#0E1322',
    accent: '#3B82F6',
    accentHover: '#2563EB',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-500/30',
    accentGlow: 'rgba(59, 130, 246, 0.25)',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-600',
    tagBg: 'bg-blue-500/15',
    tagText: 'text-blue-300',
  },
  amber: {
    id: 'amber',
    name: 'Onyx & Champagne Gold',
    badge: 'Editorial Film',
    bgMain: '#0A0806',
    bgCard: '#16130E',
    accent: '#F59E0B',
    accentHover: '#D97706',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    accentGlow: 'rgba(245, 158, 11, 0.25)',
    gradientFrom: 'from-amber-500',
    gradientTo: 'to-orange-600',
    tagBg: 'bg-amber-500/15',
    tagText: 'text-amber-300',
  },
};

export const DEFAULT_THEME_ID: ThemeId = 'ruby';
