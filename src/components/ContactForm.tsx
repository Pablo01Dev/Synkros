"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { site } from '../content/site'

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  how: z.enum(['Google','Mídias Sociais','Indicação','Rádio/TV','Outro']),
  message: z.string().min(5)
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactForm(){
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>({ resolver: zodResolver(contactSchema), defaultValues: { how: 'Google' } })
  const [sent, setSent] = React.useState(false)

  async function onSubmit(data: ContactForm){
    await new Promise(r=>setTimeout(r,700))
    setSent(true)
    reset()
    setTimeout(()=>setSent(false),2500)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm text-slate-200">Nome</label>
        <input className="w-full border border-slate-600 bg-slate-900 rounded px-3 py-2" {...register('name')} />
        {errors.name && <div className="text-xs text-red-500">{errors.name.message}</div>}
      </div>

      <div>
        <label className="block text-sm text-slate-200">Email</label>
        <input className="w-full border border-slate-600 bg-slate-900 rounded px-3 py-2" {...register('email')} />
        {errors.email && <div className="text-xs text-red-500">{errors.email.message}</div>}
      </div>

      <div>
        <label className="block text-sm text-slate-200">Telefone</label>
        <input className="w-full border border-slate-600 bg-slate-900 rounded px-3 py-2" {...register('phone')} />
      </div>

      <div>
        <label className="block text-sm text-slate-200">Como nos conheceu</label>
        <select className="w-full border border-slate-600 bg-slate-900 rounded px-3 py-2" {...register('how')}>
          <option>Google</option>
          <option>Mídias Sociais</option>
          <option>Indicação</option>
          <option>Rádio/TV</option>
          <option>Outro</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm text-slate-200">Mensagem</label>
        <textarea className="w-full border border-slate-600 bg-slate-900 rounded px-3 py-2" rows={6} {...register('message')} />
        {errors.message && <div className="text-xs text-red-500">{errors.message.message}</div>}
      </div>

      <div className="md:col-span-2 flex items-center gap-3">
        <button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground px-4 py-2 rounded">Enviar</button>
        <a className="text-slate-300" href={site.contacts.whatsappLink}>Enviar por WhatsApp</a>
        {sent && <div className="text-green-500">Mensagem enviada (simulado)</div>}
      </div>
    </form>
  )
}

