'use client'
import { motion } from 'framer-motion'

const items = [
  { roman: 'I', label: 'Approach', value: 'Independent & Fiduciary' },
  { roman: 'II', label: 'Minimum', value: '$2M Investable Assets' },
  { roman: 'III', label: 'Coverage', value: 'Wealth · Tax · Estate' },
  { roman: 'IV', label: 'Fee Structure', value: 'Fee-Only, No Commissions' },
]

export default function PhilosophyStrip() {
  return (
    <section className="bg-rich-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <motion.div
              key={item.roman}
              className="relative px-8 py-8 flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.12,
              }}
            >
              {i < items.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-px"
                  style={{ background: 'rgba(196,168,112,0.15)' }}
                />
              )}
              <span
                className="font-cormorant font-light text-gold"
                style={{ fontSize: '1.5rem', lineHeight: 1 }}
              >
                {item.roman}
              </span>
              <span
                className="font-raleway font-medium tracking-[0.18em] uppercase"
                style={{ fontSize: '0.6rem', color: 'rgba(196,168,112,0.55)' }}
              >
                {item.label}
              </span>
              <span className="font-cinzel font-medium text-champagne tracking-wide text-sm">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
