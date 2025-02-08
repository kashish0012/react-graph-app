import ColorPicker from './ColorPicker';
import FontSizeControl from './FontSizeControl';
import './styles/NodeCustomizationPanel.css';

const NodeCustomizationPanel = () => {
  return (
    <div className="node-customization-panel">
      <ColorPicker />
      <div className="controls-container">
        <FontSizeControl />
      </div>
    </div>
  );
};

export default NodeCustomizationPanel;