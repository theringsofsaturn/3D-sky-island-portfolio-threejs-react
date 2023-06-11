import React from 'react';
import { useGLTF } from '@react-three/drei';

const GamingRoom = () => {
  const gltf = useGLTF('src/assets/room2/scene.gltf', true);

  return (
    <primitive
      object={gltf.scene}
      position={[0, -5, 0]}
      scale={[10, 10, 10]}
      dispose={null}
      onClick={() => alert('Model clicked!')}
    />
  );
};

export default GamingRoom;
