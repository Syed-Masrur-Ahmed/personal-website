# Personal Website — 3D Radial Graph

**Live at:** https://syedmasrurahmed.com
An interactive 3D portfolio for **Syed Masrur Ahmed**, built as a navigable radial graph in the browser.

## Overview

The site renders a 3D graph where nodes represent portfolio content (Projects, Experience, Education). Clicking a category node flies the camera to it and reveals its children as leaf nodes. Clicking a leaf node navigates to its detail page.

- **Root node** — center of the graph (Syed Masrur Ahmed)
- **Tier 1 nodes** — category orbiters (Projects, Experience, Education)
- **Tier 2 nodes** — individual items (projects, jobs, schools)

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js (App Router) |
| 3D Renderer | React Three Fiber (R3F) |
| 3D Helpers | @react-three/drei |
| State | Zustand |
| Styling | Tailwind CSS |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    page.tsx          — mounts the canvas and breadcrumb
    layout.tsx
    globals.css
  components/
    Experience.tsx    — R3F canvas, Graph, CameraRig
    Breadcrumb.tsx    — HTML navigation overlay
  data/
    graphData.ts      — node definitions and GraphNode type
  lib/
    spherical.ts      — position calculation utilities
  store/
    graphStore.ts     — Zustand store (activePath, navigation actions)
```

## Navigation

- Click a **Tier 1** node to fly the camera to it and reveal its children
- Click a **Tier 2** node to navigate to its detail page
