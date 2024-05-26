import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface Task {
  id: string
  done: boolean
  name: string
  description: string
  date: string
  category: string
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const listTask = localStorage.getItem('task_info')
    return listTask ? JSON.parse(listTask).reverse() : []
  })

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filter, setFilter] = useState<string>('all')
  const navigate = useNavigate()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  const toggleDone = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done }
      }
      return task
    })
    setTasks(updatedTasks)
    localStorage.setItem('task_info', JSON.stringify(updatedTasks))
  }

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
    localStorage.setItem('task_info', JSON.stringify(updatedTasks))
  }

  const filteredTasks = tasks
    .filter((task) => task.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((task) => {
      if (filter === 'completed') return task.done
      if (filter === 'incomplete') return !task.done
      return true
    })

  const completedTasksCount = tasks.filter((task) => task.done).length
  const incompleteTasksCount = tasks.filter((task) => !task.done).length

  return (
    <>
      <h1 style={{ color: 'white' }}>Home</h1>
      <Link to='/add'>
        <button className='add-task' type='button' aria-label='Add Task'>
          Add Task
        </button>
      </Link>
      <div>
        <input type='text' placeholder='Search by task name' value={searchTerm} onChange={handleSearch} />
      </div>{' '}
      <hr />
      <div>
        <label htmlFor='filter'>Filter tasks: </label>
        <select id='filter' value={filter} onChange={handleFilterChange}>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='incomplete'>Incomplete</option>
        </select>
      </div>{' '}
      <hr />
      <div>
        <p>Total tasks: {tasks.length}</p>
        <p>Completed tasks: {completedTasksCount}</p>
        <p>Incomplete tasks: {incompleteTasksCount}</p>
      </div>{' '}
      <hr />
      <ul className='task-list' style={{ listStyleType: 'none', padding: 0 }}>
        {filteredTasks.map((task: Task) => (
          <li key={task.id} style={{ marginBottom: '10px' }} className={task.done ? 'completed' : 'incomplete'}>
            <div>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Category: {task.category}</p>
              <p>Date: {task.date}</p>
              <p>Status: {task.done ? 'Completed' : 'Incomplete'}</p>
              <button onClick={() => toggleDone(task.id)}>{task.done ? 'Mark Incomplete' : 'Mark Complete'}</button>
              <button className='delete-task' onClick={() => deleteTask(task.id)}>
                Delete
              </button>
              <button className='edit-task' onClick={() => navigate(`/edit/${task.id}`)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home
