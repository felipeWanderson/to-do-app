import styles from './InfoTask.module.css';

function InfoTask() {
  return (
    <div className={styles.infoTaskContainer}>
      <div className={styles.infoTaskCreated}>
        <strong>Tarefas criadas</strong>
        <span>0</span>
      </div>
      <div className={styles.infoTaskDone}>
        <strong>Concluídas</strong>
        <span>0</span>
      </div>
    </div>
  );
}

export default InfoTask;