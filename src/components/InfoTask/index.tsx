import { useMemo } from 'react';
import styles from './InfoTask.module.css';

type Task = {
  id: string,
  description: string,
  isComplete: boolean
}

interface InfoTaskProps {
  tasks: Task[];
}

function InfoTask({tasks}: InfoTaskProps) {
  const totalTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const tasksCompleted = useMemo(() => {
    return tasks.filter(task => task.isComplete === true).length;
  }, [tasks]);

  return (
    <div className={styles.infoTaskContainer}>
      <div className={styles.infoTaskCreated}>
        <strong>Tarefas criadas</strong>
        <span>{totalTasks}</span>
      </div>
      <div className={styles.infoTaskDone}>
        <strong>Concluídas</strong>
        <span>{tasksCompleted}</span>
      </div>
    </div>
  );
}

export default InfoTask;