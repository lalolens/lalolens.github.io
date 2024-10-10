// src/components/Layout/Layout.tsx
import React, { useEffect, useRef } from 'react';
import { useGlobalState, useGlobalDispatch } from '../../context/globalHooks';
import { setNavbarScrolled } from '../../context/globalActions';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import useScrollHandler from '../../hooks/useScollHandler';

import './Layout.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Access global state

  const { isSidebarVisible, isSidebarExpanded } = useGlobalState();

  const NavbarPane: React.FC = () => (
    <div className="navbar-pane">
      <Navbar />
    </div>
  );

  const SidebarPane: React.FC = () => (
    <div className={`sidebar-pane ${isSidebarVisible ? 'visible' : ''} ${isSidebarExpanded ? 'expanded' : ''}`}>
      <Sidebar />
    </div>
  );

  const ContentPane: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // const containerRef = useRef<HTMLDivElement>(null);
    // useScrollHandler(containerRef);

    return (
      <div  className={`main-content-pane ${isSidebarVisible ? 'with-sidebar' : ''} ${isSidebarExpanded ? 'expanded' : ''}`}>
        {children}
      </div>
    );
  };

  return (
    <div className="layout-container">
      <NavbarPane />
      <SidebarPane />
      <ContentPane>{children}</ContentPane>
    </div>
  );
};

export default Layout;
