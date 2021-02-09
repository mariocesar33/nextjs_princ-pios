import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Welcome Next.js!</h1>
    </header>
  );
}

export default Header;