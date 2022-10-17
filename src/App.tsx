import Header from "./components/Header"
import styles from "./App.module.css";
import NewTask from "./components/NewTask";
function App() {

  return (
    <main>
      <Header />

      <div className={styles.container}>
        <NewTask />
      </div>
    </main>
  )
}

export default App
