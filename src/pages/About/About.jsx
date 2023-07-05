import React from "react";
import profilePic from "../../../public/profile_pic.png";
import vectorImg from "../../../public/vector.svg";
import white_circle from "../../../public/circle.svg";
import { skillIcons } from "../../configs/skillIcons";
import "./About.css";

function About({ onNext }) {
  return (
    <div className="about-me-cardgit">
      <div className="about-me-group">
        <h1 className="about-me-title">About Me</h1>
        <div className="about-me-profile-section">   
          <img
            className="about-me-profile-picture"
            src={profilePic}
            alt="Profile"
          />
          <div className="about-me-greetings">
            <span className="about-me-hi">Hi, I am </span>
            <span className="about-me-name">Emilian Kasemi</span>

            <img
              className="about-me-vector-image"
              src={vectorImg}
              alt="Arrow"
            />
          </div>
        </div>
        <div className="about-me-description">
          <p>
            Hi, I am Emilian Kasemi. I am a Software Engineer.I am from Albania.
            Front-End Engineer / Creative Developer / Game Developer Seeking to
            take the next step in my career, I am constantly updating my
            expertise, from Web Development to Game Design. Currently, I am
            working as a Front-End Engineer at OMRT. OMRT builds a Deep Tech
            design platform for real estate development. The product of OMRT is
            a collection of architectural design, physics, finance, and material
            modules that are connected within one digital brain.
          </p>
        </div>

        <div className="about-me-skills">
          <h2 className="skills-title">My Skills</h2>
          <div className="skills-wrapper">
            {skillIcons.map((skillIcon, index) => (
              <div key={index} className="skill-circle-wrapper">
                <div
                  className="skill-circle"
                  style={{ backgroundImage: `url(${white_circle})` }}
                >
                  <img
                    className="skill-icon"
                    src={skillIcon}
                    alt={`skill-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
