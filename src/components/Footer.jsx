import React from 'react';
import Logo from './Logo';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <a href="#hero" className={styles.logo}>
            <Logo className={styles.footerLogo} />
          </a>
          <p className={styles.description}>
            Excelencia en servicios de TI, soporte técnico avanzado y desarrollo de software para potenciar tu negocio.
          </p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.linkColumn}>
            <h4>Servicios</h4>
            <a href="#">Soporte Técnico</a>
            <a href="#">Mantenimiento</a>
            <a href="#">Desarrollo Web</a>
          </div>
          <div className={styles.linkColumn}>
            <h4>Empresa</h4>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
            <a href="#">Privacidad</a>
          </div>
          <div className={styles.linkColumn}>
            <h4>Social</h4>
            <a href="https://www.instagram.com/https.sunsystems.zzz?igsh=cXNyNmN4bmtpaG5u" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/share/18ftXz9XT1/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Sun Technology System. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
