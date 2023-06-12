import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Room from './Room';
import './App.css';

function App() {
  return (
    <Router>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Routes>
          <Route
            path="/room1"
            element={
              <Room
                path="src/assets/room1/scene.gltf"
                position={[0, -2.16, -1]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
              />
            }
          />
          <Route
            path="/room2"
            element={
              <Room
                path="src/assets/room2/scene.gltf"
                position={[0, -2.16, -1]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
              />
            }
          />
          <Route
            path="/room3"
            element={
              <Room
                path="src/assets/room3/scene.gltf"
                position={[0, -2.16, -1]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
              />
            }
          />
          <Route
            path="/room4"
            element={
              <Room
                path="src/assets/room4/scene.gltf"
                position={[0, -2.16, -1]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
              />
            }
          />
        </Routes>
      </Canvas>
    </Router>
  );
}

export default App;
