import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import useTasks from "../hooks/useTasks";

const Sidebar = () => {
  const { loadDb } = useTasks()

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
          onClick={loadDb}
          className="import-btn"
        >Import db</button>
      </div>
    </>
  );
};

export default Sidebar;
