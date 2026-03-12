"use client"
import React from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [email, setEmail] = React.useState('')
  const [saved, setSaved] = React.useState(false)

  function save() {
    if (!email) return
    const list = JSON.parse(localStorage.getItem('nl') || '[]')
    list.push({ email, date: new Date().toISOString() })
    localStorage.setItem('nl', JSON.stringify(list))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h4 className={styles.title}>Newsletter</h4>
        <p className={styles.description}>Receba novidades e artigos tecnicos.</p>
      </div>
      <div className={styles.controls}>
        <input
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="seu@email.com"
        />
        <button onClick={save} className={styles.button}>Assinar</button>
      </div>
      {saved && <div className={styles.saved}>Obrigado, salvo localmente.</div>}
    </div>
  )
}
