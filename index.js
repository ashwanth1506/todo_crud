import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

let tasks = []

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.post('/addtask', (req, res) => {
  const { task } = req.body

  if (!task || task.trim() === '') {
    return res.json({ message: 'Task must not be empty ✘' })
  }

  const newTask = {
    id: Date.now(),
    text: task
  }

  tasks.push(newTask)

  res.json({
    message: `Task "${task}" added successfully ✓`,
    tasks
  })
})


app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id)
  tasks = tasks.filter(t => t.id !== id)
  res.json({ tasks })
})

app.listen(3000, () => {
  console.log(' Server running on http://localhost:3000')
})
