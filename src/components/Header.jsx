import React from 'react';
import Logo from './Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} glass`}>
      <div className={`container ${styles.headerContent}`}>
        <a href="#hero" className={styles.logo}>
          <Logo className={styles.headerLogo} />
        </a>
        <nav className={styles.nav}>
          <a href="#hero">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#work">Proyectos</a>
          <a href="#features">Tecnología</a>
          <a href="#contact" className={styles.contactBtn}>Contactar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
