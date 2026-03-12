import React from 'react'
import { Service } from '../content/site'
import { Home, Cpu, Wifi, Shield, Lock, Zap, Wrench, Music, Battery, Phone } from 'lucide-react'
import styles from './ServicesGrid.module.css'

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

export default function ServicesGrid({ services, showAll }: { services: Service[]; showAll?: boolean }) {
  const defaultCount = 6
  const list = showAll ? services : services.slice(0, defaultCount)

  return (
    <div className={styles.grid}>
      {list.map((s) => (
        <div key={s.slug} className={styles.card}>
          <div className={styles.row}>
            <div className={styles.iconWrap}>{iconMap[s.icon] || <Wrench />}</div>
            <div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.description}>{s.shortDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
