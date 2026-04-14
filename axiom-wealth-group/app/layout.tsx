import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond, Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgressBar from '@/components/ScrollProgressBar'

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Axiom Wealth Group — Clarity in Every Decision.',
  description:
    'Independent fiduciary wealth management for high-net-worth individuals and families. Fee-only advisory services since 1994.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${raleway.variable} bg-champagne text-rich-black`}
      >
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
