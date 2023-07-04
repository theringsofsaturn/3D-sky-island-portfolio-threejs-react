import React from "react";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../../assets/foxy_in_winterland/Scene";
import { OrbitControls } from "@react-three/drei";
import testimonial1 from "../../../public/testimonial1.png";
import testimonial2 from "../../../public/testimonial2.png";
import testimonial3 from "../../../public/testimonial3.png";
import imageLeft from "../../../public/plane_left.png";
import imageRight from "../../../public/plane_right.png";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonials-cards-container">
        <div className="testimonial-card">
          <img src={testimonial3} alt="Testimonial 1" />
        </div>
        <div className="testimonial-card">
          <img src={testimonial1} alt="Testimonial 2" />
        </div>
        <div className="testimonial-card">
          <img src={testimonial2} alt="Testimonial 3" />
        </div>
      </div>
      <img
        className="bottom-image-left"
        src={imageLeft}
        alt="Decorative Left"
      />
      <img
        className="bottom-image-right"
        src={imageRight}
        alt="Decorative Right"
      />

      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <OrbitControls />
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[50, 50, 20]} />
        <Fox
          position={[0, 0, 5]}
          rotation={[0, 0, 0]}
          scale={[0.3, 0.3, 0.3]}
        />
      </Canvas>
    </div>
  );
};

export default Testimonials;
