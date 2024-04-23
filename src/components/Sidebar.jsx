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
        <Link to="/">Tasks</Link>
        <Link to="/">Projects</Link>
        <Link to="/">Lists</Link>
        <Link to="/">Important</Link>
      </div>
    </>
  );
};

export default Sidebar;
