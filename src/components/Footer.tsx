import React from 'react'
import { site } from '../content/site'

function Footer(){
  return (
    <footer className="border-t mt-12 bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold">{site.company.name}</h4>
            <p className="text-slate-600 text-sm">{site.company.slogan}</p>
          </div>
          <div>
            <h5 className="font-semibold">Contato</h5>
            <div className="text-sm text-slate-600">{site.contacts.email}</div>
            <div className="text-sm text-slate-600">{site.contacts.phone}</div>
          </div>
          <div>
            <h5 className="font-semibold">Links</h5>
            <a href="/servicos" className="block text-slate-600 text-sm">Serviços</a>
            <a href="/portfolio" className="block text-slate-600 text-sm">Portfólio</a>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-400 text-sm">© {new Date().getFullYear()} {site.company.name}. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}

export { Footer }
