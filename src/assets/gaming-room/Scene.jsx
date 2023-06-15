/*
Author: isipeassy (https://sketchfab.com/Isi-peassy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oriental-cyberpunk-room-2a42d577f03a43469d2e897a99920e67
Title: oriental cyberpunk room
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF(
    'src/assets/gaming-room/scene-transformed.glb'
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.blinn2SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.blinn3SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.blinn4SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.blinn5SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.lambert10SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.lambert17SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.lambert15SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.lambert20SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.lambert16SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.lambert23SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.lambert3SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.lambert8SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.lambert22SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.lambert26SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.lambert28SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={materials.lambert11SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.lambert12SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials.lambert19SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lambert21SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.lambert14SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.lambert13SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.lambert18SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.lambert24SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.lambert4SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.lambert9SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.lambert25SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.lambert27SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      <mesh
        geometry={nodes.Object_33.geometry}
        material={materials.lambert2SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
    </group>
  );
}

useGLTF.preload('src/assets/gaming-room/scene-transformed.glb');
