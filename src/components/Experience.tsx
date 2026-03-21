'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TrackballControls, Line, Html } from '@react-three/drei'
import type { TrackballControls as TrackballControlsImpl } from 'three-stdlib'
import { useRouter } from 'next/navigation'
import * as THREE from 'three'
import { portfolioData } from '@/data/graphData'
import { calculateCircularPositions } from '@/lib/spherical'
import { useGraphStore } from '@/store/graphStore'
import { useIsMobile } from '@/hooks/useIsMobile'

// ─── World positions ──────────────────────────────────────────────────────────

const TIER1_RADIUS = 5
const TIER2_RADIUS = 3.5
const ORBIT_SPEED = 0.15

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

// ─── Camera rig ───────────────────────────────────────────────────────────────

const CAM_OFFSET = 10
const ARRIVE_THRESHOLD = 0.05

function getCameraPosition(nodeId: string): THREE.Vector3 {
  if (nodeId === 'root') return new THREE.Vector3(0, 0, 13)
  const pos = nodeWorldPositions[nodeId]
  return pos.clone().normalize().multiplyScalar(pos.length() + CAM_OFFSET)
}

type ControlsRef = React.RefObject<TrackballControlsImpl | null>

const CameraRig = ({ controlsRef }: { controlsRef: ControlsRef }) => {
  const activePath = useGraphStore((s) => s.activePath)
  const activeNodeId = activePath[activePath.length - 1]

  const animating = useRef(true)
  const prevNodeId = useRef(activeNodeId)
  const targetCamPos = useRef(getCameraPosition(activeNodeId))
  const targetLookAt = useRef(nodeWorldPositions[activeNodeId]?.clone() ?? new THREE.Vector3())

  if (prevNodeId.current !== activeNodeId) {
    prevNodeId.current = activeNodeId
    targetCamPos.current = getCameraPosition(activeNodeId)
    targetLookAt.current = nodeWorldPositions[activeNodeId]?.clone() ?? new THREE.Vector3()
    animating.current = true
  }

  // Stop animation immediately when user grabs the controls
  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return
    const stopAnim = () => { animating.current = false }
    controls.addEventListener('start', stopAnim)
    return () => controls.removeEventListener('start', stopAnim)
  }, [controlsRef])

  useFrame(({ camera }) => {
    if (!animating.current) return
    camera.position.lerp(targetCamPos.current, 0.03)
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt.current, 0.03)
    }
    if (camera.position.distanceTo(targetCamPos.current) < ARRIVE_THRESHOLD) {
      camera.position.copy(targetCamPos.current)
      if (controlsRef.current) controlsRef.current.target.copy(targetLookAt.current)
      animating.current = false
    }
  })

  return null
}

// ─── Label ────────────────────────────────────────────────────────────────────

type LabelProps = {
  text: string
  onClick?: () => void
}

const Label = ({ text, onClick }: LabelProps) => (
  <Html center distanceFactor={10} zIndexRange={[0, 0]}>
    <span
      onClick={onClick}
      onTouchStart={(e) => e.stopPropagation()}
      onMouseEnter={() => { if (onClick) document.body.style.cursor = 'pointer' }}
      onMouseLeave={() => { document.body.style.cursor = 'default' }}
      style={{
        color: 'white',
        fontSize: '12px',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        letterSpacing: '0.05em',
        pointerEvents: onClick ? 'auto' : 'none',
        cursor: onClick ? 'pointer' : 'default',
        padding: '8px 12px',
        display: 'inline-block',
      }}
    >
      {text}
    </span>
  </Html>
)

// ─── Root view ────────────────────────────────────────────────────────────────

const RootView = ({ navigateTo }: { navigateTo: (id: string) => void }) => {
  const groupRef = useRef<THREE.Group>(null)
  // Track live world positions of orbiting tier 1 meshes
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const livePositions = useRef<THREE.Vector3[]>(tier1Nodes.map(() => new THREE.Vector3()))

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * ORBIT_SPEED
    }
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) mesh.getWorldPosition(livePositions.current[i])
    })
  })

  return (
    <>
      {/* Root node */}
      <group position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial color="#444444" />
        </mesh>
        <Label text="About Me" onClick={() => navigateTo('root')} />
      </group>

      {/* Orbiting tier 1 group */}
      <group ref={groupRef}>
        {tier1Nodes.map((node, i) => {
          const { x, y, z } = tier1CircPositions[i]
          return (
            <group key={node.id}>
              <Line
                points={[[0, 0, 0], [x, y, z]]}
                color="#555555"
                lineWidth={1}
                dashed
                dashSize={0.2}
                gapSize={0.2}
              />
              <mesh
                position={[x, y, z]}
                ref={(el) => { meshRefs.current[i] = el }}
              >
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshBasicMaterial color="#666666" />
                <Label
                  text={node.label}
                  onClick={() => {
                    nodeWorldPositions[node.id] = livePositions.current[i].clone()
                    navigateTo(node.id)
                  }}
                />
              </mesh>
            </group>
          )
        })}
      </group>
    </>
  )
}

// ─── Tier 1 view ──────────────────────────────────────────────────────────────

const Tier1View = ({ activeTier1Id }: { activeTier1Id: string }) => {
  const router = useRouter()
  const groupRef = useRef<THREE.Group>(null)

  const t1Node = portfolioData.find((n) => n.id === activeTier1Id)!
  const t1Pos = nodeWorldPositions[activeTier1Id]
  const tier2Children = portfolioData.filter((n) => n.parentId === activeTier1Id)
  const tier2Positions = calculateCircularPositions(tier2Children.length, TIER2_RADIUS)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * ORBIT_SPEED
    }
  })

  return (
    <>
      {/* Active tier 1 — static center, not clickable */}
      <mesh position={t1Pos.toArray()}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#444444" />
        <Label text={t1Node.label} />
      </mesh>

      {/* Orbiting tier 2 group */}
      <group position={t1Pos.toArray()} ref={groupRef}>
        {tier2Children.map((node, i) => {
          const { x, y, z } = tier2Positions[i]
          return (
            <group key={node.id}>
              <Line
                points={[[0, 0, 0], [x, y, z]]}
                color="#555555"
                lineWidth={1}
                dashed
                dashSize={0.2}
                gapSize={0.2}
              />
              <mesh position={[x, y, z]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshBasicMaterial color="#666666" />
                <Label
                  text={node.label}
                  onClick={() => { if (node.href) router.push(node.href) }}
                />
              </mesh>
            </group>
          )
        })}
      </group>
    </>
  )
}

// ─── Graph ────────────────────────────────────────────────────────────────────

const Graph = () => {
  const { activePath, navigateTo } = useGraphStore()
  const activeDepth = activePath.length - 1
  const activeTier1Id = activePath[1] ?? null

  if (activeDepth === 0) return <RootView navigateTo={navigateTo} />
  if (activeDepth === 1 && activeTier1Id) return <Tier1View activeTier1Id={activeTier1Id} />
  return null
}

// ─── Root export ──────────────────────────────────────────────────────────────

export const Experience = () => {
  const controlsRef = useRef<TrackballControlsImpl | null>(null)
  const isMobile = useIsMobile()

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 13], fov: isMobile ? 75 : 50 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.6} />
        <Graph />
        <CameraRig controlsRef={controlsRef} />
        <TrackballControls ref={controlsRef} />
      </Canvas>
    </div>
  )
}
