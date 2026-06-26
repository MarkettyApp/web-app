# Marketty App — Website

Marketing landing page for **Marketty**, a trusted commerce ecosystem connecting creators, businesses, manufacturers and communities.

> "Commerce already happens on social media. MARKETTY simply structures it."

Built with the App Router on Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Stack

- **Next.js** `16.2.9` (App Router, Turbopack)
- **React** `19.2.4`
- **TypeScript** `^5`
- **Tailwind CSS** `^4` (via `@tailwindcss/postcss`)
- **ESLint** `^9` (`eslint-config-next`)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the dev server (Turbopack) on port 3000 |
| `npm run build` | Produce an optimized production build         |
| `npm run start` | Serve the production build                    |
| `npm run lint`  | Run ESLint                                    |

## Project structure

```
src/
  app/
    components/
      SiteHeader.tsx     # Client component — sticky nav + mobile hamburger
    globals.css          # Tailwind v4 import + brand color tokens
    layout.tsx           # Root layout, fonts, metadata
    page.tsx             # The landing page (all sections live here)
public/
  hero-phone.png         # Hero phone mockup image
```

All landing-page sections (hero, problem, ecosystem, trust, opportunities,
choose-your-path, future-of-commerce, timeline, beyond, signup, footer) are
defined as local components inside [`src/app/page.tsx`](src/app/page.tsx).

## Brand tokens

Colors and theme tokens are declared in [`src/app/globals.css`](src/app/globals.css)
and exposed to Tailwind via `@theme inline`. Use them as Tailwind classes:

- `bg-brand-500`, `text-brand-700`, `ring-brand-200`, etc. (`brand-50` → `brand-950`)
- `bg-surface-soft`, `border-border-soft`, `text-muted`

## Swapping the hero image

The hero phone uses `/public/hero-phone.png`, rendered via `next/image` in
`HeroPhone` (see [`src/app/page.tsx`](src/app/page.tsx)). Replace the file in
`public/` with the same name to swap it out.

## Responsive notes

- Container: `max-w-7xl` (1280px) with responsive padding
- Mobile nav: hamburger toggle (in `SiteHeader.tsx`)
- Timeline switches from centered zigzag to a left rail under `md`
- Signup phones stack to a single inline phone under `md`

## Important

This project relies on Next.js 16 conventions. Some APIs and file structure
differ from earlier versions — see [`AGENTS.md`](AGENTS.md) and the bundled
docs under `node_modules/next/dist/docs/` before making structural changes.

## Deploy

The easiest path is [Vercel](https://vercel.com/new). The build command is
`npm run build` and the output is fully static (this site has no API routes
or server-only data fetching at the moment).
