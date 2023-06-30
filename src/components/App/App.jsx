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
// import { OrbitControls } from "@react-three/drei";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import Testimonials from "../../pages/Testimonials/Testimonials";
import { Island } from "../../assets/foxs_islands/Scene";
import { Biplane } from "../../assets/aircarft_biplane/Scene";
import Logo from "../../../public/emilian.svg";
import musicPath from "../../../public/everloving.mp3";
import soundPath from "../../../public/engine_loop.wav";
import playOffIcon from "../../../public/play_off.svg";
import playOnIcon from "../../../public/play_on.svg";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaneAnimating, setIsPlaneAnimating] = useState(false);
  const [currentFocusPoint, setCurrentFocusPoint] = useState(null);
  const [showHint, setShowHint] = useState(true);

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
      <Navbar
        onLinkClick={handleNavbarLinkClick}
        currentFocusPoint={currentFocusPoint}
      />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/"
          element={
            <Canvas camera={{ near: 0.1, far: 1000 }}>
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
                <Island
                  position={[0, -5.7, -40.4]}
                  rotation={[0.1, 0.59, 0]}
                  scale={[1, 1, 1]}
                  setCurrentStage={setCurrentStage}
                  setIsPlaneAnimating={setIsPlaneAnimating}
                  audioRef={audioRef}
                  currentFocusPoint={currentFocusPoint}
                  setShowHint={setShowHint}
                />
              </Suspense>
            </Canvas>
          }
        />
      </Routes>

      <div className="logo-container">
        <img src={Logo} alt="Emilian Kasemi" />
      </div>

      {showHint && <div className="hint-button">Click and Drag to Explore</div>}

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
              <a
                href="https://github.com/theringsofsaturn"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a
                href="https://omrt.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                OMRT Website
              </a>
            </button>
          </div>
        )}
      </div>

      <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
        {isPlaying ? (
          <img src={playOnIcon} alt="Pause Music" />
        ) : (
          <img src={playOffIcon} alt="Play Music" />
        )}
      </button>
    </Router>
  );
}

export default App;
