# ARCHITECTURE.md — System Map

## High-Level Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router, RSC) | 16.1.6 |
| Language | TypeScript (`strict`) | ^5 |
| UI runtime | React / React DOM | 19.2.3 |
| 3D renderer | React Three Fiber (R3F) | @react-three/fiber ^9.5 |
| 3D helpers | @react-three/drei (`TrackballControls`, `Line`, `Html`) | ^10.7 |
| 3D core | three.js | ^0.183 |
| Client state | Zustand | ^5.0 |
| Animation | Framer Motion | ^11.18 |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) | ^4 |
| Class utils | clsx + tailwind-merge (`cn`) | — |
| Analytics | @vercel/analytics | ^2.0 |

No database, no API layer, no auth. **All content is static**, compiled from TypeScript source.

## System Topology

This is a client-rendered single-page 3D experience wrapped in a statically-generated Next.js site.

```
graphData.ts (source of truth)
      │  GraphNode[]  { id, label, tier, parentId, href? }
      ▼
Zustand store (graphStore.ts) ── activePath: string[]  ── e.g. ['root'] → ['root','projects']
      │                                    │
      ▼                                    ▼
Experience.tsx (R3F <Canvas>)        InfoPanel.tsx (HTML overlay)
  ├─ RootView   (tier-0 + orbiting tier-1)   reads activePath, shows category blurb
  ├─ Tier1View  (tier-1 center + orbiting tier-2 leaves)
  └─ CameraRig  (lerps camera to the active node each frame)
      │
      │  leaf click → router.push(node.href)
      ▼
/projects/[slug] · /experience/[slug] · /education/[slug]
      └─ statically generated via generateStaticParams() from graphData.ts
      └─ renders a content component from src/components/content/**
```

**Two coordinated surfaces share one state atom:** the 3D canvas and the HTML `InfoPanel` both subscribe to `activePath` in the Zustand store. Navigation inside the graph mutates `activePath`; navigation to a *detail page* is a real route change via the Next.js router.

### Graph geometry (Experience.tsx)

- Tier-1 nodes are laid out on a circle in the XZ plane (`calculateCircularPositions`, `TIER1_RADIUS = 5`); tier-2 nodes on a smaller circle around their parent (`TIER2_RADIUS = 3.5`).
- Groups auto-rotate (`ORBIT_SPEED`); `RootView` samples live world positions of orbiting meshes so the camera can fly to where a node *actually is* at click time (see `nodeWorldPositions[node.id] = livePositions.current[i].clone()`).
- `CameraRig` lerps camera position and `TrackballControls` target toward the active node every frame and stops on user input or arrival (`ARRIVE_THRESHOLD`).

## Folder Taxonomy

| Path | Purpose |
|---|---|
| `src/app/` | Next.js App Router. `page.tsx` mounts the experience; `layout.tsx` sets fonts/metadata/analytics; `[slug]` dirs are the dynamic detail routes. |
| `src/components/` | Top-level UI: `Experience.tsx` (the canvas), `InfoPanel.tsx`, `Breadcrumb.tsx` (currently commented out of the page). |
| `src/components/content/` | Per-item detail pages, grouped by `projects/`, `experience/`, `education/`. One `.tsx` per portfolio item. |
| `src/data/` | `graphData.ts` — the `GraphNode` type and the `portfolioData` array. **Single source of truth.** |
| `src/store/` | `graphStore.ts` — Zustand store (`activePath`, `navigateTo`, `navigateToIndex`). |
| `src/lib/` | Pure utilities: `spherical.ts` (circular/Fibonacci-sphere layout math), `utils.ts` (`cn`). |
| `src/hooks/` | `useIsMobile.ts` — viewport width breakpoint (`< 768px`) used to widen the camera FOV. |
| `public/` | Static assets. Screenshots live under `public/<category>/<slug>/`; resume PDF at the root. |

## Rendering & Deployment

- Detail pages are **statically generated** — `generateStaticParams()` enumerates slugs from `portfolioData` at build time; unknown slugs `notFound()`.
- `Experience.tsx` and the client overlays are `'use client'`; the R3F canvas renders in the browser only.
- Hosted at `https://syedmasrurahmed.com` (Vercel, per the analytics integration).
