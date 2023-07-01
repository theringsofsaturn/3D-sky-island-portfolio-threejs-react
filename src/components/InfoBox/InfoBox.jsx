import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const InfoBox = ({ currentStage }) => {
  return (
    <div className={`info-box ${currentStage > 0 ? "visible" : ""}`}>
      {currentStage === 1 && (
        <p>
          Hi, I am Emilian Kasemi 👋 <br /> Software Engineer based in Albania.
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
      {currentStage === 3 && <ProjectCard />}
      {currentStage === 4 && (
        <div>
          <p>
            Now I moved to Netherlands working as a <br /> Frontend Engineer at
            a company called OMRT.
          </p>
        </div>
      )}
    </div>
  );
};

export default InfoBox;
