import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, Edge } from '../../types';

interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

const initialNodes: Node[] = Array.from({ length: 10 }, (_, i) => ({
  id: `node-${i + 1}`,
  position: { x: i * 100, y: 0 },
  data: {
    label: `Node ${i + 1}`,
    color: '#ff0000',
    fontSize: 14,
  },
  selected: false,
}));

const initialEdges: Edge[] = Array.from({ length: 9 }, (_, i) => ({
  id: `edge-${i + 1}`,
  source: `node-${i + 1}`,
  target: `node-${i + 2}`,
}));

const initialState: GraphState = {
  nodes: initialNodes,
  edges: initialEdges,
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    updateNodePosition: (state, action: PayloadAction<{ id: string; position: { x: number; y: number } }>) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.position = action.payload.position;
      }
    },
    updateNodeColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.data.color = action.payload.color;
      }
    },
    updateNodeFontSize: (state, action: PayloadAction<{ id: string; fontSize: number }>) => {
      const node = state.nodes.find((n) => n.id === action.payload.id);
      if (node) {
        node.data.fontSize = action.payload.fontSize;
      }
    },
    selectNode: (state, action: PayloadAction<string>) => {
      state.nodes.forEach((node) => {
        node.selected = node.id === action.payload;
      });
    },
  },
});

export const { updateNodePosition, updateNodeColor, updateNodeFontSize, selectNode } = graphSlice.actions;
export default graphSlice.reducer;