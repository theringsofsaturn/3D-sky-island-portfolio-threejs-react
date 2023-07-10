import React from "react";
import { Link } from "react-router-dom";
import "./FaveProjectsCard.css";

const FaveProjectsCard = ({ className = "" }) => {
  return (
    <div className={`fave-projects-card ${className}`}>
      <p className="fave-projects-text">
        View some of my <br /> favorite Projects
      </p>
      <Link to="/projects" className="fave-projects-btn">
        View Projects
      </Link>
    </div>
  );
};

export default FaveProjectsCard;
