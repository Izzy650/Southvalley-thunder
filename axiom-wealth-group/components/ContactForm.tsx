'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ThankYouModal from './ThankYouModal'

const assetRanges = [
  '$2M – $5M',
  '$5M – $10M',
  '$10M – $25M',
  '$25M – $50M',
  '$50M+',
]

const interestOptions = [
  'Investment Management',
  'Estate & Legacy Planning',
  'Tax Strategy',
  'Retirement Planning',
  'Business Owner Services',
  'Family Office Services',
  'Comprehensive Planning',
]

export default function ContactForm() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    assets: '',
    interest: '',
    message: '',
    privacy: false,
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setFormData((prev) => ({ ...prev, [target.name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setModalOpen(true)
  }

  return (
    <>
      <ThankYouModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="input-field"
              placeholder="—"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="input-field"
              placeholder="—"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="—"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="—"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Investable Assets
            </label>
            <select
              name="assets"
              required
              value={formData.assets}
              onChange={handleChange}
              className="input-field bg-transparent"
              style={{ appearance: 'none', cursor: 'pointer' }}
            >
              <option value="" disabled>Select range</option>
              {assetRanges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
              Primary Interest
            </label>
            <select
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="input-field bg-transparent"
              style={{ appearance: 'none', cursor: 'pointer' }}
            >
              <option value="" disabled>Select service</option>
              {interestOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-raleway font-medium tracking-[0.16em] uppercase text-gold text-[0.6rem]">
            Message <span className="opacity-50">(Optional)</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="input-field resize-none"
            placeholder="Tell us briefly about your situation or any specific questions..."
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="privacy"
            id="privacy"
            required
            checked={formData.privacy}
            onChange={handleChange}
            className="mt-1 flex-shrink-0 accent-gold"
          />
          <label
            htmlFor="privacy"
            className="font-raleway font-light text-text-muted text-[0.8rem] leading-relaxed cursor-pointer"
          >
            I understand this is a confidential inquiry and agree to Axiom Wealth Group&apos;s privacy policy and terms of engagement.
          </label>
        </div>

        <motion.button
          type="submit"
          className="font-raleway font-medium tracking-[0.14em] uppercase text-[0.72rem] bg-gold text-rich-black px-10 py-4 self-start"
          whileHover={{
            boxShadow:
              '0 0 28px rgba(196,168,112,0.35), 0 8px 32px rgba(196,168,112,0.18)',
            y: -2,
          }}
          transition={{ duration: 0.3 }}
        >
          Submit Inquiry →
        </motion.button>
      </form>
    </>
  )
}
