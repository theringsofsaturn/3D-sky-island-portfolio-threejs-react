import React from "react";
import { useRef } from "react";
import airplaneImage from "../../../public/airplane.png";
import emailIcon from "../../../public/email.svg";
import phoneIcon from "../../../public/phone.svg";
import github from "../../../public/github.svg";
import twitter from "../../../public/twitter.svg";
import linkedin from "../../../public/linkedin.svg";
import instagram from "../../../public/instagram.svg";
import emailjs from "emailjs-com";
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
          console.log(result.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
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

          <img className="airplane-image" src={airplaneImage} alt="Airplane" />
        </div>
      </div>
    </>
  );
};

export default Contact;
