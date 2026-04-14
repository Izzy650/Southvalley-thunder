'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatProps {
  prefix?: string
  value: number
  suffix?: string
  label: string
  duration?: number
  decimals?: number
}

function AnimatedStat({ prefix = '', value, suffix = '', label, duration = 2, decimals = 0 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const totalFrames = duration * 60
    const step = value / totalFrames
    let frame = 0
    const timer = setInterval(() => {
      frame++
      start += step
      if (frame >= totalFrames) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(parseFloat(start.toFixed(decimals)))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, value, duration, decimals])

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()

  return (
    <div ref={ref} className="text-center px-8 py-12">
      <div
        className="font-cormorant font-light text-gold"
        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1 }}
      >
        {prefix}{display}{suffix}
      </div>
      <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-[0.6rem] mt-3"
           style={{ color: 'rgba(196,168,112,0.5)' }}>
        {label}
      </div>
    </div>
  )
}

const stats = [
  { prefix: '', value: 1994, suffix: '', label: 'Year Founded', duration: 2 },
  { prefix: '$', value: 4.2, suffix: 'B', label: 'Assets Under Management', duration: 2, decimals: 1 },
  { prefix: '', value: 340, suffix: '+', label: 'Families Served', duration: 2 },
  { prefix: '', value: 97, suffix: '%', label: 'Client Retention', duration: 2 },
]

export default function StatsSection() {
  return (
    <section className="bg-rich-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
             style={{ borderColor: '#252320' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.1,
              }}
              style={{ borderColor: '#252320' }}
            >
              <AnimatedStat
                prefix={stat.prefix}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={stat.duration}
                decimals={stat.decimals}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
