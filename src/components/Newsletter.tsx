"use client"
import React from 'react'

export default function Newsletter(){
  const [email, setEmail] = React.useState('')
  const [saved, setSaved] = React.useState(false)
  function save(){
    if(!email) return
    const list = JSON.parse(localStorage.getItem('nl')||'[]')
    list.push({email, date: new Date().toISOString()})
    localStorage.setItem('nl', JSON.stringify(list))
    setSaved(true)
    setTimeout(()=>setSaved(false),2000)
  }
  return (
    <div className="card flex flex-col md:flex-row items-start gap-3">
      <div className="flex-1">
        <h4 className="font-semibold">Newsletter</h4>
        <p className="text-slate-600 text-sm">Receba novidades e artigos técnicos.</p>
      </div>
      <div className="flex gap-2 w-full md:w-auto">
        <input aria-label="Email" value={email} onChange={e=>setEmail(e.target.value)} className="border rounded px-3 py-2" placeholder="seu@email.com" />
        <button onClick={save} className="bg-accent text-white px-4 py-2 rounded">Assinar</button>
      </div>
      {saved && <div className="text-green-600">Obrigado — salvo localmente.</div>}
    </div>
  )
}
