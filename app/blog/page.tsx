import React from 'react'
import { getAllPosts } from '../../lib/posts'
import Link from 'next/link'
import styles from '../pageLayout.module.css'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.gridTwo}>
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className={styles.card}>
            <h3 className={styles.cardTitle}>{p.title}</h3>
            <p className={styles.cardText}>{p.description}</p>
            <div className={styles.meta}>{p.date}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
