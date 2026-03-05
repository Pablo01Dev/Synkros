import React from 'react'
import { getPostBySlug } from '../../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function BlogPost({ params }: { params: { slug: string } }){
  const post = getPostBySlug(params.slug)
  if(!post) return <div className="container mx-auto px-6 py-12">Post não encontrado</div>

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-slate-400 mb-6">{post.date}</p>
      <article className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  )
}

