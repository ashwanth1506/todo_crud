import { useEffect, useState } from 'react'
import './task.css'

function Tasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
  }, [])


  function removeTask(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => setTasks(data.tasks))
  }

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h1 id='head'>My Tasks ✓</h1>

      {tasks.length === 0 && <p id='m'>No tasks available</p>}

      {tasks.map(task => (
  <div className="task-row" key={task.id}>
    <span className="task-text">{"➤"} {task.text}</span>

    <button
      className="completed-btn"
      onClick={() => removeTask(task.id)}
    >
      Completed
    </button>
  </div>
))}
  

    </div>
  )
}

export default Tasks


