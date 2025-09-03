import type { Meta, StoryObj } from '@storybook/react-vite';
import { TreeData, TreeWithJson } from './TreeWithJson';

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

const sampleData = {
  'root leaf': {
    root: 'leaf',
  },
  customer: {
    'customer information': {
      name: 'roseline',
      birthday: '1980.01.01',
      gender: 'female',
    },
    address: {
      defaultAddress: 'seoul',
      detailAddress: '101-101',
    },
  },
} satisfies TreeData;

export const Default: Story = {
  render: () => (
    <TreeWithJson
      treeProps={{ open: true }}
      data={sampleData}
      renderTreeItem={({
        level: _level,
        key,
        value,
        itemType,
        keyPath: _keyPath,
      }) => (
        <div>
          [{itemType}] {key} {typeof value === 'string' ? `: ${value}` : ''}
        </div>
      )}
    />
  ),
};
