import React from 'react';
import Timeline from './Timeline';
import ProjectCard from './ProjectCard';
import BlogCard from './BlogCard';
import './ModalContent.css';

const ModalContent = ({ mesh }) => {
  if (mesh && mesh.name === 'About Me') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">About Me</h2>
        <Timeline />
      </div>
    );
  }

  if (mesh && mesh.name === 'My Blog Posts') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">My Blog Posts</h2>
        <BlogCard title="Blog Post 1" date="June 23, 2023" />
        <BlogCard title="Blog Post 2" date="May 18, 2023" />
      </div>
    );
  }

  if (mesh && mesh.name === 'My Projects') {
    return (
      <div className="modal-content">
        <h2 className="modal-heading">My Projects</h2>
        <ProjectCard title="Project 1" technologies="React, Node.js" />
        <ProjectCard title="Project 2" technologies="Python, Django" />
      </div>
    );
  }

  return (
    <div className="modal-content">
      <h2 className="modal-heading">{mesh.name}</h2>
      <p>Content for {mesh.name}...</p>
    </div>
  );
};

export default ModalContent;
