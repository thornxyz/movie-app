import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';

function NavbarWrapper({ children }) {
  const location = useLocation();
  const showNavbarOnPages = ['/', '/location', '/ticket', '/user'];

  return (
    <>
      {showNavbarOnPages.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
}

export default NavbarWrapper;
