import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Home() {
  const [input, setInput] = useState("")
  const [msg, setMsg] = useState("")
  const navigate = useNavigate()

  function addtask() {
    fetch('http://localhost:3000/addtask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: input })
    })
      .then(res => res.json())
      .then(data => {
        setMsg(data.message)
        setInput('')
      })
  }

  return (
    <>
      <h1 id="head">To_Do Application ✓ </h1>

      <input
        id="inp"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter task"
        autoComplete="off"
      />

      <button id="btn" onClick={addtask}>Create</button>

      <div id="task">{msg}</div>

      <button id="btn2" onClick={() => navigate('/tasks')}>
        My Tasks
      </button>
    </>
  )
}

export default Home
