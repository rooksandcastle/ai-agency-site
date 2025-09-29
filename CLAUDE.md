# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rooks & Castle** - An AI agency website built with React, Vite, TailwindCSS, and Framer Motion. The site showcases ethical AI consulting services for businesses, with a premium futuristic design featuring cyber-green accents and sophisticated animations.

## Commands

### Development
```bash
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## Architecture

### Tech Stack
- **Framework**: React 18 with React Router DOM for routing
- **Build Tool**: Vite 4
- **Styling**: TailwindCSS 3 with custom cyber theme extensions
- **Animations**: Framer Motion for complex animations and transitions
- **Icons**: lucide-react

### Project Structure

```
src/
├── App.jsx                 # Main app component with router and animated background
├── main.jsx               # React entry point
├── components/            # Reusable UI components
│   ├── PremiumHero.jsx   # Main hero section
│   ├── ModernNavigation.jsx  # Navigation component
│   ├── EnhancedProcess.jsx   # Process showcase
│   ├── ImprovedAssessment.jsx # Assessment/contact forms
│   ├── CalendlyBooking.jsx    # Calendly integration
│   ├── ComprehensiveFooter.jsx
│   └── BackButton.jsx     # Reusable back navigation
├── pages/                 # Page components
│   ├── Homepage.jsx       # Main landing page
│   ├── WhatWeThinkPageFixed.jsx
│   ├── WhoWeArePageFixed.jsx
│   └── WhatWeDoPageFixed.jsx
└── hooks/
    └── useScreenSize.js   # Custom hook for responsive design
```

### Key Architectural Patterns

1. **Page Naming Convention**: Files with "Fixed" suffix (e.g., `WhatWeThinkPageFixed.jsx`) are the current active versions. Other variants (Simple, Test) are legacy/experimental versions kept for reference.

2. **Routing Structure**: All routing is handled in `App.jsx` using React Router DOM. Main routes:
   - `/` - Homepage
   - `/what-we-think` - Philosophy/thought leadership page
   - `/who-we-are` - About/team page
   - `/what-we-do` - Services page

3. **Shared Layout Components**: `App.jsx` contains shared layout elements like the animated background, which is present across all pages.

4. **Component Composition**: The Homepage aggregates major components (PremiumHero, EnhancedProcess, ImprovedAssessment, etc.) while detail pages use simpler layouts with BackButton.

### Design System

The site uses a custom **cyber-futuristic** theme with:

- **Primary Colors**:
  - Cyber green (`#00ff41`) for accents
  - Cyber black (`#0a0a0a`) for backgrounds
  - Navy (`#1a2332`) and forest green (`#1b4332`) for branding

- **Custom Animations** (defined in tailwind.config.js):
  - `shimmer` - Moving gradient effect
  - `pulse-glow` - Glowing pulse with box shadows
  - `float` - Subtle floating animation
  - `scan` - Scanning line effect

- **Typography**:
  - Display: Playfair Display (serif)
  - Body: Inter (sans-serif)
  - Accent: Montserrat
  - Futuristic: Orbitron (monospace)

### Responsive Design

- Uses custom `useScreenSize` hook for screen size detection
- Mobile-first approach with TailwindCSS breakpoints
- Responsive navigation handling in ModernNavigation component

## Deployment

- **Platform**: Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **SPA Routing**: All routes redirect to `/index.html` via netlify.toml

## Integration Points

The project includes integration guides for:
- Calendly booking (CALENDLY_INTEGRATION_GUIDE.md)
- Email newsletters (EMAIL_NEWSLETTER_SETUP.md)
- General integrations (INTEGRATION_SETUP.md)

## Content Guidelines

- All copy uses **UK English** (e.g., "realise" not "realize", "organisation" not "organization")
- Brand name: "Rooks & Castle"
- Tone: Professional, ethical, psychology-informed, futuristic yet accessible

## Important Notes

- App.jsx is very large (~83KB). When editing, use targeted edits rather than full rewrites.
- The site emphasises ethical AI and psychology-informed approaches in its messaging.
- Navigation recently underwent mobile optimization to fix white screen issues.
- Logo and branding assets are in `/public` directory.