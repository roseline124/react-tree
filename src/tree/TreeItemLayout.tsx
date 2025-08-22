import * as React from 'react';
import { useTreeItemContext } from './TreeItemContext';
import { cn } from '../utils/styles';

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
      className={cn(
        'flex items-center transition-colors duration-150 gap-1',
        itemType === 'branch' ? 'cursor-pointer' : 'cursor-default',
        className,
      )}
      onClick={itemType === 'branch' ? onToggle : undefined}
      {...props}
    >
      {itemType === 'branch' && (
        <span
          className={`inline-block transition-transform duration-200 ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          {dropDownIcon}
        </span>
      )}
      {children}
    </div>
  );
};
