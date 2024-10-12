// src/components/Navbar/MobilePopup.tsx
import React, { ReactNode } from 'react';
import './Navbar.css';
// import './MobilePopup.css'; // Import your styles

interface MobilePopupProps {
  isOpen: boolean;
  closeMenu: () => void;
  children?: ReactNode; // Accept children
}

const MobilePopup: React.FC<MobilePopupProps> = ({ isOpen, closeMenu, children }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-popup" onClick={closeMenu}>
      {children} {/* Render the children (NavbarLinks) */}
    </div>
  );
};

export default MobilePopup;
