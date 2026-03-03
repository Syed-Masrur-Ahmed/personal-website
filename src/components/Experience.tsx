'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion-3d'

const Box = () => {
  return (
    <motion.mesh
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      whileHover={{ scale: 1.2, rotateY: Math.PI / 4 }}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </motion.mesh>
  )
}

export const Experience = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
        <Environment preset="city" />
        
        <Box />
        
        <ContactShadows 
          position={[0, -1, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={1} 
        />
        
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
