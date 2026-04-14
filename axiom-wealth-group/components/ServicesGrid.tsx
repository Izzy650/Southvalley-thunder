'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Investment Management',
    body: 'Bespoke portfolio construction aligned with your risk tolerance, time horizon, and multi-generational objectives — executed with institutional rigor.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polyline points="2,14 7,9 11,12 18,5" />
        <polyline points="13,5 18,5 18,10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Risk & Insurance',
    body: 'Comprehensive risk architecture that protects your wealth against catastrophic loss — life, disability, liability, and key-man coverage evaluated independently.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 2 L17 5 L17 10 C17 14 13.5 17.5 10 18.5 C6.5 17.5 3 14 3 10 L3 5 Z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Tax Strategy',
    body: 'Year-round tax intelligence — not an annual filing exercise. We identify opportunities in direct indexing, tax-loss harvesting, Roth conversions, and charitable structures.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="14" height="14" rx="0" />
        <line x1="7" y1="7" x2="13" y2="13" />
        <line x1="13" y1="7" x2="7" y2="13" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Retirement Planning',
    body: 'Distribution strategy, Social Security optimization, healthcare cost modeling, and sequence-of-returns analysis — your retirement designed with precision.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="10" cy="10" r="8" />
        <polyline points="10,5 10,10 14,12" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Estate & Legacy Planning',
    body: 'Trust architecture, beneficiary alignment, dynasty planning, and charitable legacy strategies — coordinated with your estate attorney for seamless execution.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 18 L3 8 L10 3 L17 8 L17 18 Z" />
        <rect x="7.5" y="12" width="5" height="6" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Business Owner Services',
    body: 'Pre-liquidity planning, deal structure optimization, QSBS exclusion strategies, and post-exit wealth integration — from build to sale to legacy.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="7" width="16" height="11" />
        <path d="M6 7 L6 5 C6 3.5 7 2 10 2 C13 2 14 3.5 14 5 L14 7" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Alternative Investments',
    body: 'Access to private equity, private credit, hedge strategies, real assets, and Opportunity Zone investments — institutional-quality alternatives for qualified clients.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="10,2 18,17 2,17" />
        <line x1="10" y1="8" x2="10" y2="13" />
        <circle cx="10" cy="15" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '08',
    title: 'Family Office Services',
    body: 'Consolidated reporting, bill pay, governance frameworks, family meeting facilitation, and next-generation education — a single point of coordination for complex family wealth.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="10" cy="6" r="3" />
        <circle cx="4" cy="14" r="2.5" />
        <circle cx="16" cy="14" r="2.5" />
        <line x1="7.5" y1="7.5" x2="5" y2="11.5" />
        <line x1="12.5" y1="7.5" x2="15" y2="11.5" />
      </svg>
    ),
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-champagne py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-7 h-px bg-gold" />
            <span className="font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem]">
              What We Do
            </span>
            <div className="w-7 h-px bg-gold" />
          </div>
          <h2
            className="font-cormorant font-light leading-tight text-rich-black"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
          >
            Integrated <em className="text-gold italic">Wealth Solutions</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-light">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              className="relative bg-card-dark p-8 flex flex-col gap-4 group"
              style={{ border: '1px solid transparent' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.7,
                ease: [0.4, 0, 0.2, 1],
                delay: (i % 4) * 0.08,
              }}
              whileHover={{
                borderColor: 'rgba(196,168,112,0.6)',
                boxShadow:
                  '0 0 20px rgba(196,168,112,0.12), inset 0 0 20px rgba(196,168,112,0.04)',
              }}
            >
              <span
                className="absolute top-6 right-6 font-cormorant font-light text-champagne select-none pointer-events-none"
                style={{ fontSize: '3.5rem', opacity: 0.05, lineHeight: 1 }}
              >
                {service.num}
              </span>
              <div className="text-gold">{service.icon}</div>
              <h3 className="font-cinzel font-medium text-champagne tracking-wide text-sm">
                {service.title}
              </h3>
              <p className="font-raleway font-light text-[0.82rem] leading-relaxed" style={{ color: 'rgba(196,168,112,0.55)' }}>
                {service.body}
              </p>
              <Link
                href="/services"
                className="font-raleway font-medium text-gold tracking-[0.1em] uppercase text-[0.65rem] mt-auto inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
              >
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
