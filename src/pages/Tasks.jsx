import { useState } from "react";
import useTasks from "../hooks/useTasks";
import PreviewTask from "../components/PreviewTask";
import ModalTask from "../components/ModalTask";
import PlusIcon from "../assets/PlusIcon";
import "../styles/task.css";

const Tasks = () => {
  const { tasks, setIsOpen, filter, filteredTasks, handleFilter} = useTasks()

  return (
    <div className="tasks-container">
      <div className="task-filters">
        <p onClick={() => setIsOpen(true)} className="tag-filter create-button">
          <PlusIcon />
          New
        </p>

        <div className="filter-buttons">
          <p
            onClick={() => handleFilter("name")}
            className={`tag-filter ${filter === 'name' && 'selected'}`}
          >
            Name
          </p>
          <p onClick={() => handleFilter("completed")} className={`tag-filter ${filter === 'completed' && 'selected'}`}>
            Completed
          </p>
          <p onClick={() => handleFilter("progress")} className={`tag-filter ${filter === 'progress' && 'selected'}`}>
            In progress
          </p>
          <p onClick={() => handleFilter("incompleted")} className={`tag-filter ${filter === 'incompleted' && 'selected'}`}>
            Incompleted
          </p>
          <p onClick={() => handleFilter("date")} className={`tag-filter ${filter === 'date' && 'selected'}`}>
            Date
          </p>
          <p onClick={() => handleFilter("important")} className={`tag-filter ${filter === 'important' && 'selected'}`}>
            Important
          </p>
        </div>
      </div>

      <div className="preview-task-container">
        {(filter === '' ? tasks : filteredTasks)?.map((task, index) => (
          <PreviewTask key={index} task={task} />
        ))}
      </div>

      <ModalTask />
    </div>
  );
};

export default Tasks;
