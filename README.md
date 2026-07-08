# Personal Website — 3D Radial Graph

**Live at:** https://syedmasrurahmed.com

An interactive 3D portfolio for **Syed Masrur Ahmed**, built as a navigable radial graph in the browser. It exists to present projects, experience, and education as an explorable space rather than a scrolling page.

## Overview

The site renders a 3D graph where nodes represent portfolio content. Clicking a category node flies the camera to it and reveals its children; clicking a leaf node navigates to its detail page.

- **Root node** — center of the graph ("About Me" / Syed Masrur Ahmed)
- **Tier 1 nodes** — orbiting categories (Projects, Experience, Education)
- **Tier 2 nodes** — individual items (projects, jobs, academics)

## Tech Stack

| Layer | Library | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI | React | 19.2.3 |
| 3D Renderer | React Three Fiber + drei | fiber ^9.5 / drei ^10.7 |
| 3D Core | three.js | ^0.183 |
| State | Zustand | ^5.0 |
| Styling | Tailwind CSS | ^4 |

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other commands:

```bash
npm run build   # production build (also validates static params)
npm run start   # serve the production build
npm run lint    # ESLint (next core-web-vitals + typescript)
```

## Project Structure

```
src/
  app/
    page.tsx                    — mounts InfoPanel + the 3D Experience
    layout.tsx                  — fonts, metadata, analytics
    globals.css
    {projects,experience,education}/[slug]/page.tsx  — static detail routes
  components/
    Experience.tsx              — R3F canvas: RootView, Tier1View, CameraRig
    InfoPanel.tsx               — HTML overlay (bio + category blurbs)
    Breadcrumb.tsx              — path navigation (currently disabled in page.tsx)
    content/{projects,experience,education}/*.tsx    — per-item detail bodies
  data/graphData.ts             — GraphNode type + portfolioData (source of truth)
  store/graphStore.ts           — Zustand store (activePath, navigation)
  lib/spherical.ts              — node layout math
  hooks/useIsMobile.ts          — responsive FOV breakpoint
public/                          — screenshots (<category>/<slug>/) + resume PDF
```

## Adding Portfolio Content

Adding an item is a **three-file** change — see `CLAUDE.md` for the checklist:

1. Add a `GraphNode` to `src/data/graphData.ts`.
2. Create the detail component under `src/components/content/<category>/`.
3. Register it in the matching `src/app/<category>/[slug]/page.tsx` `pages` map.

## Documentation

- **`CLAUDE.md`** — execution protocol for AI agents (bootstrap, context economy, commit rule).
- **`ARCHITECTURE.md`** — system map, data flow, folder taxonomy.
- **`COMPONENTS.md`** — component interaction registry + node inventory.
- **`RULES.md`** — engineering philosophy and domain constraints.
