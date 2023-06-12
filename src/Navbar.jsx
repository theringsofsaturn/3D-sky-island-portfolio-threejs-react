// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiHomeCircle } from 'react-icons/bi';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const Logo = styled.h1`
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <BiHomeCircle size={30} />
        3D Portfolio
      </Logo>
      <NavLinks>
        <NavLink to="/room1">Room 1</NavLink>
        <NavLink to="/room2">Room 2</NavLink>
        <NavLink to="/room3">Room 3</NavLink>
        <NavLink to="/room4">Room 4</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;