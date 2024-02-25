import { useState } from 'react'
import './App.css'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProjectsPage />
    </>
  )
}

export default App
