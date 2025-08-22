import * as React from 'react';
import { TreeItemContext } from './TreeItemContext';
import { useRootTreeContext } from './RootTreeContext';
import { cn } from '../utils/styles';

export interface TreeItemProps {
  itemType: 'leaf' | 'branch';
  children: React.ReactNode;
  className?: string;
  branchClassName?: string;
}

export const TreeItem = ({
  itemType,
  children,
  className = '',
  branchClassName = '',
}: TreeItemProps) => {
  const { open: defaultOpen } = useRootTreeContext();
  const [isOpen, setIsOpen] = React.useState(defaultOpen ?? false);

  const handleToggle = React.useCallback(() => {
    if (itemType === 'branch') {
      setIsOpen((prev) => !prev);
    }
  }, [itemType]);

  const contextValue = React.useMemo(
    () => ({
      itemType,
      isOpen,
      onToggle: handleToggle,
    }),
    [itemType, isOpen, handleToggle],
  );

  return (
    <TreeItemContext.Provider value={contextValue}>
      <div
        role="treeitem"
        aria-expanded={itemType === 'branch' ? isOpen : undefined}
        className={cn(itemType === 'branch' ? branchClassName : '', className)}
      >
        {React.Children.map(children, (child, index) => {
          if (index === 0) {
            // 첫 번째 자식은 TreeItemLayout (노드 자체)
            return child;
          } else if (index === 1 && itemType === 'branch') {
            // 두 번째 자식은 중첩된 Tree (자식들)
            return (
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: isOpen ? '2000px' : '0px',
                }}
              >
                {child}
              </div>
            );
          }
          return null;
        })}
      </div>
    </TreeItemContext.Provider>
  );
};
