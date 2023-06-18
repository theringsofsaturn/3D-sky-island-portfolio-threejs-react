import React from 'react';
import { Suspense, useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader';
import { Model } from './assets/gaming-room/Scene';
import FullScreenOverlay from './FullScreenOverlay.jsx';
import { GlobalStyles } from './GlobalStyles';
import './App.css';

function App() {
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [modalContent, setModalContent] = useState(null);
  const [manualControl, setManualControl] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1); // Start at -1 so user has to click 'Start' to begin tour
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [selectedMesh, setSelectedMesh] = useState(null);
  const [shouldCameraMove, setShouldCameraMove] = useState(false);

  const meshes = [
    { name: 'About Me' },
    { name: 'My Blog Posts' },
    { name: 'My Projects' },
  ];

  // Handle start of the tour
  const startTour = useCallback(() => {
    setCurrentStep(0);
    setSelectedMesh(meshes[0]);
    setManualControl(false);
    setShouldCameraMove(true);
  }, []);

  // Handle reset of the tour
  const resetTour = useCallback(() => {
    setCurrentStep(-1);
    setShouldCameraMove(false);
  }, []);

  const selectMesh = (i) => {
    setSelectedMesh(meshes[i]);
    setCurrentStep(i);
    setShouldCameraMove(true);
  };

  const handleCameraMoveEnd = () => {
    if (shouldCameraMove) {
      setTimeout(() => {
        setModalContent(selectedMesh);
        setInfoOpen(true);
      }, 1000);
      setShouldCameraMove(false); // Reset this after the camera move is done.
    }
  };

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
      <GlobalStyles />
      <Navbar meshes={meshes} selectMesh={selectMesh} />
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <CameraLogger />
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enabled={controlsEnabled}
            minDistance={0.1}
            maxDistance={100}
          />
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Routes>
            <Route
              path="/"
              element={
                <Model
                  position={[0, -1.2, 0.7]}
                  rotation={[0, 0, 0]}
                  scale={[1, 1, 1]}
                  setControlsEnabled={setControlsEnabled}
                  setModalContent={setModalContent}
                  setSelectedMesh={setSelectedMesh}
                  currentStep={currentStep}
                  manualControl={manualControl}
                  setInfoOpen={setInfoOpen}
                  handleCameraMoveEnd={handleCameraMoveEnd}
                />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>

      {currentStep < 0 ? (
        <button className="start-tour-btn" onClick={startTour}>
          Start
        </button>
      ) : currentStep < 2 ? (
        <button
          className="start-tour-btn"
          onClick={() => selectMesh(currentStep + 1)}
        >
          Next
        </button>
      ) : (
        <button className="start-tour-btn" onClick={resetTour}>
          Reset
        </button>
      )}
      {currentStep >= 0 && (
        <button onClick={resetTour} className="stop-tour-btn">
          Stop
        </button>
      )}

      <button
        onClick={() => setManualControl((prev) => !prev)}
        className="manual-btn"
      >
        {manualControl ? 'Turn off manual control' : 'Turn on manual control'}
      </button>
      <FullScreenOverlay
        isOpen={isInfoOpen}
        onClose={() => {
          setModalContent(null);
          setInfoOpen(false);
          setShouldCameraMove(false);
        }}
        mesh={selectedMesh}
      />
    </Router>
  );
}

export default App;
