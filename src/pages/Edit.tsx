import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface Task {
  id: string
  done: boolean
  name: string
  description: string
  date: string
  category: string
}

const categories = ['Work', 'Education', 'Others']

const EditTask: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [task, setTask] = useState<Task | null>(null)
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  useEffect(() => {
    const listTask = localStorage.getItem('task_info')
    if (listTask) {
      const tasks: Task[] = JSON.parse(listTask)
      const taskToEdit = tasks.find((task) => task.id === id)
      if (taskToEdit) {
        setTask(taskToEdit)
        setName(taskToEdit.name)
        setDescription(taskToEdit.description)
        setDate(taskToEdit.date)
        setCategory(taskToEdit.category)
      }
    }
  }, [id])

  const handleSave = () => {
    if (task) {
      const updatedTask = { ...task, name, description, date, category }
      const listTask = localStorage.getItem('task_info')
      if (listTask) {
        const tasks: Task[] = JSON.parse(listTask)
        const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t))
        localStorage.setItem('task_info', JSON.stringify(updatedTasks))
        navigate('/')
      }
    }
  }

  const handleBack = () => {
    navigate('/')
  }

  if (!task) return <p>Task not found</p>

  return (
    <div>
      <h1>Edit Task</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSave()
        }}
      >
        <div>
          <label>Name</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>{' '}
        <br />
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>{' '}
        <br />
        <div>
          <label>Date</label>
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>{' '}
        <br />
        <div>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>{' '}
        <br />
        <button type='button' onClick={handleBack}>
          Back
        </button>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default EditTask
