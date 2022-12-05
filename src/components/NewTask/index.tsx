import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import styles from './NewTask.module.css';


type Task = {
  id: string,
  description: string,
  isComplete: boolean
}

interface NewTaskProps {
  handleCreateTask: (data: Task) => void;
}

function NewTask({handleCreateTask}:NewTaskProps) {

  const [description, setDescription] = useState('');
  const handleSubmited = (event: FormEvent) => {
    event.preventDefault();
   const payload = {
    id: uuidv4(),
    description,
    isComplete: false
   }

   handleCreateTask(payload);
   setDescription('');

  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  return (
    <div className={styles.newTaskContainer}>
      <form onSubmit={handleSubmited}>
        <input 
          type="text" 
          name="description" 
          placeholder="Adicione uma nova tarefa" 
          value={description}
          onChange={e => handleOnChange(e)} 
        />
        <button type="submit">
          Criar
          <PlusCircle size={32} />
        </button>
      </form>
    </div>
  )
}

export default NewTask;