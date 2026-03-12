import React from 'react'
import { site } from '../../../src/content/site'
import styles from '../../pageLayout.module.css'

export default function CasePage({ params }: { params: { slug: string } }) {
  const item = site.portfolio.find((p) => p.slug === params.slug)

  if (!item) {
    return <div className={styles.error}>Case nao encontrado</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={`${styles.cardText} ${styles.spaced}`}>{item.subtitle}</p>
      <div className={styles.spaced}>
        <strong>Desafio:</strong> {item.challenge}
      </div>
      <div className={styles.spaced}>
        <strong>Solucao:</strong> {item.solution}
      </div>
      <div className={styles.spaced}>
        <strong>Resultado:</strong> {item.result}
      </div>
    </div>
  )
}
