import { useState } from "react";
import useTasks from "../hooks/useTasks";
import CheckCircle from "./CheckCircle";
import UncheckedIcon from "./UncheckedIcon";
import "../styles/previewTask.css";

const PreviewTask = ({task}) => {
  const { isOpen, setIsOpen } = useTasks()
  const { name } = task;

  
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
            <p>Prioridad: <span className="alta">Alta</span></p>
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
