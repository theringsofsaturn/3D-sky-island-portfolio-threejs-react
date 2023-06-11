import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OfficeRoom from './OfficeRoom';
import GamingRoom from './GamingRoom';
import DesktopRoom from './DesktopRoom';
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
          <Route path="/" element={<DesktopRoom />} />
          <Route path="/office" element={<OfficeRoom />} />
          <Route path="/gaming" element={<GamingRoom />} />
          {/* Add more routes for other rooms */}
        </Routes>
      </Canvas>
    </Router>
  );
}

export default App;
