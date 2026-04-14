'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll } from 'framer-motion'
import LogoMark from './LogoMark'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Client Login', href: '/login' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      animate={{
        height: scrolled ? 68 : 84,
        backgroundColor: scrolled ? 'rgba(239,230,208,0.96)' : 'rgba(239,230,208,0)',
      }}
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #D4C8B0' : '1px solid transparent',
        background: scrolled
          ? 'rgba(239,230,208,0.96)'
          : 'linear-gradient(to bottom, rgba(239,230,208,0.98), transparent)',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <LogoMark size={38} />
          <div>
            <div
              className="font-cinzel font-medium tracking-[0.2em] uppercase text-rich-black"
              style={{ fontSize: '0.76rem' }}
            >
              Axiom Wealth Group
            </div>
            <div
              className="font-cormorant italic text-gold"
              style={{ fontSize: '0.68rem', marginTop: '1px' }}
            >
              Clarity in Every Decision.
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <motion.a
            href="/contact"
            className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.68rem] bg-gold text-rich-black px-6 py-3 inline-block"
            whileHover={{
              boxShadow:
                '0 0 28px rgba(196,168,112,0.35), 0 8px 32px rgba(196,168,112,0.18)',
              y: -2,
            }}
            transition={{ duration: 0.3 }}
          >
            Schedule Consultation
          </motion.a>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-rich-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-rich-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-rich-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-champagne border-t border-border-light px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.68rem] bg-gold text-rich-black px-6 py-3 inline-block text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Schedule Consultation
          </Link>
        </motion.div>
      )}
    </motion.header>
  )
}
