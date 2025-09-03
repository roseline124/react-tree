# React Tree Component

A customizable, accessible React Tree component built with TypeScript and Tailwind CSS. This component provides a flexible tree structure that can be easily integrated into any React application.

## Features

- 🌳 **Flexible Tree Structure**: Support for nested tree items with unlimited depth
- ♿ **Accessibility**: Built with ARIA attributes and keyboard navigation support
- 🎨 **Customizable**: Easy to style and customize with Tailwind CSS classes
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

```tsx
import { Tree, TreeItem, TreeItemLayout } from '@roseline124/react-tree';

function App() {
  return (
    <Tree
      className="p-4 bg-gray-50 rounded-lg"
      subTreeClassName="ml-4 border-l-2 border-gray-200 pl-4"
    >
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

**Props:**

- `children`: React nodes to render inside the tree
- `open`: Whether the tree is expanded (default: true)
- `className`: Additional CSS classes for the tree container
- `subTreeClassName`: Additional CSS classes for nested trees
- `aria-label`: Accessibility label for the tree
- `aria-labelledby`: Reference to an element that labels the tree

### TreeItem

Represents a single item in the tree.

**Props:**

- `children`: Content to render for the tree item
- `className`: Additional CSS classes

### TreeItemLayout

Provides the visual layout for a tree item.

**Props:**

- `children`: Content to render inside the layout
- `className`: Additional CSS classes

### TreeWithJson

A convenience component for rendering trees from JSON data.

**Props:**

- `data`: Array of tree data objects
- `renderItem`: Function to render each tree item
- `className`: Additional CSS classes

## Styling

The component uses Tailwind CSS for styling. You can customize the appearance by:

1. Passing custom classes via the `className` prop
2. Overriding default styles with your own CSS
3. Using the `subTreeClassName` prop for nested tree styling

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

## Changelog

### 0.0.1-alpha.0

- Initial release
- Basic tree structure components
- JSON data support
- Tailwind CSS integration
- TypeScript support
