import { HTMLProps } from 'react';

import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

interface TaskProps extends HTMLProps<HTMLInputElement> {
  description: string;
}

function Task({id, description, checked, ...rest}:TaskProps) {
  
  return (
    <div className={styles.taskContainer}>
      <input 
        type="radio"  
        id={id}
        checked={checked}
        {...rest}
      />
      <label 
        htmlFor={id}
        className={!checked ? styles.taskText : styles.taskTextDone}>
        {description}
      </label>
      <button type="button">
        <Trash size={24} />
      </button>
    </div>
  );
}

export default Task;