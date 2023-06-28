import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scenePath from "./scene-transformed.glb";

export function Biplane({ isAnimating, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations, group);

  // Play or pause the animation based on isAnimating prop
  useEffect(() => {
    if (isAnimating) {
      actions.Animation.play();
    } else {
      actions.Animation.stop();
    }
  }, [isAnimating, actions]);

  return (
    // Biplane model from:  https://sketchfab.com/3d-models/aircarft-biplane-29c2f61dcb014ca5997f2833153f8e34
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="GLTF_SceneRootNode"
          position={[0.013, -0.08, -0.051]}
          rotation={[-0.198, 0.008, -0.052]}
          scale={0.359}
        >
          <group name="Cube002_1" position={[-0.882, 0, 0]}>
            <mesh
              name="Object_7"
              geometry={nodes.Object_7.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cylinder_2" position={[4.018, 0, 0]}>
            <mesh
              name="Object_9"
              geometry={nodes.Object_9.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder001_3"
            position={[4.102, 0, 0]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              name="Object_11"
              geometry={nodes.Object_11.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cylinder002_4" position={[-0.003, 0, 0]}>
            <mesh
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Torus001_5" position={[3.059, 0, 0]}>
            <mesh
              name="Object_18"
              geometry={nodes.Object_18.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube003_6" position={[-0.077, 0, 0]}>
            <mesh
              name="Object_20"
              geometry={nodes.Object_20.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube004_7" position={[1.133, 2.896, 0.051]}>
            <mesh
              name="Object_22"
              geometry={nodes.Object_22.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube005_8" position={[1.133, 2.896, 0.051]}>
            <mesh
              name="Object_24"
              geometry={nodes.Object_24.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cylinder003_9">
            <mesh
              name="Object_26"
              geometry={nodes.Object_26.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube006_10" position={[-0.061, 0.033, 0.001]}>
            <mesh
              name="Object_29"
              geometry={nodes.Object_29.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube007_11" position={[-1.261, 0.39, 0.007]}>
            <mesh
              name="Object_31"
              geometry={nodes.Object_31.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cylinder004_12" position={[-0.698, -0.102, -0.002]}>
            <mesh
              name="Object_33"
              geometry={nodes.Object_33.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder005_13"
            position={[-0.833, 0.431, 0.008]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Object_35"
              geometry={nodes.Object_35.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Sphere_14" position={[-0.365, 0.84, 0.015]}>
            <mesh
              name="Object_38"
              geometry={nodes.Object_38.geometry}
              material={materials.PaletteMaterial002}
            />
          </group>
          <group name="Sphere001_15" position={[-0.373, 0.829, 0.014]}>
            <mesh
              name="Object_40"
              geometry={nodes.Object_40.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cube008_16"
            position={[-0.255, 0.847, 0.015]}
            rotation={[0, 0, 0.386]}
          >
            <mesh
              name="Object_42"
              geometry={nodes.Object_42.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder006_17"
            position={[-0.516, 0.743, -0.178]}
            rotation={[0, 0, 0.516]}
          >
            <mesh
              name="Object_44"
              geometry={nodes.Object_44.geometry}
              material={materials.speed}
            />
            <mesh
              name="Object_45"
              geometry={nodes.Object_45.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder007_18"
            position={[-0.441, 0.766, 0.016]}
            rotation={[0, 0, 0.5]}
          >
            <mesh
              name="Object_47"
              geometry={nodes.Object_47.geometry}
              material={materials.speed}
            />
            <mesh
              name="Object_48"
              geometry={nodes.Object_48.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder008_19"
            position={[-0.513, 0.733, 0.231]}
            rotation={[0, 0, 0.516]}
          >
            <mesh
              name="Object_51"
              geometry={nodes.Object_51.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Object_50"
              geometry={nodes.Object_50.geometry}
              material={materials.speed}
            />
          </group>
          <group name="Cylinder009_20" position={[3.646, 0.003, 0]}>
            <mesh
              name="Object_53"
              geometry={nodes.Object_53.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube009_21" position={[-5.769, 0.546, -0.008]}>
            <mesh
              name="Object_56"
              geometry={nodes.Object_56.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube001_22" position={[1.754, -1.002, -0.024]}>
            <mesh
              name="Object_58"
              geometry={nodes.Object_58.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Cube010_23" position={[1.584, -2.35, -0.048]}>
            <mesh
              name="Object_60"
              geometry={nodes.Object_60.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder011_24"
            position={[1.718, -2.443, -0.049]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Object_62"
              geometry={nodes.Object_62.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Cylinder012_25"
            position={[2.215, -2.413, -0.049]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Object_65"
              geometry={nodes.Object_65.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Sphere002_26" position={[1.744, 1.1, 0.006]}>
            <mesh
              name="Object_68"
              geometry={nodes.Object_68.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group name="Sphere003_27" position={[1.744, 1.1, 0.006]}>
            <mesh
              name="Object_70"
              geometry={nodes.Object_70.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
        </group>
        <mesh
          name="Object_4"
          geometry={nodes.Object_4.geometry}
          material={materials.PaletteMaterial001}
          position={[0.013, -0.08, -0.051]}
          rotation={[-0.18, 0.007, -0.052]}
          scale={0.359}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
