/*
Author: isipeassy (https://sketchfab.com/Isi-peassy)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/oriental-cyberpunk-room-2a42d577f03a43469d2e897a99920e67
Title: oriental cyberpunk room
*/

import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import useGUI from '../../useGUI';
import { useSpring, a } from '@react-spring/three';

export function Model({
  setControlsEnabled,
  setModalContent,
  modalContent,
  currentStep,
  manualControl,
  ...props
}) {
  const { nodes, materials } = useGLTF(
    'src/assets/gaming-room/scene-transformed.glb'
  );
  console.log(nodes);

  const { camera } = useThree();
  const [initialCameraPosition, setInitialCameraPosition] = useState();
  const [initialCameraRotation, setInitialCameraRotation] = useState();

  // Spring animation states
  const [hovered, setHovered] = useState(false);
  const [wobble, setWobble] = useState(false);

  const [clickedMesh, setClickedMesh] = useState(null);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const vec = new THREE.Vector3();
  const target = new THREE.Vector3();

  // Animation config for the wobble effect
  const wobbleConfig = {
    rotation: wobble ? [0, 0.1, 0] : [0, 0, 0],
    config: { mass: 1, tension: 50, friction: 10, precision: 0.0001 },
  };

  // React Spring animation hook for the wobble effect.
  const wobbleAnimation = useSpring(wobbleConfig);

  // Toggle the wobble state on hover
  const handleHover = () => {
    setHovered(!hovered);
    setWobble(!wobble);
  };

  // Manual camera position and rotation for each mesh
  const cameraFocusPoints = useMemo(
    () => [
      {
        position: new THREE.Vector3(0, 6.91728092725427e-17, 1.129677704962827),
        rotation: new THREE.Euler(-6.123233995736766e-17, 0, 0),
      }, // for mesh 1
      {
        position: new THREE.Vector3(
          -0.6774055523162299,
          -0.07510321437276035,
          1.5175570485960659
        ),
        rotation: new THREE.Euler(
          -1.5575184590343871,
          -0.34358849761578875,
          -1.5313987682146446
        ),
      }, // for mesh 2
      {
        position: new THREE.Vector3(
          0.03996188120764549,
          0.2664344544399111,
          0.5821011844350341
        ),
        rotation: new THREE.Euler(
          -1.0412416586326239,
          -1.518329332870249,
          -1.040641128861739
        ),
      }, // for mesh 3
      // ... and so on for each mesh
    ],
    []
  );

  const meshRefs = [ref1, ref2, ref3];

  useFrame((state) => {
    // When the tour has started...
    if (currentStep >= 0) {
      const mesh = meshRefs[currentStep].current; // Get the mesh for the current step
      if (mesh) {
        const { position, rotation } = cameraFocusPoints[currentStep]; // Get the position and rotation for the current step

        // check if the distance to target is larger than 0.1 units
        if (state.camera.position.distanceTo(position) > 0.1) {
          // If the camera has not yet reached the target...
          state.camera.position.lerp(position, 0.1); // Move the camera position

          // Convert current camera rotation to quaternion for interpolation
          let cameraQuaternion = state.camera.quaternion.clone();

          // Convert the target rotation to a Quaternion
          let targetQuaternion = new THREE.Quaternion().setFromEuler(rotation);

          // Interpolate between the current camera quaternion and the target quaternion
          cameraQuaternion.slerpQuaternions(
            cameraQuaternion,
            targetQuaternion,
            0.1
          );

          // Update the camera's quaternion
          state.camera.quaternion.copy(cameraQuaternion);

          state.camera.updateProjectionMatrix(); // To recalculate the projection.
        } else if (state.camera.position.distanceTo(position) <= 0.1) {
          // If the camera is very close to the target...
          state.camera.position.copy(position); // Set the camera position directly to the target
          state.camera.rotation.copy(rotation); // Set the camera rotation directly to the target
          state.camera.updateProjectionMatrix(); // To recalculate the projection.
        } else {
          // If the camera has reached the target...
          setControlsEnabled(true); // Enable the controls
        }
      }
    }
    // If the tour has been reset AND manual control is not enabled...
    else if (
      currentStep === -1 &&
      !manualControl &&
      initialCameraPosition &&
      initialCameraRotation
    ) {
      // Reset the camera position and rotation to the initial state
      state.camera.position.lerp(initialCameraPosition, 0.1);
      state.camera.rotation.copy(initialCameraRotation);
      state.camera.updateProjectionMatrix();
    }
  });

  // save the initial camera position and rotation once, right after the component has mounted
  // and before any changes are made to the camera position and rotation.
  useEffect(() => {
    // Save initial camera position and rotation
    if (!initialCameraPosition && !initialCameraRotation) {
      setInitialCameraPosition(camera.position.clone());
      setInitialCameraRotation(camera.rotation.clone());
    }
  }, [camera, initialCameraPosition, initialCameraRotation]);

  // takes the content as a parameter and sets it as the modal content
  function handleClick() {
    console.log('Mesh clicked');
    setControlsEnabled(false);
    setModalContent(ref1.current);
    console.log('Modal content', ref1.current);
  }

  // Save the initial material color of the window
  const initialMaterialColor = useRef(materials.blinn2SG.color.clone());

  // Update the material color on hover
  useEffect(() => {
    if (hovered) {
      materials.blinn2SG.color.set('red');
    } else {
      materials.blinn2SG.color.copy(initialMaterialColor.current);
    }
    // Update the material
    materials.blinn2SG.needsUpdate = true;
  }, [hovered, materials.blinn2SG]);

  return (
    <group {...props} dispose={null}>
      {/* Wheel Circle concrete Surrounding the Window Mesh */}
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.lambert4SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Window with the Form of a Wheel Mesh */}
      <a.mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        ref={ref1}
        onClick={() => {
          setControlsEnabled(false);
          setClickedMesh(ref1.current);
          handleClick('Mesh 1');
        }}
        scale={[0.197, 0.197, 0.197]}
        rotation={[-Math.PI / 2, 0, 0]}
        geometry={nodes.Object_2.geometry}
        material={materials.blinn2SG}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.blinn3SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Computer Mesh */}
      <mesh
        ref={ref3}
        onClick={() => {
          setControlsEnabled(false);
          setClickedMesh(ref3.current);
          handleClick('Mesh 2');
        }}
        geometry={nodes.Object_4.geometry}
        material={materials.blinn4SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Tea Kettle Mesh */}
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.blinn5SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Japanese symbol on the wall */}
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
      {/* Green bed Sheet Mesh */}
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.lambert15SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Comptuter Table Mesh */}
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.lambert20SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* White bed Mesh */}
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.lambert16SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Trash Can Mesh */}
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.lambert23SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Red Wall holding the Wheel Form Window Mesh */}
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.lambert3SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Black Big Box Mesh */}
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.lambert8SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Computer Chair Mesh */}
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.lambert22SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Written Letter on thr Table Mesh */}
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.lambert26SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Foot Mat Mesh */}
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.lambert28SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Duck Artwork Mesh */}
      <a.mesh
        geometry={nodes.Object_19.geometry}
        material={materials.lambert11SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
        onPointerOver={handleHover}
        onPointerOut={handleHover}
      >
        <a.mesh {...wobbleAnimation}>
          <bufferGeometry attach="geometry" {...nodes.Object_19.geometry} />
          <meshStandardMaterial attach="material" {...materials.lambert11SG} />
        </a.mesh>
      </a.mesh>
      {/* Frame holding the Samurai Sword Mesh */}
      <mesh
        geometry={nodes.Object_20.geometry}
        material={materials.lambert12SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Table in the Middle of the Room Mesh */}
      <mesh
        ref={ref2}
        onClick={() => {
          setControlsEnabled(false);
          setClickedMesh(ref2.current);
          handleClick('Mesh 3');
        }}
        geometry={nodes.Object_21.geometry}
        material={materials.lambert19SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Wooden Pallets at the Computer Table Mesh */}
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lambert21SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* The Walls, Floor and Ceiling Mesh */}
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.lambert14SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Samurai Sword Mesh  */}
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.lambert13SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Books on the Table Mesh */}
      <mesh
        geometry={nodes.Object_26.geometry}
        material={materials.lambert18SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* Japanese Food on he Table Mesh */}
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.lambert24SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* The Blue lights on the Ceiling and under the Chair Mesh  */}
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
      {/* The white Trash Mesh */}
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.lambert27SG}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.197}
      />
      {/* The Wall at the Door and Computer Side Mesh */}
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
