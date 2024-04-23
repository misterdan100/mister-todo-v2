import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import './styles/app.css'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
