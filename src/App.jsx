import React from 'react';
import { Suspense, useState, useCallback } from 'react';
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
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 so user has to click 'Start' to begin tour
  const { camera } = useThree();
  const [initialCameraPosition, setInitialCameraPosition] = useState();
  const [initialCameraRotation, setInitialCameraRotation] = useState();

  useEffect(() => {
    // Save initial camera position and rotation
    setInitialCameraPosition(camera.position.clone());
    setInitialCameraRotation(camera.rotation.clone());
  }, []);

  // Handle start of the tour
  const startTour = useCallback(() => {
    setCurrentStep(0);
  }, []);

  // Handle reset of the tour
  const resetTour = useCallback(() => {
    setCurrentStep(-1);
    camera.position.copy(initialCameraPosition);
    camera.rotation.copy(initialCameraRotation);
  }, [initialCameraPosition, initialCameraRotation]);

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
    </Router>
  );
}

export default App;
