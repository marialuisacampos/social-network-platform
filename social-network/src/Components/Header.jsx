import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Icon from '../Assets/dogs.jsx'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label='Dogs - Home'>
          <Icon />
        </Link>
        <Link className={styles.login} to="/login">Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header