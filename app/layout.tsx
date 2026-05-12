import '../styles/globals.css'
import React from 'react'
import { SiteHeader } from '../src/components/Navbar'
import { Footer } from '../src/components/Footer'
import styles from './layout.module.css'

export const metadata = {
  title: 'Synkros - Automação, Redes e Soluções Inteligentes',
  description: 'Soluções de automação, redes e infraestrutura para empresas e residências.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <SiteHeader />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
