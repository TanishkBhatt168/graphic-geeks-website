import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { Mesh } from 'three';

function AnimatedGlobe() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2; // Slow rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1; // Gentle bob
    }
  });

  return (
    <group>
      {/* Main Globe */}
      <Sphere ref={meshRef} args={[2.5, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe={true}
          transparent={true}
          opacity={0.6}
        />
      </Sphere>
      
      {/* Inner Core */}
      <Sphere args={[1.8, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#38bdf8"
          transparent={true}
          opacity={0.3}
        />
      </Sphere>
      
      {/* Outer Ring */}
      <Sphere args={[3.2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0ea5e9"
          wireframe={true}
          transparent={true}
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
}

export function Globe3D() {
  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />
        
        <AnimatedGlobe />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}