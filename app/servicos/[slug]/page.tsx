import React from 'react'
import { site } from '../../../src/content/site'

export default function ServicePage({ params }: { params: { slug: string } }){
  const service = site.services.find(s=>s.slug===params.slug)
  if(!service) return <div className="container mx-auto px-6 py-12">Serviço não encontrado</div>

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="mb-6 text-slate-200">{service.longDescription}</p>
      <ul className="list-disc pl-6 text-slate-200">
        {service.bullets.map(b=> <li key={b}>{b}</li>)}
      </ul>
    </div>
  )
}

