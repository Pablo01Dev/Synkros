"use client"
import React from 'react'
import { motion } from 'framer-motion'
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

const revealTransition = (delay: number) => ({
  duration: 0.45,
  delay,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
})

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={revealTransition(0.06)}
      >
        <label className={styles.label}>Nome</label>
        <input className={styles.input} {...register('name')} />
        {errors.name && <div className={styles.error}>{errors.name.message}</div>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={revealTransition(0.12)}
      >
        <label className={styles.label}>Email</label>
        <input className={styles.input} {...register('email')} />
        {errors.email && <div className={styles.error}>{errors.email.message}</div>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={revealTransition(0.18)}
      >
        <label className={styles.label}>Telefone</label>
        <input className={styles.input} {...register('phone')} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={revealTransition(0.24)}
      >
        <label className={styles.label}>Como nos conheceu</label>
        <select className={styles.select} {...register('how')}>
          <option>Google</option>
          <option>Midias Sociais</option>
          <option>Indicacao</option>
          <option>Radio/TV</option>
          <option>Outro</option>
        </select>
      </motion.div>

      <motion.div
        className={styles.fullRow}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={revealTransition(0.3)}
      >
        <label className={styles.label}>Mensagem</label>
        <textarea className={styles.textarea} rows={6} {...register('message')} />
        {errors.message && <div className={styles.error}>{errors.message.message}</div>}
      </motion.div>

      <motion.div
        className={styles.actions}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={revealTransition(0.36)}
      >
        <button type="submit" disabled={isSubmitting} className={styles.submit}>Enviar</button>
        <a className={styles.whatsapp} href={site.contacts.whatsappLink}>Enviar por WhatsApp</a>
        {sent && <div className={styles.success}>Mensagem enviada (simulado)</div>}
      </motion.div>
    </form>
  )
}

