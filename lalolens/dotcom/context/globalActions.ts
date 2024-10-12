// src/context/globalActions.ts

export const TOGGLE_SIDEBAR_VISIBILITY = 'TOGGLE_SIDEBAR_VISIBILITY';
export const TOGGLE_SIDEBAR_EXPANSION = 'TOGGLE_SIDEBAR_EXPANSION';
export const SET_NAVBAR_SCROLLED = 'SET_NAVBAR_SCROLLED';
export const SET_MOBILE_MENU_VISIBILITY = 'SET_MOBILE_MENU_VISIBILITY';

export const toggleSidebarVisibility = () => ({ type: TOGGLE_SIDEBAR_VISIBILITY } as const);
export const toggleSidebarExpansion = () => ({ type: TOGGLE_SIDEBAR_EXPANSION } as const);
export const setNavbarScrolled = (isScrolled: boolean) => ({ type: SET_NAVBAR_SCROLLED, payload: isScrolled } as const);
export const setMobileMenuVisibility = (isVisible: boolean) => ({ type: SET_MOBILE_MENU_VISIBILITY, payload: isVisible } as const);
