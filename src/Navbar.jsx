import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeCircle } from 'react-icons/bi';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex justify-between items-center px-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md z-10">
      <h1 className="text-white cursor-pointer flex items-center gap-2 transform hover:scale-105 transition-transform">
        <BiHomeCircle size={30} className="animate-spin-slow" />
        <span className="text-2xl font-semibold">3D Portfolio</span>
      </h1>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        <Link
          to="/"
          className="text-white py-2 px-6 rounded-xl hover:bg-white hover:text-black transition-colors"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;