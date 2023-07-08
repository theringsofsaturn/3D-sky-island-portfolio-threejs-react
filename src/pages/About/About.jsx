import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { CartoonPlane } from "../../assets/the_cartoon_plane/Scene";
import Loader from "../../components/Loader/Loader";
import profilePic from "../../../public/profile_pic.png";
import vectorImg from "../../../public/vector.svg";
import white_circle from "../../../public/circle.svg";
import { skillIcons } from "../../configs/skillIcons";
import "./About.css";

function About() {
  return (
    <div className="about-me-card">
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
      <div className="about-canvas-container">
        <Canvas
          className="react-three-canvas"
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

          <Suspense fallback={<Loader />}>
            <CartoonPlane
              position={[1.84, -58.7, -8]} // or X axis 1.84 , Y axis -58.7 
              rotation={[0.02, 2.947, 0]} // or Y axis 2.576
              scale={[5, 5, 5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default About;
