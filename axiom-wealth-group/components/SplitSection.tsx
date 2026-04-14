'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const bullets = [
  {
    title: 'Fiduciary Standard',
    body: 'We are legally and ethically obligated to act in your interest — always. No exceptions, no conflicts, no compromise.',
  },
  {
    title: 'Integrated Planning',
    body: 'Investments, taxes, estate, and risk do not live in isolation. We architect them together for compounding advantage.',
  },
  {
    title: 'Radical Transparency',
    body: 'You see every fee, every rationale, and every recommendation in plain language. Clarity is not a tagline — it is our standard.',
  },
]

export default function SplitSection() {
  return (
    <section className="bg-champagne py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="relative bg-card-dark diagonal-grid aspect-[4/5] flex items-center justify-center"
              style={{ border: '1px solid #252320' }}
            >
              <div
                className="absolute inset-6"
                style={{ border: '1px solid rgba(196,168,112,0.2)' }}
              />
              <div
                className="absolute inset-4"
                style={{ border: '1px solid rgba(196,168,112,0.06)' }}
              />
              <span
                className="font-cinzel font-medium tracking-[0.4em] uppercase select-none"
                style={{
                  fontSize: 'clamp(2rem, 6vw, 5rem)',
                  color: 'rgba(196,168,112,0.07)',
                  letterSpacing: '0.5em',
                }}
              >
                AWG
              </span>
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: 'rgba(196,168,112,0.25)' }}
              />
              <div
                className="absolute top-0 left-0 w-12 h-12"
                style={{
                  borderTop: '1.5px solid rgba(196,168,112,0.5)',
                  borderLeft: '1.5px solid rgba(196,168,112,0.5)',
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-12 h-12"
                style={{
                  borderBottom: '1.5px solid rgba(196,168,112,0.5)',
                  borderRight: '1.5px solid rgba(196,168,112,0.5)',
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="eyebrow-line font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem] mb-8">
              Our Philosophy
            </div>
            <h2
              className="font-cormorant font-light leading-tight text-rich-black mb-10"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)' }}
            >
              Wealth Built on <em className="text-gold italic">Principles,</em>
              <br />
              Not Products
            </h2>

            <div className="flex flex-col gap-8 mb-12">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.7,
                    ease: [0.4, 0, 0.2, 1],
                    delay: i * 0.15,
                  }}
                >
                  <span className="text-gold mt-1 flex-shrink-0 text-[0.6rem]">◆</span>
                  <div>
                    <div className="font-cinzel font-medium text-rich-black tracking-wide text-[0.78rem] mb-1">
                      {b.title}
                    </div>
                    <p className="font-raleway font-light text-text-muted text-[0.88rem] leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{
                boxShadow:
                  '0 0 28px rgba(196,168,112,0.35), 0 8px 32px rgba(196,168,112,0.18)',
                y: -2,
              }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.72rem] bg-gold text-rich-black px-8 py-4 inline-block"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
