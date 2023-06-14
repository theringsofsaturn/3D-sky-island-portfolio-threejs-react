// Not being used at the moment. We're using `Scene.jsx` in assets folder instead.

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei'; // useGLTF is a hook that loads a glTF model and returns it with all the materials, textures, and animations attached to it.
import useGUI from './useGUI';

// Will use Room to dynamically render the room based on the path, position, rotation, and scale props passed to it.
const Room = ({ path, position, rotation, scale }) => {
  const [isHovered, setHovered] = useState(false);

  const gltf = useGLTF(path, true); // The boolean true is passed to the useGLTF hook to enable draco compression. Draco is a library that compresses 3D models, which reduces the file size of the 3D model. This is useful when we have a large 3D model, which can take a long time to load. The draco compression reduces the file size of the 3D model, which reduces the loading time of the 3D model.
  console.log(gltf.scene);

  // Destructure animations and nodes from gltf
  const { animations, nodes, materials } = gltf;

  // Pass animations to useAnimations hook
  const { actions } = useAnimations(animations);

  const ref = useRef();
  const meshRef = useRef();

  useLayoutEffect(() => {
    // it is used to avoid the flickering of the GUI. The flickering is caused by the fact that the GUI is created after the component is rendered. This is because the GUI is created in the useEffect hook, which is called after the component is rendered. To avoid this, we can use the useLayoutEffect hook, which is called before the component is rendered.
    ref.current = gltf.scene; // The gltf.scene object is assigned to the ref.current object.
  }, [gltf.scene]); // Depend on gltf.scene

  useGUI(ref); // The useGUI hook is used to create the GUI for the glTF model. It takes the ref object as an argument.

  useLayoutEffect(() => {
    // If there are animations, play the first one
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]); // Depend on actions

  useLayoutEffect(() => {
    // Assuming "ObjectName" is the name of an object in our GLTF model
    meshRef.current = nodes.Rahmen_Tshirt_Shade_0; // TODO: Find the proper name of the object
  }, [nodes]); // Depend on nodes

  const { raycaster, camera, scene, render } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      const intersections = raycaster.intersectObject(meshRef.current);

      if (intersections.length > 0 && !isHovered) {
        meshRef.current.material.color.set('red');
        setHovered(true);
      } else if (intersections.length === 0 && isHovered) {
        meshRef.current.material.color.set('blue');
        setHovered(false);
      }
    } // will return an array of intersections where the ray from the user's mouse intersects the object. If the user's mouse is over the object, it will return an array with at least one element. If the mouse isn't over the object, it will return an empty array. So if the array's length is greater than zero, we know the user is hovering over the object and we change its color.
  });

  return (
    <primitive // The primitive component is used to render a primitive object
      ref={ref} // The ref object is passed to the primitive component
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
      dispose={null} // Disposing is a process that removes the model from the scene and frees up memory.
      // The dispose prop is used to prevent the glTF model from being disposed of when the component is unmounted. This is because the glTF model is loaded asynchronously, and if the component is unmounted before the model is loaded, the model will be disposed of. This will cause the model to disappear from the scene.
    />
  );
};

export default Room;
