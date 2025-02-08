import ReactFlow, { Controls, Background, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import { useAppSelector, useAppDispatch } from '../store';
import { updateNodePosition, selectNode } from '../features/graph/graphSlice';
import { recordHistory } from '../features/history/historySlice';
import { RootState } from '../store';
import NodeCustomizationPanel from './NodeCustomizationPanel';
import UndoRedoControls from './UndoRedoControls';
import './styles/GraphContainer.css';

const GraphContainer = () => {
  const nodes = useAppSelector((state) => state.graph.nodes);
  const edges = useAppSelector((state) => state.graph.edges);
  const dispatch = useAppDispatch();
  const currentState = useAppSelector((state: RootState) => state);

  const onNodeClick = (_event: any, node: Node) => {
    dispatch(selectNode(node.id));
  };

  const onNodeDragStop = (_event: any, node: Node) => {
    dispatch(updateNodePosition({ id: node.id, position: node.position }));
    dispatch(recordHistory(currentState));
  };

  return (
    <div className="graph-container">
      <div className="react-flow-container">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeClick={onNodeClick}
          onNodeDragStop={onNodeDragStop}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <div className="controls-container">
        <NodeCustomizationPanel />
        <UndoRedoControls />
      </div>
    </div>
  );
};

export default GraphContainer;