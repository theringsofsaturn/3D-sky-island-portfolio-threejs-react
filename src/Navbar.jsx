import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarContainer = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: rgba(
    53,
    45,
    60,
    0.8
  ); // A transparent dark tone, similar to the walls color
`;

const Logo = styled(motion.h1)`
  font-size: 1.5em;
  color: rgb(92, 177, 239); // Text color similar to our lights
  cursor: pointer;
`;

const NavbarItems = styled(motion.div)`
  display: flex;
  gap: 15px;
`;

const NavbarItem = styled(motion.button)`
  background: transparent;
  border: none;
  color: rgb(92, 177, 239); // Text color similar to our lights
  font-size: 1.2em;
  cursor: pointer;

  &:hover {
    color: rgb(
      90,
      193,
      77
    ); // Green color on hover, similar to our bedsheet and Japanese symbol
  }
`;

const Navbar = ({ meshes, selectMesh }) => {
  return (
    <NavbarContainer
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <Logo>My Room</Logo>
      <NavbarItems>
        {meshes.map((mesh, index) => (
          <NavbarItem
            key={index}
            onClick={() => selectMesh(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mesh.name}
          </NavbarItem>
        ))}
      </NavbarItems>
    </NavbarContainer>
  );
};

export default Navbar;
