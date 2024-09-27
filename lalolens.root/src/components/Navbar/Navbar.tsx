// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Import the logo image
import logo from '../../assets/lalolenslogo.svg'; // Ensure the path is correct

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Adjust the scroll offset as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Skip to content link */}
      <a href="#main-content" className="skip-link">Skip to content</a>
      
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`navbar__toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="navbar-links"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links */}
      <ul className={`navbar__links ${isOpen ? 'active' : ''}`} id="navbar-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            aria-label="Home"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            aria-label="About Us"
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
            aria-label="Our Projects"
            onClick={closeMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}
            aria-label="Contact Us"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    
    {/* Backdrop */}
    {isOpen && <div className="backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
