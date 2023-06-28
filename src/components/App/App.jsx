import React from "react";
import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
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
      <Navbar />
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
