import React from 'react'
import AboutSection from '../../src/components/AboutSection'
import styles from '../pageLayout.module.css'

export default function Empresa() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A Empresa</h1>
      <AboutSection full />
    </div>
  )
}
