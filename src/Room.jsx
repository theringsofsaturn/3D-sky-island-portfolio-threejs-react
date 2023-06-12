import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei'; // useGLTF is a hook that loads a glTF model and returns it with all the materials, textures, and animations attached to it.
import useGUI from './useGUI';

// Will use Room to dynamically render the room based on the path, position, rotation, and scale props passed to it.
const Room = ({ path, position, rotation, scale }) => {
  const gltf = useGLTF(path, true); // The boolean true is passed to the useGLTF hook to enable draco compression. Draco is a library that compresses 3D models, which reduces the file size of the 3D model. This is useful when we have a large 3D model, which can take a long time to load. The draco compression reduces the file size of the 3D model, which reduces the loading time of the 3D model.
  console.log(gltf.scene);
  const ref = useRef();
  useLayoutEffect(() => {
    // it is used to avoid the flickering of the GUI. The flickering is caused by the fact that the GUI is created after the component is rendered. This is because the GUI is created in the useEffect hook, which is called after the component is rendered. To avoid this, we can use the useLayoutEffect hook, which is called before the component is rendered.
    ref.current = gltf.scene; // The gltf.scene object is assigned to the ref.current object.
  }, [gltf.scene]); // The useEffect hook is called every time the gltf.scene object changes. This happens when the glTF model is loaded.

  useGUI(ref); // The useGUI hook is used to create the GUI for the glTF model. It takes the ref object as an argument.

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
