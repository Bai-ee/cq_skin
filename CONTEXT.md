# Critters Quest Project Context

## Project Overview
This is a React-based tokenomics website for Critters Quest ($QUEST). The site displays comprehensive information about the token distribution, TGE launch mechanism, ecosystem, and 4X strategy game.

## Recent Work Completed

### Theatrical Hero Section (Latest Session)
Built a **theatrical, mobile-first splash hero sequence** using **GSAP 3 + ScrollTrigger**. Features include:

#### Angation Sequence
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

### Style Guide Implementation (Previous Session)
Successfully implemented the **Crazy Critters UI Style Guide** (`CQ-UI-STYLE-GUIDE.md`) across the entire site.

#### Key Changes Applied:
1. **Color Scheme Transformation**
   - Background changed from dark blue (`#0f0f23`) to primary-green (`#23740D`)
   - Accent colors updated to use primary-yellow (`#FFB84A`) for buttons and highlights
   - Cards use `bg-white/40` with `border-4 border-black` for high contrast
   - All style guide color tokens added to Tailwind config

2. **Typography Updates**
   - Added uppercase styling to headings, labels, and buttons
   - Implemented text shadow utilities: `.bold` (2px) and `.titleBold` (3px)
   - Text colors: black on light backgrounds, white on dark backgrounds

3. **Component Styling**
   - All cards: `bg-white/40 border-4 border-black rounded-xl/2xl`
   - Buttons: Metallic style with yellow backgrounds and black borders
   - Consistent spacing: `p-2.5`, `p-5`, `gap-5`, `gap-2.5`
   - Navigation, accordions, progress bars all updated

4. **Global Styles**
   - Scrollbar colors match new theme (yellow on green)
   - Theme color meta tag updated to `#23740D`
   - Text shadow classes added for emphasis

## Current File Structure

### Main Files
- `src/App.js` - Main React component with all sections (Hero, Ecosystem, TGE, Tokenomics, Game, Footer)
- `src/HeroSection.js` - **NEW** Theatrical animated hero with GSAP animations
- `src/index.js` - React entry point
- `public/index.html` - HTML template with Tailwind CDN, GSAP, and custom styles
- `public/assets_cqTGE/` - Hero section assets (logo, coin, car, clouds, backgrounds)
- `CQ-UI-STYLE-GUIDE.md` - Complete style guide reference (source of truth)
- `CONTEXT.md` - This file (resume context for Cursor sessions)

### Key Components in App.js
- `StatCard` - Metric display cards
- `Section` - Section wrapper with icon and title
- `Accordion` - Collapsible content sections
- `FeatureCard` - Feature display cards
- `Nav` - Fixed navigation bar with scroll-based active section tracking
- `ProgressBar` - Progress indicators

### Data Structures in App.js
The component includes several data arrays:
- `tokenAllocation` - Token distribution breakdown (5 categories)
- `burnHistory` - Details of burned tokens (4 categories)
- `solDistribution` - SOL distribution percentages (5 categories)
- `vestingTimeline` - Team vesting schedule (4 phases)
- `keyMetrics` - Main statistics displayed in hero section
- `comparisonData` - Project comparison table (currently unused in UI)
- `journeyPhases` - Roadmap phases (currently unused in UI)
- `howItWorksSteps` - Step-by-step process flow (6 steps)

### Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-scripts`: 5.0.1 (Create React App)
- `lucide-react`: ^0.294.0 (Icon library)
- `recharts`: ^2.10.3 (Chart library - imported but PieChart component not currently used)
- **GSAP 3** (via CDN in index.html) - Animation library
- **ScrollTrigger** (via CDN) - GSAP plugin for scroll-based animations

## Style Guide Reference

### Color Tokens (from style guide)
- `primary-green`: `#23740D` (main background)
- `primary-yellow`: `#FFB84A` (buttons, accents)
- `secondry-green`: `#1EA495` (secondary accents)
- `primary-blue`: `#74FDE7`
- `secondry-yellow`: `#E7EF88`
- `standard-success-green`: `#89d005` (success states)

### Design Principles
- Dark-first design with primary-green background
- High contrast with black borders (`border-4 border-black`)
- Rounded corners: `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- Bold, uppercase typography with text shadows
- Metallic/industrial aesthetic with yellow accents
- Consistent spacing scale: `p-2.5` (10px), `p-5` (20px), `gap-5` (20px)

### Component Patterns
- Cards: `bg-white/40 border-4 border-black rounded-xl p-5`
- Buttons: Yellow background with black borders, uppercase text
- Headings: `text-xl/2xl/3xl font-bold uppercase titleBold`
- Text on cards: `text-black` or `text-black/70` for secondary text

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

## Next Steps / Future Work
- All style guide implementation is complete
- Site is ready for review and testing
- Consider adding any missing interactive features if needed
- May want to add animations or transitions per style guide patterns
- Note: `comparisonData` and `journeyPhases` arrays exist but aren't rendered in UI yet
- Note: `recharts` PieChart is imported but not currently used (may have been replaced with bar charts)

## Important Notes
- The style guide (`CQ-UI-STYLE-GUIDE.md`) is the source of truth for all UI decisions
- All components should follow the established patterns
- Color tokens are defined in `public/index.html` Tailwind config
- Text shadows (`.bold`, `.titleBold`) are defined in the `<style>` tag
- The site maintains the original content structure while applying new styling
- Uses Tailwind CSS via CDN (not installed as npm package)
- Icons from `lucide-react` library
- Navigation uses scroll-based active section detection
- All sections are single-page with anchor links (#overview, #ecosystem, #tge, #tokenomics, #game)

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
*Last updated: After style guide implementation*
*Context file created to resume work after Cursor restart*

