'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[3000] flex items-center justify-center p-6"
          style={{ background: 'rgba(239,230,208,0.95)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-card-dark max-w-lg w-full p-12 flex flex-col items-center gap-6 text-center"
            style={{ borderTop: '2px solid #C4A870' }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-16 h-16 flex items-center justify-center"
              style={{
                border: '1.5px solid rgba(196,168,112,0.5)',
                borderRadius: '50%',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A870" strokeWidth="1.5">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <h2
              className="font-cormorant font-light text-champagne"
              style={{ fontSize: '2.4rem' }}
            >
              Thank <em className="text-gold italic">You</em>
            </h2>
            <p className="font-raleway font-light leading-relaxed" style={{ color: 'rgba(196,168,112,0.65)', fontSize: '0.92rem' }}>
              Your inquiry has been received. A senior Axiom advisor will be in touch within one business day to schedule your confidential consultation.
            </p>
            <button
              onClick={onClose}
              className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.68rem] text-rich-black bg-gold px-8 py-3 mt-2"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
