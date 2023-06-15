import React from 'react';
import { Suspense, useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader';
import { Model } from './assets/room2/Scene';
import Modal from './Modal';
import './App.css';

function App() {
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [manualControl, setManualControl] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 so user has to click 'Start' to begin tour

  // Handle start of the tour
  const startTour = useCallback(() => {
    setCurrentStep(0);
    setManualControl(false);
  }, []);

  // Handle reset of the tour
  const resetTour = useCallback(() => {
    setCurrentStep(-1);
  }, []);

  function CameraLogger() {
    const { camera } = useThree();

    useEffect(() => {
      const logCameraData = () => {
        console.log('Camera Position:', camera.position);
        console.log('Camera Rotation:', camera.rotation);
      };

      window.addEventListener('mousedown', logCameraData);

      return () => {
        window.removeEventListener('mousedown', logCameraData);
      };
    }, [camera]);

    return null;
  }

  return (
    <Router>
      <Navbar />
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <CameraLogger />
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
                  manualControl={manualControl}
                />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>
      {modalContent && (
        <Modal content={modalContent} onClose={() => setModalContent(null)} />
      )}
      {currentStep < 0 ? (
        // Start button if the tour hasn't started yet
        <button className="fab-button" onClick={startTour}>
          Start
        </button>
      ) : currentStep < 3 ? (
        // Next button during the tour
        <button
          className="fab-button"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Next
        </button>
      ) : (
        // Reset button after all objects are viewed
        <button className="fab-button" onClick={resetTour}>
          Reset
        </button>
      )}
      <button
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '10px',
          width: '300px',
          height: '50px',
        }}
        onClick={() => setManualControl((prev) => !prev)}
      >
        {manualControl ? 'Turn off manual control' : 'Turn on manual control'}
      </button>
    </Router>
  );
}

export default App;
