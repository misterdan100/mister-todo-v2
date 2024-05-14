import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import PlusIcon from '../assets/PlusIcon'
import "../styles/sidebar.css";

const Sidebar = () => {
  const { setIsOpen, setOpenConfirmDb } = useTasks()

  return (
    <>
      <div className="logo">
        <img
          className="logo-img"
          src="/src/assets/misterdan-logo-dark-1_small.png"
          alt="logo"
        />
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/favorites">Favorites</Link>
        <button 
          type="button"
          onClick={() => setIsOpen(true)} 
          className="tag-filter create-button"
        >
          <PlusIcon />
          New
        </button>
        <button 
          onClick={() => setOpenConfirmDb(true)}
          className="import-btn"
        >Import db</button>
      </div>
    </>
  );
};

export default Sidebar;
