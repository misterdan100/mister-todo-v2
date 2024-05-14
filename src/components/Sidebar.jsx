import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import PlusIcon from "../assets/PlusIcon";
import "../styles/sidebar.css";

const Sidebar = () => {
  const { setIsOpen, setOpenConfirmDb } = useTasks();

  return (
    <>
      <div>
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
          <button onClick={() => setOpenConfirmDb(true)} className="import-btn">
            Import db
          </button>
        </div>
      </div>

      <p className="credits">
        Coded by{" "}
        <a href="https://github.com/misterdan100/" target="_blank">
          Daniel Caceres
        </a>
      </p>
    </>
  );
};

export default Sidebar;
