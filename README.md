# React Graph Visualization App

This is a React application built with Vite, Redux, and React Flow for interactive graph visualization. It allows users to manipulate and customize graph elements with undo/redo functionality.

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)

- npm (v8 or higher) or yarn (v1.22 or higher)

### Installations

1. Clone the repository:
```
git clone https://github.com/your-username/react-graph-app.git
cd react-graph-app
```

2. Install Dependencies
```
npm install
```

3. Start the Development Server
```
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint for code linting.

## Dependencies

Here are the main dependencies used in this project:

### Core Dependencies

- **React** - JavaScript library for building user interfaces.

- **Vite** - Fast build tool for modern web development.

- **TypeScript** - Typed superset of JavaScript.

### State Management

- **Redux** - Predictable state container for JavaScript apps.

- **@reduxjs/toolkit** - Official Redux toolkit for simplifying Redux development.

- **react-redux** - Official React bindings for Redux.

### Graph Visualization

- **React Flow** - Library for building interactive graph visualizations.

### UI Components

- **react-color** - Color picker component for React.

- **react-icons** - Popular icons library for React.

### Development Tools

- **ESLint** - Linting tool for JavaScript and TypeScript.

- **Prettier** - Code formatting tool.

## Basic Usage Guide

### Graph Visualization

- The graph is initialized with 10 nodes and 9 edges.

- Nodes are draggable and interconnected with edges.

- Click on a node to select it. The selected node will be highlighted with a blue border.

### Node Customization

Color Modification

1. Select a node by clicking on it.

2. Use the color picker to change the node's background color.

3. The color change will be reflected immediately on the selected node.

Font Size Adjustment

1. Select a node by clicking on it.

2. Use the font size input to change the node's text size.

3. The font size change will be reflected immediately on the selected node.

### Undo/Redo Functionality

- Use the Undo button to revert the last action (e.g., color change, font size change, or node position change).

- Use the Redo button to restore the reverted action.

- The history stack tracks all modifications, and changes are reflected smoothly on the UI.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bugfix.

3. Commit your changes and push to the branch.

4. Submit a pull request.

## Acknowledgments

- React Flow for providing an excellent library for graph visualization.

- Redux Toolkit for simplifying state management.

- Vite for fast and modern development tooling.