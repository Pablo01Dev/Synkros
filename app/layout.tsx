import '../styles/globals.css'
import React from 'react'
import { SiteHeader } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'

export const metadata = {
  title: 'Dlap Automação - Tecnologia e Automação',
  description: 'Soluções de automação, redes e infraestrutura para empresas e residências.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <SiteHeader />
        <main className="pt-[80px] md:pt-[96px] min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
