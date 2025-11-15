'use client'

import SectionWrapper from '@/components/SectionWrapper'
import Link from 'next/link'

export default function Sponsors() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sponsors</h1>
          <p className="text-xl text-white/80">
            Thank you to our sponsors for supporting our work.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-umich-blue">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Your sponsorship helps us purchase components, attend competitions, and 
            develop cutting-edge robots. We're grateful for any support.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-umich-maize text-umich-blue font-medium hover:bg-[#FFD700] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
