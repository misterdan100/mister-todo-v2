import { useEffect } from 'react'
import useTasks from '../hooks/useTasks'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.css'

const Projects = () => {

  const { categories } = useTasks()
  return (
    <div className='projects-container'>
      {categories?.map( (category, index) => <ProjectCard key={index} project={category}/>)}
    </div>
  )
}

export default Projects