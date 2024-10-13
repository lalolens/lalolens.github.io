// src/components/Navbar/NavbarLinks.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.css';

interface NavbarLinksProps {
  closeMenu: () => void;
  isMobileMenuVisible: boolean;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ closeMenu, isMobileMenuVisible }) => {
  const location = useLocation();

  return (
    <ul className={`navbar__links ${isMobileMenuVisible ? 'active' : ''}`}>
      {['/', '/about', '/projects', '/contact', "/assistant"].map((path, index) => (
        <li key={index}>
          <Link
            to={path}
            className={location.pathname === path ? 'active' : ''}
            aria-label={path === '/' ? 'Home' : path.replace('/', '')}
            onClick={closeMenu}
          >
            {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
