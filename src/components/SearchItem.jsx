import CheckCircle from "../assets/CheckCircle";
import UncheckedIcon from "../assets/UncheckedIcon";
import EditIcon from "../assets/EditIcon";
import useTasks from "../hooks/useTasks";

const SearchItem = ({ task }) => {
  const { handleEdit, handleCheck } = useTasks();

  return (
    <div className="item-container" 
      
    >
      <div
        onClick={() => handleCheck(task)}
        className={`icon ${
          task.status === "in progress" ? "icon-progress" : ""
        } ${task.status === "done" ? "icon-done" : ""}`}
      >
        {task.status === "done" ? <CheckCircle /> : <UncheckedIcon />}
      </div>

      <div 
        className="edit-container"
        onClick={() => handleEdit(task)}
      >
        <p 
          className="item-title"
        >{task.name}</p>
        <EditIcon />
      </div>
    </div>
  );
};

export default SearchItem;
