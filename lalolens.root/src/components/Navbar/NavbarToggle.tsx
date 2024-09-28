// src/components/Navbar/NavbarToggle.tsx
import React from 'react';

interface NavbarToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className={`navbar__toggle ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
      aria-label="Toggle navigation"
      aria-expanded={isOpen}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
  );
};

export default NavbarToggle;
