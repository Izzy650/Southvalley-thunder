'use client'
import { motion } from 'framer-motion'

interface ServiceFullCardProps {
  num: string
  tag: string
  title: string
  description: string
  bullets: string[]
  delay?: number
}

export default function ServiceFullCard({
  num,
  tag,
  title,
  description,
  bullets,
  delay = 0,
}: ServiceFullCardProps) {
  return (
    <motion.div
      className="relative bg-card-dark p-8 flex flex-col gap-5"
      style={{ border: '1px solid transparent' }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay }}
      whileHover={{
        borderColor: 'rgba(196,168,112,0.6)',
        boxShadow:
          '0 0 20px rgba(196,168,112,0.12), inset 0 0 20px rgba(196,168,112,0.04)',
      }}
    >
      <span
        className="absolute top-5 right-6 font-cormorant font-light select-none pointer-events-none"
        style={{ fontSize: '4rem', color: 'rgba(196,168,112,0.05)', lineHeight: 1 }}
      >
        {num}
      </span>
      <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-[0.58rem] text-gold-dark">
        {tag}
      </div>
      <h3 className="font-cinzel font-medium text-champagne tracking-wide" style={{ fontSize: '0.9rem' }}>
        {title}
      </h3>
      <p className="font-raleway font-light text-[0.85rem] leading-relaxed" style={{ color: 'rgba(196,168,112,0.55)' }}>
        {description}
      </p>
      <ul className="flex flex-col gap-2 mt-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 items-start">
            <span className="text-gold text-[0.55rem] mt-1.5 flex-shrink-0">◆</span>
            <span className="font-raleway font-light text-[0.8rem] leading-relaxed" style={{ color: 'rgba(196,168,112,0.5)' }}>
              {b}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
