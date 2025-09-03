import type { Meta, StoryObj } from '@storybook/react';
import { Tree, TreeItem, TreeItemLayout } from './index';

const meta: Meta<typeof Tree> = {
  title: 'Components/Tree',
  component: Tree,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the tree is expanded',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the tree container',
    },
    subTreeClassName: {
      control: 'text',
      description: 'Additional CSS classes for nested trees',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessibility label for the tree',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    'aria-label': 'File Explorer',
    children: (
      <>
        <TreeItem>
          <TreeItemLayout>Documents</TreeItemLayout>
          <Tree>
            <TreeItem>
              <TreeItemLayout>Work</TreeItemLayout>
              <Tree>
                <TreeItem>
                  <TreeItemLayout>Project A</TreeItemLayout>
                </TreeItem>
                <TreeItem>
                  <TreeItemLayout>Project B</TreeItemLayout>
                </TreeItem>
              </Tree>
            </TreeItem>
            <TreeItem>
              <TreeItemLayout>Personal</TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem>
          <TreeItemLayout>Downloads</TreeItemLayout>
        </TreeItem>
      </>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    'aria-label': 'Styled Tree',
    className: 'p-4 bg-gray-50 rounded-lg border',
    subTreeClassName: 'ml-6 border-l-2 border-blue-200 pl-4',
    children: (
      <>
        <TreeItem>
          <TreeItemLayout className="hover:bg-blue-100 p-2 rounded transition-colors">
            Documents
          </TreeItemLayout>
          <Tree>
            <TreeItem>
              <TreeItemLayout className="hover:bg-green-100 p-2 rounded transition-colors">
                Work
              </TreeItemLayout>
              <Tree>
                <TreeItem>
                  <TreeItemLayout className="hover:bg-yellow-100 p-2 rounded transition-colors">
                    Project A
                  </TreeItemLayout>
                </TreeItem>
                <TreeItem>
                  <TreeItemLayout className="hover:bg-yellow-100 p-2 rounded transition-colors">
                    Project B
                  </TreeItemLayout>
                </TreeItem>
              </Tree>
            </TreeItem>
          </Tree>
        </TreeItem>
      </>
    ),
  },
};

export const CollapsedTree: Story = {
  args: {
    open: false,
    'aria-label': 'Collapsed Tree',
    children: (
      <TreeItem>
        <TreeItemLayout>This tree is collapsed</TreeItemLayout>
        <Tree>
          <TreeItem>
            <TreeItemLayout>Hidden content</TreeItemLayout>
          </TreeItem>
        </Tree>
      </TreeItem>
    ),
  },
};
