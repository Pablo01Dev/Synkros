import React from 'react'
import { site } from '../content/site'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h4 className={styles.title}>{site.company.name}</h4>
            <p className={styles.text}>{site.company.slogan}</p>
          </div>
          <div>
            <h5 className={styles.subtitleTitle}>Contato</h5>
            <div className={styles.text}>{site.contacts.email}</div>
            <div className={styles.text}>{site.contacts.phone}</div>
          </div>
          <div>
            <h5 className={styles.subtitleTitle}>Links</h5>
            <a href="/servicos" className={styles.link}>Servicos</a>
            <a href="/portfolio" className={styles.link}>Portfolio</a>
          </div>
        </div>

        <div className={styles.copy}>© {new Date().getFullYear()} {site.company.name}. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

export { Footer }
