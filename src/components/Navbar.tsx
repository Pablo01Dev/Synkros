"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { site } from '../content/site'
import { Menu, X, MessageCircle } from 'lucide-react'
import styles from './Navbar.module.css'

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  // Função para fechar o menu mobile ao clicar
  const handleLinkClick = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Âncora para o topo da página */}
        <Link href="#home" className={styles.brand}>
          <Image src="/logo.svg" alt="logo" width={300} height={36} className={styles.logo} />
        </Link>

        <nav className={styles.desktopNav}>
          <a href="#empresa" className={styles.navLink}>A Empresa</a>
          <a href="#servicos" className={styles.navLink}>Serviços</a>
          <a href="#contato" className={styles.navLink}>Contato</a>
        </nav>

        <div className={styles.actions}>
          <a href={site.contacts.whatsappLink} className={styles.whatsappDesktop}>
            <MessageCircle size={16} /> Fale no WhatsApp
          </a>
          <button 
            className={styles.menuButton} 
            onClick={() => setOpen(!open)} 
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileContent}>
            <a href="#home" onClick={handleLinkClick}>Home</a>
            <a href="#empresa" onClick={handleLinkClick}>A Empresa</a>
            <a href="#servicos" onClick={handleLinkClick}>Serviços</a>
            <a href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
            <a href="#contato" onClick={handleLinkClick}>Contato</a>
            <a 
              href={site.contacts.whatsappLink} 
              className={styles.whatsappMobile}
              onClick={handleLinkClick}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}