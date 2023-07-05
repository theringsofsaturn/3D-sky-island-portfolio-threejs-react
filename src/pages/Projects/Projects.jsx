import React from "react";
import playStoreIcon from "../../../public/play_store.png";
import githubIcon from "../../../public/github.svg";
import carIcon from "../../../public/car.png";
import ecommerceIcon from "../../../public/ecommerce.png";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      imgSrc: "../../../public/car_card.png",
      thumbSrc: "../../../public/car.png",
      title: "Car Showcase App",
      status: "1 hour ago",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      imgSrc: "../../../public/ecommerce_card.png",
      thumbSrc: "./../../public/ecommerce.png",
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      imgSrc: "../../../public/ecommerce_card.png",
      thumbSrc: "./../../public/ecommerce.png",
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      imgSrc: "../../../public/ecommerce_card.png",
      thumbSrc: "./../../public/ecommerce.png",
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      imgSrc: "../../../public/ecommerce_card.png",
      thumbSrc: "./../../public/ecommerce.png",
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
    {
      imgSrc: "../../../public/ecommerce_card.png",
      thumbSrc: "./../../public/ecommerce.png",
      title: "E-Commerce App",
      tech: ["React", "Node", "Express", "MongoDB"],
    },
  ];

  return (
    <div className="project-card-container">
      <h1 className="page-title">My Favorite Projects</h1>
      <ul class="cards">
        {projectData.map((project, index) => (
          <>
            <li>
              <a href="" class="card">
                <img src={project.imgSrc} class="card__image" alt="" />
                <div class="card__overlay">
                  <div class="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <img class="card__thumb" src={project.thumbSrc} alt="" />
                    <div class="card__header-text">
                      <h3 class="card__title">{project.title}</h3>
                      <div className="tech-used">
                        {project.tech.map((tech, index) => (
                          <span className="tech" key={index}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <a href="#" className="button playstore">
                      <img src={playStoreIcon} alt="Play Store Icon" />
                      Live Link
                    </a>
                    <a href="#" className="button github">
                      <img src={githubIcon} alt="GitHub Icon" />
                      Code Link
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
