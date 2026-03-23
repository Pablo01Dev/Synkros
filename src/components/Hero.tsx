"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import IllustrationSVG from './IllustrationSVG'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: "url('/placeholders/portfolio-1.png')" }}>
      <div className={styles.overlay} aria-hidden="true" />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.grid}>
          <div>
            <h1 className={styles.title}>Automação e infraestrutura com foco em resultado</h1>
            <p className={styles.description}>
              Soluções sob medida para residências e empresas, integradas, seguras e fáceis de usar.
            </p>
            <div className={styles.actions}>
              <Link href="/empresa" className={styles.primaryButton}>Saiba mais</Link>
              <Link href="/contato" className={styles.secondaryButton}>Orcamento</Link>
            </div>
          </div>

          <div className={styles.illustrationCol}>
            <div className={styles.illustrationWrap}>
              <IllustrationSVG className={styles.illustration} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
