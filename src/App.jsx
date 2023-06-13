import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Room from './Room';
import Loader from './Loader';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Canvas>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Routes>
            <Route
              path="/"
              element={
                <Room
                  path="src/assets/room2/scene.gltf"
                  position={[0.3, -10.8, -28]}
                  rotation={[0, 0, 0]}
                  scale={[10, 10, 10]}
                />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>
    </Router>
  );
}

export default App;
