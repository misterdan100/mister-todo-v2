import { useParams } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {

  return (
    <div className='navbar-container'>
        <h1 className='nav-title'>Mister To-Do's</h1>

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