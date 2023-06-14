import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader';
import { Model } from './assets/room2/Scene';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls minDistance={0.1} maxDistance={100} />
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Routes>
            <Route
              path="/"
              element={
                <Model position={[0.3, -10.8, -28]} scale={[10, 10, 10]} />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>
    </Router>
  );
}

export default App;
