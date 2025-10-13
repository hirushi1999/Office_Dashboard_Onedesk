import React, { useState,  useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../asset/logo.png";
import { IoIosColorPalette, IoIosNotifications } from "react-icons/io";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import ScrollToTop from './ScrollToTop';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const clickUser = () => {
    setShowDetails(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };


  const navLinks = (
    <>
      <NavLink to={""} className={({ isActive }) => isActive ? 'text-rose-800' : 'text-cyan-700 hover:text-slate-400'} end>DASHBOARD</NavLink>
      <NavLink to={"new"} className={({ isActive }) => isActive ? 'text-rose-800' : 'text-cyan-700 hover:text-slate-400'} end>NEWS & EVENTS</NavLink>
      <NavLink to={"project"} className={({ isActive }) => isActive ? 'text-rose-800' : 'text-cyan-700 hover:text-slate-400'} end>PROJECTS</NavLink>
      <NavLink to={"about"} className={({ isActive }) => isActive ? 'text-rose-800' : 'text-cyan-700 hover:text-slate-400'} end>BLOG</NavLink>
      <NavLink to={"contact"} className={({ isActive }) => isActive ? 'text-rose-800' : 'text-cyan-700 hover:text-slate-400'} end>REQUESTS</NavLink>
    </>
  );

  return (
    <>
      <header className='fixed shadow-md w-full h-16 px-4 z-50 bg-white dark:bg-gray-900 dark:text-white'>
        {/* Desktop */}
        <div className='flex items-center h-full justify-between'>

          <Link to={""}>
            <div className='h-20 ml-0'>
              <img src={logo} alt='logo' className='h-full' />
            </div>
          </Link>

          <div className='hidden md:flex justify-center w-full cursor-pointer'>
            <nav className='flex gap-4 md:gap-9 text-base font-medium'>
              <ScrollToTop />
              {navLinks}
            </nav>
          </div>

          <div className='flex items-center gap-4 md:gap-8 mr-2 cursor-pointer'>
            <div className='text-3xl text-cyan-500' title='Change Mode' onClick={toggleTheme}>
              <IoIosColorPalette />
            </div>
            <div className='text-3xl text-cyan-500 relative' title='Notifications'>
              <Link to={"https://mail.google.com/chat"} target="_blank" rel="noopener noreferrer">
                <IoIosNotifications />
                <p className='absolute -bottom-1 -right-1 text-white bg-red-500 w-4 rounded-full text-xs text-center'>10</p>
              </Link>
            </div>
            <div className='text-3xl text-cyan-500' title='User Info' onClick={clickUser}>
              <FaUserAlt />
            </div>
            {/* Hamburger - Mobile */}
            <div className='text-2xl md:hidden text-cyan-700' onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          {showDetails && (
            <div className="absolute top-16 right-0 bg-white shadow-lg rounded p-2 w-60 z-50">
              <h2 className="text-center text-slate-600 text-lg font-semibold mb-2">User Details</h2>
              <p className='text-cyan-600'><strong className='text-slate-600'>Name:</strong> Hirushi Nethmini</p>
              <p className='text-cyan-600'><strong className='text-slate-600'>Role:</strong> Software Engineer</p>
            </div>
          )}
        </div>

        {mobileMenuOpen && (
          <div className='md:hidden bg-white px-4 pb-4 pt-2 shadow-md z-40'>
            <nav className='flex flex-col gap-3 text-base font-medium'>
              {navLinks}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
