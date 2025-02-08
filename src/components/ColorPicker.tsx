import { CirclePicker } from 'react-color';
import { useAppDispatch, useAppSelector } from '../store';
import { updateNodeColor } from '../features/graph/graphSlice';
import { recordHistory } from '../features/history/historySlice';
import { RootState } from '../store';

const ColorPicker = () => {
  const dispatch = useAppDispatch();
  const selectedNodeId = useAppSelector((state) => state.graph.nodes.find((node) => node.selected)?.id);
  const selectedNode = useAppSelector((state) => state.graph.nodes.find((node) => node.id === selectedNodeId));
  const currentState = useAppSelector((state: RootState) => state);

  const handleColorChange = (color: any) => {
    if (selectedNodeId) {
      dispatch(updateNodeColor({ id: selectedNodeId, color: color.hex }));
      dispatch(recordHistory(currentState));
    }
  };

  return (
    <div>
      <h3>Node Color</h3>
      <CirclePicker
        color={selectedNode?.data.color}
        onChangeComplete={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;