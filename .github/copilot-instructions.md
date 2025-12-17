<!-- Repository: ai-agency-site (Rooks & Castle) -->
# Copilot / AI Agent Instructions

This project is a small React site built with Vite + TailwindCSS that showcases an AI agency. These instructions contain the project-specific knowledge an AI coding agent needs to be productive immediately.

1. Quick start (dev + build)

   - Install & run dev server:

     ```bash
     npm install
     npm run dev    # runs Vite dev server
     ```

   - Build / preview:

     ```bash
     npm run build
     npm run preview
     ```

   The scripts above come from `package.json` and are the canonical commands for development and testing locally.

2. Big picture & important files

   - **Entry & routing**: `src/main.jsx` and `src/App.jsx` contain the React entry and router. When adding pages, update routes here — do not assume file-based routing.
   - **Pages**: `src/pages/` contains page components. Files with the `Fixed` suffix (e.g., `WhatWeThinkPageFixed.jsx`) are the active/stable versions; other variants (Simple, Test) are experimental or legacy.
   - **Components**: `src/components/` holds reusable UI. Key components: `PremiumHero.jsx`, `ModernNavigation.jsx`, `ImprovedAssessment.jsx`, `CalendlyBooking.jsx`, `ComprehensiveFooter.jsx`.
   - **Hooks**: `src/hooks/useScreenSize.js` is used for responsive behavior — prefer it for screen-size checks rather than ad-hoc window width queries.
   - **Animations & assets**: `src/animations/` and `public/logos/` contain Lottie assets and brand assets. Animation code uses `lottie-react` and `@lottiefiles/dotlottie-react`.
   - **Styling**: `tailwind.config.js` and `index.css` contain the custom cyber-futuristic theme and custom animations (`shimmer`, `pulse-glow`, `float`, `scan`). Refer to `tailwind.config.js` before adding new utility classes.
   - **Deployment**: `netlify.toml` configures Netlify; the publish directory is `dist` (Vite default). SPA routing is handled via redirect rules in `netlify.toml`.

3. Project-specific conventions

   - **File variants**: `*Fixed.jsx` = canonical; other variants are intentionally preserved for reference. Prefer modifying `*Fixed.jsx` when implementing production changes.
   - **Avoid large rewrites of `App.jsx`**: `App.jsx` is large and contains shared layout/animated background. Make targeted changes and preserve shared layout code unless explicitly refactoring with tests.
   - **Copy & tone**: All copy is UK English (e.g., "realise", "organisation") and brand voice is defined in `CLAUDE.md`.
   - **Animations**: Use `framer-motion` for complex transitions; small micro-interactions often live in the components themselves. Lottie is used for heavier animations — import from `src/animations/Assets/Animations`.

4. Integration points & docs

   - Calendly: `CALENDLY_INTEGRATION_GUIDE.md` and `src/components/CalendlyBooking.jsx` show how bookings are embedded.
   - Email/newsletter: `EMAIL_NEWSLETTER_SETUP.md` contains steps for the newsletter integration.
   - General integration notes: see `INTEGRATION_SETUP.md` and `IMPLEMENTATION_GUIDE.md` for multi-step integrations.

5. Working on pages & components — practical rules

   - When adding a new route, update `src/App.jsx` router and add navigation links in `ModernNavigation.jsx` where appropriate.
   - Use existing components where possible. For layout changes, compose components inside page files rather than sprawling changes to global layout.
   - If you add Tailwind utilities or custom animations, update `tailwind.config.js` and prefer semantic class names via component-level wrappers.

6. Tests & debugging

   - There are no automated tests included in this repository. Use the Vite dev server to verify changes: `npm run dev` and open the browser console.
   - For layout regressions, run `npm run build` + `npm run preview` to validate the production bundle.

7. What to avoid / guardrails for AI edits

   - Do not reformat or rewrite `App.jsx` wholesale — prefer focused edits. The file contains shared behavior that affects every page.
   - Preserve UK English copy and brand names (`Rooks & Castle`) when editing content.
   - Do not add new top-level dependencies without calling out reasons in the PR description; prefer existing libraries (`framer-motion`, `lottie-react`, `lucide-react`).

8. Examples (common tasks)

   - Add a new page `src/pages/NewService.jsx` and route:

     1. Create component file and export default.
     2. Add route in `src/App.jsx`:
        ```jsx
        <Route path="/new-service" element={<NewService />} />
        ```
     3. Add link to `ModernNavigation.jsx` if needed.

   - Update an animation asset:

     1. Place Lottie JSON in `src/animations/Assets/Animations`.
     2. Import into the component using `lottie-react` or the project's `LottieAnimation.jsx` wrapper.

9. Where to look for context

   - `CLAUDE.md` — contains an overview of architecture, design system, and tone. Useful for messaging and higher-level decisions.
   - `package.json` — canonical scripts and dependencies.
   - `netlify.toml` — deploy settings and SPA routing.

If anything in these instructions is unclear or you want more detail (for example, a walkthrough of `App.jsx` structure or list of active routes), tell me which area to expand and I will update this file.
