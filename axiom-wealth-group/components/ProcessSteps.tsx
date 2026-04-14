'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    roman: 'I',
    title: 'Discovery',
    body: 'A confidential, wide-ranging conversation about your life, goals, assets, concerns, and vision. No sales agenda — only listening.',
  },
  {
    roman: 'II',
    title: 'Analysis',
    body: 'A thorough review of your existing financial architecture — investments, tax situation, estate documents, insurance, and risk exposure.',
  },
  {
    roman: 'III',
    title: 'Strategy',
    body: 'Your integrated wealth plan, presented in clear language. Every recommendation grounded in your specific circumstances, not a template.',
  },
  {
    roman: 'IV',
    title: 'Partnership',
    body: 'Ongoing advisory, quarterly reviews, proactive communication, and a team that remains by your side through every stage of life.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="bg-champagne py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="w-7 h-px bg-gold" />
            <span className="font-cinzel font-medium tracking-[0.22em] uppercase text-gold text-[0.62rem]">
              How We Work
            </span>
            <div className="w-7 h-px bg-gold" />
          </div>
          <h2
            className="font-cormorant font-light leading-tight text-rich-black"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
          >
            The Axiom <em className="text-gold italic">Process</em>
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'rgba(196,168,112,0.3)' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.roman}
                className="flex flex-col gap-4 pt-0 lg:pt-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                  delay: i * 0.12,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(196,168,112,0.4)', background: 'rgba(196,168,112,0.04)' }}
                  >
                    <span
                      className="font-cormorant font-light text-gold"
                      style={{ fontSize: '1.6rem', lineHeight: 1 }}
                    >
                      {step.roman}
                    </span>
                  </div>
                </div>
                <h3 className="font-cinzel font-medium text-rich-black tracking-wide text-sm mt-2">
                  {step.title}
                </h3>
                <p className="font-raleway font-light text-text-muted text-[0.85rem] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
