import React from "react";
import IntroCard from "../ProfileSections/IntroCard/IntroCard";
import ProjectCard from "../ProfileSections/ProjectCard/ProjectCard";
import AppsCard from "../ProfileSections/AppsCard/AppsCard";
import StudiesCard from "../ProfileSections/GeneralInfoCard/GeneralInfoCard";
import CurrentJob from "../ProfileSections/CurrentJob/CurrentJob";
import FaveProjectsCard from "../ProfileSections/FaveProjectsCard/FaveProjectsCard";
import "./InfoBox.css";

const InfoBox = ({ currentStage }) => {
  // console.log("InfoBox received currentStage:", currentStage);

  return (
    <div className={`info-box ${currentStage > 0 ? "visible" : ""}`}>
      {currentStage === 1 && <IntroCard />}
      {currentStage === 2 && <FaveProjectsCard />}
      {currentStage === 3 && <AppsCard />}
      {currentStage === 4 && <ProjectCard />}
      {currentStage === 5 && <StudiesCard />}
      {currentStage === 6 && <CurrentJob />}
    </div>
  );
};

export default InfoBox;
