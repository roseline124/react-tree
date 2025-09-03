import * as React from 'react';
import { useTreeItemContext } from './TreeItemContext';
import './TreeItemLayout.css';

export interface TreeItemLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  dropDownIcon?: React.ReactNode;
}

export const TreeItemLayout = ({
  children,
  className = '',
  dropDownIcon = '▶',
  ...props
}: TreeItemLayoutProps) => {
  const { itemType, isOpen, onToggle } = useTreeItemContext();

  return (
    <div
      className={`tree-item-layout ${
        itemType === 'branch'
          ? 'tree-item-layout-branch'
          : 'tree-item-layout-leaf'
      } ${className}`}
      onClick={itemType === 'branch' ? onToggle : undefined}
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
