import React, { useState } from 'react'
import { Col, Row } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import useStyles from './style.module'

const style: React.CSSProperties = {
  background: '#0092ff',
  padding: '50px 0',
  borderRadius: '20px',
  textAlign: 'center'
}

interface Task {
  id: string
  done: boolean
  name: string
  description: string
  date: string
  category: string
}

const Tasks = () => {
  const { styles } = useStyles()
  const [tasks, setTasks] = useState<Task[]>(() => {
    const listTask = localStorage.getItem('task_info')
    return listTask ? JSON.parse(listTask).reverse() : []
  })
  const navigate = useNavigate()

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

  return (
    <div className={styles.layoutTask}>
      <ul className='task-list' style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task: Task) => (
          <li key={task.id} style={{ marginBottom: '10px' }} className={task.done ? 'completed' : 'incomplete'}>
            <div>
              <h3>Task name: {task.name}</h3>
              <p>Task description: {task.description}</p>
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
    </div>
  )
}

export default Tasks
