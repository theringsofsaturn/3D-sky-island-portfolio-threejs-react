import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("Toggling sidebar"); // Add this log statement for debugging
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="compass-icon" onClick={toggleSidebar}>
        {/* Add compass icon or image here */}
        <img
          src="https://th.bing.com/th/id/R.bc0bd051ebd9c504b2f5840fd23b4499?rik=Z2UC7XIwAaPGvw&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2ffarmville%2fimages%2fb%2fb3%2fPirates_Compass-icon.png%2frevision%2flatest%3fcb%3d20130415034238&ehk=XuDkt55JPsM4qCJ4RfOkwScbN6IByNs7xA3mVnuDHgY%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
    </>
  );
};

export default Navbar;
