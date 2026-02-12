# WEID Immobilien — Website Wireframe Brief

## Project Setup
Create a Next.js 15 app with Tailwind CSS and shadcn/ui components.

Use the Vercel frontend design skill:
```
npx -y @anthropic-ai/claude-code-skill@latest frontend-design
```

## Design System (from Styleguide)

### Colors
```css
--noir: #1A1A1A          /* Primary text, headlines */
--ivory: #F5F0EA         /* Primary background */
--warm-sand: #C8B9A5     /* Secondary background, dividers */
--parchment: #E8E0D4     /* Cards, input fields */
--taupe: #9A8A78         /* Subtext, disabled states */
--espresso: #5C4A3A      /* Accents, hover states */
--sage: #8A9A7E          /* Success, sparse accents */
```

### Typography
- **Display/Headlines:** Cormorant Garamond (Google Fonts) — Light/Regular, editorial
- **Body:** Inter (Google Fonts) — Clean, readable
- **Labels/Nav:** Inter, Medium, Uppercase, letter-spacing: 0.08em

### Typography Scale (Desktop)
- Hero: 72-120px, Light, line-height: 0.9-1.0
- H1: 48-64px
- H2: 32-40px
- Body: 16-17px, line-height: 1.65

## Sections to Build (from Moodboard)

### 1. Hero Section
Full-width image background with large white typography overlay.
Reference: "Echoes of Elegance: Restoring Parisian Grandeur, One Apartment at a Time"
- Full viewport height
- Warm architectural/interior photo (Unsplash)
- Large serif headline, white text
- Subtle scroll indicator

### 2. Corner Text Section
White/Ivory background section with:
- Words positioned in corners of the section
- Centered paragraph text
- Horizontal line below
- Asymmetric but balanced layout
Reference: The editorial layouts in moodboard with text in corners

### 3. Image Carousel / Gallery
- Large center image
- Peek of next image on the right
- Text/caption on the left side
- Smooth transitions
Reference: "03 Panel & QA" style from moodboard

### 4. Feature Grid
Asymmetric grid with:
- Large image taking 2/3 width
- Smaller images stacked
- Text overlays
Reference: The "Digital Invites Vol. 2" layout

### 5. CTA Section
- Dark (Noir) background
- Large white serif headline
- Minimal button (outlined or solid)
Reference: "ARCHITECTED TO STAND ALONE" dark section

### 6. Footer
- Noir background
- Ivory text
- Minimal link structure
- No clutter

## UI Components Needed
- Button (Primary: Noir bg, Ivory text / Secondary: outlined)
- Navigation (uppercase, spaced letters)
- Card (Parchment bg, no border, sharp corners)
- Input fields (bottom-border only style)

## Image Sources
Use Unsplash for placeholder images:
- Warm, editorial architecture/interior photography
- Soft natural lighting
- Muted, warm tones
- Focus on materials (wood, stone, textile)

## Technical Requirements
- Mobile responsive
- Smooth scroll animations (subtle fade-in from bottom)
- No bounce effects or flashy animations
- Sharp corners (0-4px radius max)
- Generous whitespace (8px base unit)

## Don'ts
- No bright/neon colors
- No rounded corners > 4px
- No drop shadows
- No generic stock photo aesthetic
- No decorative icons
- No underlined links
