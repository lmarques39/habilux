# Habilux

A full real estate agency website — home, listings with filters/sort/pagination, property detail pages with an image lightbox, a services page, and a working contact form backed by a headless CMS.

**Live:** [habilux.vercel.app](https://habilux.vercel.app)

This was built for a real client engagement that's currently paused before launch. The property data structure and listing volume are real (137 imported listings), but since the site was never handed off to the client live, the property photos and the agency's contact details shown on the site are placeholders — not the real client's.

## What it does

- **Home** — hero, trust strip, services overview, featured listings
- **Propriedades** — Venda/Arrendamento and property-type filters, price sort, pagination, all synced to the URL
- **Property detail** — image gallery with a full-screen lightbox (click-to-zoom, arrow/keyboard nav), sticky contact sidebar, mobile sticky call-to-action bar
- **Contactos** — working contact form (email delivery via Resend), pre-fillable from a property listing via query param
- **Sobre / Serviços** — company story and service breakdown
- **/studio** — Sanity Studio embedded directly in the app for content editing

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Sanity CMS** — headless content for all 137 property listings, with ISR (`revalidate: 3600`) so new/edited listings appear without a redeploy
- **Resend** — contact form email delivery
- Component structure follows **Atomic Design** (atoms → molecules → organisms → templates)

## My role

Solo build, end to end: information architecture, visual design, the Sanity schema and data model, all frontend implementation, and the CMS ↔ site integration.

## Structure

```
src/
  app/
    (site)/           # public pages — home, propriedades, sobre, servicos, contactos, privacidade
    studio/           # embedded Sanity Studio route
    api/contact/      # contact form submission handler
  components/
    atoms/
    molecules/
    organisms/
    templates/
  sanity/
    schemaTypes/      # property document schema
    lib/               # Sanity client, GROQ queries, image URL helper
```

## Running locally

```bash
npm install
npm run dev
```

Requires `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in `.env.local` to fetch listings; `RESEND_API_KEY` and `CONTACT_EMAIL` to enable the contact form.
