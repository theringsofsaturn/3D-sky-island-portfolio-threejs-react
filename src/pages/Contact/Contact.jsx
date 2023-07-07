import React, { useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Fox } from "../../assets/fox/Scene";
import airplaneImage from "../../../public/airplane.png";
import emailIcon from "../../../public/email.svg";
import phoneIcon from "../../../public/phone.svg";
import github from "../../../public/github.svg";
import twitter from "../../../public/twitter.svg";
import linkedin from "../../../public/linkedin.svg";
import instagram from "../../../public/instagram.svg";
import emailjs from "emailjs-com";
import useGUI from "../../useGUI";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "emiliankasemi@gmail.com",
        "template_m5l6wr2",
        form.current,
        "5zVfhEo2E4976_CIU"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <h1 className="contact-title">Get in Touch</h1>

          <div className="contact-content">
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <label className="input-label">Name</label>
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Name"
              />

              <label className="input-label">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Email"
              />

              <label className="input-label">Message</label>
              <textarea
                className="input-field-message"
                name="message"
                placeholder="Message"
              ></textarea>

              <button type="submit" className="send-button">
                Send
              </button>
            </form>

            <div className="contact-info">
              <div className="social-icons">
                <img src={github} alt="GitHub" />
                <img src={twitter} alt="Twitter" />
                <img src={linkedin} alt="LinkedIn" />
                <img src={instagram} alt="Instagram" />
              </div>

              <p className="or-contact-via">Or Contact via:</p>

              <div className="email-info">
                <img src={emailIcon} alt="Email Icon" />
                <p>example@email.com</p>
              </div>

              <div className="phone-info">
                <img src={phoneIcon} alt="Phone Icon" />
                <p>+123 456 7890</p>
              </div>
            </div>
          </div>

          {/* <img className="airplane-image" src={airplaneImage} alt="Airplane" /> */}
        </div>
        <div className="canvas-container">
          <Canvas
            className="react-three-canvas"
            camera={{
              position: [-0.8, -10.6, -30.2],
              rotation: [0, 11.8, 0],
              scale: [1, 1, 1],
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

            <Suspense fallback={<Loader />}>
              <Fox
                position={[9, -8.2, -35.2]}
                rotation={[0, 11, 0]}
                scale={[1, 1, 1]}
              />
              <Fox
                position={[17, -11, -35.2]}
                rotation={[12.629, 10.7, 0]}
                scale={[2, 2, 2]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Contact;
