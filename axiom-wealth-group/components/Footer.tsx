import Link from 'next/link'
import LogoMark from './LogoMark'

const services = [
  { label: 'Investment Management', href: '/services' },
  { label: 'Risk & Insurance', href: '/services' },
  { label: 'Tax Strategy', href: '/services' },
  { label: 'Retirement Planning', href: '/services' },
  { label: 'Estate & Legacy Planning', href: '/services' },
  { label: 'Business Owner Services', href: '/services' },
  { label: 'Alternative Investments', href: '/services' },
  { label: 'Family Office Services', href: '/services' },
]

const firmLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our Team', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Client Login', href: '/login' },
]

export default function Footer() {
  return (
    <footer className="bg-rich-black border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={36} />
              <div>
                <div
                  className="font-cinzel font-medium tracking-[0.18em] uppercase text-champagne"
                  style={{ fontSize: '0.78rem' }}
                >
                  Axiom Wealth Group
                </div>
                <div
                  className="font-cormorant italic text-gold"
                  style={{ fontSize: '0.72rem', marginTop: '1px' }}
                >
                  Clarity in Every Decision.
                </div>
              </div>
            </div>
            <p className="text-[0.8rem] font-raleway font-light leading-relaxed mt-6"
               style={{ color: 'rgba(196,168,112,0.55)' }}>
              Independent fiduciary wealth management for high-net-worth individuals, families, and business owners. Fee-only. Unconditionally fiduciary. Since 1994.
            </p>
          </div>

          <div>
            <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-[0.65rem] text-gold mb-6">
              Our Services
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="footer-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-[0.65rem] text-gold mb-6">
              The Firm
            </div>
            <ul className="space-y-3">
              {firmLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-[0.65rem] text-gold mb-6">
              Contact
            </div>
            <ul className="space-y-4">
              <li>
                <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold mb-1">
                  Headquarters
                </div>
                <div className="text-[0.78rem] font-raleway font-light leading-relaxed" style={{ color: 'rgba(196,168,112,0.55)' }}>
                  One Meridian Plaza, Suite 4200<br />
                  New York, NY 10005
                </div>
              </li>
              <li>
                <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold mb-1">
                  Main Line
                </div>
                <div className="text-[0.78rem] font-raleway font-light" style={{ color: 'rgba(196,168,112,0.55)' }}>
                  +1 (800) 924-7700
                </div>
              </li>
              <li>
                <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold mb-1">
                  Email
                </div>
                <div className="text-[0.78rem] font-raleway font-light" style={{ color: 'rgba(196,168,112,0.55)' }}>
                  advisory@axiomwealthgroup.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.72rem] font-raleway font-light" style={{ color: 'rgba(196,168,112,0.35)' }}>
            © 2024 Axiom Wealth Group, LLC. All rights reserved. Investment advisory services offered through Axiom Wealth Group, a registered investment adviser.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="footer-link" style={{ fontSize: '0.7rem' }}>Privacy Policy</Link>
            <Link href="/" className="footer-link" style={{ fontSize: '0.7rem' }}>ADV Brochure</Link>
            <Link href="/" className="footer-link" style={{ fontSize: '0.7rem' }}>Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
