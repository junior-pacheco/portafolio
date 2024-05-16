import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between gap-11 text-2xl bg-slate-800 p-4 relative">
      <Link to="/" className="text-white hover:underline">My portfolio</Link>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-4 bg-slate-800 border-gray-100 border p-2 rounded-md shadow-md">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" className="text-white text-xl hover:underline" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white text-xl  hover:underline" onClick={toggleMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white text-xl  hover:underline" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
      <nav className={`sm:flex sm:space-x-4 text-white mt-2 font-semibold hidden sm:block`}>
        <ul className="sm:flex space-x-4">
          <li className="block sm:inline">
            <Link to="/" className="hover:underline">About</Link>
          </li>
          <li className="block sm:inline">
            <Link to="/projects" className="hover:underline">Projects</Link>
          </li>
          <li className="block sm:inline">
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
