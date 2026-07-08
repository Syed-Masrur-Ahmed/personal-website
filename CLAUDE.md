# CLAUDE.md — Execution Protocol

Operating rules for any AI agent working in this repository. These override default behavior.

## Bootstrap Sequence

At the start of every session, orient before editing:

1. Read `ARCHITECTURE.md` (system map), `COMPONENTS.md` (interaction registry), and `RULES.md` (engineering philosophy).
2. Skim `src/data/graphData.ts` — it is the single source of truth for the graph. Every node, route, and detail page derives from it.
3. Only then read the specific files relevant to the task.

## Context Economy

- **Do not scan the whole workspace.** `node_modules/`, `.next/`, `package-lock.json` (~256 KB), and `public/` binary assets are noise — never read them to "understand" the project.
- Pull in only files relevant to the current atomic task. Trace from `graphData.ts` → the component that consumes the node → the route it links to.
- Prefer the dedicated Read/Grep/Glob tools over shelling out to `cat`/`find`.

## The Commit Rule

Before every `git commit`, sync the docs to reality:

- If you added, removed, or re-tiered a node in `src/data/graphData.ts`, update the node inventory in `ARCHITECTURE.md` and `COMPONENTS.md`.
- If you added a new content component or route, register it in `COMPONENTS.md`.
- If you changed the tech stack (`package.json` deps), update the stack tables in `README.md` and `ARCHITECTURE.md`.
- Run `npm run lint` and `npm run build` before committing non-trivial changes. Do not commit or push unless the user asks.

## Adding Portfolio Content (the common task)

Adding a project / experience / education item is a **three-file** operation. Missing any one leaves a dead node or a 404:

1. **`src/data/graphData.ts`** — add a `GraphNode` (`tier: 2`, correct `parentId`, and an `href`).
2. **`src/components/content/<category>/<Name>.tsx`** — create the detail component (copy an existing sibling for structure).
3. **`src/app/<category>/[slug]/page.tsx`** — import the component and register it in the `pages` map keyed by the node `id`.

Place images under `public/<category>/<slug>/` and reference them with `next/image`.
