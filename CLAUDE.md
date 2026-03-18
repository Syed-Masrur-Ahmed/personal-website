# Project Brief: 3D Radial Portfolio Website

## Context
Act as an expert frontend engineer specializing in WebGL, Three.js, and React architecture. We are building a 3D interactive portfolio for **Syed Masrur Ahmed**.

This is a **deterministic, static 3D radial graph** with path-based navigation:
* Camera starts looking at the central root node.
* Tier 1 category nodes (Projects, Experience, Education) orbit the root in a flat circle.
* Clicking a Tier 1 node flies the camera to it and makes it the visual center — root and other Tier 1 nodes are hidden.
* Tier 2 leaf nodes spawn radially around the active Tier 1 node.
* A breadcrumb at the bottom shows the navigation path and allows going back.

## Tech Stack
* **Framework:** Next.js (App Router)
* **3D Renderer:** React Three Fiber (R3F)
* **3D Helpers:** @react-three/drei (`<TrackballControls>`, `<Line>`)
* **State Management:** Zustand
* **Styling:** Tailwind CSS

> Note: `framer-motion-3d` is installed but has a peer dep conflict with R3F v9. It is not currently used — do not use it for animation. Use `useFrame` lerp instead.

---

## File Structure

```
src/
  app/
    page.tsx          — mounts <Experience /> and <Breadcrumb />
    layout.tsx
    globals.css       — black background, overflow hidden
  components/
    Experience.tsx    — R3F canvas, Graph, CameraRig
    Breadcrumb.tsx    — HTML breadcrumb overlay
  data/
    graphData.ts      — portfolioData array and GraphNode type
  lib/
    spherical.ts      — calculateSphericalPositions, calculateCircularPositions
  store/
    graphStore.ts     — Zustand store (activePath, navigateTo, navigateToIndex)
```

---

## The Data Structure (`src/data/graphData.ts`)

```typescript
export type GraphNode = {
  id: string;
  label: string;
  tier: 0 | 1 | 2;
  parentId: string | null;
  href?: string;
};

export const portfolioData: GraphNode[] = [
  { id: "root", label: "Syed Masrur Ahmed", tier: 0, parentId: null },

  { id: "projects", label: "Projects", tier: 1, parentId: "root" },
  { id: "experience", label: "Experience", tier: 1, parentId: "root" },
  { id: "education", label: "Education", tier: 1, parentId: "root" },

  { id: "simreach", label: "SimReach", tier: 2, parentId: "projects", href: "/projects/simreach" },
  { id: "sodacan", label: "sodacan", tier: 2, parentId: "projects", href: "/projects/sodacan" },
  { id: "webcite", label: "WebCite", tier: 2, parentId: "projects", href: "/projects/webcite" },
  { id: "violens", label: "VioLens", tier: 2, parentId: "projects", href: "/projects/violens" },

  { id: "springmicro", label: "SpringMicro Software", tier: 2, parentId: "experience", href: "/experience/springmicro" },
  { id: "eskay", label: "ESKAY Science", tier: 2, parentId: "experience", href: "/experience/eskay" },

  { id: "dartmouth", label: "Dartmouth College", tier: 2, parentId: "education", href: "/education/dartmouth" },
  { id: "willes", label: "Willes Little Flower", tier: 2, parentId: "education", href: "/education/willes" },
];
```

---

## State (`src/store/graphStore.ts`)

```typescript
activePath: string[]   // e.g. ['root'] | ['root', 'projects'] | ['root', 'projects', 'simreach']
navigateTo(id)         // push id onto activePath
navigateToIndex(i)     // slice activePath to depth i+1 (used by breadcrumb)
```

`activeNodeId` = `activePath[activePath.length - 1]`
`activeDepth` = `activePath.length - 1` (0 = root view, 1 = tier1 view)

---

## World Positions (`src/components/Experience.tsx`)

All positions are pre-computed at module level (not in state):

```
TIER1_RADIUS = 5   — circular in XZ plane around root
TIER2_RADIUS = 3.5 — circular in XZ plane around their tier 1 parent
```

`nodeWorldPositions: Record<string, THREE.Vector3>` — contains positions for all nodes (tier 0, 1, and 2).

Tier 1 uses `calculateCircularPositions` (equal angular spacing — NOT the Fibonacci sphere, which gave uneven results for small counts).

---

## Camera (`CameraRig` in `Experience.tsx`)

* Uses `useFrame` to lerp `camera.position` and `controls.target` toward the active node.
* `animating` ref is set `true` when `activeNodeId` changes, `false` when camera arrives (`ARRIVE_THRESHOLD = 0.05`).
* `TrackballControls` is **always enabled** — never disabled during animation. Disabling and re-enabling caused the camera to jump due to stale internal `_eye` state.
* Camera position target = `nodePos.normalize() * (nodePos.length() + CAM_OFFSET)` where `CAM_OFFSET = 14`. Root home = `[0, 0, 18]`.

---

## Graph Rendering (`Graph` in `Experience.tsx`)

**Depth 0 (root active):**
- White sphere at `[0,0,0]` (clickable → navigateTo('root') re-triggers animation)
- Blue spheres for Tier 1 nodes (clickable → navigateTo(id))
- Dotted `<Line>` edges from root to each Tier 1 node

**Depth 1 (Tier 1 active):**
- Blue sphere for the active Tier 1 node (not clickable)
- Purple/indigo spheres for its Tier 2 children (clickable)
- Dotted `<Line>` edges from Tier 1 to each Tier 2 child
- Root and other Tier 1 nodes are hidden

---

## Breadcrumb (`src/components/Breadcrumb.tsx`)

HTML overlay at `bottom-8`, centered. Shows the full `activePath` as clickable labels separated by `→`. Non-active items call `navigateToIndex(i)` on click. Always visible.

---

## Remaining Work

### Step 5: Labels & Routing
1. Add Drei `<Html>` labels on every visible node so text is crisp and readable.
2. When a Tier 2 node is clicked, use Next.js `useRouter` to navigate to its `href`.
3. Build out the individual project/experience/education pages at those routes.
