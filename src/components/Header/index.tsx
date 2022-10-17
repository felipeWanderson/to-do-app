import styles from './Header.module.css';

import toDoLogo from '../../assets/to-do-app-logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logotipo do ToDo" />
    </header>
  );
}

export default Header;