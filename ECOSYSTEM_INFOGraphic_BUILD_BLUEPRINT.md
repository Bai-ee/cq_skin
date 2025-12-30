# ECOSYSTEM INFographic BUILD BLUEPRINT
## Critters Quest $QUEST Tokenomics Flow

> **Document Type:** Implementation blueprint for ecosystem infographic component
> 
> **Version:** 1.0  
> **Date:** December 2025  
> **Source of Truth:** Screenshot mock (at-rest state)  
> **Purpose:** Exact implementation guide for developer
> 
> **Scope:** This document describes the ecosystem infographic component for the TGE website

---

## A) NODE LAYOUT

### Container Specifications
- **Container:** `#ecosystem-flow`
- **Background:** Dark blue-purple gradient (`rgba(12,12,28,0.98)` to `rgba(14,20,28,0.98)`)
- **Border:** Rounded corners (1rem), animated border (gold + purple trails)
- **Padding:** Desktop: `p-6 lg:p-8`, Mobile: `p-4`
- **Min Height:** Desktop: `600px`, Mobile: `800px`

### Desktop Grid Layout (≥768px)
```
┌─────────────────────────────────────────────────────────┐
│  [$QUEST FLOWS →]                                       │
│                                                          │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐     │
│  │   SOV    │      │          │      │    4X    │     │
│  │  MINING  │      │  $QUEST  │      │  GAMING  │     │
│  │          │      │  TOKEN   │      │          │     │
│  └──────────┘      └──────────┘      └──────────┘     │
│       │                 │                  │           │
│       │                 │                  │           │
│  ┌──────────┐      ┌──────────┐      ┌──────────┐     │
│  │   BURN   │      │          │      │   SINKS  │     │
│  └──────────┘      └──────────┘      └──────────┘     │
│                                                          │
│  ← 20% TO THE TREASURY ──────────────────────────────  │
└─────────────────────────────────────────────────────────┘
```

### Exact Node Positions (Desktop)

#### LEFT COLUMN (SOV MINING + BURN)
- **Container:** `flex flex-col gap-6` (or `grid` with 2 rows)
- **Width:** `33.33%` of grid (1/3)
- **Alignment:** Left edge of container

**SOV MINING Card:**
- **Position:** Top of left column
- **Top offset from container:** `4rem` (accounting for "$QUEST FLOWS" label)
- **Width:** `100%` of column
- **Height:** `auto` (min `180px`)
- **Border:** Purple (`rgba(153, 69, 255, 0.55)`)
- **Border width:** `2px`
- **Border radius:** `0.75rem` (12px)
- **Padding:** `p-5` (1.25rem)
- **Background:** `linear-gradient(145deg, rgba(22,22,42,0.95), rgba(12,12,28,0.95))`
- **Box shadow:** `0 10px 28px rgba(153, 69, 255, 0.22)`

**BURN Card:**
- **Position:** Below SOV MINING
- **Gap from SOV:** `1.5rem` (24px)
- **Width:** `100%` of column
- **Height:** `auto` (min `120px`)
- **Border:** Purple (same as SOV)
- **Border width:** `2px`
- **Border radius:** `0.75rem`
- **Padding:** `p-5`
- **Background:** Same as SOV
- **Box shadow:** `0 8px 22px rgba(153, 69, 255, 0.18)`

#### CENTER COLUMN ($QUEST TOKEN)
- **Container:** `flex flex-col items-center justify-center`
- **Width:** `33.33%` of grid (1/3)
- **Alignment:** Center of container

**$QUEST Token:**
- **Position:** Absolute center (50% horizontal, ~45% vertical)
- **Size:** Desktop: `w-36 h-36` (144px), Large: `w-44 h-44` (176px)
- **Image:** `/assets_cqTGE/CoinStacked.png`
- **Glow effect:** Radial gradient halo extending `22%` beyond token edge
- **Halo color:** `rgba(255, 215, 0, 0.28)` with `blur(8px)`
- **Drop shadow:** `0 8px 24px rgba(255, 215, 0, 0.3)`
- **Label below:** "$QUEST" (gold `#FFD700`), "Utility Token" (gray)

#### RIGHT COLUMN (4X GAMING + SINKS)
- **Container:** `flex flex-col gap-6`
- **Width:** `33.33%` of grid (1/3)
- **Alignment:** Right edge of container

**4X GAMING Card:**
- **Position:** Top of right column
- **Top offset:** Same as SOV MINING (`4rem`)
- **Width:** `100%` of column
- **Height:** `auto` (min `180px`)
- **Border:** Teal (`rgba(0, 206, 209, 0.55)`)
- **Border width:** `2px`
- **Border radius:** `0.75rem`
- **Padding:** `p-5`
- **Background:** Same gradient as SOV
- **Box shadow:** `0 10px 28px rgba(0, 206, 209, 0.22)`

**SINKS Card:**
- **Position:** Below 4X GAMING
- **Gap from 4X:** `1.5rem` (24px)
- **Width:** `100%` of column
- **Height:** `auto` (min `140px`)
- **Border:** Teal (same as 4X)
- **Border width:** `2px`
- **Border radius:** `0.75rem`
- **Padding:** `p-5`
- **Background:** Same as 4X
- **Box shadow:** `0 8px 22px rgba(0, 206, 209, 0.18)`

### Mascot Placement (Inside Cards)

**SOV MINING Mascot:**
- **Image:** `/assets_cqTGE/miner_mascot.png`
- **Position:** Top-left of card content (not card edge)
- **Size:** `w-12 h-12` (48px)
- **Margin:** `mb-2` (0.5rem) below mascot
- **Float animation:** `translateY(-6px)` over 4s (ease-in-out, infinite)
- **Filter:** `drop-shadow(0 4px 12px rgba(153, 69, 255, 0.45))`
- **Layout:** Flex row with title (mascot left, title right)

**4X GAMING Mascot:**
- **Image:** `/assets_cqTGE/4x_gaming_mascot.png`
- **Position:** Top-left of card content
- **Size:** `w-12 h-12` (48px)
- **Margin:** `mb-2` below mascot
- **Float animation:** Same as SOV
- **Filter:** `drop-shadow(0 4px 12px rgba(0, 206, 209, 0.45))`
- **Layout:** Flex row with title

**BURN & SINKS:**
- **No mascots** (text-only cards)

### Mobile Layout (<768px)
- **Layout:** Vertical stack (single column)
- **Order:** SOV → $QUEST → 4X → BURN → SINKS
- **Gap between cards:** `1rem` (16px)
- **Card width:** `100%`
- **Token size:** `w-28 h-28` (112px)
- **Token position:** Center of stack

---

## B) ARROW GEOMETRY (MOST CRITICAL)

### Critical Arrow Design Principles
**Arrows must project from beneath their starting cards** - they originate from card edges, not from inside cards. The arrows are the PRIMARY VISUAL READ and must clearly communicate flow direction.

**Quick Reference:**
- ✅ Arrows start at **card edges** (right, bottom, left) - not inside cards
- ✅ Arrowheads are **large and visible** (12px base, 10px height)
- ✅ Arrows are **thick bands** (11-16px) - 3-4x thicker than card borders
- ✅ Arrows **dominate visually** - primary read, first thing user sees
- ✅ Arrowheads **touch target edges** - not floating in space
- ❌ Never start arrows from inside cards
- ❌ Never make arrows thin (< 11px)
- ❌ Never make arrowheads tiny or invisible

### Arrow Specifications
- **Type:** Thick "band arrows" (not thin strokes) - these are the dominant visual element
- **Base stroke width:** Main loop: `16px`, Secondary return: `13px`, Terminal: `11px`
- **Energy layer stroke width:** Half of base (8px, 6.5px, 5.5px) - inner glow effect
- **Arrowhead size:** `12px` base width, `10px` height (clearly visible, not tiny)
- **Arrowhead style:** Solid triangle, filled with arrow color, clearly pointing to target
- **Layering:** Arrows below cards (`z-index: 5`), above background (`z-index: 1`)
- **SVG container:** `absolute inset-0`, `pointer-events-none`, `z-index: 5`
- **Visual weight:** Arrows must be 3-4x thicker than card borders (2px) = minimum 11px

### Color Definitions

**Purple Arrows (SOV/BURN):**
- **Base gradient:** `#A46CFF` → `#7C4BFF` (opacity 1 → 0.95)
- **Energy gradient:** `#D6C1FF` → `#B58BFF` (opacity 1)
- **Dash pattern:** Main: `24 14`, Secondary: `20 12`, Terminal: `16 10`

**Teal Arrows (4X/SINKS):**
- **Base gradient:** `#22E1DD` → `#14F195` (opacity 1 → 0.95)
- **Energy gradient:** `#A3FFF5` → `#6CFFE2` (opacity 1)
- **Dash pattern:** Same as purple

### Arrow Origin Rules (CRITICAL)
**All arrows MUST originate from card edges, not from inside cards:**
- **From card right edge:** Arrow starts at the right border of the card
- **From card bottom edge:** Arrow starts at the bottom border of the card
- **From card left edge:** Arrow starts at the left border of the card
- **From token:** Arrow starts at token edge (circular boundary)

**The arrow path begins immediately outside the card border**, creating the "projecting from beneath" effect.

### Desktop Arrow Paths (ViewBox: 0 0 100 100)

#### 1. SOV → $QUEST (Main Loop, Purple, Forward)
- **Type:** Bidirectional main loop (forward direction)
- **Start anchor:** SOV card **right edge**, approximately `30-35%` from top of card
- **End anchor:** $QUEST token **left edge**, approximately `40%` from top of token (top-right quadrant)
- **Path:** `M 18 32 C 32 18, 42 26, 50 50`
  - Starts horizontally from SOV right edge
  - Executes smooth top arc (curves upward then downward)
  - Terminates at token left edge
- **Curve intent:** Top arc (starts horizontal, curves up, then down to target)
- **Thickness:** `16px` base stroke, `8px` energy layer
- **Arrowhead:** Large, clearly visible triangle pointing to $QUEST token
- **Arrowhead position:** At token edge (`50 50`), pointing rightward into token
- **Arrowhead path:** `M 46 46 L 54 50 L 46 54 Z` (12px base, 10px height)
- **Visual:** Arrow projects from beneath SOV card right edge, clearly visible

#### 2. $QUEST → SOV (Main Loop, Purple, Return)
- **Type:** Bidirectional main loop (return direction)
- **Start anchor:** $QUEST token **bottom-right edge**, approximately `40%` from bottom of token
- **End anchor:** SOV card **bottom edge**, approximately `30-35%` from right corner
- **Path:** `M 50 50 C 42 70, 32 70, 18 44`
  - Starts from token bottom-right
  - Executes smooth bottom arc (curves downward then upward)
  - Terminates at SOV card bottom edge
- **Curve intent:** Bottom arc (starts from token, curves down, then up to card)
- **Thickness:** `13px` base stroke, `6.5px` energy layer
- **Opacity:** `0.85` (slightly dimmer than forward to show hierarchy)
- **Arrowhead:** Large triangle pointing to SOV card
- **Arrowhead position:** At SOV card bottom edge (`18 44`), pointing leftward/upward into card
- **Arrowhead path:** `M 21 42 L 15 44 L 21 46 Z` (12px base, 10px height)
- **Visual:** Arrow projects from beneath token, clearly visible return flow

#### 3. $QUEST → 4X (Main Loop, Teal, Forward)
- **Type:** Bidirectional main loop (forward direction)
- **Start anchor:** $QUEST token **right edge**, approximately `50%` vertical center
- **End anchor:** 4X card **left edge**, approximately `32%` from top of card
- **Path:** `M 50 50 C 60 24, 70 20, 82 32`
  - Starts from token right edge
  - Executes smooth top arc (curves upward then downward)
  - Terminates at 4X card left edge
- **Curve intent:** Top arc (starts horizontal, curves up, then down to target)
- **Thickness:** `16px` base stroke, `8px` energy layer
- **Arrowhead:** Large, clearly visible triangle pointing to 4X card
- **Arrowhead position:** At 4X card left edge (`82 32`), pointing rightward into card
- **Arrowhead path:** `M 78 30 L 86 32 L 78 34 Z` (12px base, 10px height)
- **Visual:** Arrow projects from beneath token, clearly visible forward flow

#### 4. 4X → $QUEST (Main Loop, Teal, Return)
- **Type:** Bidirectional main loop (return direction)
- **Start anchor:** 4X card **bottom-left edge**, approximately `50%` from top of card
- **End anchor:** $QUEST token **right edge**, approximately `55%` vertical center (bottom-right quadrant)
- **Path:** `M 82 40 C 70 70, 60 72, 50 55`
  - Starts from 4X card bottom-left
  - Executes smooth bottom arc (curves downward then upward)
  - Terminates at token right edge
- **Curve intent:** Bottom arc (starts from card, curves down, then up to token)
- **Thickness:** `13px` base stroke, `6.5px` energy layer
- **Opacity:** `0.85` (slightly dimmer than forward)
- **Arrowhead:** Large triangle pointing to $QUEST token
- **Arrowhead position:** At token right edge (`50 55`), pointing leftward into token
- **Arrowhead path:** `M 54 54 L 48 55 L 54 56 Z` (12px base, 10px height)
- **Visual:** Arrow projects from beneath 4X card, clearly visible return flow

#### 5. SOV → BURN (Terminal, Purple, One-Way)
- **Type:** Terminal flow (one-way only, originates at SOV card)
- **Start anchor:** SOV card **bottom edge**, approximately `30-35%` from left corner (slightly left of center)
- **End anchor:** BURN card **top edge**, approximately `30-35%` from left corner (aligned with start)
- **Path:** `M 20 52 L 20 74`
  - Straight vertical line (or slight diagonal if cards are offset)
  - No curve needed (direct downward flow)
- **Curve intent:** Straight vertical (or gentle diagonal if needed for alignment)
- **Thickness:** `11px` base stroke, `5.5px` energy layer
- **Arrowhead:** Large triangle pointing down to BURN card
- **Arrowhead position:** At BURN card top edge (`20 74`), pointing downward into card
- **Arrowhead path:** `M 16 72 L 20 78 L 24 72 Z` (12px base, 10px height)
- **Visual:** Arrow projects from beneath SOV card bottom edge, clearly visible terminal flow

#### 6. 4X → SINKS (Terminal, Teal, One-Way)
- **Type:** Terminal flow (one-way only, originates at 4X card)
- **Start anchor:** 4X card **bottom edge**, approximately `30-35%` from left corner (slightly left of center)
- **End anchor:** SINKS card **top edge**, approximately `30-35%` from left corner (aligned with start)
- **Path:** `M 80 52 L 80 74`
  - Straight vertical line (or slight diagonal if cards are offset)
  - No curve needed (direct downward flow)
- **Curve intent:** Straight vertical (or gentle diagonal if needed for alignment)
- **Thickness:** `11px` base stroke, `5.5px` energy layer
- **Arrowhead:** Large triangle pointing down to SINKS card
- **Arrowhead position:** At SINKS card top edge (`80 74`), pointing downward into card
- **Arrowhead path:** `M 76 72 L 80 78 L 84 72 Z` (12px base, 10px height)
- **Visual:** Arrow projects from beneath 4X card bottom edge, clearly visible terminal flow

### Mobile Arrow Paths (Simplified Geometry)

**Mobile uses vertical stacking, so arrows are straight up/down:**

#### SOV → $QUEST (Mobile)
- **Path:** `M 50 18 L 50 46` (straight vertical)
- **Thickness:** `18px` base, `9px` energy
- **Arrowhead:** Points down (at `50 46`)
- **Arrowhead path:** `M 46 44 L 50 50 L 54 44 Z`

#### $QUEST → 4X (Mobile)
- **Path:** `M 50 58 L 50 84` (straight vertical)
- **Thickness:** `18px` base, `9px` energy
- **Arrowhead:** Points down (at `50 84`)
- **Arrowhead path:** `M 46 82 L 50 88 L 54 82 Z`

**Note:** Mobile does NOT show bidirectional return arrows or terminal arrows (SOV→BURN, 4X→SINKS) to reduce clutter. Only main forward flows.

### Arrow Implementation Details

**SVG Structure:**
```xml
<svg id="ecosystem-arrows" className="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 5" viewBox="0 0 100 100" preserveAspectRatio="none">
  <defs>
    <!-- Gradients defined here -->
  </defs>
  <g className="hidden md:block">
    <!-- Desktop arrows -->
  </g>
  <g className="md:hidden">
    <!-- Mobile arrows -->
  </g>
</svg>
```

**Each Arrow Group Contains:**
1. **Base path:** Thick stroke with base gradient (the main arrow body)
2. **Energy path:** Thinner stroke with energy gradient, dashed pattern (inner glow/flow effect)
3. **Arrowhead:** Large, solid triangle polygon pointing to target (clearly visible)

**Critical: Arrow Origin Points**
- **Arrows MUST start at card edges** (right edge, bottom edge, left edge)
- **Path begins immediately outside card border** - use `getBoundingClientRect()` or similar to calculate exact card edge positions
- **Visual effect:** Arrow appears to "project from beneath" the starting card
- **Never start arrows from inside cards** - they must originate from the border

**Arrowhead Specifications (CRITICAL FOR VISIBILITY):**
- **Size:** `12px` base width, `10px` height (large enough to be clearly visible)
- **Shape:** Equilateral triangle pointing directly at target
- **Fill:** Same gradient as base path (solid, not transparent)
- **Position:** Arrowhead tip touches target card edge or token edge
- **Orientation:** Must point directly at target (calculate angle from path end)
- **Visibility:** Arrowhead must be clearly visible - if it's too small, increase size

**Arrow Path Calculation:**
1. Get card/token bounding boxes using `getBoundingClientRect()` or CSS positioning
2. Calculate start point: card edge position (right, bottom, left, or token edge)
3. Calculate end point: target card/token edge position
4. Create smooth curve using cubic Bezier (`C` command in SVG path)
5. Ensure arrowhead tip touches target edge (not floating in space)

**Visual Hierarchy:**
- Arrows are the PRIMARY READ - they must dominate visually
- Arrow thickness (11-16px) is 3-4x thicker than card borders (2px)
- Arrowheads must be clearly visible - test at different zoom levels
- Arrows should be the first thing user sees when looking at the diagram

---

## C) VISUAL WEIGHT + HIERARCHY

### Primary Read: Arrows (MOST IMPORTANT)
- **Arrows MUST dominate** as the primary visual element - they are the FIRST thing user sees
- **Thickness:** Arrows are 3-4x thicker than card borders (11-16px vs 2px)
- **Visual weight:** Arrows should be the most prominent element after the token
- **Projection effect:** Arrows must clearly "project from beneath" starting cards
- **Arrowhead visibility:** Arrowheads must be large (12px base) and clearly visible
- **Opacity:** Main loop arrows: `1.0`, Secondary return: `0.85`, Terminal: `0.85`
- **Glow:** Subtle drop-shadow on arrows (`filter: drop-shadow(0 0 6px rgba(0,0,0,0.25))`)
- **Color saturation:** Arrows use vibrant colors (purple `#A46CFF`, teal `#22E1DD`) to stand out
- **Length:** Arrows should be long enough to clearly show flow direction (not too short)

### Secondary: Cards
- **Cards must be opaque enough** to prevent arrow collisions under text
- **Background opacity:** `0.95` (not fully opaque, but text is readable)
- **Border contrast:** Border color at `0.55` opacity (visible but not dominant)
- **Text contrast:** White/gray text on dark background (WCAG AA compliant)

### Focal Point: $QUEST Token
- **Token must be the focal point**
- **Glow effect:** Radial gradient halo extending `22%` beyond token
- **Halo animation:** Pulse (scale `0.96` → `1.04`, opacity `0.6` → `0.95`, 3s ease-in-out infinite)
- **Drop shadow:** `0 8px 24px rgba(255, 215, 0, 0.3)`
- **Size:** Largest element in center (144px desktop, 176px large)

### Text Hierarchy
- **Card titles:** `text-lg md:text-xl`, `font-extrabold`, Comic Sans MS
- **Card subtitles:** `text-sm`, `text-gray-200`
- **Card bullets:** `text-xs`, `text-gray-200`
- **Token label:** `text-xl md:text-2xl`, `font-bold`, gold color `#FFD700`
- **Token subtitle:** `text-xs md:text-sm`, `text-gray-400`

### Z-Index Layering (Bottom to Top)
1. **Background layers:** `z-index: 1` (aurora, particles)
2. **Arrows:** `z-index: 5` (SVG overlay)
3. **Cards:** `z-index: 10` (card content)
4. **Token:** `z-index: 10` (same as cards, but visually elevated via glow)
5. **Labels:** `z-index: 10` (same as cards)

---

## D) RESPONSIVE BLUEPRINT

### Desktop (≥768px)
- **Layout:** 3-column grid (`grid-cols-3`)
- **Gap:** `gap-6 lg:gap-8`
- **Arrows:** Full bidirectional main loop + terminal flows
- **Token size:** `w-36 h-36` (144px) or `w-44 h-44` (176px)
- **Card padding:** `p-5`

### Tablet (768px - 1023px)
- **Layout:** Same as desktop (3-column)
- **Gap:** `gap-6`
- **Arrows:** Same as desktop
- **Token size:** `w-36 h-36` (144px)
- **Card padding:** `p-5`

### Mobile (<768px)
- **Layout:** Single column stack
- **Gap:** `gap-4` (1rem)
- **Arrows:** Simplified vertical flows only (SOV→QUEST, QUEST→4X)
- **Arrow thickness:** `18px` base (thicker for visibility)
- **Token size:** `w-28 h-28` (112px)
- **Card padding:** `p-4`
- **Card order:** SOV → $QUEST → 4X → BURN → SINKS
- **No terminal arrows on mobile** (too cluttered)

### Breakpoint Strategy
- **Mobile-first:** Start with mobile layout, enhance for desktop
- **Hide/show arrows:** Use `hidden md:block` and `md:hidden` classes
- **Preserve arrow weight:** Never make arrows thinner than `11px` on any breakpoint

---

## E) ACCEPTANCE CHECKLIST

### Layout & Positioning
- [ ] **SOV MINING is top-left, BURN is bottom-left** (same column)
- [ ] **4X GAMING is top-right, SINKS is bottom-right** (same column)
- [ ] **$QUEST token is centered** (50% horizontal, ~45% vertical)
- [ ] **Cards are aligned** (SOV and 4X at same vertical level, BURN and SINKS at same level)
- [ ] **Mascots are fully contained inside cards** at all breakpoints (no overflow)
- [ ] **"$QUEST FLOWS" label is top-right** of container

### Arrow Geometry (CRITICAL)
- [ ] **Arrows project from beneath starting cards** (originate from card edges, not inside cards)
- [ ] **Main loop arrows are bidirectional** ($QUEST ⇄ SOV, $QUEST ⇄ 4X)
- [ ] **Terminal arrows are one-way** (SOV → BURN, 4X → SINKS)
- [ ] **Arrowheads are clearly visible** (12px base, 10px height - large enough to see)
- [ ] **Arrowheads visibly point to their targets** (not reversed or misaligned)
- [ ] **Arrowheads touch target edges** (not floating in space)
- [ ] **Arrows are thick bands** (not thin strokes - minimum 11px base, 3-4x thicker than card borders)
- [ ] **Arrows curve correctly** (top arc for forward, bottom arc for return)
- [ ] **Arrows never run behind readable text** (cards are opaque enough)
- [ ] **Purple arrows connect SOV/BURN, Teal arrows connect 4X/SINKS**
- [ ] **Arrows are the PRIMARY VISUAL READ** (first thing user sees, dominate visually)
- [ ] **Arrow paths start at card edges** (right edge, bottom edge, left edge - not inside cards)

### Visual Weight
- [ ] **Arrows dominate as primary read** (thicker than card borders)
- [ ] **Can user identify main loop in <3 seconds?** (YES - arrows are obvious)
- [ ] **Token is focal point** (glow + size + center position)
- [ ] **Cards are readable** (text contrast meets WCAG AA)

### Responsive
- [ ] **Desktop matches mock spatial layout** (3-column grid)
- [ ] **Mobile uses stacked layout** (single column)
- [ ] **Mobile arrows are simplified but still thick** (preserve visual weight)
- [ ] **No arrows removed on mobile** (only simplified geometry)
- [ ] **Cards remain readable** at all breakpoints

### Treasury Bar
- [ ] **"20% TO THE TREASURY" bar is at bottom** of container
- [ ] **Bar has leftward arrow** (points left)
- [ ] **Bar is purple** (matches SOV/BURN theme)
- [ ] **Bar is visible** (not hidden by cards or arrows)

### Animation (Post-Implementation)
- [ ] **Arrows have energy flow animation** (dashed pattern animates)
- [ ] **Token has subtle bob animation** (Y-axis movement, 2.5s ease-in-out)
- [ ] **Token halo pulses** (scale + opacity, 3s ease-in-out)
- [ ] **Mascots float** (Y-axis movement, 4s ease-in-out)
- [ ] **All animations respect `prefers-reduced-motion`**

---

## F) IMPLEMENTATION NOTES

### Critical Rules
1. **Screenshot mock is source of truth** - if it doesn't match at-rest, it's wrong
2. **Arrows are thick bands, not strokes** - minimum 11px base width
3. **Arrows must be below cards in DOM** but above background (z-index: 5)
4. **Cards must be opaque** (0.95) to prevent arrow-text collisions
5. **Token must glow** - radial gradient halo is required
6. **Mobile preserves arrow weight** - never thinner than 11px

### Common Mistakes to Avoid
- ❌ **Thin arrow strokes (< 11px)** - arrows must be thick bands, not thin lines
- ❌ **Arrows starting from inside cards** - must originate from card edges
- ❌ **Arrows behind text** - cards not opaque enough (must be 0.95 opacity minimum)
- ❌ **Arrowheads too small or invisible** - must be 12px base, clearly visible
- ❌ **Arrowheads pointing wrong direction** - must point directly at target
- ❌ **Arrowheads floating in space** - must touch target card/token edge
- ❌ **Missing bidirectional return arrows** - main loop must show both directions
- ❌ **Terminal arrows originating from wrong card** - SOV→BURN, 4X→SINKS only
- ❌ **Arrows not projecting from beneath cards** - must appear to come from card edges
- ❌ **Arrows not dominant visually** - must be 3-4x thicker than card borders
- ❌ **Mascots overflowing card boundaries** - must be fully contained
- ❌ **Token not centered** - must be absolute center (50% horizontal, ~45% vertical)
- ❌ **Mobile arrows too thin or removed entirely** - preserve thickness, simplify geometry only

### Testing Checklist
1. **Desktop viewport (1920x1080):** Match mock exactly
2. **Tablet viewport (768x1024):** Layout preserved, arrows visible
3. **Mobile viewport (375x667):** Stacked layout, simplified arrows, all readable
4. **Reduced motion:** Animations disabled, static state matches mock
5. **High contrast mode:** Text remains readable
6. **Print preview:** Layout doesn't break (if applicable)

---

## G) ASSET REQUIREMENTS

### Images
- `/assets_cqTGE/CoinStacked.png` - $QUEST token (golden coin)
- `/assets_cqTGE/miner_mascot.png` - SOV MINING mascot (tiger with hard hat)
- `/assets_cqTGE/4x_gaming_mascot.png` - 4X GAMING mascot (duck with crown)

### Fonts
- Comic Sans MS (normal + bold) - for card titles and labels

### Colors
- **Purple:** `#9945FF` / `rgba(153, 69, 255, ...)`
- **Teal:** `#00CED1` / `rgba(0, 206, 209, ...)`
- **Gold:** `#FFD700` / `rgba(255, 215, 0, ...)`
- **Dark background:** `rgba(12,12,28,0.98)`

---

## END OF BLUEPRINT

**Next Steps:**
1. Developer implements layout per Section A
2. Developer implements arrows per Section B (most critical)
3. Developer applies visual weight per Section C
4. Developer tests responsive per Section D
5. Developer validates against checklist per Section E
6. **DO NOT implement animations until static layout matches mock exactly**
