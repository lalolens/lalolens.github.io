// src/components/Navbar/Navbar.tsx
import React from 'react';
import { useGlobalState, useGlobalDispatch } from '../../context/globalHooks';
import { setMobileMenuVisibility } from '../../context/globalActions';
import NavbarLogo from './NavbarLogo';
import NavbarToggle from './NavbarToggle';
import NavbarLinks from './NavbarLinks';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { isMobileMenuVisible } = useGlobalState();
  const dispatch = useGlobalDispatch();

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
