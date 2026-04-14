'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import LogoMark from '@/components/LogoMark'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(
      'Client portal access is restricted to registered Axiom clients. Please contact advisory@axiomwealthgroup.com to set up your credentials.'
    )
  }

  return (
    <div className="min-h-screen bg-champagne flex items-center justify-center px-6 py-20">
      <motion.div
        className="w-full max-w-md bg-card-dark p-12 flex flex-col items-center gap-7"
        style={{ borderTop: '2px solid #C4A870' }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex flex-col items-center gap-3">
          <LogoMark size={48} />
          <div className="text-center">
            <div
              className="font-cinzel font-medium tracking-[0.2em] uppercase text-champagne"
              style={{ fontSize: '0.78rem' }}
            >
              Axiom Wealth Group
            </div>
            <div
              className="font-cormorant italic text-gold mt-1"
              style={{ fontSize: '0.75rem' }}
            >
              Clarity in Every Decision.
            </div>
          </div>
        </div>

        <div className="w-full h-px" style={{ background: '#252320' }} />

        <h2
          className="font-cormorant font-light text-champagne text-center"
          style={{ fontSize: '2rem' }}
        >
          Client <em className="text-gold italic">Portal</em>
        </h2>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field-dark"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field-dark"
              placeholder="••••••••••"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full font-raleway font-medium tracking-[0.14em] uppercase text-[0.72rem] bg-gold text-rich-black py-4 mt-2"
            whileHover={{
              boxShadow:
                '0 0 28px rgba(196,168,112,0.35), 0 8px 32px rgba(196,168,112,0.18)',
              y: -1,
            }}
            transition={{ duration: 0.3 }}
          >
            Sign In to Portal
          </motion.button>
        </form>

        <div className="flex flex-col items-center gap-3 w-full">
          <button className="font-raleway font-light text-[0.75rem]"
                  style={{ color: 'rgba(196,168,112,0.5)' }}>
            Forgot password?
          </button>
          <Link
            href="/contact"
            className="font-raleway font-light text-[0.75rem] text-center"
            style={{ color: 'rgba(196,168,112,0.5)' }}
          >
            Not a client?{' '}
            <span className="text-gold underline">Schedule a consultation</span>
          </Link>
        </div>

        <div className="w-full h-px" style={{ background: '#252320' }} />

        <div className="flex items-center justify-center gap-2">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <rect x="1" y="6" width="10" height="7" rx="0" stroke="#C4A870" strokeWidth="0.8" />
            <path d="M3.5 6 V4 C3.5 2.067 4.567 1 6 1 C7.433 1 8.5 2.067 8.5 4 V6" stroke="#C4A870" strokeWidth="0.8" />
          </svg>
          <span
            className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.55rem]"
            style={{ color: 'rgba(196,168,112,0.4)' }}
          >
            256-bit SSL Encrypted · FINRA Member · SEC Registered
          </span>
        </div>
      </motion.div>
    </div>
  )
}
