# Critters Quest TGE Website - UI Style Guide

## Overview

This style guide documents the UI patterns, tokens, and component standards for the **Critters Quest Token Generation Event (TGE) website**. This is a single-page React application that presents tokenomics information and the TGE launch details.

> **Important:** This style guide is specific to the TGE marketing website. For the Critters Quest game application UI standards, refer to the game repository documentation.

**Technology Stack:** React 18.2.0, Create React App 5.0.1, Tailwind CSS (via CDN), GSAP 3 + ScrollTrigger (via CDN)

---

## Design Principles

The TGE website follows these core principles:

- **Dark-first design** with deep space backgrounds (`#0f0f23`)
- **Solana ecosystem colors** (green `#14F195`, purple `#9945FF`)
- **High contrast** with glowing accents for readability
- **Smooth animations** using GSAP for theatrical entrance and parallax scrolling
- **Mobile-first responsive** design with clear breakpoints
- **Information hierarchy** with clear sections and card-based layouts
- **Gaming aesthetic** with bold typography and accent colors

---

## Color Tokens

All colors are defined in `/public/index.html` Tailwind config:

| Token Name | Value | Usage |
|------------|-------|-------|
| `quest-primary` | `#14F195` | Primary accent color, buttons, highlights, links |
| `quest-secondary` | `#9945FF` | Secondary accent, gradients, alternative highlights |
| `quest-dark` | `#0f0f23` | Main background color |
| `quest-darker` | `#080816` | Darker background for depth |
| `quest-card` | `#1a1a2e` | Card backgrounds |
| `quest-border` | `#2a2a4a` | Border colors for cards and elements |

### Usage Examples

```jsx
// Background
<div className="bg-quest-dark">

// Card
<div className="bg-quest-card border border-quest-border">

// Primary accent
<span className="text-quest-primary">

// Gradient text (via utility class)
<h1 className="gradient-text">
```

---

## Typography

### Font Families

Defined in `/public/index.html`:

- **Primary:** Inter (sans-serif) - used for all body text, headings, and UI
- **Monospace:** JetBrains Mono - used for token amounts, addresses, and technical data
- **Decorative:** Comic Sans MS - loaded for hero section branding

### Font Scales

| Class | Size | Usage |
|-------|------|-------|
| `text-sm` | 14px | Small labels, secondary text |
| `text-base` | 16px | Default body text |
| `text-lg` | 18px | Large body text |
| `text-xl` | 20px | Small headings |
| `text-2xl` | 24px | Medium headings |
| `text-3xl` | 30px | Section headings |
| `text-4xl` | 36px | Large headings |
| `text-5xl` | 48px | Hero text (desktop) |

### Text Colors

- **White:** Primary text on dark backgrounds
- **Gray variants:** Secondary text, labels
  - `text-gray-300` - Active secondary text
  - `text-gray-400` - Labels and metadata
  - `text-gray-500` - Muted text
- **Gradient text:** Use `.gradient-text` utility class for green-to-purple gradient

---

## Component Patterns

### StatCard Component

Used throughout for displaying key metrics.

```jsx
const StatCard = ({ icon: Icon, label, value, sub, gradient }) => (
  <div className={`bg-quest-card border border-quest-border rounded-2xl p-6 hover:border-quest-primary/50 transition-all duration-300 ${gradient ? 'glow' : ''}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-lg ${gradient ? 'bg-gradient-to-br from-quest-primary/20 to-quest-secondary/20' : 'bg-quest-primary/10'}`}>
        <Icon className="w-5 h-5 text-quest-primary" />
      </div>
      <span className="text-gray-400 text-sm font-medium">{label}</span>
    </div>
    <div className={`text-3xl font-bold ${gradient ? 'gradient-text' : 'text-white'}`}>{value}</div>
    <div className="text-gray-500 text-sm mt-1">{sub}</div>
  </div>
);
```

**Key Features:**
- Dark card background with subtle border
- Icon with colored background circle
- Hover effect (border glow)
- Optional gradient glow effect
- Clear hierarchy: label → value → subtitle

### Section Component

Wrapper for all major content sections.

```jsx
const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="py-16">
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 rounded-xl bg-gradient-to-br from-quest-primary/20 to-quest-secondary/20 border border-quest-primary/30">
        <Icon className="w-6 h-6 text-quest-primary" />
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
    {children}
  </section>
);
```

**Key Features:**
- Consistent vertical spacing (`py-16`)
- Icon + title header pattern
- Section IDs for scroll navigation
- Gradient icon background

### Accordion Component

Used for collapsible FAQ and detailed information.

```jsx
const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="bg-quest-card border border-quest-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-quest-border/30 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {isOpen ? <ChevronUp className="w-5 h-5 text-quest-primary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-5 pt-0 text-gray-300 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
};
```

**Key Features:**
- Card-based design
- Chevron icon indicates state
- Smooth transitions
- Hover feedback

### FeatureCard Component

Used for displaying features, benefits, and process steps.

```jsx
const FeatureCard = ({ icon: Icon, title, desc, color }) => (
  <div className="group relative bg-quest-card border border-quest-border rounded-xl p-6 hover:border-quest-primary/50 transition-all duration-300">
    <div 
      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
      style={{ background: `linear-gradient(135deg, ${color}20 0%, transparent 100%)` }} 
    />
    <div className="relative">
      <div className="p-3 rounded-lg bg-quest-primary/10 inline-block mb-4">
        <Icon className="w-6 h-6 text-quest-primary" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  </div>
);
```

**Key Features:**
- Hover gradient overlay effect
- Icon → Title → Description hierarchy
- Group hover state for smooth animations

### ProgressBar Component

Used for visualizing percentages and distributions.

```jsx
const ProgressBar = ({ percent, color, label }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="text-gray-300 text-sm">{label}</span>
      <span className="text-white font-semibold">{percent}%</span>
    </div>
    <div className="w-full bg-quest-darker rounded-full h-2">
      <div 
        className="h-2 rounded-full transition-all duration-1000" 
        style={{ width: `${percent}%`, backgroundColor: color }}
      />
    </div>
  </div>
);
```

**Key Features:**
- Label and percentage display
- Smooth animated width transition
- Custom color per bar

---

## Navigation

Fixed navigation bar with scroll-based active section tracking.

```jsx
const Nav = () => {
  const [activeSection, setActiveSection] = useState('overview');
  
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'tge', label: 'TGE' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'game', label: 'Game' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-quest-darker/95 backdrop-blur-md border-b border-quest-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id 
                    ? 'text-quest-primary' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
```

**Key Features:**
- Fixed position with backdrop blur
- Active section highlighting
- Smooth scroll to sections
- Responsive hiding on mobile (hamburger menu pattern)

---

## Hero Section

The hero section uses GSAP for theatrical animations. See `src/HeroSection.js` for full implementation.

### Key Animation Sequences

1. **Intro Sequence** (~2 seconds):
   - Screen overlay fades from black
   - Coin "tossed up" from below with gravity effect
   - Background elements fade in (clouds, hills, ground)
   - Mining items, roadster, and logo appear
   - Text elements fade in last

2. **Idle Animations** (continuous):
   - Coin rotates on Y-axis
   - Logo/coin group subtle float
   - Roadster idle bounce
   - Exhaust flame flicker
   - Cloud drift
   - Mining items bobbing

3. **Parallax on Scroll**:
   - Multiple layers at different speeds
   - Centerpiece moves opposite direction
   - Creates depth effect

### Countdown Timer

```jsx
// Target: January 15, 2026 00:00:00 UTC
const targetDate = new Date('2026-01-15T00:00:00Z').getTime();

// Display format: DD:HH:MM:SS
<div className="text-4xl font-mono font-bold text-white">
  {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
</div>
```

---

## Utility Classes

### Custom Utilities (defined in `index.html`)

```css
/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #14F195 0%, #9945FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow effects */
.glow {
  box-shadow: 0 0 40px rgba(20, 241, 149, 0.15);
}

.glow-purple {
  box-shadow: 0 0 40px rgba(153, 69, 255, 0.15);
}

/* Gold pulse animation */
.gold-pulse-glow {
  animation: gold-pulse-glow 2.5s ease-in-out infinite;
}

/* Rotating border animation */
.ecosystem-border-animate {
  /* Dual-color rotating border (see index.html for full implementation) */
}
```

### Common Patterns

```jsx
// Hover glow effect
className="hover:border-quest-primary/50 transition-all duration-300"

// Gradient background
className="bg-gradient-to-br from-quest-primary/20 to-quest-secondary/20"

// Backdrop blur
className="backdrop-blur-md"

// Opacity with color
className="bg-quest-card/95"
```

---

## Responsive Design

### Breakpoints

Standard Tailwind breakpoints via CDN:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Mobile-First Approach

All base styles target mobile. Desktop enhancements use breakpoint prefixes:

```jsx
// Mobile: stack vertically, Desktop: horizontal grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Mobile: full width, Desktop: constrained
className="w-full md:w-1/2 lg:w-1/3"

// Mobile: small text, Desktop: larger
className="text-2xl md:text-3xl lg:text-4xl"
```

---

## Icons

Icons are from **lucide-react** package:

```jsx
import { 
  Flame, Lock, Users, TrendingUp, Coins, Shield,
  ChevronDown, ChevronUp, Zap, Target, Clock,
  PieChart, BarChart3, ArrowRight, Check, Hammer
} from 'lucide-react';
```

**Usage:**
```jsx
<Icon className="w-5 h-5 text-quest-primary" />
<Icon className="w-6 h-6 text-white" />
```

---

## Data Visualization

Uses **recharts** library for pie charts and data visualization:

```jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Example: Token allocation pie chart
<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={tokenAllocation}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      label
    >
      {tokenAllocation.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={entry.color} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
</ResponsiveContainer>
```

---

## Animation Guidelines

### Using GSAP

All GSAP animations are in `src/HeroSection.js`. Key patterns:

```javascript
// Set initial state
gsap.set('#element', { opacity: 0, y: 50 });

// Animate in
gsap.to('#element', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: 'power2.out'
});

// ScrollTrigger for parallax
gsap.to('#parallax-layer', {
  y: 100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});
```

### Performance Optimization

```css
/* GPU acceleration hints */
will-change: transform, opacity;
transform: translateZ(0);
backface-visibility: hidden;
```

---

## File Structure

```
/public
  /assets_cqTGE/          → Hero section assets
  index.html              → HTML template with Tailwind + GSAP CDN

/src
  App.js                  → Main component (all sections and data)
  HeroSection.js          → Animated hero with GSAP
  index.js                → React entry point
```

---

## Data Arrays

All content data is defined in `src/App.js`:

- `tokenAllocation` - Token distribution (5 categories)
- `burnHistory` - Pre-TGE burns (4 categories)
- `solDistribution` - SOV mining SOL distribution (5 categories)
- `vestingTimeline` - Team vesting schedule (4 phases)
- `keyMetrics` - Hero section statistics
- `howItWorksSteps` - Process flow (6 steps)
- `journeyPhases` - Roadmap (4 phases) - *Currently unused in UI*
- `comparisonData` - Project comparison table - *Currently unused in UI*

---

## Do's and Don'ts

### ✅ Do

- Use documented color tokens (`quest-primary`, `quest-secondary`, etc.)
- Follow mobile-first responsive patterns
- Use Tailwind utility classes for all styling
- Apply smooth transitions (`transition-all duration-300`)
- Use lucide-react for all icons
- Keep animations subtle and performant
- Test on mobile devices

### ❌ Don't

- Add new npm packages without discussion
- Create new color values outside the palette
- Use inline styles when Tailwind classes exist
- Add heavy animations that impact performance
- Introduce CSS files (all styling via Tailwind utilities)
- Use complex layout systems (keep it simple with flex/grid)
- Reference Next.js or Phaser (this is a React CRA project)

---

## Browser Support

Tested and supported on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

---

## Accessibility

- Semantic HTML elements (`<section>`, `<nav>`, `<button>`)
- Sufficient color contrast (white/green on dark backgrounds)
- Keyboard navigation supported
- Smooth scroll behavior for better UX
- No ARIA labels currently (add as needed)

---

## Future Improvements

Potential enhancements (not yet implemented):
- Mobile hamburger menu for navigation
- Render `journeyPhases` roadmap section
- Render `comparisonData` comparison table
- Add dark/light mode toggle (currently dark only)
- Enhance accessibility with ARIA labels
- Add meta tags for social sharing

---

## Source of Truth

This style guide documents the current state of the TGE website codebase. The actual code is the ultimate source of truth:

- **Color tokens:** `/public/index.html` (Tailwind config)
- **Components:** `/src/App.js`
- **Animations:** `/src/HeroSection.js`
- **Custom utilities:** `/public/index.html` (`<style>` tag)

---

*Last updated: December 2025*
*This guide is specific to the Critters Quest TGE marketing website*
