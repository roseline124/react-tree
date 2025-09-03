# React Tree Component

A customizable, accessible React Tree component built with TypeScript. This component provides a flexible tree structure that can be easily integrated into any React application.

## Features

- 🌳 **Flexible Tree Structure**: Support for nested tree items with unlimited depth
- ♿ **Accessibility**: Built with ARIA attributes and keyboard navigation support
- 🎨 **Customizable**: Easy to style and customize
- 📱 **Responsive**: Works seamlessly across different screen sizes
- 🔧 **TypeScript**: Full TypeScript support with comprehensive type definitions
- ⚡ **Lightweight**: Minimal dependencies and optimized bundle size

## Installation

```bash
npm install @roseline124/react-tree
# or
yarn add @roseline124/react-tree
# or
pnpm add @roseline124/react-tree
```

## Usage

### Basic Tree

```tsx
import { Tree, TreeItem, TreeItemLayout } from '@roseline124/react-tree';

function App() {
  return (
    <Tree aria-label="File Explorer">
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
    </Tree>
  );
}
```

### Tree with JSON Data

```tsx
import { TreeWithJson } from '@roseline124/react-tree';

const treeData = [
  {
    id: '1',
    label: 'Documents',
    children: [
      {
        id: '2',
        label: 'Work',
        children: [
          { id: '3', label: 'Project A' },
          { id: '4', label: 'Project B' },
        ],
      },
      {
        id: '5',
        label: 'Personal',
      },
    ],
  },
];

function App() {
  return (
    <TreeWithJson
      data={treeData}
      renderItem={({ item, level }) => (
        <div className="p-2">
          {item.label} (Level: {level})
        </div>
      )}
    />
  );
}
```

### Custom Styling

For example, you can do like this using tailwindCss

```tsx
import { Tree, TreeItem, TreeItemLayout } from '@roseline124/react-tree';

function App() {
  return (
    <Tree className="p-4 bg-gray-50 rounded-lg">
      <TreeItem>
        <TreeItemLayout className="hover:bg-blue-100 p-2 rounded">
          Custom Styled Item
        </TreeItemLayout>
      </TreeItem>
    </Tree>
  );
}
```

## Components

### Tree

The main container component that provides the tree context.

| Prop              | Type              | Default | Description                                        |
| ----------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`        | `React.ReactNode` | -       | **Required** React nodes to render inside the tree |
| `open`            | `boolean`         | `true`  | Whether the whole tree is expanded                 |
| `className`       | `string`          | `''`    | Additional CSS classes for the tree container      |
| `aria-label`      | `string`          | -       | Accessibility label for the tree                   |
| `aria-labelledby` | `string`          | -       | Reference to an element that labels the tree       |

### TreeItem

Represents a single item in the tree.

| Prop        | Type                 | Default | Description                                            |
| ----------- | -------------------- | ------- | ------------------------------------------------------ |
| `itemType`  | `'leaf' \| 'branch'` | -       | **Required** Whether the item is a leaf or branch node |
| `children`  | `React.ReactNode`    | -       | **Required** Content to render for the tree item       |
| `className` | `string`             | `''`    | Additional CSS classes for the tree item               |

### TreeItemLayout

Provides the visual layout for a tree item.

| Prop           | Type              | Default | Description                                      |
| -------------- | ----------------- | ------- | ------------------------------------------------ |
| `children`     | `React.ReactNode` | -       | **Required** Content to render inside the layout |
| `className`    | `string`          | `''`    | Additional CSS classes for the layout            |
| `dropDownIcon` | `React.ReactNode` | `'▶'`  | Icon for expand/collapse in branch nodes         |

### TreeWithJson

A convenience component for rendering trees from JSON data.

| Prop                     | Type                                                | Default                     | Description                                               |
| ------------------------ | --------------------------------------------------- | --------------------------- | --------------------------------------------------------- |
| `data`                   | `TreeData`                                          | -                           | **Required** JSON data to render as tree structure        |
| `renderTreeItem`         | `(params: RenderTreeItemProps) => React.ReactNode`  | -                           | **Required** Function to render each tree item            |
| `getTreeItemLayoutProps` | `(params) => Omit<TreeItemLayoutProps, 'children'>` | -                           | Function to dynamically generate props for TreeItemLayout |
| `treeItemProps`          | `Omit<TreeItemProps, 'children' \| 'itemType'>`     | -                           | Props to pass to TreeItem components                      |
| `treeProps`              | `Omit<TreeProps, 'children'>`                       | -                           | Props to pass to Tree components                          |
| `checkIsLeaf`            | `(value: TreeData) => boolean`                      | `typeof value !== 'object'` | Function to determine if a value is a leaf node           |

#### RenderTreeItemProps

Parameters passed to the `renderTreeItem` function:

| Prop       | Type                 | Description                                 |
| ---------- | -------------------- | ------------------------------------------- |
| `level`    | `number`             | Current nesting level of the item (0-based) |
| `key`      | `string`             | Current item's key                          |
| `value`    | `TreeData`           | Current item's value                        |
| `itemType` | `'leaf' \| 'branch'` | Type of the item                            |
| `keyPath`  | `string[]`           | Array of keys from root to current item     |

## Styling

1. Passing custom classes via the `className` prop
2. Overriding default styles with your own CSS

## Accessibility

The component follows ARIA best practices:

- Uses `role="tree"` for the main container
- Supports `aria-label` and `aria-labelledby` for labeling
- Keyboard navigation support (can be extended)
- Semantic HTML structure

## Browser Support

- React 18+
- Modern browsers with ES2022 support
- TypeScript 5.0+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
