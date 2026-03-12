"use client"
import React from 'react'
import Link from 'next/link'
import styles from './LatestPosts.module.css'

const staticPosts = [
  {
    slug: '2025-01-10-launching-automation',
    title: 'Lancamento: automacao pratica para seu espaco',
    description: 'Como pequenas melhorias em automacao transformam experiencias de uso.',
    date: '2025-01-10'
  },
  {
    slug: '2025-02-01-wifi-best-practices',
    title: 'Wi-Fi: melhores praticas para empresas',
    description: 'Dicas para melhorar cobertura e capacidade de sua rede sem fio.',
    date: '2025-02-01'
  },
  {
    slug: '2025-03-05-security-trends',
    title: 'Tendencias em seguranca eletronica 2025',
    description: 'O que esperar das solucoes de monitoramento e integracao.',
    date: '2025-03-05'
  }
]

export default function LatestPosts() {
  return (
    <div className={styles.grid}>
      {staticPosts.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.card}>
          <h4 className={styles.title}>{p.title}</h4>
          <p className={styles.description}>{p.description}</p>
          <div className={styles.meta}>{p.date}</div>
        </Link>
      ))}
    </div>
  )
}
