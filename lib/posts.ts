import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content', 'blog')

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  cover?: string
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return []
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  const posts = files.map(file => {
    const filePath = path.join(postsDir, file)
    const source = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(source)
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: String(data.title || ''),
      date: String(data.date || ''),
      description: String(data.description || ''),
      tags: data.tags || [],
      cover: data.cover || '',
      content
    }
  })
  posts.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export function getPostBySlug(slug: string): Post | null {
  const p = path.join(postsDir, `${slug}.mdx`)
  if (!fs.existsSync(p)) return null
  const source = fs.readFileSync(p, 'utf-8')
  const { data, content } = matter(source)
  return {
    slug,
    title: String(data.title || ''),
    date: String(data.date || ''),
    description: String(data.description || ''),
    tags: data.tags || [],
    cover: data.cover || '',
    content
  }
}
