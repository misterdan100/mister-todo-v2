import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ModalTask from "../components/ModalTask"
import ModalConfirmData from '../components/ModalConfirmData'
import ModalConfirmDelete from '../components/ModalConfirmDelete'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import MiniSidebar from "../components/MiniSidebar"
import useTasks from "../hooks/useTasks"

import '../styles/layout.css'

const Layout = () => {
  const { showSidebar } = useTasks();

  return (
    <>
      <div className="main-container">
        <aside
          className={`sidebar-container ${
            !showSidebar && "miniSidebar-container"
          }`}
        >
          {showSidebar ? <Sidebar /> : <MiniSidebar />}
        </aside>

        <div className="main-div">
          <Navbar />

          <div className="task-container">
            <Outlet />
          </div>
        </div>
      </div>
      <ModalTask />
      <ModalConfirmData />
      <ModalConfirmDelete />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Layout