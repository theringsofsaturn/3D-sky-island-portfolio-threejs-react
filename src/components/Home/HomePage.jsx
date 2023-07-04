import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Island } from "../../assets/foxs_islands/Scene";
import { Biplane } from "../../assets/aircarft_biplane/Scene";
import Loader from "../Loader/Loader";
import InfoBox from "../InfoBox/InfoBox";
import PlayButton from "../PlayButton/PlayButton";
import soundPath from "../../../public/engine_loop.wav";
import { mediaConstants } from "../../configs/mediaConstants";
import dragHandIcon from "../../../public/drag.png";
import "./HomePage.css";

const HomePage = () => {
  const audioRef = useRef(new Audio(soundPath));
  const [isPlaneAnimating, setIsPlaneAnimating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const audio = new Audio(mediaConstants.musicPath);
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <>
      <div className="homepage-container">
        <InfoBox currentStage={currentStage} />

        <div className="logo-container">
          <img src={mediaConstants.logo} alt="Emilian Kasemi" />
        </div>

        <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

        {showHint && (
          <>
            <div className="hint-text">Click and Drag to Explore</div>
            <div className="hand-icon-outer-container">
              <div className="hand-icon-container">
                <img
                  src={dragHandIcon}
                  alt="Drag to explore"
                  className="hand-icon"
                />
                <div className="circle"></div>
              </div>
            </div>
          </>
        )}

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
              rotation={[0.1, 0.67, 0]}
              scale={[1, 1, 1]}
              setCurrentStage={setCurrentStage}
              setIsPlaneAnimating={setIsPlaneAnimating}
              audioRef={audioRef}
              setShowHint={setShowHint}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default HomePage;
