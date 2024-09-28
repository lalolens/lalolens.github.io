// src/components/Navbar/NavbarLogo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
// import { useGlobalDispatch } from '../../context/globalHooks';
// import { toggleSidebarVisibility } from '../../context/globalActions';
import logo from '../../assets/lalolenslogo.svg';

const NavbarLogo: React.FC = () => {
  // const dispatch = useGlobalDispatch();

  // Click handler to toggle the sidebar
  const handleLogoClick = () => {
    // dispatch(toggleSidebarVisibility());
  };

  return (
    <div className="navbar__logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
