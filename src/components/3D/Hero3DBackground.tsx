import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingShape } from './FloatingShapes';

export const Hero3DBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
        
        <Suspense fallback={null}>
          <FloatingShape position={[-3, 2, 0]} color="#D32F2F" speed={0.8} />
          <FloatingShape position={[3, -1, -2]} color="#FF6B6B" speed={1.2} />
          <FloatingShape position={[0, 1, -3]} color="#FFA726" speed={1} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};
