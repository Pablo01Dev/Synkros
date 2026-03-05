import React from 'react'
import { getAllPosts } from '../../lib/posts'
import Link from 'next/link'

export default function BlogPage(){
  const posts = getAllPosts()
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-300">{p.description}</p>
            <div className="text-sm text-slate-500 mt-2">{p.date}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

