import Link from 'next/link'
import React from 'react'
import { Service } from '../content/site'
import { Home, Cpu, Wifi, Shield, Lock, Zap, Wrench, Music, Battery, Phone } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  SmartHome: <Home />,
  Home: <Home />,
  Cpu: <Cpu />,
  Wifi: <Wifi />,
  Shield: <Shield />,
  Lock: <Lock />,
  Zap: <Zap />,
  Tool: <Wrench />,
  Music: <Music />,
  Battery: <Battery />,
  Phone: <Phone />
}

export default function ServicesGrid({ services, showAll }: { services: Service[], showAll?: boolean }) {
  // por padrão mostramos 6 itens na home para melhor visual
  const defaultCount = 6
  const list = showAll ? services : services.slice(0, defaultCount)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map(s => (
        <div key={s.slug} className="card hover:shadow-md">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded">{iconMap[s.icon] || <Wrench />}</div>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.shortDescription}</p>
            </div>
          </div>
          <div className="mt-4">
            <Link href={`/servicos/${s.slug}`} className="text-accent">Ver serviço →</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
