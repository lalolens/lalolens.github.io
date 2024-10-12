// src/context/globalReducer.ts

export type GlobalState = {
    isSidebarVisible: boolean;  // Updated to handle visibility state
    isSidebarExpanded: boolean; // Retain the option for future expansion
    isNavbarScrolled: boolean;
    isMobileMenuVisible: boolean;
  };
  
  // Action Types
  export type Action =
    | { type: 'TOGGLE_SIDEBAR_VISIBILITY' }
    | { type: 'TOGGLE_SIDEBAR_EXPANSION' }
    | { type: 'SET_NAVBAR_SCROLLED'; payload: boolean }
    | { type: 'SET_MOBILE_MENU_VISIBILITY'; payload: boolean };
  
  export const initialState: GlobalState = {
    isSidebarVisible: false,
    isSidebarExpanded: false,
    isNavbarScrolled: false,
    isMobileMenuVisible: false,
  };
  
  // Reducer function
  export const globalReducer = (state: GlobalState, action: Action): GlobalState => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR_VISIBILITY':
        return { ...state, isSidebarVisible: !state.isSidebarVisible };
      case 'TOGGLE_SIDEBAR_EXPANSION':
        return { ...state, isSidebarExpanded: !state.isSidebarExpanded };
      case 'SET_NAVBAR_SCROLLED':
        return { ...state, isNavbarScrolled: action.payload };
      case 'SET_MOBILE_MENU_VISIBILITY':
        return { ...state, isMobileMenuVisible: action.payload };
      default:
        return state;
    }
  };
      