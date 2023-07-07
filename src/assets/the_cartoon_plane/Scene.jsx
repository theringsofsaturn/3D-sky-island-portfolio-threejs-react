import React, { useRef, useEffect } from "react";
import scenePath from "./scene-transformed.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import useGUI from "../../useGUI";

export function CartoonPlane(props) {
  // 3D Model from: https://sketchfab.com/3d-models/the-cartoon-plane-e3a28088b5cb498cb0e30b344f3d0f04
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scenePath);
  const { actions } = useAnimations(animations, group);

  console.log("CartoonPlane: nodes", nodes);
  console.log("Animations", animations);

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

  // This effect will run when the component mounts, and it will start the plane animation
  useEffect(() => {
    actions.Animation.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group
            name="Sphere_5"
            position={[-0.216, 12.378, -0.52]}
            rotation={[-1.143, -0.005, 0.004]}
          >
            <mesh
              name="Object_8"
              geometry={nodes.Object_8.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="korpus009_12"
            position={[-0.598, 12.306, -0.222]}
            rotation={[3.134, 0.919, 3.104]}
          >
            <mesh
              name="Object_33"
              geometry={nodes.Object_33.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
        </group>
        <mesh
          name="Object_4"
          geometry={nodes.Object_4.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.598, 12.306, -0.222]}
          rotation={[3.134, 0.919, 3.104]}
        />
        <mesh
          name="Object_22"
          geometry={nodes.Object_22.geometry}
          material={materials.PaletteMaterial002}
          position={[-0.598, 12.306, -0.222]}
          rotation={[3.134, 0.919, 3.104]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scenePath);
