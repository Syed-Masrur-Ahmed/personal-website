# RULES.md — Engineering Philosophy

## Digital Minimalism

- **No non-essential dependencies.** This is a static portfolio, not a platform. Before adding a package ask: can `three`/drei, a few lines of math, or the standard library do it? The current stack (Next + R3F + Zustand + Tailwind) is the whole budget.
- **No backend creep.** There is no database, API route, or auth — and there should not be. Content is TypeScript data compiled at build time. Keep it that way unless the user explicitly wants dynamic data.
- **Boring, predictable code.** Prefer plain functions and small components over clever abstractions. `spherical.ts` is pure math with no side effects — new utilities should match that bar.

## Single Source of Truth

- `src/data/graphData.ts` defines the graph. Routes, static params, breadcrumbs, and detail-page maps all derive from it. **Never hardcode a node list elsewhere** — filter `portfolioData`.
- A node's `id` is its key everywhere: the graph, the route slug, and the `pages`/`panels` record keys must all agree.

## Code Hygiene

- **TypeScript strict mode is on.** No `any` escapes, no `@ts-ignore` without a reason comment. The `GraphNode` type is the contract — extend it, don't bypass it.
- **Linting:** `npm run lint` (ESLint + `eslint-config-next` core-web-vitals & typescript) must pass. Justify any inline `eslint-disable` (e.g. the deliberate `no-img-element` for the animated GIF avatar in `InfoPanel.tsx`).
- **Naming:** PascalCase for components and files that export them (`InfoPanel.tsx`, `Trippee.tsx`); camelCase for hooks (`useIsMobile`), utils, and store fields; kebab-case for node ids / route slugs (`info-butler-agent`).
- **Imports:** use the `@/*` path alias (→ `src/*`), not deep relative paths.
- **Client boundary:** anything touching `window`, R3F, Zustand, or router hooks needs `'use client'`. Keep route `page.tsx` files as Server Components where possible (they only render static content + `generateStaticParams`).

## 3D / Rendering Constraints

- **Do work in `useFrame`, not React state, for per-frame updates.** Camera lerps, orbit rotation, and live position sampling use refs and the frame loop — never `setState` on every frame.
- **Respect the animation contract:** `CameraRig` must yield to the user — it stops on the controls' `start` event and on arrival. Don't reintroduce fights between auto-camera and `TrackballControls`.
- **Labels use drei `<Html>`** with `pointerEvents` gated on whether the label is clickable. Keep leaf labels interactive and static-center labels inert.

## Responsiveness & Accessibility

- Mobile is a first-class target: FOV widens under 768px (`useIsMobile`), and interaction hints swap copy (`scroll/pinch to zoom`). Test both.
- Detail pages scroll; the canvas page does not (`overflow: hidden` on the shell). Preserve that split.

## Domain Constraints

- **Content is the user's real résumé.** Do not invent, embellish, or alter portfolio facts, employers, or dates. When adding an item, use exactly what the user provides.
- **Keep the graph shallow.** The design is 3 tiers (root → category → item). Adding deeper nesting would break `Graph`'s depth switch and the camera logic — get explicit buy-in first.
- **Every leaf node must resolve.** A `tier: 2` node with an `href` must have both a registered content component and a matching `pages` entry, or it 404s.
