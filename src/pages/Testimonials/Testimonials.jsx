import React from "react";
import testimonial1 from "../../../public/testimonial1.png";
import testimonial2 from "../../../public/testimonial2.png";
import testimonial3 from "../../../public/testimonial3.png";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonials-cards-container">
        <div className="testimonial-card">
          <img src={testimonial1} alt="Testimonial 1" />
        </div>
        <div className="testimonial-card">
          <img src={testimonial2} alt="Testimonial 2" />
        </div>
        <div className="testimonial-card">
          <img src={testimonial3} alt="Testimonial 3" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
