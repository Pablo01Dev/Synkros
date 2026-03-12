import React from 'react'
import styles from './ClientsMarquee.module.css'

export default function ClientsGrid() {
  const logos = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.svg']

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Alguns clientes</h3>

      <div className={styles.grid}>
        {logos.map((logo, i) => (
          <div key={i} className={styles.logoCard}>
            <img src={`/placeholders/${logo}`} alt={`Cliente ${i + 1}`} className={styles.logo} />
          </div>
        ))}
      </div>
    </section>
  )
}
