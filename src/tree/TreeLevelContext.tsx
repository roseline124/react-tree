import * as React from 'react';

export interface TreeLevelContextValue {
  level: number;
}

export const TreeLevelContext = React.createContext<TreeLevelContextValue>({
  level: 0,
});

export const useTreeLevelContext = () => {
  return React.useContext(TreeLevelContext);
};

TreeLevelContext.displayName = 'TreeLevelContext';
