import React, { useState } from 'react'
import { Col, Row } from 'antd'
import useStyles from './style.mdule'

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

const General = () => {
  const { styles } = useStyles()
  const [tasks, setTasks] = useState<Task[]>(() => {
    const listTask = localStorage.getItem('task_info')
    return listTask ? JSON.parse(listTask).reverse() : []
  })
  const completedTasksCount = tasks.filter((task) => task.done).length
  const incompleteTasksCount = tasks.filter((task) => !task.done).length

  return (
    <div className={styles.layoutGeneral}>
      <Row gutter={20} justify='center'>
        <Col className='gutter-row' span={8}>
          <div style={style}>
            <p>Total tasks: {tasks.length}</p>
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div style={style}>
            <p>Completed tasks: {completedTasksCount}</p>
          </div>
        </Col>
        <Col className='gutter-row' span={8}>
          <div style={style}>
            <p>Incomplete tasks: {incompleteTasksCount}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default General
