import React, { useRef, useEffect } from "react";
import scenePath from "./scene-transformed.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import useGUI from "../../useGUI";

export function Fox({ currentAnimation, ...props }) {
  // 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations, group);

  // useGUI((gui) => {
  //   const folder = gui.addFolder("Road Plane");
  //   folder.add(group.current.position, "x", -100, 100);
  //   folder.add(group.current.position, "y", -100, 100);
  //   folder.add(group.current.position, "z", -100, 100);
  //   folder.add(group.current.rotation, "x", 0, Math.PI * 20);
  //   folder.add(group.current.rotation, "y", 0, Math.PI * 20);
  //   folder.add(group.current.rotation, "z", 0, Math.PI * 20);
  //   folder.add(group.current.scale, "x", 0.1, 5);
  //   folder.add(group.current.scale, "y", 0.1, 5);
  //   folder.add(group.current.scale, "z", 0.1, 5);
  // });

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
