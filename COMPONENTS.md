# COMPONENTS.md — Interaction Registry

How the pieces talk to each other. The contract everything shares is the `GraphNode` type and the Zustand `activePath`.

## Core Domains

### 1. Graph Navigation State
The spine. A single Zustand store holds `activePath: string[]` — an array of node ids from `root` to the current node.

| Concern | File |
|---|---|
| State + actions (`navigateTo`, `navigateToIndex`) | `src/store/graphStore.ts` |
| Data model (`GraphNode`, `portfolioData`) | `src/data/graphData.ts` |

- `navigateTo(id)` pushes a node onto the path (drill down).
- `navigateToIndex(i)` truncates the path to index `i` (go back / breadcrumb jump).
- **Interface pattern:** every consumer subscribes with a selector, e.g. `useGraphStore((s) => s.activePath)`.

### 2. 3D Graph Rendering
The interactive canvas.

| Role | File / Sub-component |
|---|---|
| Canvas + controls host | `Experience.tsx` → `Experience` (mounts `<Canvas>`, `TrackballControls`) |
| Depth-0 scene (root + orbiting categories) | `Experience.tsx` → `RootView` |
| Depth-1 scene (category + orbiting leaves) | `Experience.tsx` → `Tier1View` |
| Camera fly-to animation | `Experience.tsx` → `CameraRig` |
| 3D text labels (billboarded HTML) | `Experience.tsx` → `Label` (drei `<Html>`) |
| Layout math | `src/lib/spherical.ts` |
| Responsive FOV | `src/hooks/useIsMobile.ts` |

- **Logic vs UI vs Data:** logic = `CameraRig`/`RootView`/`Tier1View` frame loops; UI = R3F meshes + drei `Line`/`Html`; data = `portfolioData` filtered by `tier`/`parentId`.
- **Interface pattern:** `<Graph>` reads `activePath` and switches scene by `activeDepth`. Tier-1 clicks call `navigateTo`; tier-2 (leaf) clicks call `router.push(node.href)`.

### 3. HTML Overlay / Chrome
2D DOM layered over (and above) the canvas.

| Role | File | Talks to |
|---|---|---|
| Category header + bio/avatar/socials + Back button | `src/components/InfoPanel.tsx` | reads `activePath`, calls `navigateToIndex(0)` |
| Path breadcrumb (currently commented out in `page.tsx`) | `src/components/Breadcrumb.tsx` | reads `activePath`, calls `navigateToIndex(i)` |
| Page shell (scroll hints, layout) | `src/app/page.tsx` | mounts the above |

- `InfoPanel` keys its content by `activePath[1] ?? 'root'` and holds a `Record<string, ReactNode>` of category blurbs. Its `key={activeNodeId}` remounts on navigation to re-trigger transitions.

### 4. Detail Pages (Content)
Static, per-item pages reached by leaf navigation.

| Role | File |
|---|---|
| Dynamic routes | `src/app/{projects,experience,education}/[slug]/page.tsx` |
| Content bodies | `src/components/content/{projects,experience,education}/*.tsx` |

- **Interface pattern:** each route file holds a `pages: Record<slug, ReactNode>` map + `generateStaticParams()` derived from `portfolioData`. Unknown slug → `notFound()`.
- Content components are presentational (headings, tech-tag pills, `next/image` screenshots, live/source links via the `.live-link` class).

## Node Inventory (from `graphData.ts`)

| Tier | Nodes |
|---|---|
| 0 (root) | `root` — "About Me" |
| 1 (categories) | `projects`, `experience`, `education` |
| 2 · projects | `trippee`, `tiny-search-engine`, `sodacan`, `pixluv`, `maskproxy`, `info-butler-agent` |
| 2 · experience | `springmicro`, `eskay`, `mlresearch`, `dalilab` |
| 2 · education | `courses`, `honors`, `clubs` |

> Note: `personal-website-game` is registered in the route map and has content/assets but is currently commented out of `portfolioData`, so it is not shown in the graph.

## Adding / Changing a Node — the wiring checklist

1. `src/data/graphData.ts` — add/edit the `GraphNode` (`tier`, `parentId`, `href`).
2. `src/components/content/<category>/<Name>.tsx` — the detail component.
3. `src/app/<category>/[slug]/page.tsx` — register `<Name />` in the `pages` map under the node `id`.
4. Assets → `public/<category>/<slug>/`.

Skip any step and you get a clickable node that 404s, or a page with no route.
