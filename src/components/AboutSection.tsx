"use client"
import React from 'react'
import { motion } from 'framer-motion'
import NeuralNetworkGrid from './NeuralNetworkGrid'
import styles from './AboutSection.module.css'

export default function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <motion.section
      className={styles.section}
      id="empresa"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.background}>
        <NeuralNetworkGrid />
      </div>

      <motion.div
        className={`${styles.videoWrapper} ${full ? styles.full : styles.compact}`}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        <video src="/placeholders/video-sobre.mp4" autoPlay loop muted playsInline className={styles.video}>
          Seu navegador nao suporta videos.
        </video>
        <div className={styles.overlay} />
      </motion.div>
    </motion.section>
  )
}

