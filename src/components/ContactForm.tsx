"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { site } from '../content/site'
import styles from './ContactForm.module.css'

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('Email invalido'),
  phone: z.string().optional(),
  how: z.enum(['Google', 'Midias Sociais', 'Indicacao', 'Radio/TV', 'Outro']),
  message: z.string().min(5)
})

type ContactForm = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema), defaultValues: { how: 'Google' } })

  const [sent, setSent] = React.useState(false)

  async function onSubmit(data: ContactForm) {
    await new Promise((r) => setTimeout(r, 700))
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 2500)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label className={styles.label}>Nome</label>
        <input className={styles.input} {...register('name')} />
        {errors.name && <div className={styles.error}>{errors.name.message}</div>}
      </div>

      <div>
        <label className={styles.label}>Email</label>
        <input className={styles.input} {...register('email')} />
        {errors.email && <div className={styles.error}>{errors.email.message}</div>}
      </div>

      <div>
        <label className={styles.label}>Telefone</label>
        <input className={styles.input} {...register('phone')} />
      </div>

      <div>
        <label className={styles.label}>Como nos conheceu</label>
        <select className={styles.select} {...register('how')}>
          <option>Google</option>
          <option>Midias Sociais</option>
          <option>Indicacao</option>
          <option>Radio/TV</option>
          <option>Outro</option>
        </select>
      </div>

      <div className={styles.fullRow}>
        <label className={styles.label}>Mensagem</label>
        <textarea className={styles.textarea} rows={6} {...register('message')} />
        {errors.message && <div className={styles.error}>{errors.message.message}</div>}
      </div>

      <div className={styles.actions}>
        <button type="submit" disabled={isSubmitting} className={styles.submit}>Enviar</button>
        <a className={styles.whatsapp} href={site.contacts.whatsappLink}>Enviar por WhatsApp</a>
        {sent && <div className={styles.success}>Mensagem enviada (simulado)</div>}
      </div>
    </form>
  )
}
