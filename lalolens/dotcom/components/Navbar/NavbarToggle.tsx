// src/components/Navbar/NavbarToggle.tsx
import React from 'react';
import './Navbar.css';

interface NavbarToggleProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const NavbarToggle: React.FC<NavbarToggleProps> = ({ isOpen, toggleMenu }) => {

  console.log('isOpen in NavbarToggle:', isOpen);

  return (
    <button
      type="button"
      className={`navbar__toggle ${isOpen ? 'open' : ''}`}
      onClick={() => {
        console.log('Button clicked, toggling menu');
        toggleMenu()
      }}
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
