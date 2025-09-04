import * as React from 'react';

export interface RootTreeContextValue {
  open?: boolean;
}

export const RootTreeContext = React.createContext<RootTreeContextValue | null>(
  {
    open: false,
  }
);

export const useRootTreeContext = () => {
  const context = React.useContext(RootTreeContext);
  if (!context) {
    throw new Error('useRootTreeContext must be used within a Tree');
  }
  return context;
};

RootTreeContext.displayName = 'RootTreeContext';
