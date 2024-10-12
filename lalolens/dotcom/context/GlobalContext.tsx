// src/context/GlobalContext.tsx
/**
 * GlobalContext.tsx
 * Provides the context provider and combines the reducer, state, and dispatch.
 */

import React, { createContext, useReducer, ReactNode } from 'react';
import { globalReducer, initialState, GlobalState, Action } from './globalReducer';

// Create the contexts
export const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
export const GlobalDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

// Create the provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
