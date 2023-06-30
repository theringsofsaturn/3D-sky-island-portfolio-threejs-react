import React from "react";
import profilePic from "../../../public/profile_pic.png";
import vectorImg from "../../../public/vector.svg";
import arrowNext from "../../../public/arrow_next.svg";
import "./AboutMeCard.css";

function AboutMeCard({ onNext }) {
  return (
    <div className="about-me-card">
      <div className="about-me-group">
        <h1 className="about-me-title">About me</h1>
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
        <button className="about-me-next-button" onClick={onNext}>
          Next
          <img src={arrowNext} alt="Next arrow icon" />
        </button>
      </div>
    </div>
  );
}

export default AboutMeCard;
