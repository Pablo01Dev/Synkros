"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import IllustrationSVG from './IllustrationSVG'

export default function Hero() {
  return (
    <section className="relative rounded-lg overflow-hidden  border border-slate-800 p-8">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Automação e infraestrutura com foco em resultado
            </h1>
            <p className="text-slate-300 mt-4">
              Soluções sob medida para residências e empresas, integradas, seguras e fáceis de usar.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/empresa" className="px-4 py-2 bg-accent text-accent-foreground rounded">Saiba mais</Link>
              <Link href="/contato" className="px-4 py-2 border border-slate-600 text-slate-100 rounded">Orçamento</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-gradient-to-tr from-accent/20 to-slate-800 rounded-lg flex items-center justify-center">
              <IllustrationSVG className="w-full h-full max-h-[360px] object-contain" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

