import { createContext, useState, useEffect } from "react"
import tasksDb from '../db/exampleTasks.js'

const TasksContext = createContext()

const TasksProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [tasks, setTasks] = useState([])
  const [selectTask, setSelectTask] = useState({})
  const [categories, setCategories] = useState([])
  const [alert, setAlert] = useState({})

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
  }, [tasks])

  const getCategories = () => {
    const newCategories = tasks.reduce( (sumary, current) => {
        sumary.push(current.projectCategory)
        return sumary
    }, [])

    setCategories(newCategories)
}

  const createTask = task => {
    setTasks([task, ...tasks])
  }

  const loadDb = () => {
    if(confirm('Do you want to upload sample data?')) {
      setTasks(tasksDb)
      localStorage.setItem('misterTodo', JSON.stringify(tasksDb))
    }
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

  const handleDelete = task => {
    const updatedTasks = tasks.filter(taskState => taskState.name !== task.name && taskState )
    setTasks(updatedTasks)
  }
  

  return (
    <TasksContext.Provider 
        value={{
            tasks,
            setTasks,
            isOpen,
            setIsOpen,
            selectTask,
            setSelectTask,
            createTask,
            categories,
            getCategories,
            alert,
            setAlert,
            loadDb,
            handleCheck,
            handleDelete
        }}
    >
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
export {TasksContext}