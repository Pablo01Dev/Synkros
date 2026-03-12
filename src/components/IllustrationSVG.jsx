import React from "react"
import { motion } from "framer-motion"
import { BatteryCharging, Bluetooth, Fingerprint, Home, ShieldCheck, Smartphone, Volume2 } from "lucide-react"
import styles from './IllustrationSVG.module.css'

export default function IllustrationSVG({ className = "" }) {
  const nodes = [
    { x: 512, y: 320, r: 68, icon: Home },
    { x: 220, y: 320, r: 52, icon: Volume2 },
    { x: 350, y: 150, r: 52, icon: Smartphone },
    { x: 680, y: 150, r: 52, icon: Fingerprint },
    { x: 820, y: 320, r: 52, icon: Bluetooth },
    { x: 350, y: 500, r: 52, icon: BatteryCharging },
    { x: 680, y: 500, r: 52, icon: ShieldCheck }
  ]

  const links = [
    [512, 320, 220, 320],
    [512, 320, 350, 150],
    [512, 320, 680, 150],
    [512, 320, 820, 320],
    [512, 320, 350, 500],
    [512, 320, 680, 500]
  ]

  return (
    <motion.svg
      viewBox="0 0 1024 640"
      className={`${className} ${styles.selectNone}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {links.map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#27b561"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.9 }}
          transition={{ delay: 0.25 + i * 0.08, duration: 0.55 }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35 + i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.08 }}
        >
          <circle cx={n.x} cy={n.y} r={n.r} fill="#0f172a" stroke="#e2e8f0" strokeWidth="3" />
          <circle cx={n.x} cy={n.y} r={n.r - 12} fill="#22c55e" />
          <circle cx={n.x} cy={n.y} r={n.r - 27} fill="#16a34a" />
          <foreignObject x={n.x - 19} y={n.y - 19} width={38} height={38} style={{ pointerEvents: "none" }}>
            <div className={styles.iconBox}>
              <n.icon size={n.r > 60 ? 32 : 28} strokeWidth={2.7} />
            </div>
          </foreignObject>
        </motion.g>
      ))}
    </motion.svg>
  )
}
