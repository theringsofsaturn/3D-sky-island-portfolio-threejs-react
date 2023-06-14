//! Not being used at the moment

import CameraControls from 'camera-controls';

CameraControls.install({ THREE });

export default function Controls({ zoom, focus }) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl.domElement]
  );

  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  return useFrame((state, delta) => {
    if (zoom) {
      pos.set(focus.x, focus.y, focus.z + 0.002);
      look.set(focus.x, focus.y, focus.z - 0.002);
    } else {
      pos.set(0, 0, 5);
      look.set(0, 0, 4);
    }

    state.camera.position.lerp(pos, 0.5);
    state.camera.updateProjectionMatrix();

    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );
    return controls.update(delta);
  });
}
