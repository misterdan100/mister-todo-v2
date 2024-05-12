import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TasksProvider from './context/TasksProvider'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import Projects from './pages/Projects'
import Tags from './pages/Tags'
import Important from './pages/Important'

function App() {
  return (
    <TasksProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='tasks' element={<Tasks />}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='tags' element={<Tags />}/>
            <Route path='important' element={<Important />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </TasksProvider>
    
  )
}

export default App
