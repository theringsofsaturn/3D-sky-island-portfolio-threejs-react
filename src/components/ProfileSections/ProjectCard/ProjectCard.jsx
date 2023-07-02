import React from "react";
import carIcon from "../../../../public/car.svg";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="wrapper">
      <div className="upper">
        <div className="image-placeholder">
          <img src={carIcon} alt="Car icon" />
        </div>
        <div className="title-description">
          <div className="title">Car Showcase Web App</div>
          <div className="description">
            A comprehensive car project by using different APIs in the market
          </div>
        </div>
      </div>
      <div className="show-projects">
        <button>Show Projects</button>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
