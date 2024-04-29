import { useEffect, useState } from "react";
import StarOutline from "../assets/StarOutline";
import StarSolid from "../assets/StarSolid";
import useTasks from "../hooks/useTasks";
import PlusIcon from "../assets/PlusIcon";
import "../styles/formTask.css";
import Alert from "./Alert";

const FormTask = () => {
  const [favorite, setFavorite] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("not started");
  const [priority, setPriority] = useState("low");
  const [project, setProject] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const { categories, getCategories, isOpen, alert, setAlert, createTask } = useTasks();

  useEffect(() => {
    getCategories();
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() === '') {
        setAlert({
            msg: 'The task must have a Title',
            error: true
        })
        return
    }
    setAlert({})
    createTask({
        name: title,
        description,
        dueDate: date,
        status,
        priority,
        projectCategory: project,
        tags,
        favorite
    })

  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const newTags = () => {

    if(tagInput.trim() === '') {
        setAlert({
            msg: 'New tag must be a text.',
            error: true
        })
        return
    }
    
    if(tags.includes(tagInput.trim().toLowerCase())) {
        setAlert({
            msg: 'This tag is already added.',
            error: true
        })
        return
    }
    setAlert({})
    setTags([...tags, tagInput.trim().toLowerCase()])
  }

  return (
    <form onSubmit={handleSubmit} className="form-task">
      <div className="div-title">
        <input
          type="text"
          placeholder="Task name"
          onChange={(e) => {
            setTitle(e.target.value)
            setAlert({})
        }}
          value={title}
        />
        <div
          className={`favorite-icon ${favorite && "selected"}`}
          onClick={handleFavorite}
        >
          {favorite ? <StarSolid /> : <StarOutline />}
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Task description..."
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div>
        <label htmlFor="date">Due Date</label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div>
        <label htmlFor="priority">Priority</label>

        <div
          onChange={(e) => setPriority(e.target.value)}
          className="radio-priority"
        >
          <input type="radio" name="priority" value="low" id="low" />
          <label htmlFor="low" className={`radio-label ${priority === "low" ? 'checked' : ''}`} >
            Low
          </label>
          <input type="radio" name="priority" value="medium" id="medium" />
          <label htmlFor="medium" className={`radio-label ${priority === 'medium' ? 'checked' : ''}`} >
            Medium
          </label>
          <input type="radio" name="priority" value="high" id="high" />
          <label htmlFor="high" className={`radio-label ${priority === 'high' ? 'checked' : ''}`} >
            High
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="status">Status</label>

        <div
          onChange={(e) => setStatus(e.target.value)}
          className="radio-priority"
        >
          <input type="radio" name="status" value="not started" id="not started" />
          <label htmlFor="not started" className={`radio-label ${status === "not started" ? 'checked' : ''}`} >
          Not Started
          </label>
          <input type="radio" name="status" value="in progress" id="in progress" />
          <label htmlFor="in progress" className={`radio-label ${status === 'in progress' ? 'checked' : ''}`} >
          In progress
          </label>
          <input type="radio" name="status" value="done" id="done" />
          <label htmlFor="done" className={`radio-label ${status === 'done' ? 'checked' : ''}`} >
          Done
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="project">Add to Project</label>
        <select 
            name="project" 
            id="project"
            onChange={e => setProject(e.target.value)}
        >
          <option value="" disabled>
            select one
          </option>
          {categories?.map((cat, index) => (
            <option key={index} value={cat.toLowerCase()}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tags-input">Tag / List</label>
        <div className="tag-list1">
          {tags?.map(tag => (
            <p>{tag}</p>
          ))}
        </div>
        <div className="add-task">
          <input 
            type="text" 
            id="tags-input" 
            placeholder="New tag" 
            value={tagInput}
            onChange={e => {
                setTagInput(e.target.value)
                setAlert({})
            }}
          />
          <button
            onClick={newTags}
            type="button"
          >
            <PlusIcon />
          </button>
        </div>
      </div>

      {alert.msg && <Alert alert={alert}/>}
      
      <div>
        <button className="save-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default FormTask;
