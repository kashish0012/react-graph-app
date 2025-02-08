import './styles/UndoRedoControls.css';
import { useAppDispatch } from '../store';
import { undo, redo } from '../features/history/historySlice';

const UndoRedoControls = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='undo-redo-controls'>
      <button onClick={() => dispatch(undo())}>Undo</button>
      <button onClick={() => dispatch(redo())}>Redo</button>
    </div>
  );
};

export default UndoRedoControls;