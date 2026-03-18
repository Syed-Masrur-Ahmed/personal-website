'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TrackballControls, Line } from '@react-three/drei'
import * as THREE from 'three'
import { portfolioData } from '@/data/graphData'
import { calculateCircularPositions } from '@/lib/spherical'
import { useGraphStore } from '@/store/graphStore'

// ─── World positions ──────────────────────────────────────────────────────────

const TIER1_RADIUS = 5
const TIER2_RADIUS = 3.5

const tier1Nodes = portfolioData.filter((n) => n.tier === 1)
const tier1CircPositions = calculateCircularPositions(tier1Nodes.length, TIER1_RADIUS)

const nodeWorldPositions: Record<string, THREE.Vector3> = {
  root: new THREE.Vector3(0, 0, 0),
  ...Object.fromEntries(
    tier1Nodes.map((n, i) => [
      n.id,
      new THREE.Vector3(tier1CircPositions[i].x, tier1CircPositions[i].y, tier1CircPositions[i].z),
    ])
  ),
}

// Tier 2 — circular around their tier 1 parent
tier1Nodes.forEach((t1) => {
  const parentPos = nodeWorldPositions[t1.id]
  const children = portfolioData.filter((n) => n.parentId === t1.id)
  const positions = calculateCircularPositions(children.length, TIER2_RADIUS)
  children.forEach((child, j) => {
    nodeWorldPositions[child.id] = new THREE.Vector3(
      parentPos.x + positions[j].x,
      parentPos.y + positions[j].y,
      parentPos.z + positions[j].z,
    )
  })
})

// ─── Camera rig ───────────────────────────────────────────────────────────────

const CAM_OFFSET = 14
const ARRIVE_THRESHOLD = 0.05

function getCameraPosition(nodeId: string): THREE.Vector3 {
  if (nodeId === 'root') return new THREE.Vector3(0, 0, 18)
  const pos = nodeWorldPositions[nodeId]
  return pos.clone().normalize().multiplyScalar(pos.length() + CAM_OFFSET)
}

type ControlsRef = React.RefObject<InstanceType<typeof TrackballControls> | null>

const CameraRig = ({ controlsRef }: { controlsRef: ControlsRef }) => {
  const activePath = useGraphStore((s) => s.activePath)
  const activeNodeId = activePath[activePath.length - 1]

  const animating = useRef(false)
  const prevNodeId = useRef(activeNodeId)

  const targetCamPos = useMemo(() => getCameraPosition(activeNodeId), [activeNodeId])
  const targetLookAt = useMemo(
    () => nodeWorldPositions[activeNodeId]?.clone() ?? new THREE.Vector3(),
    [activeNodeId]
  )

  if (prevNodeId.current !== activeNodeId) {
    prevNodeId.current = activeNodeId
    animating.current = true
  }

  useFrame(({ camera }) => {
    if (!animating.current) return
    camera.position.lerp(targetCamPos, 0.06)
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt, 0.06)
    }
    if (camera.position.distanceTo(targetCamPos) < ARRIVE_THRESHOLD) {
      camera.position.copy(targetCamPos)
      if (controlsRef.current) controlsRef.current.target.copy(targetLookAt)
      animating.current = false
    }
  })

  return null
}

// ─── Graph ────────────────────────────────────────────────────────────────────

const hover = (on: boolean) => () => { document.body.style.cursor = on ? 'pointer' : 'default' }

const Graph = () => {
  const { activePath, navigateTo } = useGraphStore()
  const activeDepth = activePath.length - 1  // 0 = root view, 1 = tier1 view
  const activeTier1Id = activePath[1] ?? null

  // ── Root view (depth 0) ──────────────────────────────────────────────────
  if (activeDepth === 0) {
    return (
      <>
        {/* Root node */}
        <mesh
          position={[0, 0, 0]}
          onClick={(e) => { e.stopPropagation(); navigateTo('root') }}
          onPointerOver={hover(true)}
          onPointerOut={hover(false)}
        >
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Root → Tier 1 edges */}
        {tier1Nodes.map((node, i) => {
          const { x, y, z } = tier1CircPositions[i]
          return (
            <Line
              key={`edge-${node.id}`}
              points={[[0, 0, 0], [x, y, z]]}
              color="#555555"
              lineWidth={1}
              dashed
              dashSize={0.2}
              gapSize={0.2}
            />
          )
        })}

        {/* Tier 1 nodes */}
        {tier1Nodes.map((node, i) => {
          const { x, y, z } = tier1CircPositions[i]
          return (
            <mesh
              key={node.id}
              position={[x, y, z]}
              onClick={(e) => { e.stopPropagation(); navigateTo(node.id) }}
              onPointerOver={hover(true)}
              onPointerOut={hover(false)}
            >
              <sphereGeometry args={[0.4, 32, 32]} />
              <meshBasicMaterial color="#3b82f6" />
            </mesh>
          )
        })}
      </>
    )
  }

  // ── Tier 1 view (depth 1) ────────────────────────────────────────────────
  if (activeDepth === 1 && activeTier1Id) {
    const t1Pos = nodeWorldPositions[activeTier1Id]
    const tier2Children = portfolioData.filter((n) => n.parentId === activeTier1Id)

    return (
      <>
        {/* Active tier 1 — visual center, not clickable */}
        <mesh position={t1Pos.toArray()}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>

        {/* Tier 1 → Tier 2 edges */}
        {tier2Children.map((node) => {
          const pos = nodeWorldPositions[node.id]
          return (
            <Line
              key={`edge-${node.id}`}
              points={[t1Pos.toArray(), pos.toArray()]}
              color="#555555"
              lineWidth={1}
              dashed
              dashSize={0.2}
              gapSize={0.2}
            />
          )
        })}

        {/* Tier 2 nodes */}
        {tier2Children.map((node) => {
          const pos = nodeWorldPositions[node.id]
          return (
            <mesh
              key={node.id}
              position={pos.toArray()}
              onClick={(e) => { e.stopPropagation(); navigateTo(node.id) }}
              onPointerOver={hover(true)}
              onPointerOut={hover(false)}
            >
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshBasicMaterial color="#818cf8" />
            </mesh>
          )
        })}
      </>
    )
  }

  return null
}

// ─── Root export ──────────────────────────────────────────────────────────────

export const Experience = () => {
  const controlsRef = useRef<InstanceType<typeof TrackballControls> | null>(null)

  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 18], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <Graph />
        <CameraRig controlsRef={controlsRef} />
        <TrackballControls ref={controlsRef} />
      </Canvas>
    </div>
  )
}
