'use client'

import SectionWrapper from '@/components/SectionWrapper'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import Stagger from '@/components/animations/Stagger'
import Image from 'next/image'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-5xl">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">About MARC</h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light">
              Michigan Advanced Robotics Competition
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <SlideUp>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
                  <div className="space-y-6">
                    <p className="text-xl text-white/90 leading-relaxed">
                      We&apos;re a student organization at the University of Michigan dedicated to 
                      autonomous robotics. We design, build, and compete with robots that can 
                      navigate complex environments and make intelligent decisions.
                    </p>
                    <p className="text-xl text-white/90 leading-relaxed">
                      Our team brings together students from mechanical engineering, electrical 
                      engineering, computer science, and other disciplines to create cutting-edge 
                      robotic systems.
                    </p>
                  </div>
                </div>
              </SlideUp>
              <FadeIn delay={0.2}>
                <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
                    alt="Robotics team working"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <SectionWrapper className="bg-[#003d73]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Team Structure</h2>
          </FadeIn>
          <Stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SlideUp delay={0}>
                <div className="p-8 border border-white/10 rounded-lg hover:border-umich-maize/30 transition-colors bg-umich-blue/30">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-umich-blue rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Mechanical</h3>
                  <p className="text-white/70 leading-relaxed">Design and fabrication of robot hardware</p>
                </div>
              </SlideUp>
              <SlideUp delay={0.1}>
                <div className="p-8 border border-white/10 rounded-lg hover:border-umich-maize/30 transition-colors bg-umich-blue/30">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-umich-blue rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Electrical</h3>
                  <p className="text-white/70 leading-relaxed">Circuit design, sensors, and power systems</p>
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div className="p-8 border border-white/10 rounded-lg hover:border-umich-maize/30 transition-colors bg-umich-blue/30">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-umich-blue rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Software</h3>
                  <p className="text-white/70 leading-relaxed">AI, autonomous navigation, and control systems</p>
                </div>
              </SlideUp>
              <SlideUp delay={0.3}>
                <div className="p-8 border border-white/10 rounded-lg hover:border-umich-maize/30 transition-colors bg-umich-blue/30">
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-umich-blue rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Operations</h3>
                  <p className="text-white/70 leading-relaxed">Project management, logistics, and outreach</p>
                </div>
              </SlideUp>
            </div>
          </Stagger>
        </div>
      </SectionWrapper>

      {/* Image Gallery Section */}
      <SectionWrapper className="bg-umich-blue">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">In Action</h2>
          </FadeIn>
          <Stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SlideUp delay={0}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                    alt="Robot in competition"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SlideUp>
              <SlideUp delay={0.1}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                    alt="Team collaboration"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SlideUp>
              <SlideUp delay={0.2}>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&sig=2"
                    alt="Robotics workshop"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SlideUp>
            </div>
          </Stagger>
        </div>
      </SectionWrapper>
    </>
  )
}
