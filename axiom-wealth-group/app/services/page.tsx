'use client'
import { motion } from 'framer-motion'
import ServiceFullCard from '@/components/ServiceFullCard'
import ProcessSteps from '@/components/ProcessSteps'
import CtaBand from '@/components/CtaBand'

const services = [
  {
    num: '01',
    tag: 'Core Service',
    title: 'Investment Management',
    description:
      'Institutional-quality portfolio construction for high-net-worth and ultra-high-net-worth clients. We build bespoke strategies across global equities, fixed income, alternatives, and real assets — aligned with your tax situation, liquidity needs, and multi-generational objectives.',
    bullets: [
      'Individually managed accounts with full transparency and daily liquidity visibility',
      'Direct indexing and factor-based strategies for tax efficiency at scale',
      'Asset location optimization across taxable, tax-deferred, and tax-exempt accounts',
      'Disciplined rebalancing with integrated tax-loss harvesting throughout the year',
    ],
  },
  {
    num: '02',
    tag: 'Preservation',
    title: 'Risk & Insurance',
    description:
      'Wealth accumulation and wealth preservation are inseparable. We conduct independent, fee-only insurance reviews with no commission incentive — evaluating life, disability, liability, and key-man coverage against your complete financial picture.',
    bullets: [
      'Personal umbrella and excess liability analysis for high-profile clients',
      'Life insurance audit and policy optimization — existing contracts reviewed objectively',
      'Long-term care and chronic illness planning integrated into retirement cash flow',
      'Buy-sell agreement funding and business continuity coverage for business owners',
    ],
  },
  {
    num: '03',
    tag: 'Efficiency',
    title: 'Tax Strategy',
    description:
      'Elite wealth management is inseparable from elite tax strategy. Our advisors collaborate with your CPA or serve as a coordinating layer to ensure your tax posture is optimized year-round — not managed reactively each April.',
    bullets: [
      'Roth conversion laddering and strategic IRA distribution planning',
      'Qualified Opportunity Zone and 1031 exchange evaluation for real estate clients',
      'Charitable giving structures: DAFs, CLATs, CRTs, and private foundations',
      'QSBS exclusion planning and Section 1202 optimization for equity-holding clients',
    ],
  },
  {
    num: '04',
    tag: 'Income Planning',
    title: 'Retirement Planning',
    description:
      'Retirement is not an event — it is a multi-decade financial phase that demands dynamic management. We build distribution strategies that account for sequence-of-returns risk, healthcare costs, longevity, and spending flexibility.',
    bullets: [
      'Social Security claiming optimization across multiple benefit scenarios',
      'Monte Carlo simulation and stress testing across 1,000+ market scenarios',
      'Healthcare and long-term care cost projection embedded in retirement modeling',
      'Required Minimum Distribution strategies across all account types',
    ],
  },
  {
    num: '05',
    tag: 'Legacy',
    title: 'Estate & Legacy Planning',
    description:
      'Your estate plan is only as strong as its integration with your investment strategy, tax situation, and family dynamics. We coordinate with your estate attorney to ensure every trust, beneficiary designation, and directive reflects your current intentions.',
    bullets: [
      'Revocable and irrevocable trust coordination and beneficiary alignment review',
      'Annual gifting strategies and 529 superfunding for education planning',
      'GRAT, IDGT, and FLP strategies for estate tax mitigation at scale',
      'Family governance frameworks and next-generation wealth education programs',
    ],
  },
  {
    num: '06',
    tag: 'Entrepreneur',
    title: 'Business Owner Services',
    description:
      'Business owners face a unique convergence of personal and corporate financial complexity. From compensation structure optimization to exit planning and post-liquidity integration, Axiom provides an advisor who understands both sides of the equation.',
    bullets: [
      'Pre-liquidity planning: deal structure, earn-out optimization, and tax positioning',
      'Qualified Small Business Stock (QSBS) exclusion strategy under IRC Section 1202',
      'Executive compensation analysis: deferred comp, equity plans, and benefit optimization',
      'Post-exit wealth integration: invested proceeds, alternative allocations, and philanthropy',
    ],
  },
  {
    num: '07',
    tag: 'Diversification',
    title: 'Alternative Investments',
    description:
      'For qualified clients, thoughtfully selected alternatives can reduce correlation, enhance yield, and unlock return streams unavailable in public markets. We evaluate alternatives with institutional diligence — not as product placements.',
    bullets: [
      'Private equity and venture capital through curated, fee-transparent fund access',
      'Private credit and direct lending strategies for income-oriented portfolios',
      'Real assets: farmland, infrastructure, and private real estate at institutional terms',
      'Hedge and absolute return strategies evaluated for net-of-fee alpha generation',
    ],
  },
  {
    num: '08',
    tag: 'Comprehensive',
    title: 'Family Office Services',
    description:
      'Multi-generational families with complex, consolidated wealth benefit from an outsourced family office model. Axiom provides the coordination, reporting, and governance infrastructure of a dedicated family office — without the overhead.',
    bullets: [
      'Consolidated performance reporting across all custodians, trusts, and partnerships',
      'Bill pay, document management, and household financial administration',
      'Family meeting facilitation, governance policies, and next-generation onboarding',
      'Philanthropic strategy: foundation management, impact investing, and legacy planning',
    ],
  },
]

export default function ServicesPage() {
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
              What We Offer
            </div>
            <h1
              className="font-cormorant font-light leading-tight text-rich-black mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              Complete Wealth{' '}
              <em className="text-gold italic">Architecture</em>
            </h1>
            <p
              className="font-raleway font-light text-text-muted leading-loose max-w-2xl"
              style={{ fontSize: '1.05rem' }}
            >
              Every engagement begins with a complete view of your financial life. We build across every dimension simultaneously — because wealth, tax, and estate are not separate disciplines. Clarity in Every Decision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-rich-black py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border-dark">
            {services.map((service, i) => (
              <ServiceFullCard
                key={service.num}
                {...service}
                delay={(i % 2) * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <CtaBand
        eyebrow="Begin Your Journey"
        heading="Clarity in"
        headingEm="Every Decision."
        subtext="Your first conversation with an Axiom advisor is complimentary and entirely confidential. Tell us where you are — we will show you where you can go."
        buttonLabel="Request a Consultation"
        buttonHref="/contact"
      />
    </>
  )
}
