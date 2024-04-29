import { useState } from "react";
import useTasks from "../hooks/useTasks";
import CheckCircle from "../assets/CheckCircle";
import UncheckedIcon from "../assets/UncheckedIcon";
import "../styles/previewTask.css";

const PreviewTask = ({task}) => {
  const { isOpen, setIsOpen, selectTask, setSelectTask } = useTasks()
  const { name, priority } = task;

  
  return (
    <div className="preview-task">
      <div className="preview-1">

        <div className="icon">
          <UncheckedIcon />
        </div>
          
        <div className="">
          <h2 className="title-task">{name}</h2>

          <div className="task-info">
            <p className="task-date">27/04/2024</p>
            <p>Priority: <span className={priority}>{priority}</span></p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button 
          onClick={() => setIsOpen(true)}
          className="edit-button"
        >Edit</button>
        <button 
          onClick={() => setIsOpen(true)}
          className="delete-button"
        >Delete</button>
      </div>
    </div>
  );
};

export default PreviewTask;
