# Alex Rivera — Professional Personal Portfolio Website

A responsive personal portfolio website crafted for creative professionals specializing in **Graphic Design**, **Video Editing & Motion Graphics**, and **Digital Marketing**.

---

## 🌟 Highlights & Key Features

### 1. Navigation & Header
- **Glassmorphic Sticky Header**: Blurs dynamically upon scrolling with modern border styling.
- **Brand Identity**: Customizable geometric brand mark and logo typography.
- **Theme Switcher**: Dark Mode (default, Obsidian & Neon accents) with sleek Light Mode toggle (persisted to `localStorage`).
- **Mobile Drawer Navigation**: Slide-out hamburger menu with touch backdrop and smooth transitions.
- **Quick "Hire Me" Modal Trigger**: Fast-track consultation dialog accessible with one click from anywhere.

### 2. High-Impact Hero Section
- **Dynamic Particles Canvas**: Interactive background particle physics that subtly react to viewport dynamics.
- **Triple-Skillset Value Proposition**: Seamlessly balances Graphic Design, Video Editing, and Digital Marketing.
- **Floating Badge Overlays**: Shows tool proficiencies (Photoshop, Premiere, Meta Ads).
- **Live Status Indicator**: Animated pulsing dot showing availability for freelance and remote roles.
- **Instant Proof Metrics**: Stats counter highlighting 120+ projects, 15M+ views, 4.8x ROAS, and 99% satisfaction.

### 3. About Me & Interactive Skills Architecture
- **Story-driven Narrative**: Explains the unfair advantage of blending aesthetics with performance marketing.
- **Interactive Progress Bars**: Animate into view when scrolled into the viewport.
- **Comprehensive Toolkits**:
  - **Graphic Design**: Photoshop, Illustrator, InDesign, Figma, Typography & Print CMYK.
  - **Video & Motion**: Premiere Pro, After Effects, DaVinci Resolve, Cinema 4D, CapCut.
  - **Digital Marketing**: Meta Ads Manager, Google Ads, TikTok Ads, GA4, Funnel CRO.
  - **Creative Admin & MS Office**: Excel data crunching, PowerPoint pitch decks, Notion, Asana.

### 4. Interactive Services Section
- **3 Comprehensive Pillars**:
  1. *Graphic Design & Branding*: Posters, Banners, Packaging, Social Media Creatives.
  2. *Video Editing & Motion Graphics*: Viral Reels/Shorts, Commercial Promos, Kinetic Typography.
  3. *Digital Marketing & Performance*: Meta & Google Ads Funnels, Content Strategy, SEO Basics.
- **Auto-Prefill Integration**: Clicking "Request Service" automatically navigates to the contact form and selects that specific service.
- **Achievements & Certifications**: Grid displaying Meta Blueprint, Adobe ACP, and YouTube Growth credentials.

### 5. Filterable Portfolio Gallery (The Core Showstopper)
- **Multi-Tab Filtering**: `[All Work]`, `[Graphic Design]`, `[Video Editing]`, `[Digital Marketing]` with active count pills.
- **Interactive Modals**:
  - **Image Lightbox**: For Graphic Design & Marketing deliverables with high-resolution view, project overview, deliverable checklists, and direct inquiry CTA.
  - **Video Player Modal**: Responsive embedded player and custom playback simulation with 4K badge and audio controls.
  - **Detailed Case Studies**: Highlighting metrics (e.g. 4.82x ROAS, 3.8M+ organic views, -42% CAC).
- **Keyboard Navigation**: Press <kbd>ESC</kbd> to close any active modal.

### 6. Client Testimonials Carousel
- **Touch-Swipe & Mouse Drag Enabled**: Responsive carousel with star ratings, verified client avatars, and project tags.
- **Auto-Play Engine**: Smooth auto-sliding with pause-on-hover logic and interactive pagination dots.

### 7. Lead Generation & Contact Section
- **Client-Side Validated Form**: Inputs for Name, Email, Service Needed dropdown, Budget range, and Message.
- **Live Toast Notification Engine**: Instant feedback alerts for inquiries and clipboard copies.
- **Direct WhatsApp Chat**: One-click link with pre-filled message based on selected service.
- **Direct Email Pill**: One-click copy to clipboard with instant toast alert.
- **Social Media Links**: LinkedIn, Behance, YouTube, Instagram, Facebook.

---

## 📁 Project Structure

```
d:\Website\
├── index.html                  # Main portfolio website
├── README.md                   # Documentation and customization guide
├── css\
│   ├── style.css              # Core typography, dark theme variables, layouts
│   ├── components.css         # Filterable tabs, modals, lightbox, slider, toast
│   └── responsive.css         # Breakpoints, mobile navigation drawer, fluid typography
├── js\
│   ├── data.js                # Structured data for projects, skills, services, reviews
│   ├── main.js                # Core controller: particle canvas, sticky nav, theme toggle
│   ├── portfolio.js           # Filtering, image lightbox, video player modal logic
│   ├── testimonials.js        # Touch-enabled testimonials slider & autoplay
│   └── contact.js             # Form validation, WhatsApp links, copy actions, toast alerts
└── assets\
    └── images\                # High-res vector SVGs for mockups, thumbs & avatars
        ├── hero-avatar.svg    # Creative professional avatar illustration
        ├── graphic-1.svg      # Tokyo 2099 Cyberpunk poster showcase
        ├── graphic-2.svg      # Aura Botanicals luxury packaging design
        ├── graphic-3.svg      # Vortex Streetwear e-commerce social ad kit
        ├── graphic-4.svg      # Nexus Systems rebrand & design system
        ├── video-thumb-1.svg  # 3D Kinetic typography showreel thumbnail
        ├── video-thumb-2.svg  # Pulse wireless hardware commercial thumbnail
        ├── video-thumb-3.svg  # Viral TikTok / Instagram Reels dynamic edit thumbnail
        ├── video-thumb-4.svg  # 3D Motion logo sting & VFX opener thumbnail
        ├── marketing-1.svg    # ROAS 4.8x Meta & Google Ads performance dashboard
        ├── marketing-2.svg    # B2B SaaS omnichannel lead funnel diagram
        ├── marketing-3.svg    # Organic viral community growth histogram
        ├── client-1.svg       # Testimonial avatar 1
        ├── client-2.svg       # Testimonial avatar 2
        ├── client-3.svg       # Testimonial avatar 3
        └── client-4.svg       # Testimonial avatar 4
```

---

## 🚀 How to Run & Verify

1. Simply double-click `index.html` in Windows Explorer or open it in any modern browser (Edge, Chrome, Firefox, Safari).
2. Or use any lightweight static server (e.g. VS Code Live Server, Python `python -m http.server 8000`, or Node `npx serve`).

---

## 🎨 Easy Customization Guide

- **Change Personal Name & Bio**: Open [`js/data.js`](file:///d:/Website/js/data.js) and update `PORTFOLIO_DATA.profile`.
- **Add or Edit Portfolio Items**: Add entries to `PORTFOLIO_DATA.portfolioItems` in [`js/data.js`](file:///d:/Website/js/data.js).
- **Change Brand Colors**: Modify `--accent-purple` and `--accent-cyan` in [`css/style.css`](file:///d:/Website/css/style.css#L10-L30).
- **Update Contact Info**: Update email and WhatsApp phone number in [`js/data.js`](file:///d:/Website/js/data.js#L20-L28).
