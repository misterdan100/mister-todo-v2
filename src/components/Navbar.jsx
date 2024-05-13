import { useLocation } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon'
import ProjectIcon from '../assets/ProjectIcon'
import TagIcon from '../assets/TagIcon'
import TasksIcon from '../assets/TasksIcon'
import StarSolid from '../assets/StarSolid'
import '../styles/navbar.css'


const Navbar = () => {
  const {pathname} = useLocation()
  const locations = {
    '/': ['Home', <HomeIcon />],
    '/tasks': ['Tasks', <TasksIcon />],
    '/projects': ['Projects', <ProjectIcon />],
    '/tags': ['Tags', <TagIcon />],
    '/favorites': ['Favorites', <StarSolid />],
  }

  return (
    <div className='navbar-container'>
        <div className='title-container'>
          {locations[pathname][1]}
          <h1 className='nav-title'>{locations[pathname][0]}</h1>
        </div>

        <input 
        className='nav-input'
        type="text" 
        placeholder='Search todos...'
        />

        <div className='nav-user'>
            <img src="/src/assets/react.svg" alt="" />
        </div>
    </div>
    
  )
}

export default Navbar