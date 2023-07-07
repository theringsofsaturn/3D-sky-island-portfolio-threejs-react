import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import scenePath from "./scene-transformed.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Vector3 } from "three";

export function Bird(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);

  const { actions, mixer } = useAnimations(animations, group);

  // This effect will run when the component mounts, and it will start the "Flying" animation
  useEffect(() => {
    actions.Flying.play();
  }, [actions]);

  useFrame((state, delta) => {
    mixer.update(delta); // this is necessary for the animation to play

    // Logic to move the bird from one side to another
    if (group.current.position.x > 7) {
      // boundary 
      group.current.position.set(-7, 0, 1); // reset position
    } else {
      group.current.position.add(new Vector3(0.005, 0, 0)); // velocity 
    }
  });

  return (
    // 3D Model from: https://sketchfab.com/3d-models/simple-bird-0257796e6a114739ab20339beb8ce537
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          scale={0.313}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
