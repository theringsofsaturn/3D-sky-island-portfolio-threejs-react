import React from "react";

const InfoBox = ({ currentStage }) => {
  return (
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
  );
};

export default InfoBox;
