import Task from '../Task';
import styles from './ListTask.module.css';

type Task = {
  id: string,
  description: string,
  isComplete: boolean
}

interface ListTaskProps {
  tasks: Task[];
  handleTaskComplete: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}
function ListTask({tasks, handleTaskComplete, handleDeleteTask}: ListTaskProps) {
  
  return (
    <div className={styles.listTaskContainer}>
      {tasks.map(task => (
        <Task 
          key={task.id}
          readOnly
          id={`inputradio__${task.id}`}
          taskId={task.id}
          description={task.description}
          checked={task.isComplete}
          onClick={() => handleTaskComplete(task.id)}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default ListTask;