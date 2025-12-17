# Rooks & Castle — Brand Guidelines

## Brand Overview
**Rooks & Castle** builds practical AI systems for real-world service businesses.  
The brand is calm, confident, and editorial — never loud, gimmicky, or “tech for tech’s sake”.

We prioritise:
- clarity over hype  
- trust over flash  
- usefulness over novelty  

Visually, the brand takes inspiration from modern editorial design and companies like Anthropic: restrained, thoughtful, and human.

---

## Logo Usage

### Primary Mark
- **RC Mark (green)** — default logo for dark backgrounds.
- **RC Mark (white)** — used for favicons, small UI, and very dark surfaces.
- **RC Lockup** — RC mark with “Rooks & Castle” text for headers, footers, and brand blocks.

### Rules
- Never recolour logos in CSS.
- Never apply gradients, shadows, or filters to logos.
- Never stretch, skew, or distort.
- Always preserve aspect ratio.
- Logos should sit on dark or neutral backgrounds only.

### Placement
- Header: RC mark inside a subtle glass chip.
- Footer: RC mark + text lockup.
- Favicon: RC mark (white).

---

## Colour System

### Core Colours
- **Primary Green**  
  Used sparingly for emphasis, highlights, and CTAs.  
  This colour signals action and clarity — not decoration.

- **Dark Backgrounds**  
  Deep, neutral dark tones form the foundation of the UI.  
  Backgrounds should feel calm and immersive, not flat black.

- **Text Colours**
  - Primary text: near-white
  - Secondary text: muted grey
  - Tertiary text: softer grey for supporting copy

### Accent Colours
- Warm oranges and earthy tones may appear **inside imagery or motion only**.
- Accent colours are **never used for UI chrome or branding elements**.

---

## Typography

### Tone
- Clear
- Direct
- Calm
- Professional

### Usage
- Headlines: confident, human, not hype-driven.
- Body copy: readable, neutral, explanatory.
- Avoid marketing buzzwords and excessive punctuation.

---

## Motion Principles

Motion is used to **support understanding and atmosphere**, never to distract.

### Rules
- No bounce animations
- No spring physics
- No flashy effects
- No colour-changing animations

### Timing
- UI interactions: 150–220ms
- Section reveals: 400–700ms
- Ambient motion: 12–20s loops

### Easing
- `easeOut`
- `easeInOut`

### Allowed Motion
- opacity
- translate (small distances)
- scale (very subtle)

---

## Imagery & Media

### Style
- Editorial
- Human
- Thoughtful
- Calm

### Preferred
- Ambient looping visuals (WebP or MP4)
- Still photography with natural light
- Abstract or symbolic imagery

### Avoid
- Robots
- AI brains
- Sci-fi clichés
- Stock “corporate smiling teams”
- Loud or flashy motion

---

## Icons

### Icon Style
- Outline only
- Consistent stroke width
- Simple geometry
- Neutral tone

### Approved Libraries
- Lucide Icons
- Heroicons (outline)
- Phosphor (thin weights only)

Icons are functional, not decorative.

---

## UI Personality

The UI should feel:
- modern
- considered
- premium
- restrained

Glassmorphism is used sparingly and always with:
- subtle borders
- soft blur
- low contrast highlights

Never over-layer effects.

---

## Accessibility & Performance

- All text must meet contrast standards.
- Motion must never impair readability.
- Hero media should stay under 8MB where possible.
- Mobile experiences prioritise clarity over effects.

---

## Brand Summary (one sentence)
**Rooks & Castle looks calm, confident, and human — building trust through clarity, not spectacle.**
