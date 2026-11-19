# Witcraft

**Good ideas deserve thoughtful engineering.**

Witcraft is an independent digital engineering portfolio exploring considered websites, intuitive interfaces and reliable web applications.

Website: https://witcraft.me

## Stack
- Next.js 16 App Router
- React 19
- TypeScript 6
- Tailwind CSS 4
- Hugeicons (React renderer + free icon pack)
- CSS-driven visual system

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Scripts
- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript checks

## Project structure
```text
src/
  app/          App Router pages and metadata routes
  components/   Layout, project and section components
  lib/          Typed content and site configuration
```

Project content lives in `src/lib/projects.ts`. Every case study identifies its current status: in development, open source or concept. The CSS-built project visuals are illustrative placeholders; replace them with verified project screenshots before presenting them as actual product interfaces.

## Portfolio-only release
This repository implements a portfolio and project showcase only:
- No client inquiry or lead-generation forms
- No booking or paid consultation functionality
- No pricing or payment integrations
- No commercial engagement workflow

Commercial features must remain disabled until any required departmental clearance has been obtained. This technical configuration is not a legal determination or an exemption from applicable service conduct rules.

## Deployment
Import this repository into Vercel. Configure `witcraft.me` after verifying deployment and DNS settings.

## Content integrity
Update project descriptions, links and outcomes only when they accurately reflect the current implementation. Do not publish confidential employer or client information.

Built with care.
