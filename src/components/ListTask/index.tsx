import {useState} from 'react';
import Task from '../Task';
import styles from './ListTask.module.css';

type Task = {
  id: number,
  description: string,
  isComplete: boolean
}

function ListTask() {
  const defaultTask = [
    {
      id: 1,
      description: 'Tarefa 1',
      isComplete: false
    },
    {
      id: 2,
      description: 'Tarefa 2',
      isComplete: false
    },
    {
      id: 3,
      description: 'Tarefa 3',
      isComplete: false
    },
    {
      id: 4,
      description: 'Tarefa 4',
      isComplete: false
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(defaultTask);

  const handleTaskComplete = (id: number) => {
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
  
  return (
    <div className={styles.listTaskContainer}>
      {tasks.map(task => (
        <Task 
          key={task.id}
          readOnly
          id={`inputradio__${task.id}`}
          description={task.description}
          checked={task.isComplete}
          onClick={() => handleTaskComplete(task.id)} 
        />
      ))}
    </div>
  );
}

export default ListTask;