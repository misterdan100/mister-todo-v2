import { useState } from "react";
import useTasks from "../hooks/useTasks";
import PreviewTask from "../components/PreviewTask";
import ModalTask from "../components/ModalTask";
import PlusIcon from "../assets/PlusIcon";
import "../styles/task.css";

const Tasks = () => {
  const { tasks, setIsOpen, setTasks, selectTask, setSelectTask, createTask } = useTasks()

  return (
    <div className="tasks-container">
      <div className="task-filters">
        <p
          onClick={() => setIsOpen(true)} 
          className="tag-filter create-button"
        >
          <PlusIcon />
          New</p>

        <div className="filter-buttons">
          <p className="tag-filter selected">Name</p>
          <p className="tag-filter">Completed</p>
          <p className="tag-filter">Incompleted</p>
          <p className="tag-filter">Date</p>
          <p className="tag-filter">Important</p>
          <p className="tag-filter">In progress</p>
        </div>
      </div>

      <div className="preview-task-container">
        {tasks?.map((task, index) => (
          <PreviewTask key={index} task={task}/>
        ))}
      </div>



      <ModalTask />
    </div>



  );
};

export default Tasks;
