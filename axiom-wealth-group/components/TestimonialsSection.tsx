'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Axiom brought a level of clarity to my financial picture that I had never experienced before. In three decades of working with advisors, this is the first team that actually listens — and then builds a strategy that reflects what I truly value.',
    name: 'Margaret L.',
    role: 'Technology Executive',
    since: 'Client since 2009',
  },
  {
    quote:
      'When we were preparing to sell our business, we needed advisors who understood the full complexity — tax, estate, investment, and transition planning. Axiom coordinated everything seamlessly. The result exceeded every projection.',
    name: 'Robert & Diana K.',
    role: 'Business Owners',
    since: 'Client since 2004',
  },
  {
    quote:
      "After 35 years at a law firm, retirement should have felt simple. It didn't — until Axiom showed us exactly where we stood and exactly where we were headed. The peace of mind that comes with that kind of clarity is invaluable.",
    name: 'James T.',
    role: 'Retired Senior Partner',
    since: 'Client since 2016',
  },
]

export default function TestimonialsSection() {
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
              Client Perspectives
            </span>
            <div className="w-7 h-px bg-gold" />
          </div>
          <h2
            className="font-cormorant font-light leading-tight text-rich-black"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
          >
            Clarity, <em className="text-gold italic">Experienced</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-champagne p-8 flex flex-col gap-5 relative"
              style={{
                border: '1px solid #D4C8B0',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: i * 0.12,
              }}
              whileHover={{
                borderColor: 'rgba(196,168,112,0.6)',
                boxShadow:
                  '0 0 20px rgba(196,168,112,0.12), inset 0 0 20px rgba(196,168,112,0.04)',
              }}
            >
              <span
                className="font-cormorant text-gold select-none"
                style={{ fontSize: '5rem', lineHeight: 0.6, opacity: 0.4 }}
              >
                &ldquo;
              </span>
              <p className="font-cormorant font-light italic text-text-muted leading-relaxed"
                 style={{ fontSize: '1.05rem' }}>
                {t.quote}
              </p>
              <div className="pt-4 border-t border-border-light mt-auto">
                <div className="font-cinzel font-medium text-rich-black tracking-wide text-[0.75rem]">
                  {t.name}
                </div>
                <div className="font-raleway font-medium tracking-[0.14em] uppercase text-gold text-[0.6rem] mt-1">
                  {t.role}
                </div>
                <div className="font-raleway font-light text-text-muted text-[0.72rem] mt-0.5">
                  {t.since}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
