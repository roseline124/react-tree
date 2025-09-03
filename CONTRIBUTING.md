# Contributing to React Tree Component

Thank you for your interest in contributing to the React Tree Component! This document provides guidelines and information for contributors.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/react-tree.git`
3. Install dependencies: `pnpm install`
4. Create a new branch: `git checkout -b feature/your-feature-name`

## Development

### Available Scripts

- `pnpm dev` - Start development mode with watch
- `pnpm build` - Build the library
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm storybook` - Start Storybook development server
- `pnpm build:storybook` - Build Storybook for production

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use Prettier for code formatting
- Follow ESLint rules
- Write meaningful commit messages

### Component Development

When adding new components or modifying existing ones:

1. Update the component's TypeScript interfaces
2. Add proper JSDoc comments
3. Update the main index.ts exports
4. Add Storybook stories for new components
5. Ensure accessibility compliance
6. Test with different screen readers and keyboard navigation

### Testing

- Write tests for new functionality
- Ensure all existing tests pass
- Test accessibility features
- Test with different React versions (18+)

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Update documentation if necessary
3. Add or update tests as needed
4. Update the CHANGELOG.md with your changes
5. Submit a pull request with a clear description

## Commit Message Format

Use conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

Example: `feat: add expand/collapse functionality to tree items`

## Issues

When reporting issues:

1. Use the issue template
2. Provide a clear description of the problem
3. Include steps to reproduce
4. Add browser/OS information
5. Include code examples if possible

## Questions or Need Help?

- Open an issue for questions
- Check existing issues and discussions
- Join our community discussions

Thank you for contributing! 🎉
