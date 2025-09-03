import type { Meta, StoryObj } from '@storybook/react';
import { TreeWithJson } from './index';

const meta: Meta<typeof TreeWithJson> = {
  title: 'Components/TreeWithJson',
  component: TreeWithJson,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    id: '1',
    label: 'Documents',
    children: [
      {
        id: '2',
        label: 'Work',
        children: [
          { id: '3', label: 'Project A', children: [] },
          { id: '4', label: 'Project B', children: [] },
        ],
      },
      {
        id: '5',
        label: 'Personal',
        children: [
          { id: '6', label: 'Photos', children: [] },
          { id: '7', label: 'Videos', children: [] },
        ],
      },
    ],
  },
  {
    id: '8',
    label: 'Downloads',
    children: [
      { id: '9', label: 'Software', children: [] },
      { id: '10', label: 'Documents', children: [] },
    ],
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    renderItem: ({ item, level }: { item: any; level: number }) => (
      <div className="p-2 hover:bg-gray-100 rounded">
        {item.label} (Level: {level})
      </div>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    data: sampleData,
    className: 'p-4 bg-blue-50 rounded-lg border border-blue-200',
    renderItem: ({ item, level }: { item: any; level: number }) => (
      <div className="p-3 hover:bg-blue-100 rounded transition-colors border-l-4 border-blue-300 ml-4">
        <span className="font-medium">{item.label}</span>
        <span className="text-sm text-gray-500 ml-2">Level {level}</span>
      </div>
    ),
  },
};

export const FileIcons: Story = {
  args: {
    data: sampleData,
    renderItem: ({ item }: { item: any }) => (
      <div className="p-2 hover:bg-gray-100 rounded flex items-center gap-2">
        <span className="text-gray-500">
          {item.children && item.children.length > 0 ? '📁' : '📄'}
        </span>
        <span>{item.label}</span>
        <span className="text-xs text-gray-400 ml-auto">
          {item.children?.length || 0} items
        </span>
      </div>
    ),
  },
};
