import React from 'react';

const ModalContent = ({ mesh }) => {
  if (mesh === 'Mesh 1') {
    return (
      <div className="modal-content">
        <h2>About Me</h2>
        <p>Here is some information about me...</p>
        {/* //TODO Add any other content or components related to "Mesh 1" */}
      </div>
    );
  }

  if (mesh === 'Mesh 2') {
    return (
      <div className="modal-content">
        <h2>My Blog Posts</h2>
        <p>Here are some of my blog posts...</p>
        {/* //TODO Add any other content or components related to "Mesh 2" */}
      </div>
    );
  }

  if (mesh === 'Mesh 3') {
    return (
      <div className="modal-content">
        <h2>My Projects</h2>
        <p>Here are some of my projects...</p>
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
