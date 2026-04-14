'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CtaBandProps {
  eyebrow?: string
  heading: string
  headingEm?: string
  subtext?: string
  buttonLabel?: string
  buttonHref?: string
  dark?: boolean
}

export default function CtaBand({
  eyebrow = 'Take the First Step',
  heading = 'Ready for',
  headingEm = 'Clarity?',
  subtext = 'A confidential conversation costs nothing. Schedule your complimentary discovery meeting and experience the Axiom difference.',
  buttonLabel = 'Schedule a Consultation',
  buttonHref = '/contact',
  dark = false,
}: CtaBandProps) {
  return (
    <section
      className={`py-24 relative ${dark ? 'bg-rich-black' : 'bg-champagne'}`}
      style={
        !dark
          ? {
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(196,168,112,0.08) 0%, #EFE6D0 60%)',
            }
          : {}
      }
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-7 h-px bg-gold opacity-60" />
            <span className={`font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem]`}>
              {eyebrow}
            </span>
            <div className="w-7 h-px bg-gold opacity-60" />
          </div>

          <h2
            className={`font-cormorant font-light leading-tight mb-6 ${dark ? 'text-champagne' : 'text-rich-black'}`}
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
          >
            {heading}{' '}
            <em className="text-gold italic">{headingEm}</em>
          </h2>

          {subtext && (
            <p
              className="font-raleway font-light leading-loose mb-10 mx-auto"
              style={{
                fontSize: '1rem',
                maxWidth: '520px',
                color: dark ? 'rgba(196,168,112,0.6)' : '#4A4336',
              }}
            >
              {subtext}
            </p>
          )}

          <motion.div
            className="inline-block"
            whileHover={{
              boxShadow:
                '0 0 28px rgba(196,168,112,0.35), 0 8px 32px rgba(196,168,112,0.18)',
              y: -2,
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={buttonHref}
              className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.72rem] bg-gold text-rich-black px-10 py-4 inline-block"
            >
              {buttonLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
