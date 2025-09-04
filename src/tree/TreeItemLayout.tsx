import * as React from 'react';
import { useTreeItemContext } from './TreeItemContext';
import './TreeItemLayout.css';
import { useRootTreeContext } from './RootTreeContext';

export interface TreeItemLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const TreeItemLayout = ({
  children,
  className = '',
  ...props
}: TreeItemLayoutProps) => {
  const { itemType, isOpen, onToggle, level } = useTreeItemContext();
  const { dropDownIcon } = useRootTreeContext();

  return (
    <div
      className={`tree-item-layout ${
        itemType === 'branch'
          ? 'tree-item-layout-branch'
          : 'tree-item-layout-leaf'
      } ${className}`}
      onClick={itemType === 'branch' ? onToggle : undefined}
      data-level={level}
      style={{ paddingLeft: `${level * 1.5}rem` }}
      {...props}
    >
      {itemType === 'branch' && (
        <span
          className={`drop-down-icon ${
            isOpen ? 'drop-down-icon-open' : 'drop-down-icon-closed'
          }`}
        >
          {dropDownIcon}
        </span>
      )}
      {children}
    </div>
  );
};
