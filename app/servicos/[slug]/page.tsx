import React from 'react'
import { site } from '../../../src/content/site'
import styles from '../../pageLayout.module.css'

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = site.services.find((s) => s.slug === params.slug)

  if (!service) {
    return <div className={styles.error}>Servico nao encontrado</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{service.title}</h1>
      <p className={`${styles.bodyText} ${styles.spaced}`}>{service.longDescription}</p>
      <ul className={styles.bulletList}>
        {service.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}
