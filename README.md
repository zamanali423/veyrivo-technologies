# Veyrivo Technologies

> We build modern software, AI-powered applications, intelligent chatbots,
> and automated business solutions that simplify complex operations and
> accelerate growth.

Production marketing site for Veyrivo Technologies  a Next.js 16 (App
Router) application with TypeScript, Tailwind CSS v4, server-rendered pages,
and Supabase-ready form storage.

## Stack

- **Next.js 16** (App Router, Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Zod**  server-side form validation
- **Supabase**  optional lead & subscriber storage (env-gated)
- **SMTP (Gmail)**  optional email notifications via nodemailer (env-gated)

## Getting started

```bash
npm install
cp .env.example .env.local   # add keys (all optional for local dev)
npm run dev                  # http://localhost:3000
```

Scripts:

| Command           | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the dev server             |
| `npm run build`   | Production build                 |
| `npm run start`   | Serve the production build       |
| `npm run lint`    | ESLint                           |
| `npm run og:image`| Regenerate `src/app/opengraph-image.png` |
| `npx tsc --noEmit`| Typecheck                        |

## Environment variables

See `.env.example`. All backend variables are optional  without them the
site runs fully, and form submissions are logged server-side instead of
persisted.

- `NEXT_PUBLIC_SITE_URL`  canonical site URL.
- `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`  enable lead storage (new-style `SUPABASE_SECRET_KEY` / `SUPABASE_DATABASE_URL` also supported).
- `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASSWORD`  enable email notifications (defaults to `smtp.gmail.com:587`; for Gmail use an App Password).
- `NEXT_PUBLIC_GA_ID`  Google Analytics 4 measurement ID.

### Supabase table setup

Create two tables with Row Level Security **disabled for service-role
writes only** (the service role key bypasses RLS):

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  company text,
  service text,
  budget text,
  timeline text,
  message text not null,
  source text,
  created_at timestamptz not null default now()
);

create table newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text,
  created_at timestamptz not null default now()
);
```

## Architecture

```
src/
├── app/
│   ├── (marketing)/        # All public pages (route group)
│   ├── api/contact         # Contact form: Zod + rate limit + honeypot
│   ├── api/newsletter      # Newsletter: Zod + rate limit + honeypot
│   ├── layout.tsx          # Fonts, metadata, viewport, JSON-LD
│   ├── sitemap.ts          # Generated sitemap.xml
│   ├── robots.ts           # Generated robots.txt
│   └── not-found.tsx
├── components/
│   ├── layout/             # Header (sticky + mobile slide-over), footer
│   ├── sections/           # Homepage sections incl. hero dashboard visual
│   ├── ui/                 # Button, Eyebrow, Container, etc.
│   └── forms/              # Client-side contact & newsletter forms
├── content/                # Services, solutions, industries, insights, work
└── lib/                    # Validation, rate limiting, db, email, seo
```

Design tokens (colors, fonts, utilities) live in `src/app/globals.css`.

## Security notes

- Every form request is validated server-side with Zod  never trust client
  validation alone.
- In-memory rate limiting protects both endpoints (per IP).
- Honeypot fields silently fake success to bots.
- Security headers set in `next.config.ts`.
- Form failures never surface storage/email errors to visitors.
