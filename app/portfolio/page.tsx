import React from 'react'
import Link from 'next/link'
import { site } from '../../src/content/site'
import styles from '../pageLayout.module.css'

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>
      <div className={styles.gridTwo}>
        {site.portfolio.map((p) => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className={styles.card}>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardText}>{p.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
