import { Tree, TreeProps } from "./Tree";
import { TreeItem, TreeItemProps } from "./TreeItem";
import { TreeItemLayout, TreeItemLayoutProps } from "./TreeItemLayout";

export type TreeData = Record<string, any | Record<string, any>>;

export interface TreeWithJson extends RenderTreeProps {}

export const TreeWithJson = ({
  treeProps,
  ...renderTreeProps
}: TreeWithJson) => {
  return (
    <Tree {...treeProps}>{renderTree({ treeProps, ...renderTreeProps })}</Tree>
  );
};

interface getTreeItemLayoutPropsParams {
  level: number;
  key: string;
  value: TreeData;
  itemType: "leaf" | "branch";
}

interface RenderTreeItemProps {
  level: number;
  key: string;
  value: TreeData;
  itemType: "leaf" | "branch";
  keyPath: string[];
}

export interface RenderTreeProps {
  data: TreeData;
  renderTreeItem: (params: RenderTreeItemProps) => React.ReactNode;
  getTreeItemLayoutProps?: (
    params: getTreeItemLayoutPropsParams
  ) => Omit<TreeItemLayoutProps, "children">;
  treeItemProps?: Omit<TreeItemProps, "children" | "itemType">;
  treeProps?: Omit<TreeProps, "children">;
  checkIsLeaf?: (value: TreeData) => boolean;
}

const renderTree = (
  props: RenderTreeProps,
  level = 0,
  keyPath: string[] = []
) => {
  const {
    data,
    renderTreeItem,
    treeProps,
    treeItemProps,
    getTreeItemLayoutProps,
    checkIsLeaf,
  } = props;
  return Object.entries(data).map(([key, value]) => {
    const isLeaf = checkIsLeaf ? checkIsLeaf(value) : typeof value !== "object";

    const id = JSON.stringify(value).slice(1, -1);

    const treeItemLayoutProps =
      getTreeItemLayoutProps?.({
        level,
        key,
        value,
        itemType: isLeaf ? "leaf" : "branch",
      }) ?? {};
    if (isLeaf) {
      return (
        <TreeItem key={`${key}-${id}`} itemType="leaf" {...treeItemProps}>
          <TreeItemLayout {...treeItemLayoutProps}>
            {renderTreeItem({
              level,
              key,
              value,
              itemType: "leaf",
              keyPath: [...keyPath, key],
            })}
          </TreeItemLayout>
        </TreeItem>
      );
    }

    return (
      <TreeItem key={`${key}-${id}`} itemType="branch" {...treeItemProps}>
        <TreeItemLayout {...treeItemLayoutProps}>
          {renderTreeItem({
            level,
            key,
            value,
            itemType: "branch",
            keyPath: [...keyPath, key],
          })}
        </TreeItemLayout>
        <Tree {...treeProps}>
          {renderTree({ ...props, data: value }, level + 1, [...keyPath, key])}
        </Tree>
      </TreeItem>
    );
  });
};
