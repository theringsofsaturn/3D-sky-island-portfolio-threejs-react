import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Room from './Room';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Routes>
          <Route
            path="/"
            element={
              <Room
                path="src/assets/room3/scene.gltf"
                position={[0.68, -2.76, 1.42]}
                rotation={[0.3, -0.2, 0]}
                scale={[2, 2, 2]}
              />
            }
          />

          <Route
            path="/room1"
            element={
              <Room
                path="src/assets/room1/scene.gltf"
                position={[0, -2.16, -1.92]}
                rotation={[0, 3.14, 0]}
                scale={[1, 1, 1]}
              />
            }
          />

          <Route
            path="/room2"
            element={
              <Room
                path="src/assets/room2/scene.gltf"
                position={[0.3, -10.8, -28]}
                rotation={[0, 0, 0]}
                scale={[10, 10, 10]}
              />
            }
          />
          <Route
            path="/room3"
            element={
              <Room
                path="src/assets/room3/scene.gltf"
                position={[0.68, -2.76, 1.42]}
                rotation={[0.3, -0.2, 0]}
                scale={[2, 2, 2]}
              />
            }
          />
          <Route
            path="/room4"
            element={
              <Room
                path="src/assets/room4/scene.gltf"
                position={[-9.6, -9.6, -16.9]}
                rotation={[0, 0.7, 0]}
                scale={[10, 10, 10]}
              />
            }
          />
        </Routes>
      </Canvas>
    </Router>
  );
}

export default App;
