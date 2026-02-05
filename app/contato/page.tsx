"use client"
import React from 'react'
import ContactForm from '../../src/components/ContactForm'

export default function Contato(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p className="text-slate-600 mb-6">Fale conosco pelo formulário ou via WhatsApp.</p>
      <ContactForm />
    </div>
  )
}
