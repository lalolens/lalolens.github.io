// src/context/globalHooks.ts

import { useContext } from 'react';
import { GlobalStateContext, GlobalDispatchContext } from './GlobalContext';
// import { Action } from './globalReducer';

// Custom hook to access global state
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};

// Custom hook to access global dispatch
export const useGlobalDispatch = () => {
  const context = useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error('useGlobalDispatch must be used within a GlobalProvider');
  }
  return context;
};
