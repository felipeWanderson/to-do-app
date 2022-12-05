import Header from "./components/Header"
import styles from "./App.module.css";
import NewTask from "./components/NewTask";
import InfoTask from "./components/InfoTask";
import EmptyTask from "./components/EmptyTask";
import ListTask from "./components/ListTask";
import { useCallback, useEffect, useState } from "react";

type Task = {
  id: string,
  description: string,
  isComplete: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = useCallback(async () => {
    const response = await fetch('http://localhost:3000/todos').then(response => response.json());
    setTasks(response);
  }, []);

  useEffect(() => {
    loadTasks();
  }, []);

  const handleTaskComplete = (id: string) => {
    const updatedTask = tasks.map((task) =>
    task.id === id
      ? {
          ...task,
          isComplete: !task.isComplete,
        }
      : task
  );

  setTasks(updatedTask);
  }

  const handleCreateTask = async (data: Task) => {
    const response = await fetch(`http://localhost:3000/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());
    setTasks(prevState => [...prevState, response]);
  }
  const handleDeleteTask = async (id: string) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })
    const upadateTasks = tasks.filter(task => task.id !== id);
    setTasks(upadateTasks); 
  }

  return (
    <main>
      <Header />

      <div className={styles.container}>
        <NewTask handleCreateTask={handleCreateTask} />

        <div className={styles.taskContainer}>
          <InfoTask tasks={tasks} />
          {tasks.length > 0 ? (
            <ListTask tasks={tasks} handleTaskComplete={handleTaskComplete} handleDeleteTask={handleDeleteTask} />
          ): (
            <EmptyTask />
          )}
        </div>
      </div>
    </main>
  )
}

export default App
