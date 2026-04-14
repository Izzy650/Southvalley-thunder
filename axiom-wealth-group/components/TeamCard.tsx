'use client'
import { motion } from 'framer-motion'

interface TeamCardProps {
  role: string
  bio: string
  credentials: string[]
  delay?: number
}

export default function TeamCard({ role, bio, credentials, delay = 0 }: TeamCardProps) {
  return (
    <motion.div
      className="bg-champagne flex flex-col gap-5 p-8 relative"
      style={{ border: '1px solid #D4C8B0' }}
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
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 flex items-center justify-center flex-shrink-0"
          style={{
            borderRadius: '50%',
            border: '1.5px solid rgba(196,168,112,0.4)',
            background: 'rgba(196,168,112,0.06)',
          }}
        >
          <span className="font-cormorant font-light text-gold text-2xl">—</span>
        </div>
        <div>
          <div className="font-cinzel font-medium text-rich-black tracking-[0.16em] uppercase text-[0.65rem]">
            Team Member
          </div>
          <div className="font-raleway font-medium tracking-[0.14em] uppercase text-gold text-[0.6rem] mt-1">
            {role}
          </div>
        </div>
      </div>
      <p className="font-raleway font-light text-text-muted text-[0.83rem] leading-relaxed">
        {bio}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {credentials.map((c) => (
          <span
            key={c}
            className="font-cinzel text-[0.55rem] tracking-wider text-gold px-2 py-1"
            style={{ border: '1px solid rgba(196,168,112,0.35)', background: 'rgba(196,168,112,0.04)' }}
          >
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
