import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

function NewTask() {
  return (
    <div className={styles.newTaskContainer}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle size={32} />
        </button>
      </form>
    </div>
  )
}

export default NewTask;