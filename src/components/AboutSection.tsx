"use client"
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react' // Opcional: ícones da biblioteca lucide-react
import NeuralNetworkGrid from './NeuralNetworkGrid'
import styles from './AboutSection.module.css'

export default function AboutSection({ full = false }: { full?: boolean }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
        <video 
          ref={videoRef}
          src="/placeholders/video-sobre.mp4" 
          autoPlay 
          loop 
          muted // Mantido mudo por padrão para garantir o autoPlay no browser
          playsInline 
          className={styles.video}
        >
          Seu navegador nao suporta videos.
        </video>
        
        <div className={styles.overlay} />

        {/* Botão de Som */}
        <button 
          onClick={toggleMute} 
          className={styles.muteButton}
          aria-label={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </motion.div>
    </motion.section>
  )
}