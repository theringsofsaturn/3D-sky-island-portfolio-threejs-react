import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import useGUI from "../../useGUI";
import scenePath from "./scene-transformed.glb";

export function Fox(props) {
  const group = useRef();
  const foxRef = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations, group);

  // GUI (uncomment if you want to debug the scene)
  useGUI((gui) => {
    const folder = gui.addFolder("Fox Scene");
    folder.add(foxRef.current.position, "x", -100, 100).name("Position X");
    folder.add(foxRef.current.position, "y", -100, 100).name("Position Y");
    folder.add(foxRef.current.position, "z", -1000, 1000).name("Position Z");
    folder
      .add(foxRef.current.rotation, "x", -Math.PI, Math.PI)
      .name("Rotation X");
    folder
      .add(foxRef.current.rotation, "y", -Math.PI, Math.PI)
      .name("Rotation Y");
    folder
      .add(foxRef.current.rotation, "z", -Math.PI, Math.PI)
      .name("Rotation Z");
    folder.open();
  });

  return (
    // 3D Model from:  https://sketchfab.com/3d-models/foxy-tripletail-in-winterland-3c09f9b159d845d4a2b774825ffdc073
    <group ref={foxRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="SnowFlae" rotation={[-1.389, -0.213, -1.336]} scale={13}>
            <mesh
              name="SnowFlae_SnowFlakes_0"
              geometry={nodes.SnowFlae_SnowFlakes_0.geometry}
              material={materials.PaletteMaterial002}
            />
          </group>
          <group
            name="SnowFlae003"
            rotation={[-1.389, -0.213, -2.384]}
            scale={13}
          >
            <mesh
              name="SnowFlae003_SnowFlakes_0"
              geometry={nodes.SnowFlae003_SnowFlakes_0.geometry}
              material={materials.PaletteMaterial002}
            />
          </group>
        </group>
        <primitive object={nodes._rootJoint} />
        <mesh
          name="Pedestal_SnowWhitePlatform_0"
          geometry={nodes.Pedestal_SnowWhitePlatform_0.geometry}
          material={materials.PaletteMaterial001}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_18"
          geometry={nodes.Object_18.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_18.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials.PaletteMaterial004}
          skeleton={nodes.Object_19.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_20"
          geometry={nodes.Object_20.geometry}
          material={materials.PaletteMaterial005}
          skeleton={nodes.Object_20.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_22"
          geometry={nodes.Object_22.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_22.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials.PaletteMaterial005}
          skeleton={nodes.Object_23.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_25"
          geometry={nodes.Object_25.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_25.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_26"
          geometry={nodes.Object_26.geometry}
          material={materials.PaletteMaterial005}
          skeleton={nodes.Object_26.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_28"
          geometry={nodes.Object_28.geometry}
          material={materials.PaletteMaterial003}
          skeleton={nodes.Object_28.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <skinnedMesh
          name="Object_29"
          geometry={nodes.Object_29.geometry}
          material={materials.PaletteMaterial005}
          skeleton={nodes.Object_29.skeleton}
          position={[0, 363.248, -114.334]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
