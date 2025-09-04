import * as React from 'react';

export interface SubTreeContextValue {
  dropDownIcon?: React.ReactNode;
}

export const SubTreeContext = React.createContext<
  SubTreeContextValue | null | undefined
>(undefined);

SubTreeContext.displayName = 'SubTreeContext';

export const useSubTreeContext = () => {
  const context = React.useContext(SubTreeContext);
  if (!context) {
    throw new Error('useSubTreeContext must be used within a SubTree');
  }
  return context;
};
