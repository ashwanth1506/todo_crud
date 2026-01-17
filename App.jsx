import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Tasks from './Tasks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  )
}

export default App
