import React, { useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../../public/cross.svg";
import menuIcon from "../../../public/hambuger.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen ? (
        <div
          className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="navbar-close-icon" onClick={toggleSidebar}>
            <img src={closeIcon} alt="close icon" />
          </div>
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                3D Scene
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleSidebar}>
                My Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleSidebar}>
                Get in Touch
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={toggleSidebar}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="compass-icon" onClick={toggleSidebar}>
          <img src={menuIcon} alt="Menu" />
        </div>
      )}
    </>
  );
};

export default Navbar;
