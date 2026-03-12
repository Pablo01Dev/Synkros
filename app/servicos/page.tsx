import React from 'react'
import ServicesGrid from '../../src/components/ServicesGrid'
import { site } from '../../src/content/site'
import styles from '../pageLayout.module.css'

export default function Servicos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Servicos</h1>
      <p className={styles.subtitle}>Conheca a lista completa de servicos oferecidos.</p>
      <ServicesGrid services={site.services} showAll />
    </div>
  )
}
