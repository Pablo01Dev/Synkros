import React from 'react'
import { site } from '../../../src/content/site'

export default function CasePage({ params }: { params: { slug: string } }){
  const item = site.portfolio.find(p=>p.slug===params.slug)
  if(!item) return <div className="container mx-auto px-6 py-12">Case não encontrado</div>
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
      <p className="text-slate-600 mb-4">{item.subtitle}</p>
      <div className="mb-6"><strong>Desafio:</strong> {item.challenge}</div>
      <div className="mb-6"><strong>Solução:</strong> {item.solution}</div>
      <div className="mb-6"><strong>Resultado:</strong> {item.result}</div>
    </div>
  )
}
