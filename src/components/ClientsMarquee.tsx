"use client"
import React from 'react'
import { motion } from 'framer-motion'
import styles from './ClientsMarquee.module.css'

export default function ClientsGrid() {
  const logos = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.svg']

  return (
    <section className={styles.section}>
      <motion.h3
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        Alguns clientes
      </motion.h3>

      <div className={styles.grid}>
        {logos.map((logo, i) => (
          <motion.div
            key={logo}
            className={styles.logoCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={`/placeholders/${logo}`} alt={`Cliente ${i + 1}`} className={styles.logo} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

