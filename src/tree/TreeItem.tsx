import * as React from 'react';
import { useRootTreeContext } from './RootTreeContext';
import './TreeItem.css';
import { TreeItemContext } from './TreeItemContext';
import { useTreeLevelContext } from './TreeLevelContext';

export interface TreeItemProps {
  itemType: 'leaf' | 'branch';
  children: React.ReactNode;
  className?: string;
}

export const TreeItem = ({
  itemType,
  children,
  className = '',
}: TreeItemProps) => {
  const { open: defaultOpen } = useRootTreeContext();
  const { level } = useTreeLevelContext();
  const [isOpen, setIsOpen] = React.useState(defaultOpen ?? false);

  const handleToggle = React.useCallback(() => {
    if (itemType === 'branch') {
      setIsOpen(prev => !prev);
    }
  }, [itemType]);

  const contextValue = React.useMemo(
    () => ({
      itemType,
      isOpen,
      onToggle: handleToggle,
      level,
    }),
    [itemType, isOpen, handleToggle, level]
  );

  return (
    <TreeItemContext.Provider value={contextValue}>
      <div
        role="treeitem"
        aria-expanded={itemType === 'branch' ? isOpen : undefined}
        className={`tree-item ${className}`}
      >
        {React.Children.map(children, (child, childIndex) => {
          if (childIndex === 0) {
            // 첫 번째 자식은 TreeItemLayout (노드 자체)
            return child;
          } else if (childIndex === 1 && itemType === 'branch') {
            // 두 번째 자식은 중첩된 Tree (자식들)
            return (
              <div
                className="tree-item-subtree"
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
