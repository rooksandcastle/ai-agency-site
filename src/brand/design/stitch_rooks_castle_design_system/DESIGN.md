---
name: Rooks & Castle Identity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#bdc7d9'
  on-tertiary: '#27313f'
  tertiary-container: '#99a3b5'
  on-tertiary-container: '#2f3948'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d9e3f6'
  tertiary-fixed-dim: '#bdc7d9'
  on-tertiary-fixed: '#121c2a'
  on-tertiary-fixed-variant: '#3d4756'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Playfair Display
    fontSize: clamp(2.5rem, 8vw, 4.5rem)
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Playfair Display
    fontSize: clamp(2rem, 5vw, 3rem)
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Playfair Display
    fontSize: 1.875rem
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  gutter: 1.5rem
  container-max: 1280px
---

## Brand & Style

The design system is rooted in the "Editorial AI" aesthetic—a rejection of glowing neon and futuristic tropes in favor of the gravitas found in high-end business journalism and traditional consultancy. It conveys a calm, confident authority, positioning AI as a sophisticated tool for human strategy rather than a technical novelty.

The visual style blends **Minimalism** with **Modern Corporate** sensibilities. It prioritizes generous negative space, crisp typography, and a "high-density, low-clutter" information architecture. The user experience should feel like reading a premium financial publication: structured, intellectual, and effortless.

## Colors

The palette is anchored by a deep, near-black foundation that provides a prestigious "night mode" default. 

- **Primary Green (#10B981):** Reserved strictly for high-priority actions (CTAs), success states, and subtle accents. It represents growth and precision.
- **Backgrounds:** The primary background uses `#0F0F0F`. Secondary surfaces and cards use a slightly lighter `#1A1A1A` to create depth without relying on heavy shadows.
- **Typography:** Pure white is used for headlines to ensure maximum impact. Body text uses a softer gray (`#9CA3AF`) to reduce eye strain and reinforce the editorial hierarchy.

## Typography

This system employs a sophisticated tri-font pairing to establish a clear content hierarchy:

1.  **Playfair Display (Serif):** Used for headlines to inject a human, literary feel. The heavy weights (700-900) contrast beautifully against the dark background.
2.  **Inter (Sans-Serif):** The workhorse for all body copy and UI elements. Its high x-height and neutral character ensure legibility for complex data.
3.  **Montserrat (Sans-Serif):** Used exclusively for labels, overlines, and small caps. Its geometric structure provides a functional, modern counterpoint to the serif headlines.

Fluid scaling via `clamp()` ensures that headlines remain impactful on mobile while reaching their full "editorial" scale on desktop displays.

## Layout & Spacing

The design system follows an **8pt Grid System**. Layouts should prioritize large, purposeful margins to evoke the feeling of a printed magazine.

- **Grid:** A 12-column fluid grid is standard for web views.
- **Margins:** Desktop views should utilize significant lateral padding (minimum 4rem) to keep content focused and readable.
- **Rhythm:** Vertical spacing should be aggressive. Between major sections, use `spacing.xl` to allow the design to "breathe" and prevent the AI-driven data from feeling overwhelming.

## Elevation & Depth

To maintain the "Calm and Confident" tone, depth is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional drop shadows.

- **Surface Tiers:** Background is `#0F0F0F`. Primary cards or navigation bars use `#1A1A1A`. 
- **Borders:** Instead of shadows, use 1px solid borders in `#262626` (a subtle dark gray) to define element boundaries.
- **Active States:** For elements that require elevation (like a floating modal), use a very large, soft ambient shadow: `0 20px 40px rgba(0,0,0,0.5)` to provide a subtle "lift" without breaking the flat, editorial aesthetic.

## Shapes

The shape language is "Rounded-Soft." A consistent **16px (1rem)** radius is used for all primary containers and buttons.

This specific radius bridges the gap between the sharpness of traditional business consultancy and the approachability of modern AI. Larger containers (like hero images or main content cards) should utilize `rounded-xl` (1.5rem) to emphasize their role as distinct sections of the "magazine."

## Components

### Buttons
- **Primary:** Filled `#10B981` with white text. 16px radius. No icons, or very minimal arrow icons for "Proceed."
- **Secondary:** Ghost style with a `#FFFFFF` border (1px) and white text.
- **Tertiary:** Text-only with `label-caps` typography and an underline on hover.

### Cards
- Surfaces should use `#1A1A1A` with a 1px border of `#262626`.
- Inner padding should be generous (2rem or `spacing.lg`).
- Content within cards should always follow the Serif-Headline to Sans-Body hierarchy.

### Input Fields
- Dark backgrounds (`#0F0F0F`) with a 1px white or light gray border.
- Placeholder text in `#4B5563`.
- Focus state: Border color changes to `#10B981`.

### Chips & Tags
- Used for AI-driven categories or metadata.
- Style: Small caps (Montserrat), 1px border, no fill, 100px (pill) radius.

### Editorial Dividers
- 1px solid lines using `#262626`. Dividers should be used frequently but subtly to separate different "articles" or sections of data.