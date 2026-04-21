# Rooks & Castle — Design System

## Company Overview

**Rooks & Castle Ltd** is an AI-powered business consultancy helping small businesses and independent professionals work smarter through practical AI systems. The brand is calm, confident, and editorial — never loud, gimmicky, or tech-for-tech's-sake.

**Tagline:** *Building trust through clarity, not spectacle.*

### Two Arms of the Business
1. **AI Consulting / Automations** — AI front desk, phone coverage, workflow automation, lead capture, booking systems for SMBs (salons, clinics, trades, properties).
2. **Short-Let Property Co-Hosting** — Airbnb co-hosting and short-let management services.

---

## Sources

The following resources were used to build this design system:

- **Codebase:** `rooksandcastle/ai-agency-site` (GitHub) — React/Vite/Tailwind site, main branch
  - `src/brand/brand.md` — Official brand guidelines
  - `tailwind.config.js` — Color tokens and font definitions
  - `src/index.css` — Global CSS and animations
  - `src/components/` — UI components (Navigation, Hero, Process, ROICalculator, etc.)
- **Brand Assets repo:** `rooksandcastle/rooks-castle-assets-` (GitHub)
- **Uploaded assets:** Logo Re-imagined.png, carousel images, lifestyle photography, AI imagery
- **Email signature green:** `#2E7D52` (provided by client)

---

## CONTENT FUNDAMENTALS

### Tone of Voice
- **Calm and direct.** No hype, no buzzwords, no exclamation marks.
- **Confident, not arrogant.** Understated authority.
- **Human and practical.** Focuses on real business problems, not sci-fi AI fantasies.
- **First person (we/our)** for the brand voice. Second person (you/your) when addressing the reader.
- **No emoji** in professional contexts. Rare use in social/informal only.

### Casing
- **Sentence case** for headlines (not Title Case).
- **ALL CAPS** only for short labels/badges (e.g. `AI CONSULTING`, `NEW`).

### Copy Examples (from codebase)
- *"Never miss another customer"*
- *"Every call is answered professionally, every lead is captured, every booking is automated. 24/7 — even when you can't."*
- *"For less than the cost of one part-time shift weekly."*
- *"Essential operational infrastructure for modern small businesses."*
- *"Builds practical AI systems for real-world service businesses."*

### Writing Rules
- Short sentences. White space is content.
- Lead with the outcome, not the technology.
- Avoid: robots, AI brains, sci-fi language, corporate jargon.
- Use em dashes (—) for emphasis breaks.
- Numbers are written as numerals: "24/7", "3 steps", not "three steps".

---

## VISUAL FOUNDATIONS

### Color
- **Primary background:** `#0F0F0F` — deep near-black, immersive not flat
- **Surface / cards:** `#1A1A1A`
- **Borders:** `#2A2A2A` subtle; `rgba(255,255,255,0.08)` for glass borders
- **Primary green (CTA):** `#10B981` (Emerald 500) — used sparingly for emphasis and action only
- **Green light (hover):** `#34D399` (Emerald 400)
- **Green dark (pressed):** `#059669` (Emerald 600)
- **Email green:** `#2E7D52` — darker, muted; used in signatures and secondary contexts
- **Text primary:** `#F9FAFB` (Gray 50)
- **Text secondary:** `#9CA3AF` (Gray 400)
- **Text tertiary:** `#6B7280` (Gray 500)
- **Accent (imagery/motion only):** Warm amber `#F59E0B` — NEVER used in UI chrome

### Typography
- **Display/editorial:** Playfair Display — 700/800/900, used for major headlines
- **UI/body:** Inter — 300–900 range; workhorse of the system
- **Labels/accent:** Montserrat — 500/600/700, used for caps labels, badges, nav items
- **Scale:** fluid type using `clamp()`, rooted in 16px base
- **Letter spacing:** Tight (`-0.03em`) for headlines; wide (`0.08–0.12em`) for all-caps labels
- **Line height:** Tight (0.95) for display; relaxed (1.7) for body

### Backgrounds
- Deep dark backgrounds are the default — never white or light backgrounds
- Subtle dot/grid overlays at very low opacity (2–4%) for texture
- Radial green glow gradients used sparingly behind hero elements
- NO aggressive full-screen gradients; prefer layered depth

### Cards
- Background: `#1A1A1A`
- Border: `1px solid #2A2A2A`
- Border radius: `16px` (standard), `24px` (large feature cards)
- Shadow: `0 10px 40px rgba(0,0,0,0.5)`
- Glassmorphism variant: `backdrop-filter: blur(20px)` with `rgba(26,26,26,0.6)` bg, used sparingly

### Hover & Interaction States
- Buttons: background lightens (green → green-light), green glow shadow appears
- Cards: subtle `translateY(-4px)` lift, shadow intensifies
- Links: opacity 0.7 → 1.0 transition
- Press/active: `scale(0.97)` scale-down
- All transitions: `150–220ms easeOut`

### Iconography
- **Library:** Lucide Icons (outline style, strokeWidth 1.5)
- Secondary options: Heroicons (outline), Phosphor (thin weights only)
- Icons are functional, not decorative — never used purely for visual interest
- Default color: white; green used only for highlighted/active states
- Size: 22px default, 18px in dense contexts

### Motion & Animation
- **No bounce, no spring physics, no flashy effects**
- Easing: `easeOut` and `easeInOut` only
- UI interactions: 150–220ms
- Section reveals: 400–700ms (fade + subtle translateY)
- Ambient/looping: 12–20s loops (float, pulse-glow)
- Allowed: opacity, translate (small distances), scale (very subtle)
- Framer Motion used in production code

### Imagery
- Editorial, human, thoughtful, calm
- Cool-dark photography with natural light; warm accent tones in hero imagery
- Abstract/symbolic illustrations preferred over literal "robot" imagery
- Avoid: stock corporate teams, sci-fi clichés, AI brain imagery
- Carousel/hero images use warm amber/orange palette as editorial choice

### Layout
- Max content width: `1400px` (desktop), `1600px` (large screens)
- Container padding: `px-4` (mobile), `px-8` (tablet+)
- Section padding: `py-20` standard, `py-32` for hero
- Grid: 12-column base; feature sections use asymmetric 5/7 splits

### Glassmorphism
- Used sparingly — nav bar, modal overlays, feature badges
- Always: subtle border (`rgba(255,255,255,0.08)`), soft blur (20px), low contrast
- Never over-layered or stacked

---

## ICONOGRAPHY

Icons come from **Lucide React** — outline style, consistent 1.5px stroke weight, simple geometry. Used functionally, not decoratively.

Icons used in the codebase: `Compass`, `Target`, `Workflow`, `PhoneCall`, `LineChart`, `ShieldCheck`, `Layers`, `Globe`, `Building2`, `Users`, `Briefcase`, `Stethoscope`, `Sparkles`, `MessageCircle`, `Headphones`, `Clock3`, `ClipboardCheck`, `CalendarRange`, `Inbox`.

**CDN:** `https://unpkg.com/lucide@latest` — or `lucide-react` package in React projects.

No custom SVG icon set. No emoji as icons. No PNG icons (SVG/component only).

---

## File Index

```
/
├── README.md                    — This file
├── SKILL.md                     — Agent skill descriptor
├── colors_and_type.css          — All CSS design tokens + semantic type classes
├── assets/                      — Logos, brand imagery, media
│   ├── rooks-castle-mark.svg    — RC chess piece mark (SVG)
│   ├── rooks-castle-logo-stacked.svg  — Full RC lockup (SVG)
│   ├── rooks-castle-logo-stacked.png  — Full RC lockup (PNG)
│   ├── logo.png                 — Alternate logo
│   ├── logo-reimagined.png      — Black bg reimagined logo
│   ├── favicon.png              — Favicon / small mark
│   ├── ai-dashboard.webp        — Abstract AI dashboard image
│   ├── contact-hero.webp        — Contact page hero
│   ├── research.webp            — Research section image
│   ├── sunflower.webp           — Nature/ambient hero image
│   ├── thinker.webp             — Thinker illustration (editorial)
│   ├── ai-network.webp          — AI network illustration
│   └── lifestyle-working.png    — Lifestyle/working photography
├── preview/                     — Design system card previews
│   ├── colors-brand.html
│   ├── colors-semantic.html
│   ├── colors-text.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-labels.html
│   ├── spacing-tokens.html
│   ├── shadows-radii.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-badges.html
│   ├── components-nav.html
│   └── brand-logos.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html           — Full interactive website prototype
        ├── Navigation.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Process.jsx
        └── Footer.jsx
```
