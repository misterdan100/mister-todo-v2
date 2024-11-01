import '../styles/projectCard.css'
import useTasks from '../hooks/useTasks'
import PreviewTask from '../components/PreviewTask'
import PlusIcon from '../assets/PlusIcon'

const ProjectCard = ({project}) => {
  const { tasks, handleCreateTaskFromProject } = useTasks()

  return (
    <div className="projectCard-container">
      <div className="projectCard-head">
        <h3 className="project-title">
          {project ? project : "Without project"}
        </h3>
        {project && (
          <button
            type="button"
            onClick={() =>
              handleCreateTaskFromProject({
                projectCategory: project,
              })
            }
            className="add-continer"
          >
            <PlusIcon />
            <p>Add</p>
          </button>
        )}
      </div>
      {tasks?.map((task, index) => {
        if (task.projectCategory?.toLowerCase() === project?.toLowerCase()) {
          return <PreviewTask key={index} task={task} />;
        }
      })}
    </div>
  );
}

export default ProjectCard