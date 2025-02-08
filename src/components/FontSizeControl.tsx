import React from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { updateNodeFontSize } from '../features/graph/graphSlice';
import { recordHistory } from '../features/history/historySlice';
import { RootState } from '../store';

const FontSizeControl = () => {
  const dispatch = useAppDispatch();
  const selectedNodeId = useAppSelector((state) => state.graph.nodes.find((node) => node.selected)?.id);
  const selectedNode = useAppSelector((state) => state.graph.nodes.find((node) => node.id === selectedNodeId));
  const currentState = useAppSelector((state: RootState) => state);

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedNodeId) {
      dispatch(updateNodeFontSize({ id: selectedNodeId, fontSize: Number(event.target.value) }));
      dispatch(recordHistory(currentState));
    }
  };

  return (
    <div>
      <h3>Font Size</h3>
      <input
        type="number"
        min="12"
        max="24"
        value={selectedNode?.data.fontSize || 14}
        onChange={handleFontSizeChange}
      />
    </div>
  );
};

export default FontSizeControl;