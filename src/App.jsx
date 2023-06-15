import React from 'react';
import { Suspense, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader';
import { Model } from './assets/room2/Scene';
import Modal from './Modal';
import './App.css';

function App() {
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Router>
      <Navbar />
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enabled={controlsEnabled}
            minDistance={0.1}
            maxDistance={100}
          />
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Routes>
            <Route
              path="/"
              element={
                <Model
                  position={[0.5, -1, 1]}
                  rotation={[0.2, 0.2, 0]}
                  scale={[1, 1, 1]}
                  setControlsEnabled={setControlsEnabled}
                  setModalContent={setModalContent}
                  currentStep={currentStep}
                />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>
      {modalContent && (
        <Modal content={modalContent} onClose={() => setModalContent(null)} />
      )}
      <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
    </Router>
  );
}

export default App;
