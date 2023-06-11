import React from 'react';
import { useGLTF } from '@react-three/drei';

const OfficeRoom = () => {
  const gltf = useGLTF('src/assets/room1/scene.gltf', true);

  return <primitive object={gltf.scene} dispose={null} />;
};

export default OfficeRoom;
