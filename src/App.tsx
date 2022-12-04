import Header from "./components/Header"
import styles from "./App.module.css";
import NewTask from "./components/NewTask";
import InfoTask from "./components/InfoTask";
import EmptyTask from "./components/EmptyTask";
import ListTask from "./components/ListTask";

function App() {

  return (
    <main>
      <Header />

      <div className={styles.container}>
        <NewTask />

        <div className={styles.taskContainer}>
          <InfoTask />
          <ListTask />
          {/* <EmptyTask /> */}
        </div>
      </div>
    </main>
  )
}

export default App
