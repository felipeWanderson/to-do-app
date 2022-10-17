import { ClipboardText } from 'phosphor-react';
import styles from './EmptyTask.module.css';

function EmptyTask() {
  return (
    <div className={styles.emptyContainer}>
      <ClipboardText size={100} />
      <div className={styles.emptyTaskText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}

export default EmptyTask;