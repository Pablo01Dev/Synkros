"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { site } from '../content/site'
import { Menu, X, Phone } from 'lucide-react'

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/85 text-slate-100 backdrop-blur border-b border-slate-800 h-[80px] md:h-[96px]">
      <div className="container mx-auto px-12 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logo" width={200} height={36} className="block p-1" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/empresa" className="hover:text-white">A Empresa</Link>
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-white">Serviços</button>
            <div className="absolute left-0 mt-2 bg-slate-900 border border-slate-700 rounded shadow-lg p-4 hidden group-hover:block max-h-[60vh] overflow-auto">
              {site.services.map(s => (
                <Link key={s.slug} href={`/servicos/${s.slug}`} className="block py-1 text-slate-200 hover:text-white">{s.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/portfolio" className="hover:text-white">Portfólio</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/parcerias" className="hover:text-white">Parcerias</Link>
          <Link href="/contato" className="hover:text-white">Contato</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.contacts.whatsappLink} className="hidden md:inline-flex items-center gap-2 bg-[#27b561] text-white px-3 py-2 rounded">
            <Phone size={16} /> Fale no WhatsApp
          </a>
          <button className="md:hidden p-2 text-slate-100" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="px-6 py-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/empresa">A Empresa</Link>
            <Link href="/servicos">Serviços</Link>
            <Link href="/portfolio">Portfólio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/parcerias">Parcerias</Link>
            <Link href="/contato">Contato</Link>
            <a href={site.contacts.whatsappLink} className="mt-2 inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-2 rounded">
              <Phone size={16} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

