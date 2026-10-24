/**
 * Portfolio Data Model
 * Complete data definition for Graphic Design, Video Editing & Motion Graphics, and Digital Marketing
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Alex Rivera",
    role: "Creative Director & Growth Strategist",
    tagline: "Graphic Design • Motion Graphics • Digital Marketing",
    availability: "Available for Freelance & Select Full-Time Roles",
    bio: "Hybrid creative technologist blending award-winning visual craftsmanship with data-driven performance marketing. I help forward-thinking brands, startups, and agencies launch unforgettable brand identities, viral video content, and high-ROAS marketing funnels.",
    stats: [
      { label: "Projects Completed", value: "120+", icon: "folder-check" },
      { label: "Video Views Generated", value: "15M+", icon: "play-circle" },
      { label: "Average Campaign ROAS", value: "4.8x", icon: "trending-up" },
      { label: "Client Satisfaction", value: "99%", icon: "award" }
    ],
    social: {
      linkedin: "https://linkedin.com",
      behance: "https://behance.net",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/15552345678?text=Hi%20Alex,%20I'd%20like%20to%20discuss%20a%20project!",
      email: "alex.rivera.creative@example.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco, CA / Remote Worldwide"
    }
  },

  skills: [
    {
      category: "Graphic Design & Branding",
      icon: "palette",
      description: "Mastery in crafting distinct brand languages, high-impact marketing collateral, packaging, and digital UI/UX assets.",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "InDesign", "Figma", "Canva Pro", "Typography & Grid Systems"],
      items: [
        { name: "Brand Identity & Systems", level: 96 },
        { name: "Social Media & Advertising Creatives", level: 98 },
        { name: "Print, Posters & Editorial Layouts", level: 92 },
        { name: "Packaging & Merchandise Design", level: 88 }
      ]
    },
    {
      category: "Video Editing & Motion Graphics",
      icon: "film",
      description: "Creating thumb-stopping visual rhythm, cinematic color grading, sound design, and 3D kinetic motion assets.",
      tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "CapCut Pro", "Audition"],
      items: [
        { name: "Short-Form Video (Reels/Shorts/TikTok)", level: 98 },
        { name: "Brand Commercials & Product Promos", level: 94 },
        { name: "Kinetic Typography & 2D/3D Motion", level: 91 },
        { name: "Color Grading & Sound Architecture", level: 89 }
      ]
    },
    {
      category: "Digital Marketing & Performance",
      icon: "trending-up",
      description: "Driving scalable growth through scientific paid ad testing, creative strategy, funnel optimization, and organic viral hooks.",
      tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Google Analytics 4", "Semrush", "Klaviyo"],
      items: [
        { name: "Paid Social Ads & Media Buying", level: 94 },
        { name: "High-Converting Ad Creative Strategy", level: 97 },
        { name: "Landing Page CRO & Funnels", level: 90 },
        { name: "Content Strategy & SEO Basics", level: 86 }
      ]
    },
    {
      category: "Office & Creative Admin",
      icon: "briefcase",
      description: "Professional workflow coordination, data reporting, executive presentation decks, and multi-channel asset handoffs.",
      tools: ["MS Excel & Google Sheets", "MS PowerPoint & Keynote", "MS Word & Docs", "Notion", "Asana", "Slack"],
      items: [
        { name: "Executive Presentations & Pitch Decks", level: 95 },
        { name: "Marketing KPI Reporting & Data Analysis", level: 92 },
        { name: "Project Management & Asset Delivery", level: 96 },
        { name: "Creative Briefs & Storyboarding", level: 94 }
      ]
    }
  ],

  services: [
    {
      id: "graphic-design",
      title: "Graphic Design & Branding",
      icon: "palette",
      badge: "Core Specialty",
      tagline: "Visual identities that command attention and drive conversion.",
      features: [
        "Complete Brand Identity (Logos, Guidelines, Color Palettes, Typography)",
        "High-Converting Social Media Creatives (Carousel & Ad Sets)",
        "Commercial Print Collateral (Posters, Brochures, Banners, Packaging)",
        "Merchandise, Apparel & Promotional Event Materials",
        "Vector Source Files (AI, EPS, SVG, PDF, CMYK & Web RGB)"
      ],
      idealFor: "Startups, DTC Brands, Event Organizers & Agencies needing memorable visual polish.",
      turnaround: "3 - 7 Business Days"
    },
    {
      id: "video-editing",
      title: "Video Editing & Motion Graphics",
      icon: "film",
      badge: "Highest Demand",
      tagline: "Cinematic, retention-focused video edits engineered for high watch-time.",
      features: [
        "Viral Short-Form Content (TikTok, Instagram Reels & YouTube Shorts)",
        "High-Production Brand Commercials & Hardware Product Promos",
        "Kinetic Typography, Motion Titles & Logo Stings",
        "Professional Sound Design, SFX, Beat-Sync & DaVinci Color Grading",
        "Multi-Platform Formats (9:16 Vertical, 16:9 Widescreen, 1:1 Square)"
      ],
      idealFor: "Content Creators, E-Commerce brands, tech SaaS, and commercial marketing leads.",
      turnaround: "2 - 5 Business Days"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Growth",
      icon: "trending-up",
      badge: "ROI Driven",
      tagline: "End-to-end performance funnels that turn cold attention into loyal customers.",
      features: [
        "Paid Social Advertising Campaigns (Meta, TikTok & Google Ads)",
        "Full Creative Strategy & High-Volume Ad Variation Testing",
        "Landing Page Conversion Rate Optimization (CRO)",
        "Content Marketing Roadmaps & Search Intent (SEO) Foundations",
        "Transparent Weekly KPI Dashboards & ROAS Optimization"
      ],
      idealFor: "Businesses looking to scale profitably with measurable attribution and lower CAC.",
      turnaround: "Ongoing Monthly Retainer or Sprint"
    }
  ],

  portfolioItems: [
    {
      id: "item-1",
      category: "graphic-design",
      title: "Tokyo 2099: Cyberpunk Music Festival",
      subtitle: "Print Poster, Holographic Visuals & Event Identity",
      image: "assets/images/graphic-1.svg",
      tags: ["Event Branding", "Typography", "Print Design", "Photoshop"],
      client: "Neon Horizon Festivals",
      duration: "2 Weeks",
      deliverables: ["A1 Poster Series (300 DPI CMYK)", "Digital Social Suite", "Outdoor Billboards", "Merch Mockups"],
      description: "Designed a comprehensive visual identity and high-impact poster campaign for an international electronic music festival in Shibuya, Tokyo. Blended retro-futuristic wireframe aesthetics, neon gradients, and Japanese typography to craft a collectible print series that sold out within 48 hours.",
      highlight: "Over 20,000 prints sold and 100K+ social impressions across event launch."
    },
    {
      id: "item-2",
      category: "graphic-design",
      title: "Aura Botanicals Luxury Apothecary",
      subtitle: "Sustainable Packaging & Complete Identity System",
      image: "assets/images/graphic-2.svg",
      tags: ["Packaging", "Branding", "Luxury Aesthetic", "Illustrator"],
      client: "Aura Health & Wellness Co.",
      duration: "3 Weeks",
      deliverables: ["Glass Bottle Label System", "Unboxing Packaging Box", "Retail Style Guide", "E-Commerce Mockups"],
      description: "Created a minimalist, luxury brand identity for cold-pressed botanical wellness elixirs. Crafted custom gold foil typography, bespoke botanical leaf geometry, and sustainable amber glass bottle mockups designed to stand out on boutique retail shelves and Instagram.",
      highlight: "Adopted in 35+ boutique retail stores in North America with 100% positive brand reception."
    },
    {
      id: "item-3",
      category: "video-editing",
      title: "Motion Showreel & 3D Kinetic Typography",
      subtitle: "High-Energy Kinetic Rhythm & Motion Design",
      image: "assets/images/video-thumb-1.svg",
      videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1", // Fallback responsive video
      tags: ["After Effects", "Cinema 4D", "Kinetic Typography", "Sound Design"],
      client: "Studio Pulse & Creative Showcase",
      duration: "Ongoing",
      deliverables: ["4K UHD Master Video", "Vertical Reel Cuts", "Custom Sound Design & SFX Stems"],
      description: "A showcase of fast-paced kinetic typography, 3D element compositing, and beat-matched visual percussion. Designed specifically to showcase high-retention video pacing techniques that hold viewers' attention past the critical 3-second mark.",
      highlight: "Featured in Motion Design Weekly and generated 25+ agency inbound inquiries."
    },
    {
      id: "item-4",
      category: "digital-marketing",
      title: "Velo Activewear: Scaling to $124K/Month",
      subtitle: "Paid Social Funnel & High-ROAS Performance Ads",
      image: "assets/images/marketing-1.svg",
      tags: ["Meta Ads", "Google Ads", "ROAS Optimization", "Media Buying"],
      client: "Velo Athletic Wear",
      duration: "90 Days Sprint",
      deliverables: ["Omnichannel Ad Architecture", "24 UGC Video Variations", "Custom Retargeting Funnel", "Weekly Analytics"],
      description: "Engineered and executed an omnichannel performance marketing campaign combining Meta (Instagram/Facebook) and Google Ads. By testing 24 bespoke creative video variations and optimizing landing page purchase funnels, the campaign generated $124.8K in verified revenue at an average 4.82x ROAS.",
      highlight: "Scaled daily spend from $200/day to $1,800/day while decreasing Customer Acquisition Cost by 38%."
    },
    {
      id: "item-5",
      category: "video-editing",
      title: "Pulse Wireless: Apex Hardware Commercial",
      subtitle: "Cinematic Product Promo & DaVinci Resolve Grade",
      image: "assets/images/video-thumb-2.svg",
      videoUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1",
      tags: ["Commercial", "DaVinci Resolve", "3D Compositing", "Product Ad"],
      client: "Pulse Audio Labs",
      duration: "10 Days",
      deliverables: ["30s TVC Commercial", "15s Instagram Ad Cut", "6s YouTube Bumper", "4K Master"],
      description: "Produced a cinematic commercial spot for premium noise-cancelling headphones. Focused on dramatic studio lighting simulations, macro mechanical close-ups, spatial sound design, and Hollywood-standard color grading to highlight acoustic engineering excellence.",
      highlight: "Broadcasted across digital pre-rolls with a 46% complete-view rate (2.2x industry average)."
    },
    {
      id: "item-6",
      category: "graphic-design",
      title: "Vortex Labs: Black Friday Omnichannel Drop",
      subtitle: "High-Converting Streetwear Social Ad Suite",
      image: "assets/images/graphic-3.svg",
      tags: ["Social Media Ads", "E-Commerce", "Conversion Design", "Photoshop"],
      client: "Vortex Streetwear London",
      duration: "1 Week",
      deliverables: ["1:1 Instagram Feed Ads", "9:16 Stories & Reels Kit", "Email Header Banners", "Hero Web Banners"],
      description: "Crafted high-urgency, conversion-tailored graphic assets for an international Black Friday streetwear launch. Combined gritty industrial textures, tactical caution accents, and high-visibility typography to drive immediate click-through rates.",
      highlight: "Contributed to a record $82K holiday launch day with a 4.2% average click-through rate."
    },
    {
      id: "item-7",
      category: "video-editing",
      title: "Viral Short-Form Content Engine",
      subtitle: "Vertical Reels/TikTok Series Generating 3.8M+ Views",
      image: "assets/images/video-thumb-3.svg",
      videoUrl: "https://www.youtube-nocookie.com/embed/EngW7tLk6R8?autoplay=1",
      tags: ["Shorts & Reels", "Viral Hooks", "Hormozi Captions", "Fast-Paced"],
      client: "Multiple Creator & Founder Brands",
      duration: "Monthly Retainer",
      deliverables: ["30 Vertical 9:16 Videos/Mo", "Custom Animated Subtitles", "Viral Hook Ideation", "Sound Library"],
      description: "Engineered a rapid-fire short-form editing pipeline tailored for modern algorithms. Incorporated dynamic captions, audio sound effects, zoom pulses, and seamless loops that maximize retention and encourage sharing.",
      highlight: "Generated 3.8M+ cumulative views with an average watch time retention exceeding 100%."
    },
    {
      id: "item-8",
      category: "digital-marketing",
      title: "SaaS Flow: B2B Omnichannel Lead Funnel",
      subtitle: "Conversion Rate Optimization & LinkedIn Growth",
      image: "assets/images/marketing-2.svg",
      tags: ["B2B Marketing", "CRO", "Landing Pages", "Lead Generation"],
      client: "FlowMetrics Cloud Platform",
      duration: "60 Days",
      deliverables: ["High-Converting Landing Page Redesign", "LinkedIn Sponsored Content", "Gated Asset Lead Magnet", "Email Nurture Workflow"],
      description: "Revamped the digital acquisition funnel for a fast-growing SaaS startup. Redesigned their primary landing page, wrote conversion-driven copywriting, and targeted high-intent technical decision-makers on LinkedIn and Google Search.",
      highlight: "Boosted landing page conversion rate from 2.1% to 7.2% and secured 48 signed enterprise client demos."
    },
    {
      id: "item-9",
      category: "graphic-design",
      title: "Nexus Systems: Global Rebrand & Style Guide",
      subtitle: "Complete Vector Design System & Typography Scale",
      image: "assets/images/graphic-4.svg",
      tags: ["Brand Guidelines", "Design Systems", "Vector Geometry", "Illustrator"],
      client: "Nexus AI Infrastructure",
      duration: "4 Weeks",
      deliverables: ["60-Page Brand Guidelines PDF", "Vector Iconography Library", "Presentation Templates", "UI Component Kit"],
      description: "Designed a clean, cohesive visual language for a pioneering artificial intelligence company. Built a mathematical hexagonal emblem, paired it with modern typography guidelines, and produced scalable asset libraries for both digital and print applications.",
      highlight: "Laid the visual foundation for their Series A fundraising round which closed at $14M."
    },
    {
      id: "item-10",
      category: "video-editing",
      title: "Cinematic 3D Logo Sting & VFX Opener",
      subtitle: "Cinema 4D + Redshift Motion Graphics",
      image: "assets/images/video-thumb-4.svg",
      videoUrl: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?autoplay=1",
      tags: ["3D VFX", "Logo Animation", "Cinema 4D", "Sound Design"],
      client: "Vanguard Studios",
      duration: "5 Days",
      deliverables: ["4K ProRes 4444 with Alpha Channel", "Stereo & 5.1 Sound Mix", "Looping Screensaver Asset"],
      description: "Crafted a photorealistic 3D motion opener featuring dynamic optical flares, metallic shader textures, and sub-bass audio impact. Engineered to give media productions and agency presentations an instant Hollywood-tier introduction.",
      highlight: "Delivered in lossless alpha transparency for seamless overlay in high-profile keynote broadcasts."
    },
    {
      id: "item-11",
      category: "digital-marketing",
      title: "Growth Lab: Organic 0-to-85K Community Playbook",
      subtitle: "Zero-Ad-Spend Viral Content & Retention Engine",
      image: "assets/images/marketing-3.svg",
      tags: ["Organic Growth", "TikTok Strategy", "Email Funnel", "Community"],
      client: "Creative Founders Club",
      duration: "120 Days",
      deliverables: ["Content Pillar Matrix", "Viral Script Templates", "Bio Conversion Funnel", "Newsletter Nurture Track"],
      description: "Devised an organic growth strategy relying purely on algorithmic content hooks, community participation loops, and friction-free newsletter capture. Scaled a brand-new social footprint from zero to 85,000 engaged followers without a single dollar spent on paid ads.",
      highlight: "Collected 14,200 verified email newsletter subscribers with a 48% open rate."
    }
  ],

  testimonials: [
    {
      quote: "Alex is that rare creative powerhouse who doesn't just make things look breathtaking—he understands business objectives and conversion metrics. His video edits and ad creatives generated our highest ROAS to date (4.8x). Highly recommended!",
      name: "Marcus Vance",
      role: "Founder & CEO",
      company: "Velo Athletic Wear",
      rating: 5,
      avatar: "assets/images/client-1.svg",
      project: "Full-Funnel Paid Social & Video Creatives"
    },
    {
      quote: "Working with Alex completely elevated our brand perception. The packaging design and brand identity he built for Aura Botanicals helped us secure retail distribution in over 35 boutique stores in our very first quarter.",
      name: "Elena Rostova",
      role: "Creative Director",
      company: "Aura Botanicals",
      rating: 5,
      avatar: "assets/images/client-2.svg",
      project: "Luxury Packaging & Visual Identity"
    },
    {
      quote: "Our YouTube Shorts and TikTok engagement exploded after Alex took over editing. His sense of pacing, sound design, and kinetic typography kept our retention curves above 100%. He's fast, communicative, and ridiculously talented.",
      name: "David Chen",
      role: "Head of Content",
      company: "Apex Media Collective",
      rating: 5,
      avatar: "assets/images/client-3.svg",
      project: "Viral Short-Form Video Production"
    },
    {
      quote: "Alex redesigned our SaaS landing pages and executed our LinkedIn lead generation campaign. We saw a 3.4x jump in qualified demo bookings within 60 days. His blend of design and marketing acumen is unmatched.",
      name: "Sophia Martinez",
      role: "VP of Growth",
      company: "FlowMetrics Cloud",
      rating: 5,
      avatar: "assets/images/client-4.svg",
      project: "Landing Page CRO & Omnichannel Ads"
    }
  ],

  achievements: [
    { title: "Meta Certified Media Planner", org: "Meta Blueprint", year: "2024", badge: "Certified" },
    { title: "Adobe Certified Professional (Visual Design)", org: "Adobe Inc.", year: "2023", badge: "Certified" },
    { title: "Top Rated Plus Freelance Talent", org: "Freelance Marketplace", year: "Top 1%", badge: "Award" },
    { title: "YouTube Video Strategy & Audience Growth", org: "Creator Academy", year: "Certified", badge: "Honors" }
  ]
};

if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}