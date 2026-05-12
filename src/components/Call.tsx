"use client"

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Call.module.css'

export default function Portfolio() {
  return (
    <motion.section
      className={styles.ctaContainer}
      id="contato"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className={styles.title}>
            Transforme Seu<br /> Espaço Agora.
          </h1>

          <p className={styles.description}>
            Pronto para um ambiente mais inteligente,<br />
            confortável e eficiente?<br />
            <strong>Synkros é a escolha certa.</strong>
          </p>


          <motion.button
            className={styles.ctaButton}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.45, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="https://api.whatsapp.com/send/?phone=5521980882081&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              Solicite uma consultoria
            </a>
          </motion.button>
        </motion.div>

        <motion.div
          className={styles.imageContent}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/placeholders/mulher-ligando.jpg"
              alt="Homem usando smartphone em ambiente com luz suave"
              className={styles.mainImage}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

