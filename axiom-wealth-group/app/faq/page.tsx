'use client'
import { motion } from 'framer-motion'
import FaqAccordion from '@/components/FaqAccordion'
import CtaBand from '@/components/CtaBand'

const faqs = [
  {
    question: 'What is the minimum investment required to work with Axiom?',
    answer:
      'Axiom Wealth Group establishes an engagement minimum of $2 million in investable assets. This threshold reflects the depth of service we provide — our integrated planning model requires meaningful breadth across your financial picture to deliver genuine value. Our client community includes high-net-worth and ultra-high-net-worth individuals, senior executives, business owners approaching or following a liquidity event, and multi-generational families. If you are uncertain whether you qualify, a confidential introductory conversation costs nothing.',
  },
  {
    question: 'How is Axiom compensated?',
    answer:
      'Axiom is a fee-only firm. We are compensated exclusively through advisory fees paid directly by our clients — typically as a percentage of assets under management or, for comprehensive planning engagements, a flat retainer. We earn no commissions, accept no referral fees, and participate in no revenue-sharing arrangements with product providers. This structure eliminates the most pervasive conflicts of interest in financial advisory and ensures that every recommendation we make is made in your interest, not ours.',
  },
  {
    question: 'Are you a fiduciary at all times?',
    answer:
      'Yes — unconditionally. Axiom Wealth Group is a registered investment adviser (RIA), and we operate under the fiduciary standard at every moment of every client relationship. This is not a marketing claim. It is a legal and ethical obligation that governs how we manage your assets, construct your plan, and communicate our reasoning. We do not shift between fiduciary and suitability standards depending on the product in question. Our standard is absolute.',
  },
  {
    question: 'What does the onboarding process look like?',
    answer:
      'Onboarding at Axiom unfolds in four stages. First, a Discovery Meeting — a wide-ranging conversation about your financial life, objectives, risk tolerance, family dynamics, and concerns. No sales agenda. Second, a comprehensive Analysis of your existing financial architecture: investments, tax returns, estate documents, insurance policies, and liabilities. Third, the delivery of your Integrated Wealth Plan — a document that brings every dimension of your financial life into a single coherent strategy with clear recommendations and rationale. Fourth, Implementation and Onboarding, typically completed over a 60 to 90-day period, during which your assets are repositioned and your advisory relationship is formally established.',
  },
  {
    question: 'Do you manage taxes as well as investments?',
    answer:
      'Yes — and this integration is one of the hallmarks of the Axiom model. Tax strategy is not a separate, annual exercise conducted by your CPA in March. At Axiom, tax considerations are embedded into every investment decision, every distribution strategy, and every estate planning recommendation throughout the year. We identify opportunities in direct indexing, tax-loss harvesting, Roth conversion laddering, charitable giving structures, and capital gain management as they arise — not after the fact. We coordinate closely with your existing CPA or, where appropriate, provide dedicated tax advisory services directly.',
  },
  {
    question: 'How often will I hear from my advisor?',
    answer:
      'Every Axiom client receives a formal Quarterly Review meeting with their lead advisor — a structured conversation reviewing portfolio performance, planning progress, and any emerging issues. Once per year, we conduct a comprehensive Annual Planning Meeting covering every dimension of your financial life. Beyond that, your advisor is available for proactive outreach around significant life events, market dislocations, tax planning deadlines, and any question that arises between scheduled meetings. You will never be managed by an associate while a senior advisor takes credit. The advisor you meet is the advisor who manages your relationship.',
  },
  {
    question: 'Can Axiom work alongside my existing attorney or CPA?',
    answer:
      'Absolutely — and this coordination is central to how Axiom delivers integrated advice. We have worked alongside estate attorneys, tax counsel, CPAs, business advisors, and insurance specialists throughout our history. Our role is not to replace those relationships but to serve as the connective tissue — ensuring your attorney, accountant, and advisor are working from the same set of facts, toward the same set of goals. We facilitate joint meetings, provide consolidated reporting, and take ownership of communication across your advisory team. Many clients find this coordination alone to be among the highest-value aspects of the Axiom relationship.',
  },
  {
    question: 'Does Axiom offer services for business owners planning a sale?',
    answer:
      'Yes — business owner pre-liquidity planning is one of our most specialized practice areas. We engage founders and equity-holding executives well in advance of a sale to ensure the transaction is structured for maximum tax efficiency, estate planning clarity, and post-exit financial independence. Our services include Qualified Small Business Stock (QSBS) exclusion analysis under IRC Section 1202, Opportunity Zone and 1031 exchange evaluation, deal structure optimization, charitable vehicle integration to reduce capital gains exposure, and post-liquidity integration into a comprehensive wealth plan. The window before a transaction closes is the single most consequential period in a business owner&apos;s financial life — we work to ensure nothing is left on the table.',
  },
]

export default function FaqPage() {
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
              Common Questions
            </div>
            <h1
              className="font-cormorant font-light leading-tight text-rich-black mb-6"
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
            >
              Answers Worth <em className="text-gold italic">Knowing</em>
            </h1>
            <p
              className="font-raleway font-light text-text-muted leading-loose max-w-2xl"
              style={{ fontSize: '1.05rem' }}
            >
              Transparency is not just a value at Axiom — it is a practice. Below are the questions clients and prospects ask most often, answered with the same candor we bring to every advisory conversation. Clarity in Every Decision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-champagne pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1" style={{ background: 'rgba(196,168,112,0.3)' }} />
            <span className="text-gold text-[0.5rem]">◆</span>
            <div className="h-px flex-1" style={{ background: 'rgba(196,168,112,0.3)' }} />
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand
        eyebrow="Still Have Questions?"
        heading="Start the"
        headingEm="Conversation"
        subtext="If your question is not answered above, a senior Axiom advisor is ready to speak with you directly. All inquiries are confidential."
        buttonLabel="Contact an Advisor"
        buttonHref="/contact"
      />
    </>
  )
}
