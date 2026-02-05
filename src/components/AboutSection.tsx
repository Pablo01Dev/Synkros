import React from 'react'
import { site } from '../content/site'

export default function AboutSection({ full }: { full?: boolean }){
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold">{site.company.name}</h2>
          <p className="text-slate-600 mt-3">{site.company.description}</p>
          <ul className="mt-4 list-disc pl-6 text-slate-600">
            <li>Equipe técnica certificada</li>
            <li>Projetos personalizados</li>
            <li>Suporte e manutenção</li>
          </ul>
          {full && <p className="mt-4 text-slate-500">Informações adicionais sobre a história da empresa, missão e valores podem ser colocadas aqui.</p>}
        </div>
        <div>
          <div className="h-56 bg-slate-50 rounded flex items-center justify-center">Foto/Ilustração Placeholder</div>
        </div>
      </div>
    </section>
  )
}
