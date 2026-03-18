'use client'

import { Canvas } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import { portfolioData } from '@/data/graphData'
import { calculateCircularPositions } from '@/lib/spherical'

const tier1Nodes = portfolioData.filter((n) => n.tier === 1)
const tier1Positions = calculateCircularPositions(tier1Nodes.length, 5)

const Graph = () => {
  return (
    <>
      {/* Root node */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Tier 1 nodes */}
      {tier1Nodes.map((node, i) => {
        const { x, y, z } = tier1Positions[i]
        return (
          <mesh key={node.id} position={[x, y, z]}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
        )
      })}
    </>
  )
}

export const Experience = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Graph />
        <TrackballControls />
      </Canvas>
    </div>
  )
}
