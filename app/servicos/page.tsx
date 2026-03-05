import React from 'react'
import ServicesGrid from '../../src/components/ServicesGrid'
import { site } from '../../src/content/site'

export default function Servicos(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Serviços</h1>
      <p className="text-slate-300 mb-6">Conheça a lista completa de serviços oferecidos.</p>
      <ServicesGrid services={site.services} showAll />
    </div>
  )
}

