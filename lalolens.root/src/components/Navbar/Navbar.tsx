// src/components/Navbar/Navbar.tsx
import React, { useEffect } from 'react';
import { useGlobalState, useGlobalDispatch } from '../../context/globalHooks';
import { setMobileMenuVisibility, setNavbarScrolled } from '../../context/globalActions';
import NavbarLogo from './NavbarLogo';
import NavbarToggle from './NavbarToggle';
import NavbarLinks from './NavbarLinks';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isMobileMenuVisible } = useGlobalState();
  const dispatch = useGlobalDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      dispatch(setNavbarScrolled(offset > 50));
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div className={`navbar-container`}>
      <nav className={`navbar`}>
        <NavbarLogo />
        <NavbarToggle isOpen={isMobileMenuVisible} toggleMenu={() => dispatch(setMobileMenuVisibility(!isMobileMenuVisible))} />
        <NavbarLinks isMobileMenuVisible={isMobileMenuVisible} closeMenu={() => dispatch(setMobileMenuVisibility(false))} />
      </nav>
      {isMobileMenuVisible && <div className="backdrop" onClick={() => dispatch(setMobileMenuVisibility(false))} />}
    </div>
  );
};

export default Navbar;
