import { createContext, useState, useEffect } from "react"
import React from "react"
import { toast } from "react-toastify"
import tasksDb from '../db/exampleTasks.js'
import { projects } from "../db/exampleProjects.js"

const TasksContext = createContext()

const TasksProvider = ({children}) => {
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem("misterTodoName")));
  const [selectTask, setSelectTask] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [openConfirmDb, setOpenConfirmDb] = useState(false)
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false)
  const [tasks, setTasks] = useState([])
  const [categories, setCategories] = useState([])
  const [alert, setAlert] = useState({})
  const [filter, setFilter] = useState('')
  const [filteredTasks, setFilteredTasks] = useState([])
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const getData = async () => {
        try {
            const data = await JSON.parse(localStorage.getItem('misterTodo'))

            if(!data?.length) {
              const message = 'There are no saved tasks, do you want to load sample tasks?'
              setTimeout(() => {
                if(confirm(message)){
                  setTasks(tasksDb)
  
                  localStorage.setItem('misterTodo', JSON.stringify(tasksDb))
                  return
                }
                
              }, 3000);
              return
            }

            setTasks(data)

        } catch (error) {
            console.log(error)
        }
    }

    getData()
  }, [])

  useEffect(() => {
    localStorage.setItem('misterTodo', JSON.stringify(tasks))
    localStorage.setItem('misterTodoName', JSON.stringify(username))

    getCategories()
  }, [tasks, username])

  const getCategories = () => {
    const tasksProjects = tasks.map( current => current.projectCategory)
    let defaultProjects = [...new Set(tasksProjects, projects, categories)]
    defaultProjects = defaultProjects.filter( project => project !== undefined)
    
    setCategories(defaultProjects)
  }

  const createTask = task => {
    task.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    setTasks([task, ...tasks])
    setIsOpen(false)
    setSelectTask({})
    toast.success('Task created.')
  }

  const handleCreateTaskFromProject = category => {
    setSelectTask(category)
    setIsOpen(true)
  }

  const handleCreateTaskFromTag = tag => {
    setSelectTask(tag)
    setIsOpen(true)
  }

  const loadDb = () => {
      setTasks(tasksDb)
      localStorage.setItem('misterTodo', JSON.stringify(tasksDb))
      setOpenConfirmDb(false)
  
      toast.success('Example data loaded!')
  }

  const handleCheck = task => {
    const updatedTasks = tasks.map( taskState => {
      if(taskState.name === task.name) {
        taskState.status === 'not started' | taskState.status === 'in progress' ? taskState.status = 'done' : taskState.status = 'not started'
        return taskState
      }
      return taskState
    })

    setTasks(updatedTasks)
  }

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter(
      (taskState) => taskState.name !== task.name && taskState
    );
    setTasks(updatedTasks);
    setOpenConfirmDelete(false)
    setSelectTask({})
    toast.error("Task deleted.");
  };

  const handleEdit = task => {
    setSelectTask(task)
    setEditing(true)
    setIsOpen(true)
  }
  
  const editTask = task => {
    
    const updatedTasks = tasks.map( taskState => taskState.id === task.id ? task : taskState)
    setTasks(updatedTasks)
    
    setEditing(false)
    setIsOpen(false)
    toast.success('Task edited.')
  }

  const handleFilter = newFilter => {
    let tempFilter = ''
    newFilter === filter ? tempFilter = '' : tempFilter = newFilter

    if(tempFilter === '') {
      setFilteredTasks([])
      setFilter(tempFilter)
    } else {
      let filteredList = []
  
      switch (true) {
        case tempFilter === 'completed':
          filteredList = tasks.filter( stateTask => stateTask.status === 'done')        
          break;
        case tempFilter === 'progress':
          filteredList = tasks.filter( stateTask => stateTask.status === 'in progress')        
          break;
        case tempFilter === 'incompleted':
          filteredList = tasks.filter( stateTask => stateTask.status === 'not started')        
          break;
        case tempFilter === 'important':
          filteredList = tasks.filter( stateTask => stateTask.favorite === true)        
          break;
        case tempFilter === 'name':
          filteredList = [...tasks].sort((a, b) => a.name.localeCompare(b.name))     
          break;
        case tempFilter === 'date':
          filteredList = [...tasks].sort((a, b) => {
            const dataA = new Date(a.dueDate)
            const dataB = new Date(b.dueDate)
            return dataA - dataB
          })     
          break;
      }
  
      setFilteredTasks(filteredList)
      setFilter(tempFilter)
    }
  }
  

  return (
    <TasksContext.Provider 
        value={{
            username,
            setUsername,
            tasks,
            setTasks,
            selectTask,
            setSelectTask,
            isOpen,
            setIsOpen,
            createTask,
            categories,
            setCategories,
            getCategories,
            alert,
            setAlert,
            loadDb,
            handleCheck,
            handleDelete,
            editing,
            setEditing,
            handleEdit,
            editTask,
            filter,
            setFilter,
            handleFilter,
            filteredTasks,
            handleCreateTaskFromProject,
            handleCreateTaskFromTag,
            openConfirmDb,
            setOpenConfirmDb,
            openConfirmDelete,
            setOpenConfirmDelete
        }}
    >
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
export {TasksContext}