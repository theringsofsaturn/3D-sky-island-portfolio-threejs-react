import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, technologies, videoSrc }) => {
  return (
    <div className="project-card">
      <video 
        src={videoSrc} 
        alt={title} 
        autoPlay 
        loop 
        muted 
        controls 
        className="project-card-video"
      />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{technologies}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
