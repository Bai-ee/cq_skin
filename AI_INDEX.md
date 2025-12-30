All project knowledge lives inside the `/docs` folder.

When reasoning, always ground decisions using the following documents:

PRIMARY DOCUMENTS
1. docs/CQ-UI-STYLE-GUIDE.md
   – UI/design system for the TGE website
   – Color tokens (Solana green/purple theme)
   – Typography and fonts
   – Component patterns (cards, buttons, sections)
   – Animation guidelines (GSAP)
   – **Important:** This is for the TGE website, NOT the game

2. docs/CONTEXT.md
   – TGE website implementation notes
   – Recent work and animation details
   – File structure and architecture
   – Terminology consistency guide
   – Known gaps and future work

CODE REFERENCE POINTS
– src/App.js
  Contains:
  • All main sections (Overview, Ecosystem, TGE, Tokenomics, Game, Footer)
  • Reusable components (StatCard, Section, Accordion, FeatureCard, ProgressBar)
  • Data arrays (tokenAllocation, burnHistory, vestingTimeline, etc.)
  • Some arrays are unused (comparisonData, journeyPhases)

– src/HeroSection.js
  Contains:
  • GSAP theatrical intro animation (~2 seconds)
  • Idle animations (coin rotation, cloud drift, etc.)
  • ScrollTrigger parallax effects
  • Countdown timer to Jan 15, 2026 UTC

– public/index.html
  Contains:
  • Tailwind CSS CDN config with custom colors
  • GSAP 3 + ScrollTrigger CDN imports
  • Custom utility classes (.gradient-text, .glow, etc.)
  • Font imports (Inter, JetBrains Mono, Comic Sans MS)

ASSET DIRECTORY
– public/assets_cqTGE/
  Contains all hero and parallax assets.
  Do not rename or relocate without explicit instruction.

USAGE RULES
– Always check docs/ folder for documentation before guessing
– Do not invent new color tokens (use quest-primary, quest-secondary, etc.)
– Do not add new npm packages (Tailwind and GSAP are via CDN)
– Do not restructure the flat file structure
– This is the TGE website, NOT the Critters Quest game
– Prefer editing existing components over creating new ones

OUTPUT EXPECTATIONS
When suggesting changes, clearly label them as:
– REQUIRED
– OPTIONAL
– NICE-TO-HAVE

When relevant, explain how a junior developer should maintain or extend the solution.
