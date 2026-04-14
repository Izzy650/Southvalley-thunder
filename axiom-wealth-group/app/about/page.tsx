'use client'
import { motion } from 'framer-motion'
import StatsSection from '@/components/StatsSection'
import TeamCard from '@/components/TeamCard'
import CtaBand from '@/components/CtaBand'

const team = [
  {
    role: 'Founder & Chairman',
    bio: 'A founding architect of Axiom with more than three decades of independent advisory experience. A tireless advocate for the fiduciary standard and the original steward of the Axiom client relationship model.',
    credentials: ['CFP®', 'CFA', 'J.D.'],
  },
  {
    role: 'Chief Investment Officer',
    bio: 'Leads portfolio construction and investment strategy across all client accounts. Brings institutional-grade discipline to bespoke private client mandates with deep experience across public and private markets.',
    credentials: ['CFA', 'CAIA'],
  },
  {
    role: 'Head of Estate Planning',
    bio: 'A former estate attorney with 20+ years guiding high-net-worth families through complex trust and legacy planning engagements. Specializes in multi-generational estate architecture and dynasty trust design.',
    credentials: ['J.D.', 'LL.M. (Taxation)', 'CFP®'],
  },
  {
    role: 'Tax Strategy Director',
    bio: 'Combines deep tax law expertise with a wealth management perspective to deliver year-round planning that most clients have never experienced from their CPA relationship alone.',
    credentials: ['CPA', 'CFP®', 'EA'],
  },
  {
    role: 'Senior Wealth Advisor',
    bio: 'Works directly with a select group of ultra-high-net-worth families across investment, retirement, and estate coordination. Known for exceptional client communication and proactive planning.',
    credentials: ['CFP®', 'CFA'],
  },
  {
    role: 'Client Relations Director',
    bio: 'The connective tissue of the Axiom client experience. Ensures every touchpoint reflects the standard of precision and clarity that defines this firm from the first meeting onward.',
    credentials: ['Series 65', 'CFP®'],
  },
]

const differences = [
  {
    title: 'Fee-Only',
    body: 'We are compensated exclusively by our clients — never by commissions, referral fees, or product revenue. This structure eliminates the most common source of conflict in financial advisory relationships. What you see is exactly what you pay.',
  },
  {
    title: 'Independent',
    body: "We are not owned by a bank, broker-dealer, or insurance company. Our independence allows us to recommend only what's right for each client — without a home-office approved product list, revenue-sharing arrangement, or quarterly sales target.",
  },
  {
    title: 'Selective',
    body: "We maintain a deliberate limit on client households, ensuring every family receives true senior advisor attention — not associate service with senior branding. Our minimum exists not to exclude, but to protect the quality of the relationship we deliver.",
  },
]

export default function AboutPage() {
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
              Our Story
            </div>
            <h1
              className="font-cormorant font-light leading-tight text-rich-black mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              Built on <em className="text-gold italic">Trust,</em>
              <br />
              Refined by Time
            </h1>
            <p
              className="font-raleway font-light text-text-muted leading-loose max-w-2xl"
              style={{ fontSize: '1.05rem' }}
            >
              Since 1994, Axiom Wealth Group has operated on a single principle: that the interests of our clients are the only interests that matter. Clarity in Every Decision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-rich-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div
              className="p-10 flex items-center"
              style={{ borderLeft: '3px solid #C4A870' }}
            >
              <blockquote
                className="font-cormorant font-light italic leading-relaxed"
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  color: 'rgba(196,168,112,0.85)',
                }}
              >
                &ldquo;We built Axiom because we believed that truly independent, fiduciary advice — built on intellectual honesty and long-term relationships — could change the outcome of people&apos;s financial lives. Three decades later, that belief has never wavered.&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <p className="font-raleway font-light leading-loose" style={{ fontSize: '0.95rem', color: 'rgba(196,168,112,0.6)' }}>
                Axiom Wealth Group was founded in 1994 by Marcus Ellison with a conviction that the financial advisory industry was failing its clients. Broker-dealer conflicts, product-driven recommendations, and opaque compensation structures were the norm. Axiom was built as a deliberate alternative.
              </p>
              <p className="font-raleway font-light leading-loose" style={{ fontSize: '0.95rem', color: 'rgba(196,168,112,0.6)' }}>
                From the beginning, the firm registered as an independent investment adviser, adopted the fiduciary standard, and chose a fee-only compensation model. Over three decades, these choices have compounded — in the trust of our clients, the depth of our team, and the breadth of our integrated wealth architecture.
              </p>
              <p className="font-raleway font-light leading-loose" style={{ fontSize: '0.95rem', color: 'rgba(196,168,112,0.6)' }}>
                Today, Axiom serves 340+ families across five office locations, with more than $4.2 billion in assets under management. The founding principles remain unchanged: fiduciary, fee-only, and unconditionally in your corner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      <section className="bg-champagne py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-7 h-px bg-gold" />
              <span className="font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem]">
                Our Advisors
              </span>
              <div className="w-7 h-px bg-gold" />
            </div>
            <h2
              className="font-cormorant font-light leading-tight text-rich-black mb-6"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
            >
              The Minds Behind <em className="text-gold italic">Axiom</em>
            </h2>
            <p className="font-cormorant font-light italic text-gold text-lg max-w-xl mx-auto">
              Team profiles coming soon — this section will be updated with real advisor names, photos, and bios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {team.map((member, i) => (
              <TeamCard
                key={member.role}
                role={member.role}
                bio={member.bio}
                credentials={member.credentials}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rich-black py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-7 h-px bg-gold opacity-50" />
              <span className="font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem]">
                Why Axiom
              </span>
              <div className="w-7 h-px bg-gold opacity-50" />
            </div>
            <h2
              className="font-cormorant font-light leading-tight text-champagne"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
            >
              The Axiom <em className="text-gold italic">Difference</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border-dark">
            {differences.map((d, i) => (
              <motion.div
                key={d.title}
                className="bg-card-dark p-10 flex flex-col gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: i * 0.12 }}
              >
                <h3
                  className="font-cormorant font-light text-gold"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
                >
                  {d.title}
                </h3>
                <p className="font-raleway font-light leading-loose text-[0.88rem]" style={{ color: 'rgba(196,168,112,0.55)' }}>
                  {d.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start the Relationship"
        heading="Meet Your"
        headingEm="Advisors"
        subtext="Schedule a confidential discovery meeting to explore what an Axiom relationship could mean for your financial future."
        buttonLabel="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  )
}
