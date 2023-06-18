import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function BoxLoader() {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'rgb(92, 177, 239)'} />
    </mesh>
  );
}

export default function Loader() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0 }}>
      <ambientLight />
      <BoxLoader />
    </Canvas>
  );
}
