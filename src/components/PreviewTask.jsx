import useTasks from "../hooks/useTasks";
import CheckCircle from "../assets/CheckCircle";
import UncheckedIcon from "../assets/UncheckedIcon";
import StarSolid from "../assets/StarSolid.jsx";
import "../styles/previewTask.css";
import { formatDate } from "../helpers/formatDate.js";

const PreviewTask = ({task}) => {
  const { handleCheck, handleEdit, setOpenConfirmDelete, setSelectTask } = useTasks()
  const { name, priority, dueDate } = task;
  
  return (
    <div className="preview-task">
      <div className="preview-1">

        <div 
          onClick={() => handleCheck(task)}
          className={`icon ${task.status === 'in progress' ? 'icon-progress' : ''} ${task.status === 'done' ? 'icon-done' : ''}`}
        >
          {task.status === 'done' ? (<CheckCircle />) : (<UncheckedIcon />)}
          
        </div>
          
        <div className="">
          <h2 className="title-task">{name} {' '} <span>{task.favorite && <StarSolid />}</span></h2>

          <div className="task-info">
            <p className="task-date">{formatDate(dueDate)}</p>
            <p>Priority: <span className={priority}>{priority}</span></p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button 
          onClick={() => handleEdit(task)}
          className="edit-button"
        >Edit</button>
        <button 
          onClick={() => {
            setOpenConfirmDelete(true)
            setSelectTask(task)
          }}
          className="delete-button"
        >Delete</button>
      </div>
    </div>
  );
};

export default PreviewTask;
