import { createContext, useState, useEffect } from "react"
// import tasksDb from '../db/exampleTasks'

const TasksContext = createContext()

const TasksProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getData = async () => {


        try {
            // localStorage.setItem('misterTodo', JSON.stringify(tasksDb))

            const data = JSON.parse(localStorage.getItem('misterTodo'))
            setTasks(data)

        } catch (error) {
            console.log(error)
        }
    }

    getData()
  }, [])

  return (
    <TasksContext.Provider 
        value={{
            tasks,
            setTasks,
            isOpen,
            setIsOpen
        }}
    >
        {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider
export {TasksContext}