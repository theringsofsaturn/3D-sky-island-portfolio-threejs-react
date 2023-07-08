import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../../components/Loader/Loader";
import { Fox } from "../../assets/fox/Scene";
import airplaneImage from "../../../public/airplane.png";
import emailIcon from "../../../public/email.svg";
import phoneIcon from "../../../public/phone.svg";
import github from "../../../public/github.svg";
import twitter from "../../../public/twitter.svg";
import linkedin from "../../../public/linkedin.svg";
import instagram from "../../../public/instagram.svg";
import youtube from "../../../public/youtube.svg";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [foxPosition, setFoxPosition] = useState([10, 0, -10.6]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setFoxPosition([2, 1, -7.6]); // set the position of the fox for mobile screens
      } else {
        setFoxPosition([10, 0, -10.6]); // set the default position for larger screens
      }
    };

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Bind the event listener
    window.addEventListener("resize", handleResize);

    // Unbind the event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array to ensure that effect is only run on mount and unmount

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

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
          setNotificationMessage("Message sent successfully");
          setCurrentAnimation("hit"); // play hit animation
          // Hide notification after 3 seconds
          setTimeout(() => setNotificationMessage(null), 3000);
        },
        (error) => {
          setNotificationMessage("Failed to send message");
          // Hide notification after 3 seconds
          setTimeout(() => setNotificationMessage(null), 3000);
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
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <label className="input-label">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Email"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <label className="input-label">Message</label>
              <textarea
                className="input-field-message"
                name="message"
                placeholder="Message"
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>

              <button
                type="submit"
                className="send-button"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                Send
              </button>
            </form>

            <div className="contact-info">
              <div className="social-icons">
                <a
                  href="https://github.com/theringsofsaturn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/emilian-kasemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://www.youtube.com/c/EmilianKasemi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="YouTube" />
                </a>
                <a
                  href="https://twitter.com/EmilianKasemi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="Twitter" />
                </a>
                <a
                  href="https://www.instagram.com/the_rings_of_saturn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>

              <p className="or-contact-via">Or Contact via:</p>

              <div className="contact-via">
                <div className="email-info">
                  <img src={emailIcon} alt="Email Icon" />
                  <p>emiliankasemi@email.com</p>
                </div>

                <div className="phone-info">
                  <img src={phoneIcon} alt="Phone Icon" />
                  <p>+355 68 809 7086</p>
                </div>
              </div>
            </div>
          </div>

          {notificationMessage && (
            <div className="notification">{notificationMessage}</div>
          )}

          {/* <img className="airplane-image" src={airplaneImage} alt="Airplane" /> */}
        </div>
        <div className="contact-canvas-container">
          <Canvas
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
              <Fox
                currentAnimation={currentAnimation}
                position={foxPosition} 
                rotation={[12.629, 5.254, 0]}
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
