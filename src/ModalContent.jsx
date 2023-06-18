import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';
// import './ModalContent.css';

const StyledCard = styled(Card)`
  background-color: #3f51b5;
  color: #fff;
`;

const ModalContent = ({ mesh }) => {
  if (mesh && mesh.name === 'About Me') {
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

  if (mesh && mesh.name === 'My Blog Posts') {
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

  if (mesh && mesh.name === 'My Projects') {
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

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {mesh.name}
        </Typography>
        {/* ... remaining contents ... */}
      </CardContent>
    </StyledCard>
  );

  // For all other meshes
  //   return (
  //     <div className="modal-content">
  //       <p>Default content for all other meshes...</p>
  //     </div>
  //   );
};

export default ModalContent;
