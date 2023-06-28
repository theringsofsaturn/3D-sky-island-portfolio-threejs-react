import { Html } from "@react-three/drei";

import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <Html>
      <div className="loader-container">
        <div className="loader-circle" />
      </div>
    </Html>
  );
};

export default Loader;
