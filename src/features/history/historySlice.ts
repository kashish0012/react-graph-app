import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../../types';

interface HistoryState {
  past: State[];
  present: State;
  future: State[];
}

const initialState: HistoryState = {
  past: [],
  present: {
    graph: {
      nodes: [],
      edges: [],
    },
  },
  future: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    undo: (state) => {
      if (state.past.length > 0) {
        state.future.push(state.present);
        state.present = state.past.pop()!;
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        state.past.push(state.present);
        state.present = state.future.pop()!;
      }
    },
    recordHistory: (state, action: PayloadAction<State>) => {
      state.past.push(state.present);
      state.present = action.payload;
      state.future = [];
    },
  },
});

export const { undo, redo, recordHistory } = historySlice.actions;
export default historySlice.reducer;