import { useEffect, useState } from "react";
import StarOutline from "../assets/StarOutline";
import StarSolid from "../assets/StarSolid";
import DeleteIcon from "../assets/DeleteIcon";
import useTasks from "../hooks/useTasks";
import PlusIcon from "../assets/PlusIcon";
import "../styles/formTask.css";
import Alert from "./Alert";
import { idGenerator } from "../helpers/formatDate";

const FormTask = () => {
  const { selectTask, categories, setCategories, getCategories, isOpen, alert, setAlert, createTask, editing, setEditing, editTask  } = useTasks();
  const [id, setId] = useState(idGenerator())
  const [favorite, setFavorite] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("not started");
  const [priority, setPriority] = useState("low");
  const [project, setProject] = useState("");
  const [newProject, setNewProject] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);


  useEffect(() => {
    if(!isOpen) {
      resetForm()
      setEditing(false)
      return
    }
    if(editing) {
      filForm(selectTask)
      getCategories();
      return
    }
    resetForm()
    selectTask.projectCategory !== '' && setProject(selectTask.projectCategory)
    getCategories();
  }, [isOpen]);

  const resetForm = () => {
    setFavorite(false);
    setTitle("");
    setDescription("");
    setDate("");
    setStatus("not started");
    setPriority("low");
    setProject('');
    setTagInput("");
    setTags([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() === '') {
        setAlert({
            msg: 'The task must have a Title.',
            error: true
        })
        return
    }

    if(editing) {
      setAlert({})
      editTask({
        id,
        name: title,
        description,
        dueDate: date,
        status,
        priority,
        projectCategory: project,
        tags,
        favorite
    })
    return
    }

    setAlert({})
    createTask({
        id,
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

  const addNewProject = () => {
    if(newProject.trim() === '') {
      setAlert({
        msg: 'New project is empty.',
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }

    if(categories.includes(newProject.trim().toLowerCase())) {
      setAlert({
        msg: 'New project already is added.',
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 3000);
      return
    }

    setCategories(e => [...e, newProject])
    setNewProject('')
  }

  const newTags = () => {

    if(tagInput.trim() === '') {
        setAlert({
            msg: 'New tag must be a word.',
            error: true
        })

        setTimeout(() => {
          setAlert({})
        }, 3000);
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
    setTagInput('')
  }

  const deleteTag = tagToDelete => {
    const updatedTags = tags.filter( stateTag => stateTag !== tagToDelete)
    setTags(updatedTags)
  }

  const filForm = task => {
    setId(task.id)
    setFavorite(task.favorite);
    setTitle(task.name);
    setDescription(task.description);
    setDate(task.dueDate.split('T')[0]);
    setStatus(task.status);
    setPriority(task.priority);
    setProject(task.projectCategory);
    setTags(task.tags);
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
        <div className="add-project">

          <select 
              name="project" 
              id="project"
              onChange={e => setProject(e.target.value)}
              value={project?.toLowerCase()}
          >
            <option value="" disabled>
              select one
            </option>
            {categories?.map((cat, index) => (
              <option 
                key={index} 
                value={cat.toLowerCase()} 
              >
                {cat}
              </option>
            ))}
          </select>

          <input 
            type="text" 
            placeholder="New project..."
            value={newProject}
            onChange={e => setNewProject(e.target.value)}
          />
          <button
              onClick={addNewProject}
              type="button"
            >
              <PlusIcon />
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="tags-input">Tag / List</label>
        <div className="tag-list1">
          {tags?.map(tag => (
            <div key={tag}>
              <p>{tag}</p>
              <button
                type="button"
                onClick={() => deleteTag(tag)}
              >
                <DeleteIcon />
              </button>
            </div>
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
        <button className={`save-button ${editing && 'editing'}`} type="submit">
          {editing ? 'Save' : 'Create'}
        </button>
      </div>
    </form>
  );
};

export default FormTask;
