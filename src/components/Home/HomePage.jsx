import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Island } from "../../assets/foxs_islands/Scene";
import { Biplane } from "../../assets/aircarft_biplane/Scene";
import Loader from "../Loader/Loader";
import InfoBox from "../InfoBox/InfoBox";
import PlayButton from "../PlayButton/PlayButton";
import soundPath from "../../../public/engine_loop.wav";
import { mediaConstants } from "../../configs/mediaConstants";

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
      <InfoBox currentStage={currentStage} />

      <div className="logo-container">
        <img src={mediaConstants.logo} alt="Emilian Kasemi" />
      </div>

      {showHint && <div className="hint-button">Click and Drag to Explore</div>}

      <PlayButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />

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
    </>
  );
};

export default HomePage;
