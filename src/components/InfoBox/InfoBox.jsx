import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import SchoolCard from "../SchoolCard/SchoolCard";

const InfoBox = ({ currentStage }) => {
  return (
    <div className={`info-box ${currentStage > 0 ? "visible" : ""}`}>
      {currentStage === 1 && (
        <p>
          Hi, I am Emilian Kasemi 👋 <br /> Software Engineer based in Albania.
        </p>
      )}
      {currentStage === 2 && <ProjectCard />}
      {currentStage === 3 && (
        <div>
          <p>
            Now I moved to Netherlands working as a <br /> Frontend Engineer at
            a company called OMRT.
          </p>
        </div>
      )}
      {currentStage === 4 && (
        <div>
          <p>I moved to Norway for my Master studies.</p>
        </div>
      )}
      {currentStage === 5 && <SchoolCard />}
      {currentStage === 6 && (
        <div>
          <p>View some of my favorite Projects</p>
          <button>View Projects</button>
        </div>
      )}
    </div>
  );
};

export default InfoBox;

// <div>
//   <p>Contact me at:</p>
//   <button>
//     <a href="mailto: emiliankasemi@gmail.com">Email</a>
//   </button>
// </div>
