import React from 'react'
import Link from 'next/link'
import { site } from '../../src/content/site'

export default function Portfolio(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Portfólio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {site.portfolio.map(p => (
          <Link key={p.slug} href={`/portfolio/${p.slug}`} className="card hover:shadow-md">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-300">{p.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

