import React from "react";
import card1 from "../../../public/card1.png";
import card2 from "../../../public/card2.png";
import card3 from "../../../public/card3.png";
import card4 from "../../../public/card4.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="my-projects">
      <h1 className="title">My Favorite Projects</h1>
      <div className="cards-container">
        <div className="card">
          <img src={card1} alt="Project 1" />
        </div>
        <div className="card">
          <img src={card2} alt="Project 2" />
        </div>
        <div className="card">
          <img src={card3} alt="Project 3" />
        </div>
        <div className="card">
          <img src={card4} alt="Project 4" />
        </div>
      </div>
    </div>
  );
};

export default Projects;