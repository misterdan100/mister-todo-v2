import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
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
        <Link to="/lists">Lists</Link>
        <Link to="/important">Important</Link>
      </div>
    </>
  );
};

export default Sidebar;
