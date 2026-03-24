"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { site } from '../content/site'
import styles from './Footer.module.css'

function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className={styles.title}>{site.company.name}</h4>
            <p className={styles.text}>{site.company.slogan}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            <h5 className={styles.subtitleTitle}>Contato</h5>
            <div className={styles.text}>{site.contacts.email}</div>
            <div className={styles.text}>{site.contacts.phone}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h5 className={styles.subtitleTitle}>Links</h5>
            <a href="/servicos" className={styles.link}>Servicos</a>
            <a href="/portfolio" className={styles.link}>Portfolio</a>
          </motion.div>
        </div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          © {new Date().getFullYear()} {site.company.name}. Todos os direitos reservados.
        </motion.div>
      </div>
    </motion.footer>
  )
}

export { Footer }

