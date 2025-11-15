'use client'

import SectionWrapper from '@/components/SectionWrapper'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-white/80">
            Get in touch with the MARC team.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-umich-blue">
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[#003d73]">
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:contact@marc-robotics.org"
              className="text-white/80 hover:text-umich-maize transition-colors"
            >
              contact@marc-robotics.org
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-white/80">
              University of Michigan<br />
              Ann Arbor, MI 48109
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
