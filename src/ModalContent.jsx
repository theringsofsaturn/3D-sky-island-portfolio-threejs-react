import React from 'react';
import './ModalContent.css';

const ModalContent = ({ mesh }) => {
  if (mesh && mesh.name === 'Mesh 1') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">About Me</h2>
        <p className="modal-text">Here is some information about me...</p>
        <ul className="modal-list">
          <li>My Experience</li>
          <li>My Skills</li>
          <li>My Hobbies</li>
        </ul>
      </div>
    );
  }

  if (mesh && mesh.name === 'Mesh 2') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">My Blog Posts</h2>
        <p className="modal-text">Here is some of my blog...</p>
        <ul className="modal-list">
          <li>My Experience</li>
          <li>My Skills</li>
          <li>My Hobbies</li>
        </ul>
        {/* //TODO Add any other content or components related to "Mesh 2" */}
      </div>
    );
  }

  if (mesh && mesh.name === 'Mesh 3') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">My Projects</h2>
        <p className="modal-text">Here are some of my projects...</p>
        <ul className="modal-list">
          <li>My Experience</li>
          <li>My Skills</li>
          <li>My Hobbies</li>
        </ul>
        {/* //TODO Add any other content or components related to "Mesh 3" */}
      </div>
    );
  }

  // For all other meshes
  //   return (
  //     <div className="modal-content">
  //       <p>Default content for all other meshes...</p>
  //     </div>
  //   );
};

export default ModalContent;
