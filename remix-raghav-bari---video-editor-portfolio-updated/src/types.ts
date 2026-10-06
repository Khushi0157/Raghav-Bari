export type ProjectCategory = 
  | 'all'
  | 'saas-product'
  | 'kinetic-motion'
  | 'brand-explainer'
  | 'reels-shorts';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface VideoTimelineLayer {
  name: string;
  color: string;
  type: 'video' | 'audio' | 'text' | 'fx' | 'shape';
  start: number;
  duration: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  duration: string;
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:5';
  tags: string[];
  tools: string[];
  description: string;
  keyHighlights: string[];
  metrics: ProjectMetric[];
  featured: boolean;
  interactiveType: 
    | 'reels-motion'
    | 'madison-ai'
    | 'claude-ai' 
    | 'notion-kinetic' 
    | 'hdfc-fintech' 
    | 'airbnb-story' 
    | 'saas-reel' 
    | 'ai-neon' 
    | 'social-carousel'
    | 'custom-video';
  customVideoUrl?: string;
  videoType?: 'youtube' | 'mp4' | 'interactive';
  accentColor: string;
  views?: string;
  layers?: VideoTimelineLayer[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  iconName: string;
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  projectDone: string;
  metricHighlight: string;
}

export interface SocialLinks {
  whatsapp: string;
  whatsappNumber: string;
  instagram: string;
  instagramHandle: string;
  linkedin: string;
  email: string;
  phone: string;
  location: string;
  framerPortfolio?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  timeframe: string;
  iconName: string;
}
