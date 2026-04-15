import { ParticleHero } from '@/components/ui/particle-hero'
import HeroSection from '@/components/HeroSection'
import PhilosophyStrip from '@/components/PhilosophyStrip'
import ServicesGrid from '@/components/ServicesGrid'
import MarqueeTicker from '@/components/MarqueeTicker'
import SplitSection from '@/components/SplitSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CtaBand from '@/components/CtaBand'

export default function HomePage() {
  return (
    <>
      <ParticleHero />
      <HeroSection />
      <PhilosophyStrip />
      <ServicesGrid />
      <MarqueeTicker />
      <SplitSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaBand
        eyebrow="Take the First Step"
        heading="Ready for"
        headingEm="Clarity?"
        subtext="A confidential conversation costs nothing. Schedule your complimentary discovery meeting and experience the Axiom difference firsthand."
        buttonLabel="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  )
}
