import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import scenePath from "./scene-transformed.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { act } from "@react-three/fiber";

export function Bird({ position, rotation, scale, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  console.log(animations);

  const { ref, mixer } = useAnimations(animations);

  const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose the direction of movement (left or right)
  const speed = 0.01 + Math.random() * 0.02; // Randomly choose a speed between 0.01 and 0.03

  useEffect(() => {
    mixer.timeScale = 0.5 + Math.random(); // Randomly choose animation speed between 0.5x and 1.5x
  }, [mixer]);

  useEffect(() => {
    // Play the "Flying" animation
    const action = mixer.clipAction(
      animations.find((clip) => clip.name === "Flying")
    );
    action.play();
  }, [mixer, animations]);

  // Move the bird across the screen
  useEffect(() => {
    const moveBird = () => {
      if (ref.current) {
        ref.current.position.x += direction * speed;
        // If the bird goes offscreen, reposition it on the other side
        if (ref.current.position.x > 10) ref.current.position.x = -10;
        if (ref.current.position.x < -10) ref.current.position.x = 10;
      }
      requestAnimationFrame(moveBird);
    };

    moveBird();
  }, [ref, direction, speed]);

  return (
    // 3D Model from: https://sketchfab.com/3d-models/simple-bird-0257796e6a114739ab20339beb8ce537
    <group
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
          position={[0, 0.205, 0]}
          rotation={[1.485, 0, 0]}
          scale={0.313}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
