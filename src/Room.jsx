import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import useGUI from './useGUI';

const Room = ({ path, position, rotation, scale }) => {
  const gltf = useGLTF(path, true);
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current = gltf.scene;
  }, [gltf.scene]);

  useGUI(ref);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null}
    />
  );
};

export default Room;
