import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add: React.FC = () => {
  const [taskName, setTaskName] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [taskDate, setTaskDate] = useState<string>('');
  const [taskCategory, setTaskCategory] = useState('');

  const n = useNavigate();
  const newTask = {
    id: crypto.randomUUID(),
    done: false,
    name: taskName,
    description: taskDescription,
    date: taskDate,
    category: taskCategory,
  };

  const handleAddTask = () => {
    const existingTasks = localStorage.getItem('task_info');
    if (existingTasks) {
      const tasksArray = JSON.parse(existingTasks);
      tasksArray.push(newTask);
      localStorage.setItem('task_info', JSON.stringify(tasksArray));
    } else {
      localStorage.setItem('task_info', JSON.stringify([newTask]));
    }

    n("/");
  };

  const back = () => {
    n("/");
  };

  return (
    <>
      <div style={{ color: "white" }}>
        <h1>Add Task</h1>
        <form>
          <div>
            <label htmlFor="taskName">Task Name: </label>
            <input
              type="text"
              id="taskName"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="taskDescription">Task Description: </label>
            <textarea
              id="taskDescription"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="taskDate">Task Date: </label>
            <input
              type="date"
              id="taskDate"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="taskCategory">Task Category: </label>
            <select
              id="taskCategory"
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Education">Education</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <br />
          <button type="button" onClick={back}>Back</button>
          <button type="submit" onClick={handleAddTask}>Add Task</button>
        </form>
      </div>
    </>
  );
};

export default Add;
  