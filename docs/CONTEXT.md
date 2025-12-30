# Critters Quest TGE Website - Project Context

## Project Overview

This is the **Critters Quest Token Generation Event (TGE) marketing website**. It is a single-page React application that presents tokenomics information, the TGE launch details, and an overview of the Critters Quest ecosystem.

> **Important:** This is the TGE website, NOT the Critters Quest game. The game is a separate application with its own codebase (Next.js + Phaser).

## Recent Work Completed

### Theatrical Hero Section (Latest Session)
Built a **theatrical, mobile-first splash hero sequence** using **GSAP 3 + ScrollTrigger**. Features include:

#### Animation Sequence
1. Stage overlay fades from black
2. Clouds fade in with parallax
3. Background hills rise into view
4. Ground layer appears with overshoot
5. Mining items pop in
6. Roadster car drives in from left
7. Exhaust flames flicker on
8. 3D coin scales up and starts rotating
9. Logo drops in from above
10. "PRE-MINE" label and countdown fade up

#### Idle Animations (after intro)
- Continuous coin Y-axis rotation
- Logo/coin group subtle float
- Car idle bounce
- Exhaust flame flicker
- Cloud drift animations
- Mining items subtle bobbing

#### Parallax on Scroll
- Multiple cloud layers at different speeds
- Hills, ground, foreground at varying rates
- Centerpiece moves opposite direction

#### Assets Used (in `/public/assets_cqTGE/`)
- `critters_quest_logo.png` - Main logo
- `Coin.svg` - 3D rotating token
- `roadster.png` - Car with critter
- `cloud1.png`, `cloud2.png` - Cloud layers
- `background_hills.svg` - Distant hills
- `ground_gradient.svg` - Ground layer
- `mining_items.png` - Rocks/crystals foreground

#### Responsive Design
- Mobile-first approach
- Tablet adjustments
- Desktop/4K scaling
- Uses GSAP matchMedia for breakpoints

#### Countdown Timer
- Target: January 15, 2026 00:00:00 UTC
- Shows days:hours:minutes:seconds
- Real-time updates

### Design System

The website follows a **dark space theme** with Solana ecosystem colors. See `CQ-UI-STYLE-GUIDE.md` for complete details.

#### Key Design Elements:
1. **Color Scheme**
   - Background: Dark space theme (`#0f0f23`)
   - Primary accent: Solana green (`#14F195`)
   - Secondary accent: Solana purple (`#9945FF`)
   - Cards: Dark blue-gray (`#1a1a2e`) with subtle borders
   - Gradients used for emphasis and CTAs

2. **Typography**
   - Primary font: Inter (clean, modern)
   - Monospace: JetBrains Mono (for token amounts)
   - Bold headings with gradient text effects
   - Clear hierarchy: large hero text → section headings → body text

3. **Component Styling**
   - Cards: `bg-quest-card border border-quest-border rounded-xl/2xl`
   - Buttons: Dark with green/purple accents and hover effects
   - Consistent spacing: `p-6`, `gap-6`, `py-16` for sections
   - Accordions, progress bars, stat cards use consistent patterns

4. **Visual Effects**
   - Glow effects for emphasis
   - Smooth transitions and hover states
   - GSAP-powered hero animations
   - Parallax scrolling depth effects

## File Structure

```
/critters-quest-project
  /docs
    CONTEXT.md                        ← This file (implementation notes)
    CQ-UI-STYLE-GUIDE.md             ← UI/design system documentation
    CRITTERS_QUEST_TOKENOMICS.md     ← Detailed tokenomics reference
    CRITTERS_QUEST_WHITEPAPER.md     ← Whitepaper v1
    CRITTERS_QUEST_WHITEPAPER_V2.md  ← Whitepaper v2 (shorter)
    Critters_Quest_Economic_Sinks_Explainer.md ← Economic model
  /src
    App.js                            ← Main component (all sections & data)
    HeroSection.js                    ← Animated hero with GSAP
    index.js                          ← React entry point
  /public
    index.html                        ← HTML with Tailwind + GSAP CDN
    /assets_cqTGE                     ← Hero images (logo, coin, car, etc.)
  AI_CONTEXT.md                       ← AI agent instructions (meta)
  AI_INDEX.md                         ← AI agent navigation (meta)
  package.json                        ← Dependencies
```

### Key Components in App.js
- `StatCard` - Metric display cards
- `Section` - Section wrapper with icon and title
- `Accordion` - Collapsible content sections
- `FeatureCard` - Feature display cards
- `Nav` - Fixed navigation bar with scroll-based active section tracking
- `ProgressBar` - Progress indicators

### Data Structures in App.js

The component includes several data arrays that drive the UI:

**Rendered in UI:**
- `tokenAllocation` - Token distribution breakdown (5 categories)
- `burnHistory` - Details of burned tokens (4 categories)
- `solDistribution` - SOV mining SOL distribution (5 categories)
- `vestingTimeline` - Team vesting schedule (4 phases)
- `keyMetrics` - Main statistics displayed in hero section
- `howItWorksSteps` - Step-by-step process flow (6 steps)

**Not Currently Rendered:**
> Note: These data arrays exist in the code but are not displayed in the current UI.
- `comparisonData` - Project comparison table (unused)
- `journeyPhases` - Roadmap phases (unused)

### Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-scripts`: 5.0.1 (Create React App)
- `lucide-react`: ^0.294.0 (Icon library)
- `recharts`: ^2.10.3 (Chart library - imported but PieChart component not currently used)
- **GSAP 3** (via CDN in index.html) - Animation library
- **ScrollTrigger** (via CDN) - GSAP plugin for scroll-based animations

## Style Guide Reference

### Color Tokens (Tailwind CDN config in `public/index.html`)
- `quest-primary`: `#14F195` (Solana green - primary accent)
- `quest-secondary`: `#9945FF` (Solana purple - secondary accent)
- `quest-dark`: `#0f0f23` (main background)
- `quest-darker`: `#080816` (deeper background for depth)
- `quest-card`: `#1a1a2e` (card backgrounds)
- `quest-border`: `#2a2a4a` (border colors)

### Design Principles
- Dark-first design with deep space background
- Solana ecosystem branding (green/purple)
- Subtle borders and cards (`border border-quest-border`)
- Rounded corners: `rounded-xl` (12px), `rounded-2xl` (16px)
- Clean, modern typography with gradient text effects
- Glow effects for emphasis
- Consistent spacing: `p-6` (24px), `py-16` (64px sections)

### Component Patterns
- Cards: `bg-quest-card border border-quest-border rounded-xl p-6`
- Buttons: Dark with quest-primary accents and hover glow
- Headings: `text-2xl/3xl/4xl font-bold text-white` with optional `.gradient-text`
- Gradient text: `.gradient-text` utility (green to purple)
- Hover effects: `hover:border-quest-primary/50 transition-all duration-300`

## Development Server
- Running on: `http://localhost:3000` (default React port)
- Start command: `npm start`
- Uses `react-scripts` (Create React App)

## Site Sections (in order)
1. **Hero/Overview** - Main landing section with three pillars and key metrics
2. **Ecosystem** - Overview of interconnected systems and who benefits
3. **TGE & Mining** - Detailed explanation of SOV mining mechanism
4. **Tokenomics** - Token allocation, vesting, and burn details
5. **4X Game** - Game mechanics, economic sinks, and NFT types
6. **Footer** - Project info and version

## Known Gaps & Future Work

### Unused Features
- `comparisonData` array exists but no comparison table is rendered
- `journeyPhases` array exists but no roadmap section is rendered
- These could be added to the UI if desired

### Potential Improvements
- Mobile hamburger menu (currently navigation is hidden on mobile)
- Add ARIA labels for better accessibility
- Consider adding social share meta tags
- Optimize hero animation performance further
- Add loading states for smoother initial render

## Important Notes

### Architecture Decisions
- **Tailwind via CDN:** Not installed as npm package, configured in `public/index.html`
- **GSAP via CDN:** Animation library loaded from CDN, not npm
- **Flat structure:** All UI in `App.js`, minimal component abstraction
- **Single-page app:** All sections on one page with scroll-to-anchor navigation
- **No CSS files:** All styling via Tailwind utilities and inline `<style>` in `index.html`

### Key References
- **Style guide:** `docs/CQ-UI-STYLE-GUIDE.md` (source of truth for UI)
- **Tokenomics data:** `docs/CRITTERS_QUEST_TOKENOMICS.md` (reference for content)
- **Color tokens:** Defined in `public/index.html` Tailwind config
- **Custom utilities:** `.gradient-text`, `.glow`, `.gold-pulse-glow` in `index.html`

### Content Scope
This website presents:
- Critters Quest ecosystem overview (3 pillars)
- $QUEST tokenomics and distribution
- TGE and SOV mining mechanics
- Game overview (high-level, not the actual game)
- Team vesting and transparency

## Quick Reference Commands
```bash
# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build
```

## Troubleshooting
- If styles don't load: Check that Tailwind CDN is loading in `public/index.html`
- If colors are wrong: Verify Tailwind config in `public/index.html` has all color tokens
- If text shadows missing: Check `<style>` tag has `.bold` and `.titleBold` classes
- Port conflicts: React will automatically use next available port (3001, 3002, etc.)

## Key Implementation Details
- **No CSS files**: All styling is done via Tailwind classes and inline styles in HTML
- **Single component**: All UI is in `App.js` - no component folder structure
- **Scroll tracking**: Navigation highlights active section based on scroll position
- **Responsive**: Uses Tailwind responsive prefixes (sm:, md:, lg:, xl:, 2xl:)
- **Accessibility**: Uses semantic HTML and proper ARIA labels where applicable

---

## Terminology Consistency

Use these terms consistently across all documentation:

| Correct Term | Context |
|--------------|---------|
| **$QUEST** | The token (always with dollar sign) |
| **Token Generation Event (TGE)** | The launch event, not "ICO" or "presale" |
| **SOV Mining** | The ORE-based mining protocol (not "ORE Mining" alone) |
| **Master Edition (ME)** | The 3,500 NFTs (singular: Master Edition, plural: Master Editions) |
| **Pre-Mine** | The community TGE method (not "presale") |
| **Hero Section** | The theatrical top section (not "splash" or "header") |
| **Critters Quest** | The overall project/game (not "CQ" in formal docs) |

---

*Last updated: December 2025*
*This file documents the TGE website implementation for developer handoff*




