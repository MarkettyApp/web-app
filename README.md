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
cp .env.local.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Node ≥ 20.9** is required by Next.js 16. If you use `nvm`, run
> `nvm use 22` (or install with `nvm install 22`).

## Waitlist + admin setup

The "Get Early Access" CTA opens a modal (Name / Email / Country) that writes
into a Supabase `waitlist` table. A password-protected `/admin` page lets you
view and export submissions.

1. **Create a Supabase project** — https://supabase.com/dashboard
2. **Create the table** — open Supabase → SQL Editor → New query, paste
   [`supabase-schema.sql`](supabase-schema.sql), run it.
3. **Fill in `.env.local`** — copy from [`.env.local.example`](.env.local.example):
   - `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from
     Supabase → Project Settings → API.
   - `ADMIN_PASSWORD` — the password you'll use at `/admin`.
   - `ADMIN_SESSION_SECRET` — any long random string
     (e.g. `openssl rand -hex 32`).
4. Restart the dev server so the new env is picked up.
5. Visit `/admin`, sign in, and you'll see submissions with search + CSV export.

The service-role key is only ever used server-side (in
`src/lib/supabase.ts`, which is marked `import "server-only"`). It's never
exposed to the browser.

## Keeping Supabase awake

Supabase pauses free-tier projects after **7 days of no database activity**.
[`vercel.json`](vercel.json) registers a daily Vercel Cron job that hits
[`/api/ping`](src/app/api/ping/route.ts), which runs a cheap read against the
`waitlist` table — enough to reset Supabase's inactivity timer.

To enable it:

1. Add `CRON_SECRET` to your Vercel project env vars (Production + Preview +
   Development). Any long random string; `openssl rand -hex 32` works.
2. Deploy. Vercel provisions the cron automatically from `vercel.json` and
   attaches `Authorization: Bearer $CRON_SECRET` to every scheduled request.
3. Verify in the Vercel dashboard → Project → Cron Jobs.

Vercel Hobby allows daily crons; we schedule `0 3 * * *` (03:00 UTC). Manual
test locally:

```bash
curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/ping
# → { "ok": true, "pingedAt": "…", "waitlistCount": N }
```

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
    actions.ts                       # Server actions: joinWaitlist, admin login/logout
    components/
      SiteHeader.tsx                 # Sticky nav + mobile hamburger (client)
      EarlyAccessProvider.tsx        # Modal open-state context (client)
      EarlyAccessModal.tsx           # The Get Early Access modal (client)
      EarlyAccessButton.tsx          # CTA that opens the modal (client)
    admin/
      page.tsx                       # Password-gated waitlist dashboard
      LoginForm.tsx
      SubmissionsTable.tsx
    globals.css                      # Tailwind v4 import + brand tokens
    layout.tsx                       # Root layout — wraps children in EarlyAccessProvider
    page.tsx                         # Landing page (all marketing sections here)
  lib/
    env.ts                           # Server-only env reader
    supabase.ts                      # Server-only service-role client
    admin-auth.ts                    # Signed-cookie admin session
public/
  hero-phone.png                     # Hero phone mockup image
supabase-schema.sql                  # Waitlist table DDL
.env.local.example                   # Env template
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
