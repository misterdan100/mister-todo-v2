import '../styles/projectCard.css'
import useTasks from '../hooks/useTasks'
import PreviewTask from '../components/PreviewTask'
import PlusIcon from '../assets/PlusIcon'

const TagCard = ({tag}) => {
  const { tasks, handleCreateTaskFromTag } = useTasks()

  return (
    <div className='projectCard-container'>
      <div className='projectCard-head'>
        <h3 className='project-title'>{tag}</h3>
        <button 
        type='button'
        onClick={() => handleCreateTaskFromTag({
          tags: [tag]
        })}
          className='add-continer'
        >
          <PlusIcon />
          <p>add</p>
        </button>
      </div>
      {tasks?.map( (task, index) => {
        if(task.tags.includes(tag)) {
          return <PreviewTask key={index} task={task}/>
        }
      })}
    </div>

  )
}

export default TagCard