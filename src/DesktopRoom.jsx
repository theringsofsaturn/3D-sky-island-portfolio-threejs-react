import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useLayoutEffect, useEffect } from 'react';
import GUI from 'lil-gui';

const DesktopRoom = () => {
  const gltf = useGLTF('src/assets/room3/scene.gltf', true);
  console.log(gltf.scene);
  const ref = React.useRef();
  useLayoutEffect(() => {
    ref.current = gltf.scene;
  }, [gltf.scene]);

  useEffect(() => {
    const gui = new GUI();
    const folder = gui.addFolder('Transform');
    let control;

    control = folder.add(ref.current.position, 'x', -10, 10);
    control.name('Position X');

    control = folder.add(ref.current.position, 'y', -10, 10);
    control.name('Position Y');

    control = folder.add(ref.current.position, 'z', -10, 10);
    control.name('Position Z');

    control = folder.add(ref.current.rotation, 'x', -Math.PI, Math.PI);
    control.name('Rotation X');

    control = folder.add(ref.current.rotation, 'y', -Math.PI, Math.PI);
    control.name('Rotation Y');

    control = folder.add(ref.current.rotation, 'z', -Math.PI, Math.PI);
    control.name('Rotation Z');

    control = folder.add(ref.current.scale, 'x', 0, 2);
    control.name('Scale X');

    control = folder.add(ref.current.scale, 'y', 0, 2);
    control.name('Scale Y');

    control = folder.add(ref.current.scale, 'z', 0, 2);
    control.name('Scale Z');

    folder.open();

    return () => gui.destroy();
  }, []);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[0.68, -2.76, 1.42]}
      rotation={[0.3, -0.2, 0]}
      scale={[2, 2, 2]}
      dispose={null}
      // onClick={() => alert('Model clicked!')}
    />
  );
};

export default DesktopRoom;