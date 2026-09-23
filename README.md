# Aashay Kashyap — Portfolio

A premium, futuristic developer portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark cinematic theme** with glassmorphism UI inspired by Apple/iOS design
- **Interactive particle background** that reacts to cursor movement
- **Custom cursor glow** with smooth lerp interpolation
- **Floating glass pill navbar** with animated active-section indicator
- **Magnetic CTA buttons** with spring physics
- **Staggered scroll-reveal animations** on every section
- **Fully responsive** — cursor effects auto-disable on mobile
- **Accessible** — semantic HTML, ARIA labels, `prefers-reduced-motion` support
- **SEO optimized** — Open Graph, Twitter cards, meta descriptions

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

All personal data lives in a single file for easy editing:

```
src/data/site.ts
```

Update the following:

| Field | What to change |
|-------|---------------|
| `siteConfig.name` | Your name |
| `siteConfig.email` | Your email address |
| `siteConfig.socials` | GitHub, LinkedIn, Twitter URLs |
| `aboutText` | Your bio paragraphs |
| `skills` | Technologies you know |
| `projects` | Your real projects (title, description, tech, links) |
| `philosophy` | What you like building |

## Project Structure

```
src/
├── app/
│   ├── globals.css           # Design system & tokens
│   ├── layout.tsx            # Root layout + SEO metadata
│   └── page.tsx              # Main page
├── components/
│   ├── Background.tsx        # Canvas particle system
│   ├── CursorEffect.tsx      # Custom cursor glow
│   ├── Navbar.tsx            # Floating glass navbar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Skill cards
│   ├── Projects.tsx          # Project showcase
│   ├── Philosophy.tsx        # "What I Build" section
│   ├── Contact.tsx           # Contact CTA + socials
│   ├── Footer.tsx            # Footer
│   ├── GlassCard.tsx         # Reusable glass card
│   ├── SectionHeading.tsx    # Reusable section header
│   └── MagneticButton.tsx    # Magnetic hover wrapper
├── data/
│   └── site.ts               # ⭐ All personal data
└── hooks/
    └── use-utils.ts          # Custom React hooks
```

## Build

```bash
npm run build    # Production build
npm run start    # Serve production build
```

## Deploy

Deploy instantly on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

© 2026 Aashay Kashyap. All rights reserved.
