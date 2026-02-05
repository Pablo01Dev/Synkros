import React from 'react'

export default function StructureSection(){
  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Estrutura e Capacidade</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <div className="h-28 bg-slate-50 rounded mb-3" />
          <h4 className="font-semibold">Equipe técnica</h4>
          <p className="text-slate-600 text-sm">Profissionais qualificados e atualizados com as melhores práticas.</p>
        </div>
        <div className="card">
          <div className="h-28 bg-slate-50 rounded mb-3" />
          <h4 className="font-semibold">Laboratório</h4>
          <p className="text-slate-600 text-sm">Ambiente de testes para homologação de soluções antes da implantação.</p>
        </div>
        <div className="card">
          <div className="h-28 bg-slate-50 rounded mb-3" />
          <h4 className="font-semibold">Suporte</h4>
          <p className="text-slate-600 text-sm">Serviços de atendimento e contrato de manutenção.</p>
        </div>
      </div>
    </section>
  )
}
