import React from "react";
import { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Loader";
import Navbar from "./Navbar";
import { Model } from "./assets/foxs_islands/Scene";
import musicPath from "../public/max_richter.mp3";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

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
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 50, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[50, 50, 20]} />
          <Routes>
            <Route
              path="/"
              element={
                <Model
                  position={[0, -5.7, -40.4]}
                  rotation={[0.1, 0.59, 0]}
                  scale={[1, 1, 1]}
                  setCurrentStage={setCurrentStage}
                />
              }
            />
          </Routes>
        </Suspense>
      </Canvas>

      <div className={`info-box ${currentStage > 0 ? "visible" : ""}`}>
        {currentStage === 1 && (
          <p>
            I started my journey as a developer when I was in Italy, where I
            studied Computer Science.
          </p>
        )}
        {currentStage === 2 && (
          <div>
            <p>View my university thesis:</p>
            <button>View Thesis</button>
          </div>
        )}
        {currentStage === 3 && (
          <div>
            <p>
              Now I moved to Germany working as a Software Engineer. Following
              are my two recent projects:
            </p>
            <button>View Projects</button>
          </div>
        )}
        {currentStage === 4 && (
          <div>
            <p>Contact me at:</p>
            <button>My Socials</button>
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
