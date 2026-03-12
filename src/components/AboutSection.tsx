import React from 'react'
import NeuralNetworkGrid from './NeuralNetworkGrid'
import styles from './AboutSection.module.css'

export default function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <NeuralNetworkGrid />
      </div>

      <div className={`${styles.videoWrapper} ${full ? styles.full : styles.compact}`}>
        <video src="/placeholders/video-sobre.mp4" autoPlay loop muted playsInline className={styles.video}>
          Seu navegador nao suporta videos.
        </video>
        <div className={styles.overlay} />
      </div>
    </section>
  )
}
