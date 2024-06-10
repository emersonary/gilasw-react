import styles from './Header.module.css'

import reactLogo from '../assets/react.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={reactLogo} alt="Application Logo" />
      <h1>Front End: React / Back End: Golang</h1>
    </header>
  )
}