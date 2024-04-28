import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TasksProvider from './context/TasksProvider'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Projects from './pages/Projects'
import Lists from './pages/Lists'
import Important from './pages/Important'
// import './styles/app.css'
function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='tasks' element={<Tasks />}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='lists' element={<Lists />}/>
            <Route path='important' element={<Important />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </TasksProvider>
    
  )
}

export default App
