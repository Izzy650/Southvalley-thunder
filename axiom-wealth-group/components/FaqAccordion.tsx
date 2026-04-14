'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border-light">
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        onClick={onToggle}
      >
        <span className="font-cinzel font-medium text-rich-black tracking-wide text-[0.82rem] leading-snug">
          {item.question}
        </span>
        <motion.span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gold"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: '1.3rem', lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div
              className="pb-6 pl-5"
              style={{ borderLeft: '2px solid #C4A870' }}
            >
              <p className="font-raleway font-light text-text-muted text-[0.9rem] leading-loose">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: i * 0.06 }}
        >
          <FaqRow
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        </motion.div>
      ))}
    </div>
  )
}
