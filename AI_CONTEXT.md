You are working inside the Critters Quest ($QUEST) Token Generation Event website repository.

GOAL
Your goal is to help finalize, refine, and stabilize the UI/UX of the Critters Quest TGE website, and prepare it for handoff to a junior developer who will optimize, maintain, and extend it.

PROJECT SUMMARY
This is a React (Create React App) single-page marketing website that presents:
– The $QUEST token and its distribution
– The Token Generation Event (TGE) launch details
– Tokenomics, vesting, and burns
– Overview of the Critters Quest 4X strategy game ecosystem
– SOV Mining protocol mechanics

**Important:** This is the TGE marketing website, NOT the game itself. The game is a separate Next.js + Phaser application.

The site is UI-complete and design-locked. Your work must respect the existing design system and patterns.

DESIGN SOURCE OF TRUTH
The file `docs/CQ-UI-STYLE-GUIDE.md` is the absolute source of truth for UI decisions.
If something conflicts with the style guide, the style guide wins.

CORE TECH STACK
– React 18 (Create React App)
– Tailwind CSS via CDN (configured in `public/index.html`)
– GSAP 3 + ScrollTrigger (via CDN)
– lucide-react for icons
– recharts (installed but mostly unused)
– No external CSS files
– Styling is done via Tailwind utility classes only

ARCHITECTURE CONSTRAINTS
– The app intentionally uses a flat structure
– Most UI lives in `src/App.js`
– Hero animations live in `src/HeroSection.js`
– No major refactors unless explicitly requested
– Prefer clarity and maintainability over abstraction

ANIMATION CONTEXT
A theatrical GSAP-powered hero animation is implemented in `src/HeroSection.js`:
– Coin "toss up" intro sequence (~2 seconds)
– Idle animations (coin rotation, cloud drift, roadster bounce)
– ScrollTrigger-based parallax scrolling
– Countdown timer targeting Jan 15, 2026 00:00:00 UTC
– Mobile-first with responsive adjustments

Do not redesign or replace this animation unless explicitly asked.
Only optimize, stabilize, or extend it carefully.
All animation code lives in HeroSection.js, not App.js.

WHAT “DONE” MEANS
– UI is visually consistent with the style guide
– Interactions are smooth and predictable
– Code is readable by a junior developer
– Patterns are obvious and repeatable
– No speculative features or redesigns

HOW TO RESPOND
– Be explicit and practical
– Assume a junior developer will read your output later
– Prefer checklists, diffs, and concrete guidance
– Flag unused data, unused imports, and low-risk improvements
– If unsure, ask for clarification before changing behavior
