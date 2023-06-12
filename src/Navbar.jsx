// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-12 bg-black bg-opacity-80 z-10">
      <h1 className="text-white cursor-pointer flex items-center gap-2">
        <BiHomeCircle size={30} />
        3D Portfolio
      </h1>
      <div className="flex gap-8 overflow-auto">
        <Link to="/room1" className="text-white hover:text-gray-300">
          Room 1
        </Link>
        <Link to="/room2" className="text-white hover:text-gray-300">
          Room 2
        </Link>
        <Link to="/room3" className="text-white hover:text-gray-300">
          Room 3
        </Link>
        <Link to="/room4" className="text-white hover:text-gray-300">
          Room 4
        </Link>
      </div>
    </div>
  );
};

export default Navbar;