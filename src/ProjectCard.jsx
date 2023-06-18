import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, technologies }) => {
  return (
    <div className="project-card">
      <img
        src="https://th.bing.com/th/id/R.95070482b78543edb6d33c6f875f02e4?rik=1bUe3wrslcvoQg&riu=http%3a%2f%2fimages.clipartpanda.com%2fproject-clipart-work-project-clip-art-1143610.jpg&ehk=u9SreAH3o7p05HKAqUW2baTUH%2bcsxpK4Xdop6EfeCiQ%3d&risl=&pid=ImgRaw&r=0"
        alt={title}
      />{' '}
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{technologies}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
