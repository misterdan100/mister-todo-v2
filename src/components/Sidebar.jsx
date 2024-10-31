import { Link } from "react-router-dom";
import useTasks from "../hooks/useTasks";
import PlusIcon from "../assets/PlusIcon";
import { MenuIcon } from '../assets/MenuIcon'
import LogoImg from '../assets/misterdan-logo.png'
import "../styles/sidebar.css";
import { HomeTaskIcon } from "../assets/HomeTaskIcon";
import { TaskIcon2 } from "../assets/TaskIcon2";
import { ProjectIcon2 } from "../assets/ProjectIcon2";
import { TagIcon2 } from "../assets/TagIcon2";
import { FavIcon } from "../assets/FavIcon";

const Sidebar = () => {
  const { setIsOpen, setOpenConfirmDb } = useTasks();

  return (
    <>
      <div>
        <div className="logo">
          <img
            className="logo-img"
            src={LogoImg}
            alt="logo"
            title="misterdan logo"
          />
        </div>

        <div className="menu-title">
          <h3>Menu</h3>
          <button >
            <MenuIcon />
          </button>
        </div>

        <div className="links">
          <Link to="/">
            <HomeTaskIcon />
          Home</Link>
          <Link to="/tasks">
           <TaskIcon2 />
          Tasks</Link>
          <Link to="/projects">
          <ProjectIcon2 />
          Projects</Link>
          <Link to="/tags">
          <TagIcon2 />
          Tags</Link>
          <Link to="/favorites">
            <FavIcon />
          Favorites</Link>

          <div className="action-buttons">

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="tag-filter create-button"
              >
              <PlusIcon />
              New task
            </button>
            <button onClick={() => setOpenConfirmDb(true)} className="import-btn">
              Import db
            </button>
            </div>
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
