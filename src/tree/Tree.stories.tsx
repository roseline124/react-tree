import type { Meta, StoryObj } from '@storybook/react-vite';
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
    'aria-label': 'Default',
    children: (
      <Tree aria-label="Default" open>
        <TreeItem itemType="leaf">
          <TreeItemLayout>customer id: 1234567890</TreeItemLayout>
        </TreeItem>
        <TreeItem itemType="branch">
          <TreeItemLayout>customer information</TreeItemLayout>
          <Tree className="ml-4">
            <TreeItem itemType="leaf">
              <TreeItemLayout>name: roseline</TreeItemLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
              <TreeItemLayout>birthday: 1980.01.01</TreeItemLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
              <TreeItemLayout>gender: female</TreeItemLayout>
            </TreeItem>
          </Tree>
        </TreeItem>
        <TreeItem itemType="branch">
          <TreeItemLayout>address</TreeItemLayout>
          <Tree>
            <TreeItem itemType="branch">
              <TreeItemLayout>default address: seoul</TreeItemLayout>
              <Tree>
                <TreeItem itemType="leaf">
                  <TreeItemLayout>detail address: 101-101</TreeItemLayout>
                </TreeItem>
              </Tree>
            </TreeItem>
          </Tree>
        </TreeItem>
      </Tree>
    ),
  },
};
