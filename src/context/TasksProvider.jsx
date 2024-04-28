import { createContext, useState, useEffect } from "react"
// import tasksDb from '../db/exampleTasks'

const TasksContext = createContext()

const TasksProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [tasks, setTasks] = useState([])
  const [selectTask, setSelectTask] = useState({})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = async () => {
        try {
            // localStorage.setItem('misterTodo', JSON.stringify(tasksDb))

            const data = await JSON.parse(localStorage.getItem('misterTodo'))
            setTasks(data)

        } catch (error) {
            console.log(error)
        }
    }

    getData()
  }, [])

  const getCategories = () => {
    const newCategories = tasks.reduce( (sumary, current) => {
        sumary.push(current.projectCategory)
        return sumary
    }, [])

    setCategories(newCategories)
}

  const createTask = () => {
    console.log(categories)
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
            getCategories
        }}
    >
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
export {TasksContext}