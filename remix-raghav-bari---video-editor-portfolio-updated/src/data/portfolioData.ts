import { ProjectItem, ServiceItem, TestimonialItem, SocialLinks, WorkflowStep } from '../types';

export const INITIAL_SOCIAL_LINKS: SocialLinks = {
  whatsapp: 'https://wa.me/918396881056?text=Hi%20Raghav%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20video%20project!',
  whatsappNumber: '+91 8396881056',
  instagram: 'https://instagram.com/saasanimatorguy',
  instagramHandle: '@saasanimatorguy',
  linkedin: 'https://www.linkedin.com/in/raghav-bari-119',
  email: 'bariraghav119@gmail.com',
  phone: '+918396881056',
  location: 'Sanghiwara Narnaul, Haryana & Jaipur, India',
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'youtube-client-edit',
    title: 'Featured Client Video — Visual Storytelling & Motion Design',
    subtitle: 'High-retention editing, kinetic typography, and synchronized Foley sound effects',
    client: 'Featured Client Production',
    category: 'reels-shorts',
    categoryLabel: 'Featured Production',
    year: '2024',
    duration: '0:45',
    aspectRatio: '16:9',
    tags: ['Video Editing', 'Premiere Pro', 'After Effects', 'Retention Pacing'],
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Foley Sound SFX'],
    description: 'A high-impact video edit demonstrating Raghav Bari\'s core editing signature: retention-focused pacing, crisp kinetic text callouts, speed-ramped transitions, and synchronized audio Foley.',
    keyHighlights: [
      'Direct YouTube 4K playback integrated into player',
      'Dynamic subtitle highlights and kinetic typography',
      'Speed-ramped whip transitions and seamless cutaways',
      'Tactile audio sound design and vocal frequency leveling'
    ],
    metrics: [
      { label: 'Watch Through', value: '94%' },
      { label: 'Client Feedback', value: '5.0 ★' },
      { label: 'Retention Boost', value: '+42%' }
    ],
    featured: true,
    interactiveType: 'custom-video',
    customVideoUrl: 'https://youtu.be/vJabNEwZIuc',
    videoType: 'youtube',
    accentColor: '#E11D48',
    views: '1.2M+'
  },
  {
    id: 'madison-ai-explainer',
    title: 'Madison AI — SaaS Product & Feature Motion Explainer',
    subtitle: 'Clean digital marketing dashboard animations, Google Business SEO flows, and social scheduling UI',
    client: 'Madison AI (MeetMadison.ai)',
    category: 'saas-product',
    categoryLabel: 'SaaS & Product Demos',
    year: '2024',
    duration: '1:52',
    aspectRatio: '16:9',
    tags: ['SaaS Explainer', 'UI Animation', 'After Effects', 'Digital Marketing'],
    tools: ['Adobe After Effects', 'Figma UI', 'Premiere Pro', 'Sound Design'],
    description: 'Official SaaS feature launch video for MeetMadison.ai. Features Google Business SEO ranking UI, AI review response generator, unified analytics KPI charts, and multi-platform social calendar campaign scheduling.',
    keyHighlights: [
      'Multi-platform social media scheduler UI motion (IG, FB, X, Google)',
      'Google Business SEO & review automation flow',
      'Dynamic analytics KPI dashboard with NPS score visualization',
      'Clean vector UI motion design with sound synchronization'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+58%' },
      { label: 'Completion Rate', value: '91%' },
      { label: 'Client ROI', value: '14X' }
    ],
    featured: true,
    interactiveType: 'madison-ai',
    accentColor: '#8B5CF6',
    views: '2.8M+'
  },
  {
    id: 'high-retention-reels',
    title: 'Creator Reels — Kinetic Subtitle & High-Retention Pacing',
    subtitle: 'Clean subtitle animation, smooth transitions, dynamic motion text, and visual storytelling',
    client: 'Creators & Personal Brands',
    category: 'reels-shorts',
    categoryLabel: 'Reels & Subtitle Animation',
    year: '2024',
    duration: '0:15',
    aspectRatio: '9:16',
    tags: ['Reels Editing', 'Kinetic Subtitles', 'Sound Design', 'After Effects'],
    tools: ['Adobe Premiere Pro', 'Adobe After Effects', 'Custom Foley SFX'],
    description: 'High-impact short-form video edit engineered to captivate viewers within the first 3 seconds. Features synchronized word-by-word karaoke highlights, speed-ramped whip transitions, punchy B-roll inserts, and tactile sound design (risers, whooshes, and pop impacts).',
    keyHighlights: [
      'Clean subtitle animation with dynamic word highlighting',
      'Smooth whip-pan and speed-ramped cutaways',
      'Tactile Foley sound synchronization and voice leveling',
      'Optimized 9:16 vertical export tailored for Instagram & YouTube Shorts'
    ],
    metrics: [
      { label: 'View Retention', value: '89%' },
      { label: 'Engagement Boost', value: '+45%' },
      { label: 'Avg Watch Time', value: '94%' }
    ],
    featured: true,
    interactiveType: 'reels-motion',
    accentColor: '#F43F5E',
    views: '2.4M+'
  },
  {
    id: 'claude-ai-explainer',
    title: 'Claude AI — Next-Gen Intelligence Interface Demo',
    subtitle: 'Dark luxury kinetic UI demo highlighting Sonnet 5, Opus 5, and code terminal',
    client: 'AI SaaS Platform',
    category: 'saas-product',
    categoryLabel: 'SaaS & Product Demos',
    year: '2024',
    duration: '0:12',
    aspectRatio: '16:9',
    tags: ['AI Product', 'Dark Mode UI', 'Kinetic Typography', 'Audio Waveform'],
    tools: ['After Effects', 'Figma', 'Sound SFX'],
    description: 'Conceptual product promo animation illustrating conversational AI prompts, voice wave reactivity, dynamic model switching dropdowns (Sonnet 5, Opus 5 Deep Research), and terminal code compilation.',
    keyHighlights: [
      'Warm ambient copper-glow aesthetic with luxury dark canvas',
      'Custom interactive keystroke typing and cursor tracking',
      'Model tier upgrade badges with micro-glow transitions',
      'Terminal code window with syntax highlighting and compiler status'
    ],
    metrics: [
      { label: 'Hook Retention', value: '92%' },
      { label: 'Avg Watch Time', value: '96%' },
      { label: 'Social Engagement', value: '18.4K' }
    ],
    featured: true,
    interactiveType: 'claude-ai',
    accentColor: '#D97706',
    views: '890K+'
  },
  {
    id: 'notion-kinetic-text',
    title: 'Notion — Organize Work & Projects Kinetic Typography',
    subtitle: 'High-impact motion graphic highlighting Notion multi-workspace flexibility',
    client: 'Productivity Brand',
    category: 'kinetic-motion',
    categoryLabel: 'Kinetic Typography',
    year: '2024',
    duration: '0:15',
    aspectRatio: '1:1',
    tags: ['Kinetic Typography', 'Clean Motion', 'Adobe After Effects', 'Minimalist'],
    tools: ['After Effects', 'Expression Engine', 'Adobe Premiere Pro'],
    description: 'Dynamic text replacement motion graphic turning "Not only for taking notes" into "Organize Projects & Work" with dynamic SVG curly braces, rhythmic typography pops, and snappy transition timing.',
    keyHighlights: [
      'Snappy strike-through kinetic animations',
      'Custom SVG curly brace expansion paths',
      'Dynamic gradient text filling on beat drops',
      'Subtle motion blur for organic kinetic pacing'
    ],
    metrics: [
      { label: 'Total Views', value: '2.1M' },
      { label: 'Save Rate', value: '14.2%' },
      { label: 'Shares', value: '24.5K' }
    ],
    featured: true,
    interactiveType: 'notion-kinetic',
    accentColor: '#10B981',
    views: '2.1M+'
  },
  {
    id: 'hdfc-sbi-fintech',
    title: 'HDFC vs SBI — 3D Business & Banking Explainer',
    subtitle: 'Data-driven business analysis comparing branch efficiency and 300 Cr revenue',
    client: 'Finance YouTube Creator',
    category: 'brand-explainer',
    categoryLabel: '3D & Brand Explainers',
    year: '2024',
    duration: '0:30',
    aspectRatio: '16:9',
    tags: ['3D Motion', 'Explainer Video', 'Data Visualization', 'Color Grading'],
    tools: ['Premiere Pro', 'After Effects', '3D Graphics', 'Audition'],
    description: 'High-production visual storytelling video for YouTube & LinkedIn. Featuring 3D corporate executive figures, animated branch comparison maps (22,900 vs 9,400 branches), and high-contrast metric callouts (300 Crore per branch).',
    keyHighlights: [
      '3D building and character perspective tracking',
      'Data-driven infographics and dynamic bar charts',
      'Seamless talking-head to graphic b-roll transitions',
      'Voiceover audio equalization and cinematic background music'
    ],
    metrics: [
      { label: 'YouTube Views', value: '3.4M' },
      { label: 'Audience Retention', value: '68%' },
      { label: 'CTR Boost', value: '+31%' }
    ],
    featured: true,
    interactiveType: 'hdfc-fintech',
    accentColor: '#2563EB',
    views: '3.4M+'
  },
  {
    id: 'airbnb-storytelling',
    title: 'Airbnb — Experience Reimagined Brand Motion',
    subtitle: 'Visual comparison between sterile hotel rooms and authentic travel stays',
    client: 'Travel & Lifestyle Media',
    category: 'brand-explainer',
    categoryLabel: '3D & Brand Explainers',
    year: '2024',
    duration: '0:14',
    aspectRatio: '1:1',
    tags: ['Brand Storytelling', 'Isometric Graphics', 'Search UI', 'Fast Paced'],
    tools: ['After Effects', 'Illustrator', 'Premiere Pro'],
    description: 'Fast-paced graphic storytelling animation tracking search bar query inputs ("Hotels in Singapore"), isometric 3D architectural room cards, and the bold transition to Airbnb brand empowerment.',
    keyHighlights: [
      'Interactive magnifier highlight tracking',
      '3D isometric room & brick wall mini-models',
      'Smooth brand color morph from monochrome to Airbnb coral (#FF385C)',
      'Subtle audio swooshes and camera shake accents'
    ],
    metrics: [
      { label: 'Reel Views', value: '950K' },
      { label: 'Completion Rate', value: '84%' },
      { label: 'Client Feedback', value: '10/10' }
    ],
    featured: false,
    interactiveType: 'airbnb-story',
    accentColor: '#FF385C',
    views: '950K'
  },
  {
    id: 'saas-motion-reel',
    title: 'Raghav — SaaS Motion Designer Showreel Breakdown',
    subtitle: 'Behind-the-scenes timeline sync, BGM sound design, and $450k revenue showcase',
    client: 'Personal Brand & SaaS Agencies',
    category: 'saas-product',
    categoryLabel: 'SaaS & Product Demos',
    year: '2024',
    duration: '0:16',
    aspectRatio: '16:9',
    tags: ['Showreel', 'Premiere Pro Timeline', 'SaaS Analytics', 'Sound SFX'],
    tools: ['Premiere Pro', 'After Effects', 'Audition', 'Figma'],
    description: 'Inside the editor workflow: an animated timeline showing audio wave syncs (tech 35.mp3 to tech 43.mp3), interactive cursor clicks triggering SaaS analytics dashboard cards, and "More Trust, More Users" brand impact.',
    keyHighlights: [
      'Full multi-track NLE timeline simulation',
      'Dynamic cursor interaction with glowing trail',
      'Live metric counter animation ($450k revenue / 850k MRR)',
      'Cinematic sound design with riser & downer impacts'
    ],
    metrics: [
      { label: 'Showreel Conversions', value: '28+ Leads' },
      { label: 'Watch Through', value: '98%' },
      { label: 'Avg Rating', value: '5.0 ★' }
    ],
    featured: true,
    interactiveType: 'saas-reel',
    accentColor: '#8B5CF6',
    views: '1.8M'
  },
  {
    id: 'ai-neon-chatbot',
    title: 'AI Chatbot — Glowing Neon Workflow Automation',
    subtitle: 'Fluid neon light streak animation for futuristic SaaS automation tools',
    client: 'AI Tech Venture',
    category: 'kinetic-motion',
    categoryLabel: 'Kinetic Typography',
    year: '2024',
    duration: '0:08',
    aspectRatio: '16:9',
    tags: ['Neon Glow', 'Particle Trail', 'AI Product', 'Dark Luxury'],
    tools: ['After Effects', 'Optical Flares', 'Deep Glow'],
    description: 'High-energy glowing neon pill animation sweeping across a dark canvas to reveal "AI Chatbot" and "Organize My Work" with vibrant multi-color chromatic aberration.',
    keyHighlights: [
      'Multi-spectral neon path animation (magenta to cyan)',
      'Subtle ambient glow reflection',
      'Ultra-smooth speed graph easing',
      'Dark backdrop optimized for modern SaaS landing pages'
    ],
    metrics: [
      { label: 'Landing Page CTR', value: '+38%' },
      { label: 'Social Reach', value: '620K' }
    ],
    featured: false,
    interactiveType: 'ai-neon',
    accentColor: '#EC4899',
    views: '620K'
  },
  {
    id: 'social-carousel-sync',
    title: 'Instagram Interactive Feed Mockup & Haptic Sync',
    subtitle: 'High-engagement social media presentation for @saasanimatorguy',
    client: 'Creator Economy',
    category: 'reels-shorts',
    categoryLabel: 'Short-Form & Reels',
    year: '2024',
    duration: '0:11',
    aspectRatio: '4:5',
    tags: ['Instagram Reel', 'Social Mockup', 'Haptic SFX', 'High Retention'],
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
    description: 'Engaging Instagram card carousel mockup with animated cursor swipe gestures, live heart like count incrementing to 11.4k, and dynamic follow button confirmation.',
    keyHighlights: [
      'Realistic iOS / Instagram UI simulation',
      'Interactive swipe gesture transitions',
      'Sound-synced button state triggers',
      'Optimized for mobile viewing feeds'
    ],
    metrics: [
      { label: 'Likes Generated', value: '11.4K' },
      { label: 'Comments', value: '5.6K' },
      { label: 'Shares', value: '10K' }
    ],
    featured: false,
    interactiveType: 'social-carousel',
    accentColor: '#06B6D4',
    views: '1.1M'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'SaaS Product Demos & Feature Launches',
    shortDesc: 'Turn complex software features into crisp, captivating product animations that drive signups.',
    fullDesc: 'We take your app UI, Figma files, or screen recordings and transform them into sleek, high-conversion product videos. Complete with smooth cursor movements, 3D perspective tilts, glowing feature highlights, and rhythmic pacing.',
    deliverables: [
      'High-definition 4K & 1080p MP4/ProRes exports',
      'Vertical (9:16) & Landscape (16:9) multi-platform cuts',
      'Figma to After Effects vector asset reconstruction',
      'Custom sound design & click SFX integration'
    ],
    tools: ['Adobe After Effects', 'Figma', 'Premiere Pro', 'Illustrator'],
    iconName: 'Laptop',
    popular: true
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Kinetic Typography & Motion Graphics',
    shortDesc: 'Punchy, dynamic text animations and subtitle styles that keep eyes glued to the screen.',
    fullDesc: 'Master-level keyframe animations with custom easing curves, expressive type treatments, motion blur, and rhythmic beat sync. Perfect for video hooks, brand manifestos, and social retention.',
    deliverables: [
      'Custom styled subtitle animation packs',
      'Kinetic quote & stat motion graphics',
      'Transparent alpha channel overlays (ProRes 4444)',
      'Speed-graph tuned easing curves'
    ],
    tools: ['After Effects', 'Expression Scripts', 'Adobe Photoshop'],
    iconName: 'Type'
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'High-Retention Reels & Short-Form Content',
    shortDesc: 'Engineered for YouTube Shorts, Instagram Reels, and TikTok to maximize watch time.',
    fullDesc: 'Fast-paced storytelling that hooks viewers in the first 2 seconds. Includes sound synchronization, snappy B-roll inserts, kinetic text, visual effects, and zoom transitions designed for viral reach.',
    deliverables: [
      'Hook-optimized 15s, 30s, and 60s vertical videos',
      'Thumbnail frame selection & engagement overlays',
      'SFX risers, whooshes, and pop sound leveling',
      'Color graded for mobile OLED screens'
    ],
    tools: ['Premiere Pro', 'After Effects', 'CapCut Pro', 'Audition'],
    iconName: 'Smartphone',
    popular: true
  },
  {
    id: 'srv-4',
    number: '04',
    title: '3D & Brand Explainer Videos',
    shortDesc: 'Transform abstract business concepts and data into clear, persuasive visual narratives.',
    fullDesc: 'From fintech comparisons (e.g. HDFC vs SBI) to brand evolution stories (e.g. Airbnb), we combine 3D assets, animated infographics, dynamic charts, and professional voiceover sync to establish market authority.',
    deliverables: [
      'Comprehensive video storyboarding & visual treatment',
      'Data visualization & animated comparison charts',
      'B-roll selection, footage trimming & 3D tracking',
      'Full commercial license audio integration'
    ],
    tools: ['Premiere Pro', 'After Effects', 'Blender / 3D Assets', 'Audition'],
    iconName: 'Layers'
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Sound Design, Audio Sync & Color Grading',
    shortDesc: 'The secret sauce of high-retention video: tactile audio layers and cinematic color.',
    fullDesc: 'A great video is 50% sound. We layer whooshes, ambient textures, UI clicks, bass drops, and vocal enhancements to give your content deep tactile feedback and professional polish.',
    deliverables: [
      'Multi-track Foley and UI SFX sound design',
      'Vocal clarity EQ, compression & noise suppression',
      'Cinematic color grading & LUT application',
      'Loudness normalization for web (-14 LUFS)'
    ],
    tools: ['Adobe Audition', 'Premiere Pro Audio Suite', 'After Effects'],
    iconName: 'Volume2'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Vikram Mehta',
    role: 'Co-Founder & CEO',
    company: 'PayFlow SaaS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Raghav took our rough Figma designs and built a jaw-dropping product demo. Our landing page conversion rate spiked by 42% on launch day. His After Effects motion work is on another level.',
    projectDone: 'SaaS Launch Video',
    metricHighlight: '+42% Signups'
  },
  {
    id: 't-2',
    name: 'Aarav Sharma',
    role: 'Tech & Business Creator',
    company: '1.2M YouTube Subscribers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Retention is everything on YouTube. Raghav’s kinetic typography and sound design took my average view duration from 45% to over 68%. He never misses a deadline and communicates flawlessly.',
    projectDone: 'Long-Form & Shorts Series',
    metricHighlight: '68% Avg Retention'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Product Marketing Lead',
    company: 'Nexus AI Studio',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'The dark luxury aesthetic Raghav created for our AI product launch was pure art. The terminal animation and sound effects made our technical tool feel intuitive and premium.',
    projectDone: 'AI Product Explainer',
    metricHighlight: '850K+ Video Views'
  },
  {
    id: 't-4',
    name: 'Kunal Singhania',
    role: 'Growth Director',
    company: 'FinPulse Media',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Our corporate banking breakdown (HDFC vs SBI) became our top-performing video of the quarter. Raghav’s ability to turn complex financial data into engaging 3D visuals is extraordinary.',
    projectDone: '3D Fintech Explainer',
    metricHighlight: '3.4M Viral Views'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Brief & Storyboard',
    desc: 'We define your target audience, core message, visual style, and outline the frame-by-frame narrative hook.',
    timeframe: 'Day 1',
    iconName: 'FileText'
  },
  {
    step: '02',
    title: 'Asset Prep & Style Frames',
    desc: 'Reconstructing UI vectors in Illustrator/Figma, preparing 3D assets, custom color palette, and typography design.',
    timeframe: 'Day 1–2',
    iconName: 'Palette'
  },
  {
    step: '03',
    title: 'Motion & Keyframing',
    desc: 'Deep animation in After Effects using custom speed graph easing, camera pans, kinetic text, and particle layers.',
    timeframe: 'Day 2–4',
    iconName: 'PlayCircle'
  },
  {
    step: '04',
    title: 'Sound Design & Mastering',
    desc: 'Layering tactile UI clicks, swooshes, ambient textures, risers, and professional audio equalization.',
    timeframe: 'Day 4–5',
    iconName: 'Sliders'
  },
  {
    step: '05',
    title: 'Review & Final Delivery',
    desc: 'Fine-tuning based on your feedback and exporting master ProRes and optimized web MP4 formats.',
    timeframe: 'Day 5',
    iconName: 'CheckCircle2'
  }
];

export const TECH_STACK = [
  { name: 'Adobe After Effects', icon: 'Ae', category: 'Motion & VFX' },
  { name: 'Adobe Premiere Pro', icon: 'Pr', category: 'NLE Editing' },
  { name: 'Adobe Illustrator', icon: 'Ai', category: 'Vector Prep' },
  { name: 'Adobe Photoshop', icon: 'Ps', category: 'Asset Polish' },
  { name: 'Adobe Audition', icon: 'Au', category: 'Sound Mastering' },
  { name: 'Figma', icon: 'Fg', category: 'UI Deconstruction' },
  { name: 'CapCut Pro', icon: 'Cc', category: 'Short-Form Sync' }
];
