import React from 'react'
import Hero from '../src/components/Hero'
import ServicesGrid from '../src/components/ServicesGrid'
import AboutSection from '../src/components/AboutSection'
import ClientsMarquee from '../src/components/ClientsMarquee'
import Call from '../src/components/Call'
import { site } from '../src/content/site'
import styles from './pageLayout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle} id="servicos">Nossos Serviços</h2>
        <ServicesGrid services={site.services} />
      </section>
      <AboutSection />
      <ClientsMarquee />
      <Call />
    </div>
  )
}
