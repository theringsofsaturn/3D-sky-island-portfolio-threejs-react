import React from "react";
import * as THREE from "three";
import {
  Suspense,
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import { Island } from "../../assets/foxs_islands/Scene";
import { Biplane } from "../../assets/aircarft_biplane/Scene";
import musicPath from "../../../public/everloving.mp3";
import soundPath from "../../../public/engine_loop.wav";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaneAnimating, setIsPlaneAnimating] = useState(false);
  const [currentFocusPoint, setCurrentFocusPoint] = useState(null);

  // Calculated positions and rotations for the camera focus points
  // Focus 1, Projects:
  // Camera Position: Vector3 {x: 26.821953263146206, y: -0.24159068794677374, z: -16.097774258883316}
  // Camera Rotation: Euler {isEuler: true, _x: -1.8428861795342415, _y: 1.1464437830601515, _z: 1.8678989597283515, _order: 'XYZ', …}

  // Focus 2, About Me:
  // Camera Position: Vector3 {x: 0.9109051463908377, y: 11.104644233971035, z: -21.925567769518434}
  // Camera Rotation: Euler {isEuler: true, _x: -0.06379959841432846, _y: 0.02729615222054837, _z: 0.0017436319314354082, _order: 'XYZ', …}

  // Focus 3, My Socials:
  // Camera Position: Vector3 {x: -27.321939090982713, y: -4.057135017739707, z: -21.682316625241455}
  // Camera Rotation: Euler {isEuler: true, _x: -0.1467556446986102, _y: -0.7981415355774825, _z: -0.10545417872465107, _order: 'XYZ', …}

  // Camera focus points for the navbar links
  const cameraFocusPoints = useMemo(
    () => [
      {
        name: "About Me",
        position: new THREE.Vector3(
          26.821953263146206,
          -0.24159068794677374,
          -16.097774258883316
        ),
        rotation: new THREE.Euler(
          -1.8428861795342415,
          1.1464437830601515,
          1.8678989597283515
        ),
      },
      {
        name: "My Projects",
        position: new THREE.Vector3(
          0.9109051463908377,
          11.104644233971035,
          -21.925567769518434
        ),
        rotation: new THREE.Euler(
          -0.06379959841432846,
          0.02729615222054837,
          0.0017436319314354082
        ),
      },
      {
        name: "My Socials",
        position: new THREE.Vector3(
          -27.321939090982713,
          -4.057135017739707,
          -21.682316625241455
        ),
        rotation: new THREE.Euler(
          -0.1467556446986102,
          -0.7981415355774825,
          -0.10545417872465107
        ),
      },
    ],
    []
  );

  const handleNavbarLinkClick = useCallback(
    (linkName) => {
      const focusPoint = cameraFocusPoints.find(
        (point) => point.name === linkName
      );
      setCurrentFocusPoint(focusPoint);
    },
    [cameraFocusPoints]
  );

  const audioRef = useRef(new Audio(soundPath));

  useEffect(() => {
    const audio = new Audio(musicPath);
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <Router>
      <Navbar onLinkClick={handleNavbarLinkClick} />
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <OrbitControls minDistance={0.1} maxDistance={100} />
        <Biplane
          position={[0, -3, -4]}
          rotation={[0, 0, 0]}
          scale={[2, 2, 2]}
          isAnimating={isPlaneAnimating}
        />
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 50, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[50, 50, 20]} />
          <Routes>
            <Route
              path="/"
              element={
                <Island
                  position={[0, -5.7, -40.4]}
                  rotation={[0.1, 0.59, 0]}
                  scale={[1, 1, 1]}
                  setCurrentStage={setCurrentStage}
                  setIsPlaneAnimating={setIsPlaneAnimating}
                  audioRef={audioRef}
                  currentFocusPoint={currentFocusPoint}
                />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>

      <div className={`info-box ${currentStage > 0 ? "visible" : ""}`}>
        {currentStage === 1 && (
          <p>
            Hi, I am Emilian Kasemi. I am a Software Engineer. <br /> I am from
            Albania.
          </p>
        )}
        {currentStage === 2 && (
          <div>
            <p>Contact me at:</p>
            <button>
              <a href="mailto: emiliankasemi@gmail.com">Email</a>
            </button>
          </div>
        )}
        {currentStage === 3 && (
          <div>
            <p>You can view some of my projects on my:</p>
            <button>
              <a href="https://github.com/theringsofsaturn" target="_blank">
                Github
              </a>
            </button>
          </div>
        )}
        {currentStage === 4 && (
          <div>
            <p>
              Now I moved to Netherlands working as a Frontend Engineer at a
              company called OMRT.
            </p>
            <button>
              <a href="https://omrt.tech" target="_blank">
                OMRT Website
              </a>
            </button>
          </div>
        )}
      </div>

      <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </Router>
  );
}

export default App;
