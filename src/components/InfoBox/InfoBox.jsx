import React from "react";
import IntroCard from "../ProfileSections/IntroCard/IntroCard";
import ProjectCard from "../ProfileSections/ProjectCard/ProjectCard";
import ThesisCard from "../ProfileSections/ThesisCard/ThesisCard";
import StudiesCard from "../ProfileSections/StudiesCard/StudiesCard";
import CurrentJob from "../ProfileSections/CurrentJob/CurrentJob";
import FaveProjectsCard from "../ProfileSections/FaveProjectsCard/FaveProjectsCard";

const InfoBox = ({ currentStage }) => {
  console.log("InfoBox received currentStage:", currentStage);

  return (
    <div className={`info-box ${currentStage > 0 ? "visible" : ""}`}>
      {currentStage === 1 && <IntroCard />}
      {currentStage === 2 && <FaveProjectsCard />}
      {currentStage === 3 && <ThesisCard />}
      {currentStage === 4 && <StudiesCard />}
      {currentStage === 5 && <CurrentJob />}
      {currentStage === 6 && <ProjectCard />}
    </div>
  );
};

export default InfoBox;
