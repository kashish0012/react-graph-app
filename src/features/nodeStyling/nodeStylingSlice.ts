import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Node } from '../../types';

interface NodeStylingState {
  selectedNodeId: string | null;
  colorHistory: string[];
  fontSizeHistory: number[];
}

const initialState: NodeStylingState = {
  selectedNodeId: null,
  colorHistory: [],
  fontSizeHistory: [],
};

const nodeStylingSlice = createSlice({
  name: 'nodeStyling',
  initialState,
  reducers: {
    selectNode: (state, action: PayloadAction<string>) => {
      state.selectedNodeId = action.payload;
    },
    updateNodeColor: (state, action: PayloadAction<{ id: string; color: string }>) => {
      if (state.selectedNodeId === action.payload.id) {
        state.colorHistory.push(action.payload.color);
      }
    },
    updateNodeFontSize: (state, action: PayloadAction<{ id: string; fontSize: number }>) => {
      if (state.selectedNodeId === action.payload.id) {
        state.fontSizeHistory.push(action.payload.fontSize);
      }
    },
  },
});

export const { selectNode, updateNodeColor, updateNodeFontSize } = nodeStylingSlice.actions;
export default nodeStylingSlice.reducer;