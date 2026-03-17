'use client'

import { Canvas } from '@react-three/fiber'

export const Experience = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}
