'use client'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const offices = [
  { city: 'San Francisco, CA', address: '555 California Street' },
  { city: 'Chicago, IL', address: '233 S. Wacker Drive' },
  { city: 'Miami, FL', address: '1221 Brickell Avenue' },
  { city: 'Dallas, TX', address: '2200 Ross Avenue' },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-champagne pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="eyebrow-line font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem] mb-8">
              Get in Touch
            </div>
            <h1
              className="font-cormorant font-light leading-tight text-rich-black mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              Start the <em className="text-gold italic">Conversation</em>
            </h1>
            <p
              className="font-raleway font-light text-text-muted leading-loose max-w-2xl"
              style={{ fontSize: '1.05rem' }}
            >
              Every Axiom relationship begins with a confidential conversation — no pressure, no sales pitch. Complete the form below and a senior advisor will be in touch within one business day. Clarity in Every Decision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-champagne pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-2 flex flex-col gap-10"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div>
                <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-gold text-[0.62rem] mb-6">
                  Headquarters
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold-dark mb-1">
                      Address
                    </div>
                    <p className="font-raleway font-light text-text-muted text-[0.9rem] leading-relaxed">
                      One Meridian Plaza, Suite 4200<br />
                      New York, NY 10005
                    </p>
                  </div>
                  <div>
                    <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold-dark mb-1">
                      Main Line
                    </div>
                    <p className="font-raleway font-light text-text-muted text-[0.9rem]">
                      +1 (800) 924-7700
                    </p>
                  </div>
                  <div>
                    <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold-dark mb-1">
                      Direct Email
                    </div>
                    <p className="font-raleway font-light text-text-muted text-[0.9rem]">
                      advisory@axiomwealthgroup.com
                    </p>
                  </div>
                  <div>
                    <div className="font-cinzel text-[0.6rem] tracking-widest uppercase text-gold-dark mb-1">
                      Office Hours
                    </div>
                    <p className="font-raleway font-light text-text-muted text-[0.9rem]">
                      Monday–Friday, 8:00 AM – 6:00 PM ET
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border-light" />

              <div>
                <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-gold text-[0.62rem] mb-6">
                  Regional Offices
                </div>
                <div className="flex flex-col gap-4">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-start gap-3">
                      <span className="text-gold text-[0.55rem] mt-1.5 flex-shrink-0">◆</span>
                      <div>
                        <div className="font-raleway font-light text-text-muted text-[0.88rem]">
                          {o.address}
                        </div>
                        <div className="font-raleway font-medium tracking-[0.1em] uppercase text-[0.62rem] text-gold-dark mt-0.5">
                          {o.city}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="relative bg-card-dark diagonal-grid aspect-video flex items-end p-6 mt-4"
                style={{ border: '1px solid #252320' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
                    <path
                      d="M14 0C6.27 0 0 6.27 0 14C0 24.5 14 36 14 36C14 36 28 24.5 28 14C28 6.27 21.73 0 14 0Z"
                      fill="rgba(196,168,112,0.15)"
                      stroke="#C4A870"
                      strokeWidth="1.2"
                    />
                    <circle cx="14" cy="14" r="5" fill="none" stroke="#C4A870" strokeWidth="1" />
                  </svg>
                </div>
                <div className="relative w-full text-center">
                  <div className="font-cinzel font-medium tracking-[0.2em] uppercase text-gold text-[0.6rem]">
                    One Meridian Plaza · New York, NY
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            >
              <div className="font-cinzel font-medium tracking-[0.18em] uppercase text-gold text-[0.62rem] mb-8">
                Consultation Request
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
