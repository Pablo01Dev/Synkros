"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { site } from '../content/site'
import { Menu, X, Phone } from 'lucide-react'
import styles from './Navbar.module.css'

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image src="/logo.svg" alt="logo" width={200} height={36} className={styles.logo} />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/empresa" className={styles.navLink}>A Empresa</Link>
          <div className={styles.servicesGroup}>
            <button className={styles.servicesButton}>Servicos</button>
            <div className={styles.dropdown}>
              {site.services.map((s) => (
                <Link key={s.slug} href={`/servicos/${s.slug}`} className={styles.dropdownLink}>
                  {s.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
          <Link href="/contato" className={styles.navLink}>Contato</Link>
        </nav>

        <div className={styles.actions}>
          <a href={site.contacts.whatsappLink} className={styles.whatsappDesktop}>
            <Phone size={16} /> Fale no WhatsApp
          </a>
          <button className={styles.menuButton} onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileContent}>
            <Link href="/">Home</Link>
            <Link href="/empresa">A Empresa</Link>
            <Link href="/servicos">Servicos</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/parcerias">Parcerias</Link>
            <Link href="/contato">Contato</Link>
            <a href={site.contacts.whatsappLink} className={styles.whatsappMobile}>
              <Phone size={16} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
