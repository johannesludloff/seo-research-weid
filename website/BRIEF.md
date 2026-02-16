# WEID Immobilien — Website Brief & Implementation Status

## Project Runtime & Tooling
**IMPORTANT:** This project uses the **Bun** runtime and package manager. 
- Use `bun install` for installing dependencies.
- Use `bun dev` to start the development server.
- **Do not use npm or pnpm.**

## Project Setup
- **Framework:** Next.js 16.1.6
- **Runtime:** Bun
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.x (using `@theme inline`)
- **Components:** shadcn/ui (radix-ui)
- **Icons:** lucide-react

## Design System (Actual Implementation)

### Colors
Colors are defined in `src/app/globals.css` using Tailwind 4 theme variables:
- `noir`: `#1A1A1A` (Primary text, headlines, dark backgrounds)
- `ivory`: `#F5F0EA` (Primary background)
- `warm-sand`: `#C8B9A5` (Secondary background, dividers)
- `parchment`: `#E8E0D4` (Cards, input fields)
- `taupe`: `#9A8A78` (Subtext, labels)
- `espresso`: `#5C4A3A` (Accents, hover states)
- `sage`: `#8A9A7E` (Success accents)

### Typography
- **Headlines:** `font-display` (Cormorant Garamond) — Light, Editorial feel.
- **Body:** `font-body` (Inter) — Clean, highly readable.
- **Navigation:** Uppercase, letter-spacing: `0.18em` (Tracking wide).

## Implemented UI Components
- **Reveal**: Intersection observer-based animation component (`src/components/reveal.tsx`).
- **ImageCarousel**: Property gallery component with navigation (`src/components/image-carousel.tsx`).
- **MobileNav**: Full-screen overlay menu for mobile devices.
- **LeadForm**: Inquiry form for property leads.
- **CookieBanner**: GDPR-compliant consent management.

## Homepage Implementation (Sections)

### 1. Hero Section
Full-width architectural background with large serif typography.
- "Echoes of Elegance: restoring spaces with calm precision."
- Subtle scroll indicator.

### 2. Corner Text / Statement Section
Asymmetric layout with text anchors in corners:
- "Ankauf", "Beratung", "Verkauf", "Vermietung".
- Centered brand statement on `parchment` background.

### 3. Portfolio Showcase
- Grid layout with property overview.
- Integrated `ImageCarousel`.
- Focus on curated, high-quality photography.

### 4. Feature Grid
- Asymmetric 12-column grid layout.
- Property cards for "Altbau", "Maisonette", and "Neubau".
- Interactive image overlays.

### 5. CTA Section
- High-contrast `noir` background.
- "Architected to stand alone."
- Large outlined button for contact conversion.

## Site Structure & Routes
- `/`: Home
- `/immobilien`: Property Listings (Portfolio)
- `/verkaufen`: Selling Process
- `/wertermittlung`: Valuation Tool
- `/ueber-uns`: About us
- `/kontakt`: Contact & Inquiries
- `/impressum`: Legal
- `/datenschutz`: Privacy

## Technical Requirements
- **Mobile Responsive:** Full support for all breakpoints.
- **Animations:** Subtle animations (`fade-up`) with 700ms duration and cubic-bezier easing.
- **Performance:** Optimized image loading via `next/image`.
- **Packaging:** Only Bun is supported for dependency management.
