import React from 'react'

export default function ClientsMarquee(){
  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Alguns clientes</h3>
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {Array.from({length:8}).map((_,i)=> (
            <div key={i} className="w-40 h-16 bg-slate-100 rounded flex items-center justify-center text-slate-400">Logo {i+1}</div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.animate-marquee{display:flex;gap:24px;animation:marquee 18s linear infinite}`}</style>
    </section>
  )
}
