import React from "react";
import { mediaConstants } from "../../configs/mediaConstants";
import "./PlayButton.css";

const PlayButton = ({ isPlaying, setIsPlaying }) => {
  return (
    <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
      {isPlaying ? (
        <img src={mediaConstants.playOnIcon} alt="Pause Music" />
      ) : (
        <img src={mediaConstants.playOffIcon} alt="Play Music" />
      )}
    </button>
  );
};

export default PlayButton;
