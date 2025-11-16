# Grocery Shop Mobile App Template — Design Notes
Source references:
- Figma Screen YAML: /home/kavia/workspace/code-generation/attachments/screen_33438:271.yaml (figma_id 33438:271)
- Screen PNG preview: /home/kavia/workspace/code-generation/attachments/screen_33438-271.png
- Exported assets (paths to use in code): assets/figmaimages/* (as provided in YAML imagePath fields)

Canvas
- Frame name: Grocery Shop Mobile App Template
- Dimensions: 2340 x 1560 px
- Background: Solid color_ref color_ffc83a (dominant warm yellow)

Overall Composition
- Left-side hero area (approx 780 px wide) with yellow canvas, headline, subtitle, feature badges and a circular Figma logo badge with “16 Screens”.
- Right side displays a staggered collage of mobile UI screens/cards tilted slightly, showing multiple device mock frames and coupon card.

Assumed Font Family
- Use "Helvetica Neue, Arial, sans-serif" (fallback) as font family if exact Figma font not provided in YAML.

Root Frame
- id: 33438:271, size 2340x1560, style_ref: style_0
- Background color: var(--bg-hero, #FFC83A) per color detection.

Identified Visual Elements (from YAML with coordinates and sizes; positions are in the root coordinate space)
- image 25 (id 33438:272)
  - Type: rectangle with image fill
  - Position: x: -394.17, y: 179.57
  - Size: 388.52 x 464.90
  - imagePath: /assets/figmaimages/figma_image_33438_272.png
- image 26 (id 33438:273)
  - Position: x: 0.00, y: -401.00
  - Size: 388.52 x 464.90
  - imagePath: /assets/figmaimages/figma_image_33438_273.png
- image 27 (id 33438:274)
  - Position: x: 130.00, y: 375.00
  - Size: 388.52 x 464.90
  - imagePath: /assets/figmaimages/figma_image_33438_274.png
- image 28 (id 33438:275)
  - Position: x: 536.00, y: -180.00
  - Size: 388.52 x 464.90
  - imagePath: /assets/figmaimages/figma_image_33438_275.png
- image 29 (id 33438:276)
  - Position: x: 826.00, y: 285.00
  - Size: 388.52 x 464.90
  - imagePath: /assets/figmaimages/figma_image_33438_276.png

Left Column — Feature List (Group 37757)
- Container bounds: x: -1075, y: -325, width: 500, height: 530
- Vertical stack of 4 feature rows (each a horizontal frame, style_ref: style_3)
  1) "High Quality" (Frame 8695)
     - Frame bounds: 363 x 95
     - Text bounds: 303 x 75 at x: -1045, y: -315
     - Typography: typo_89 (estimate ~36–42 px semi-bold)
  2) "Organized layer" (Frame 8696)
     - Frame bounds: 455 x 95
     - Text: 395 x 75 at x: -1045, y: -170
     - Typography: typo_89
  3) "Full Customizable" (Frame 8697)
     - Frame bounds: 500 x 95
     - Text: 440 x 75 at x: -1045, y: -25
     - Typography: typo_89
  4) "Styleguide" (Frame 8698)
     - Frame bounds: 322 x 95
     - Text: 262 x 75 at x: -1045, y: 120
     - Typography: typo_89

Left Headline Block (Frame 8699)
- Bounds: x: -1075, y: -630, width: 618, height: 207
- Vertical layout
  - Title: "Grocery Shop" (Frame 8693 > text)
    - Text bounds: width 618, height 135
    - Typography: typo_90 (assume bold, ~72–96 px)
  - Subtitle: "Mobile App UI Kit"
    - Text bounds: width 396, height 72
    - Typography: typo_91 (assume medium/regular, ~32–40 px)

Right Collage — Device/Screen Cards (Group 37759 and standalone rects)
- Group 37759 global bounds: width 2729.47 x height 3627.61 (extends beyond root to allow angled overlap)
- Multiple grey rect placeholders (style_6) and several key image rectangles (style_7) with image paths:
  - "Shopping Cart _Offer" (id 33438:300)
    - x: 531.00, y: 208.00, size: 570.90 x 1009.28
    - imagePath: /assets/figmaimages/figma_image_33438_300.png
  - "Track Order" (id 33438:308)
    - x: 930.00, y: -521.00, size: 570.90 x 1009.28
    - imagePath: /assets/figmaimages/figma_image_33438_308.png
  - Standalone: "Categories-1" (id 33438:311)
    - x: -571.00, y: -376.40, size: 571.56 x 1010.45
    - imagePath: /assets/figmaimages/figma_image_33438_311.png
  - "Orders" (id 33438:323)
    - x: -154.00, y: -986.00, size: 570.90 x 1009.28
    - imagePath: /assets/figmaimages/figma_image_33438_323.png
  - "Grocery Home" (id 33438:324)
    - x: 381.00, y: -791.00, size: 570.90 x 1009.28
    - imagePath: /assets/figmaimages/figma_image_33438_324.png
  - "Product details-1" (id 33438:325)
    - x: -4.00, y: 24.00, size: 570.90 x 1009.28
    - imagePath: /assets/figmaimages/figma_image_33438_325.png
- Note: Many grey rectangles (style_6) are composition/backdrop helpers for the tilted collage.

Badge Row (Group 37770)
- Bounds: x: -1075, y: 448, width: 577, height: 182
- Right-aligned label: "16 Screens" in a rounded pill (Frame 8691)
  - Frame: x: -965, y: 472, width: 467, height: 135; style_ref: style_8; text style_ref: style_9; typography typo_92
- Left circular badge (Group 37618):
  - Ellipse 1466: 182 x 182 (style_190), containing Figma logo constructed via vectors (Frame logos:figma 76.90 x 117.92)
  - One vector (id 33438:318) has an exported path: /assets/figmaimages/figma_image_33438_318.svg

Colors (inferred from image)
- --bg-hero: #FFC83A (primary hero yellow)
- --text-primary: #1C1C1C (near-black text on yellow)
- --text-secondary: #5B5B5B (muted gray for supporting text)
- --white: #FFFFFF
- --nav-blue: #1E3E8A to #2F62F1 gradient family observed on some right-side cards (estimate primary #2F62F1)
- --accent-green: #21C17A (chips/buttons in UI shots)
- --accent-orange: #FF8A00 (sale tag)
- --badge-gray: #F3F4F6 (pills/backgrounds)
Exact hexes should be tuned against exports if needed.

Typography (approximations; YAML references typo_89/90/91/92)
- Headline (Grocery Shop): 80–96 px, weight 800 (extra-bold), line-height ~1.1, letter-spacing ~0
- Subheadline (Mobile App UI Kit): 36–48 px, weight 600 (semi-bold), line-height ~1.2
- Feature items (High Quality, etc.): 36–42 px, weight 700, line-height ~1.2
- Badge “16 Screens”: 36 px, semi-bold

Spacing and Layout
- Left column content margin from left edge: ~72 px
- Vertical spacing between headline and subtitle: ~12–16 px
- Spacing between feature rows: ~20–28 px
- Badge row offset below features: ~48 px
- Collage area begins roughly at canvas midline (x ≈ 780) and extends beyond right edge with overlapping cards at different y positions.
- Rounded corners: Cards in collage ~32 px radius; pills ~24–28 px; ellipse 182 px diameter.

Layout Method Recommendation
- Use CSS Grid for top-level 2-column composition (left hero, right collage), with fixed left width (~780 px) and flexible right.
- Inside left, use flex (column) for headline-subtitle and feature list, then a horizontal layout for the badge row.
- For collage, use absolute positioning within a relative container to place each card at exact px coordinates (to match Figma).

Interactive/Media Types
- All right-side elements are images (mobile screenshots) placed as non-interactive in this landing cover.
- Feature list items are static text blocks.
- Figma logo badge is a decorative element.

Image Assets and Paths (to use verbatim)
- /assets/figmaimages/figma_image_33438_271.png (root frame export)
- /assets/figmaimages/figma_image_33438_272.png
- /assets/figmaimages/figma_image_33438_273.png
- /assets/figmaimages/figma_image_33438_274.png
- /assets/figmaimages/figma_image_33438_275.png
- /assets/figmaimages/figma_image_33438_276.png
- /assets/figmaimages/figma_image_33438_300.png
- /assets/figmaimages/figma_image_33438_308.png
- /assets/figmaimages/figma_image_33438_311.png
- /assets/figmaimages/figma_image_33438_323.png
- /assets/figmaimages/figma_image_33438_324.png
- /assets/figmaimages/figma_image_33438_325.png
- /assets/figmaimages/figma_image_33438_318.svg

Accessibility Notes
- Provide alt text for decorative vs. informative images:
  - Decorative collage screenshots: empty alt "" if purely decorative.
  - Descriptive alt for “Grocery Shop app screens collage” where grouped.
- Ensure contrast of text on yellow background: prefer near-black #1C1C1C.

Responsive Hints
- ≥1440 px width: two-column as designed (left fixed ~780 px, right flexible).
- 1024–1439 px: reduce collage scale to 0.85 and limit overflow.
- ≤1023 px: stack vertically (hero first, collage below), center-align hero texts; scale collage to width 100%, maintain aspect via transform scale and fixed relative container height.

Element-by-Element Placement Guide (right collage; relative container positioned at left edge ~780 px)
- Place absolutely using the YAML coordinates supplied (x,y,width,height) inside a container sized to the root frame (2340x1560), offset the container so that left column aligns to 0–780 region, then use exact px for accuracy.

End of notes.
