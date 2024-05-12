import PreviewTask from "../components/PreviewTask"
import useTasks from "../hooks/useTasks"
import '../styles/favorites.css'

const Favorites = () => {
  const { tasks } = useTasks()

  return (
    <div className='important-container'>
      {tasks.map( task => task.favorite && (
        <PreviewTask key={task.name} task={task}/>
      ))}
    </div>
  )
}

export default Favorites