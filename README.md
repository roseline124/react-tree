# React Tree Component

A customizable, accessible React Tree component built with TypeScript. This component provides a flexible tree structure that can be easily integrated into any React application.

## Demo

- [Basic Tree](https://codesandbox.io/p/sandbox/sqrr9q)
- [Tree With Json](https://codesandbox.io/p/sandbox/sgt5nq)

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
    <Tree aria-label="Default" open dropDownIcon=">">
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
    </Tree>
  );
}
```

### Tree with JSON Data

```tsx
import { TreeData, TreeWithJson } from '@roseline124/react-tree';

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
      defaultAddress: {
        city: 'seoul',
        avenue: 'gangnam',
      },
      detailAddress: '101-101',
    },
  },
} satisfies TreeData;

function App() {
  return (
    <TreeWithJson
      treeProps={{ open: true, dropDownIcon: <DropdownIcon /> }}
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
      <TreeItem itemType="leaf">
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
| `dropDownIcon`    | `React.ReactNode` | `'▶'`  | Icon for expand/collapse in branch nodes           |

### TreeItem

Represents a single item in the tree.

| Prop        | Type                 | Default | Description                                            |
| ----------- | -------------------- | ------- | ------------------------------------------------------ |
| `itemType`  | `'leaf' \| 'branch'` | -       | **Required** Whether the item is a leaf or branch node |
| `children`  | `React.ReactNode`    | -       | **Required** Content to render for the tree item       |
| `className` | `string`             | `''`    | Additional CSS classes for the tree item               |

### TreeItemLayout

Provides the visual layout for a tree item.

| Prop        | Type              | Default | Description                                      |
| ----------- | ----------------- | ------- | ------------------------------------------------ |
| `children`  | `React.ReactNode` | -       | **Required** Content to render inside the layout |
| `className` | `string`          | `''`    | Additional CSS classes for the layout            |

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

## Automated Release Process

This project uses automated versioning and publishing:

### Alpha Releases (develop branch)

- Push to `develop` branch → automatically publishes alpha version
- Version format: `0.0.1-alpha.20250903123456` (with timestamp)
- Install with: `npm install @roseline124/react-tree@alpha`

### Stable Releases (main branch)

- Push to `main` branch → automatically publishes patch version
- Version format: `0.0.1`, `0.0.2`, `0.0.3`, etc.
- Install with: `npm install @roseline124/react-tree`

### Workflow

1. **Feature Development**: Work on feature branches
2. **Alpha Testing**: Merge to `develop` → alpha version published
3. **Stable Release**: Merge to `main` → patch version published

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
