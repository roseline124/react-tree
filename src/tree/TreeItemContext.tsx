import * as React from 'react';

export interface TreeItemContextValue {
  itemType: 'leaf' | 'branch';
  isOpen: boolean;
  onToggle: () => void;
  level: number;
}

export const TreeItemContext = React.createContext<TreeItemContextValue | null>(
  null
);

export const useTreeItemContext = () => {
  const context = React.useContext(TreeItemContext);
  if (!context) {
    throw new Error('useTreeItemContext must be used within a TreeItem');
  }
  return context;
};

TreeItemContext.displayName = 'TreeItemContext';
