# Grocery Shop Mobile App Template — Style Guide

Brand Colors (CSS variables)
- --bg-hero: #FFC83A
- --text-primary: #1C1C1C
- --text-secondary: #5B5B5B
- --white: #FFFFFF
- --nav-blue: #2F62F1
- --accent-green: #21C17A
- --accent-orange: #FF8A00
- --badge-gray: #F3F4F6

Typography
- Base font-family: "Helvetica Neue", Arial, sans-serif
- Display / H1 (Grocery Shop)
  - font-size: 88px; line-height: 1.1; font-weight: 800; letter-spacing: 0
  - color: var(--text-primary)
- H2 / Subtitle (Mobile App UI Kit)
  - font-size: 40px; line-height: 1.2; font-weight: 600
- Feature Item Text
  - font-size: 38px; line-height: 1.2; font-weight: 700
- Badge Label (“16 Screens”)
  - font-size: 36px; line-height: 1.2; font-weight: 600

Spacing Scale
- 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64 px
- Left column padding: 72 px left/right; 64 px top; 48 px between groups
- Feature items vertical gap: 24 px

Radii
- Cards/screens: 32 px
- Pills: 24–28 px
- Circle badge: 182 px diameter

Layout
- Root: 2340 x 1560 canvas
- Two-column layout:
  - Left hero column fixed width: 780 px
  - Right collage column: remaining width
- Left column uses flex (column):
  - Header group (title + subtitle)
  - Feature list (vertical)
  - Badge row (horizontal: circle + label card)
- Right column: relative positioned collage; inner items absolutely positioned to match Figma coordinates.

Navigation
- This screen is a marketing/cover composition; no nav bar.
- When used as a webpage:
  - Optional top-level horizontal nav may be added above hero (not in original design).

Interactive Elements
- None functionally interactive in hero; all elements are static presentation.
- Buttons observed in screenshots are part of embedded device images, not functional UI for this page.
- Badges can be hover-highlighted (optional): box-shadow 0 8px 24px rgba(0,0,0,0.12).

Assets (use these paths)
- See design notes list; base path prefix: /assets/figmaimages/

Accessibility
- Ensure contrast on yellow background: text uses #1C1C1C.
- Provide descriptive alt for the collage container; individual images may use empty alt if decorative.

Responsive
- ≥1440px: two columns as-is
- 1024–1439px: scale collage to 0.85; clamp width
- ≤1023px: stack, center hero text, collage below, scale to fit; maintain aspect of right container.

Grid/Positioning Cheatsheet (right collage absolute positions)
- Categories-1: x:-571, y:-376; w:571.56; h:1010.45
- Orders: x:-154, y:-986; w:570.90; h:1009.28
- Grocery Home: x:381, y:-791; w:570.90; h:1009.28
- Product details-1: x:-4, y:24; w:570.90; h:1009.28
- Shopping Cart _Offer: x:531, y:208; w:570.90; h:1009.28
- Track Order: x:930, y:-521; w:570.90; h:1009.28

Notes
- The collage extends beyond canvas; ensure overflow hidden on the right container if needed to match crop.
