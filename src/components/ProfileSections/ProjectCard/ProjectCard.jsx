import React from "react";
import galleryIcon from "../../../../public/gallery.png";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-upper">
        <div className="project-card-image-placeholder">
          <img src={galleryIcon} alt="Gallery icon" />
        </div>
        <div className="project-card-title-description">
          <div className="project-card-title">3D Art Gallery</div>
          <div className="project-card-description">
            An interactive 3D art gallery made with Three.js. Perfect for
            designers.
          </div>
        </div>
      </div>
      <div className="project-card-show-projects">
        <a
          href="https://youtube.com/playlist?list=PLL0NS7nr67RatIPmksfUPDWJ5bc8vy1VU"
          target="_blank"
        >
          Show Project
        </a>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
