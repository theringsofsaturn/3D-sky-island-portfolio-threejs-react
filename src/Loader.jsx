import React from 'react';
import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { active, progress, errors } = useProgress();
  return active ? (
    <Html center>
      <span style={{ color: 'white' }}>{`Loading: ${progress.toFixed(
        2
      )}%`}</span>
    </Html>
  ) : null;
}

export default Loader;