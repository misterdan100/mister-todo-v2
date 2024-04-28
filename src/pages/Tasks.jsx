import { useState } from "react";
import useTasks from "../hooks/useTasks";
import PreviewTask from "../components/PreviewTask";
import ModalTask from "../components/ModalTask";
import "../styles/task.css";

const Tasks = () => {
  const { tasks, setTasks } = useTasks()

  return (
    <div className="tasks-container">
      <div className="task-filters">
        <p className="tag-filter selected">Name</p>
        <p className="tag-filter">Completed</p>
        <p className="tag-filter">Incompleted</p>
        <p className="tag-filter">Date</p>
        <p className="tag-filter">Important</p>
        <p className="tag-filter">In progress</p>
      </div>

      <div className="preview-task-container">
        {tasks.map((task, index) => (
          <PreviewTask key={index} task={task}/>
        ))}
      </div>



      <ModalTask />
    </div>



  );
};

export default Tasks;
