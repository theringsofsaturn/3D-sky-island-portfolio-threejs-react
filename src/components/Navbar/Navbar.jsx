import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onLinkClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (event) => {
    event.stopPropagation(); // to prevent the click event from firing the audio and animation
    event.preventDefault();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (linkName) => {
    onLinkClick(linkName);
  };

  return (
    <>
      <div
        className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul>
          <li onClick={() => handleLinkClick("About Me")}>About Me</li>
          <li onClick={() => handleLinkClick("My Projects")}>My Projects</li>
          <li onClick={() => handleLinkClick("My Socials")}>My Socials</li>
        </ul>
        <a href="mailto: emiliankasemi@gmail.com">Contact</a>
      </div>

      <div className="compass-icon" onClick={toggleSidebar}>
        <img
          src="https://th.bing.com/th/id/R.bc0bd051ebd9c504b2f5840fd23b4499?rik=Z2UC7XIwAaPGvw&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2ffarmville%2fimages%2fb%2fb3%2fPirates_Compass-icon.png%2frevision%2flatest%3fcb%3d20130415034238&ehk=XuDkt55JPsM4qCJ4RfOkwScbN6IByNs7xA3mVnuDHgY%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
    </>
  );
};

export default Navbar;
