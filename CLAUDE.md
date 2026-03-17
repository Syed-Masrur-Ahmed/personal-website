# Project Brief: 3D Radial Portfolio Website

## Context
Act as an expert frontend engineer specializing in WebGL, Three.js, and React architecture. We are building a 3D interactive portfolio.

Instead of a standard scrolling page or a chaotic physics-based force graph, this is a **deterministic, static 3D radial graph**.
* The camera starts focused on a central "About Me" node.
* "Tier 1" category nodes (Projects, Experience, Education) orbit this center at a fixed distance.
* Clicking a Tier 1 node smoothly flies the camera to that node, making it the new visual center.
* Once the camera arrives, that category's specific "Tier 2" leaf nodes scale up and spawn radially around it.
* A 2D HTML UI overlay allows the user to click into the actual project pages or return to the center.

## Tech Stack
* **Framework:** Next.js (App Router)
* **3D Renderer:** React Three Fiber (R3F)
* **3D Helpers:** @react-three/drei (specifically `<Html>`, `<OrbitControls>`, `<Line>`)
* **Animation:** framer-motion & framer-motion-3d
* **State Management:** Zustand
* **Styling:** Tailwind CSS

---

## The Data Structure
Store in `src/data/graphData.ts`:

```typescript
export type GraphNode = {
  id: string;
  label: string;
  tier: 0 | 1 | 2;
  parentId: string | null;
  href?: string;
};

export const portfolioData: GraphNode[] = [
  // Root
  { id: "root", label: "Syed Masrur Ahmed", tier: 0, parentId: null },

  // Tier 1 Categories
  { id: "projects", label: "Projects", tier: 1, parentId: "root" },
  { id: "experience", label: "Experience", tier: 1, parentId: "root" },
  { id: "education", label: "Education", tier: 1, parentId: "root" },

  // Tier 2: Projects
  { id: "simreach", label: "SimReach", tier: 2, parentId: "projects", href: "/projects/simreach" },
  { id: "sodacan", label: "sodacan", tier: 2, parentId: "projects", href: "/projects/sodacan" },
  { id: "webcite", label: "WebCite", tier: 2, parentId: "projects", href: "/projects/webcite" },
  { id: "violens", label: "VioLens", tier: 2, parentId: "projects", href: "/projects/violens" },

  // Tier 2: Experience
  { id: "springmicro", label: "SpringMicro Software", tier: 2, parentId: "experience", href: "/experience/springmicro" },
  { id: "eskay", label: "ESKAY Science", tier: 2, parentId: "experience", href: "/experience/eskay" },

  // Tier 2: Education
  { id: "dartmouth", label: "Dartmouth College", tier: 2, parentId: "education", href: "/education/dartmouth" },
  { id: "willes", label: "Willes Little Flower", tier: 2, parentId: "education", href: "/education/willes" },
];
```

---

## Implementation Rules
Build in strict, isolated steps. **Do not jump ahead.**

### Step 1: Spherical Math & Basic Setup
1. Create `calculateSphericalPositions(count, radius)` utility returning `{ x, y, z }[]` evenly distributed on a sphere.
2. Set up a full-screen R3F `<Canvas>` on the main page.

### Step 2: Render Tier 0 & Tier 1
1. Render root node at `[0, 0, 0]`.
2. Filter Tier 1 nodes, position at `radius={10}` using the math utility.
3. Render as `<mesh><sphereGeometry /></mesh>`.
4. Add `<OrbitControls>` and ambient light.

### Step 3: State & Camera Transition
1. Zustand store `useGraphStore` tracking `activeNodeId` (default: "root").
2. `onClick` on meshes updates `activeNodeId`.
3. Animate camera to active Tier 1 node's position; update `OrbitControls` target.

### Step 4: Spawning Tier 2 & Connecting Lines
1. When Tier 1 is active, position Tier 2 children at `radius={5}` relative to active node.
2. Animate Tier 2 nodes scaling `0 → 1` on mount.
3. Draw `<Line>` connections: root↔Tier1, active Tier1↔its Tier2 children.

### Step 5: HTML Labels & Routing
1. Drei `<Html>` labels on every visible node.
2. "Back to Center" button outside canvas resets `activeNodeId` to "root".
3. Clicking Tier 2 node navigates to its `href` via Next.js `useRouter`.
