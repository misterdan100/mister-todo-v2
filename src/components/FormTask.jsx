import { useEffect, useState } from "react";
import StarOutline from "../assets/StarOutline";
import StarSolid from "../assets/StarSolid";
import useTasks from "../hooks/useTasks";
import PlusIcon from "../assets/PlusIcon";
import '../styles/formTask.css'

const FormTask = () => {
  const [favorite, setFavorite] = useState(false);
  const { categories, getCategories, isOpen } = useTasks();
  
  const defaultTask = {
      name: "Enviar informe de ventas",
      description: "Recopilar datos de ventas y preparar un informe detallado",
      dueDate: "2024-05-02T00:00:00.000Z",
      status: "not started",
      priority: "high",
      projectCategory: "Trabajo",
      tags: ["oficina", "ventas"],
      important: false
    }
    const [formInputs, setFormInputs] = useState(defaultTask)

  useEffect(() => {
    getCategories();
  }, [isOpen]);

  const handleSubmit = e => {
    e.preventDefault()
    console.log('enviando.....')
  }
  return (
    <form 
    onSubmit={handleSubmit}
    className="form-task"
    >
      <div className="div-title">
        <input type="text" placeholder="Task name" />
        <div className={`favorite-icon ${formInputs.important && 'selected'}`}>
          {formInputs.important ? <StarSolid /> : <StarOutline />}
        </div>
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Task description..."
        ></textarea>
      </div>

      <div>
        <label htmlFor="date">Due Date</label>
        <input type="date" id="date" />
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">high</option>
        </select>
      </div>

      <div>
        <label htmlFor="project">Add to Project</label>
        <select name="project" id="project">
          <option value="" disabled>
            select one
          </option>
          {categories?.map((cat, index) => (
            <option key={index} value={cat.toLowerCase()}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="tags-input">Tag / List</label>
        <div className="tag-list1">
            <p>Compras</p>
            <p>Hogar</p>
            <p>Comida</p>
            <p>Ofina</p>
        </div>
        <div className="add-task">
          <input type="text" id="tags-input" placeholder="New tag"/>
          <button>
            <PlusIcon />
          </button>
        </div>
      </div>

      <div>
        <button
            className="save-button"
            type="submit"
        >
            Save
        </button>
      </div>
    </form>
  );
};

export default FormTask;
