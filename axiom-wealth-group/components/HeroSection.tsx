'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

const transition = (delay: number) => ({
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
  delay,
})

const stats = [
  { value: '$4.2B', label: 'Assets Under Management' },
  { value: '30+', label: 'Years of Expertise' },
  { value: '97%', label: 'Client Retention' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-champagne flex flex-col justify-center overflow-hidden pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center py-20">
        <motion.div
          className="eyebrow-line font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.65rem] mb-8"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.3)}
        >
          Axiom Wealth Group
        </motion.div>

        <motion.h1
          className="font-cormorant font-light leading-[1.04] mb-8"
          style={{ fontSize: 'clamp(3.8rem, 8.5vw, 9rem)' }}
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.6)}
        >
          Financial Clarity
          <br />
          <span className="text-text-muted">for the </span>
          <em className="text-gold not-italic italic">Discerning</em>
          <br />
          Few
        </motion.h1>

        <motion.p
          className="font-raleway font-light text-text-muted leading-loose mb-10 max-w-[460px]"
          style={{ fontSize: '1.05rem' }}
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(0.9)}
        >
          We transform complex financial landscapes into clear, decisive strategies — built to protect, grow, and endure across generations.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={transition(1.1)}
        >
          <motion.div
            whileHover={{
              boxShadow:
                '0 0 28px rgba(196,168,112,0.35), 0 8px 32px rgba(196,168,112,0.18)',
              y: -2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/services"
              className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.72rem] bg-gold text-rich-black px-8 py-4 inline-block"
            >
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              boxShadow:
                '0 0 20px rgba(196,168,112,0.12), inset 0 0 20px rgba(196,168,112,0.04)',
              borderColor: 'rgba(196,168,112,0.6)',
              y: -2,
            }}
            style={{ border: '1px solid #0C0B09' }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/about"
              className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.72rem] text-rich-black px-8 py-4 inline-block"
            >
              Our Philosophy
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-6 lg:left-12 flex flex-col items-center gap-3"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={transition(1.4)}
      >
        <div className="w-px h-12 bg-gold opacity-50" />
        <span
          className="font-cinzel text-gold tracking-[0.3em] uppercase"
          style={{
            fontSize: '0.55rem',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            letterSpacing: '0.28em',
          }}
        >
          Scroll
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-12 right-6 lg:right-12 flex flex-col items-end gap-6"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={transition(1.4)}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-right">
            <div
              className="font-cormorant font-light text-gold"
              style={{ fontSize: '1.8rem', lineHeight: 1 }}
            >
              {stat.value}
            </div>
            <div className="font-raleway font-medium tracking-[0.14em] uppercase text-text-muted text-[0.58rem] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
