import React from 'react'
import { getPostBySlug } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import styles from '../../pageLayout.module.css'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return <div className={styles.error}>Post nao encontrado</div>
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>{post.date}</p>
      <article className={styles.article}>
        <MDXRemote source={post.content} />
      </article>
    </div>
  )
}
