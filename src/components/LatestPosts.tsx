"use client"
import React from 'react'
import Link from 'next/link'

const staticPosts = [
  { slug: '2025-01-10-launching-automation', title: 'Lançamento: automação prática para seu espaço', description: 'Como pequenas melhorias em automação transformam experiências de uso.', date: '2025-01-10' },
  { slug: '2025-02-01-wifi-best-practices', title: 'Wi‑Fi: melhores práticas para empresas', description: 'Dicas para melhorar cobertura e capacidade de sua rede sem fio.', date: '2025-02-01' },
  { slug: '2025-03-05-security-trends', title: 'Tendências em segurança eletrônica 2025', description: 'O que esperar das soluções de monitoramento e integração.', date: '2025-03-05' }
]

export default function LatestPosts(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {staticPosts.map(p=> (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
          <h4 className="font-semibold">{p.title}</h4>
          <p className="text-slate-300 text-sm">{p.description}</p>
          <div className="text-xs text-slate-500 mt-2">{p.date}</div>
        </Link>
      ))}
    </div>
  )
}
