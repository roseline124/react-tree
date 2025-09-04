import * as React from 'react';
import { RootTreeContext } from './RootTreeContext';
import { SubTreeContext } from './SubTreeContext';

// Tree 컴포넌트의 Props 타입
export interface TreeProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  children: React.ReactNode;
  open?: boolean;
  dropDownIcon?: React.ReactNode;
  className?: string;
}

// Tree 컴포넌트
export const Tree = (props: TreeProps) => {
  const isRoot = React.useContext(SubTreeContext) === undefined;

  return isRoot ? <RootTree {...props} /> : <SubTree {...props} />;
};

const RootTree = ({
  children,
  open,
  dropDownIcon = '▶',
  className = '',
  ...props
}: TreeProps) => {
  return (
    <RootTreeContext.Provider value={{ open }}>
      <SubTreeContext.Provider value={{ dropDownIcon }}>
        <div role="tree" className={className} {...props}>
          {children}
        </div>
      </SubTreeContext.Provider>
    </RootTreeContext.Provider>
  );
};

const SubTree = ({
  children,
  className = '',
  dropDownIcon,
  ...props
}: TreeProps) => {
  return (
    <SubTreeContext.Provider value={{ dropDownIcon }}>
      <div role="tree" className={className} {...props}>
        {children}
      </div>
    </SubTreeContext.Provider>
  );
};
