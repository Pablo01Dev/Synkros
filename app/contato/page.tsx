import React from 'react'
import ContactForm from '../../src/components/ContactForm'
import styles from '../pageLayout.module.css'

export default function Contato() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>
      <p className={styles.subtitle}>Fale conosco pelo formulario ou via WhatsApp.</p>
      <ContactForm />
    </div>
  )
}
