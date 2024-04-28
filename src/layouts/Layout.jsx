import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import '../styles/layout.css'

const Layout = () => {
  return (
    <>
      <div className="main-container">
        <aside className="sidebar-container">
          <Sidebar/>
        </aside>

        <div className="main-div">
          <Navbar />

          <div className="task-container">
            <Outlet />
          </div>
        </div>

      </div>
    </>
  )
}

export default Layout