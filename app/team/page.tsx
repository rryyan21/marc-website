'use client'

import SectionWrapper from '@/components/SectionWrapper'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import Stagger from '@/components/animations/Stagger'
import TeamMember from '@/components/TeamMember'
import Link from 'next/link'

export default function Team() {
  const softwareTeam = [
    {
      name: 'Elan Ronen',
      specialization: 'CSE + Robotics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=4',
      linkedin: '#',
    },
    {
      name: 'Ryan Gupta',
      specialization: 'CSE + Robotics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=5',
      linkedin: '#',
    },
    {
      name: 'Brian Totonchi',
      specialization: 'Robotics + BBA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=6',
      linkedin: '#',
    },
    {
      name: 'Joani Kaleshi',
      specialization: 'CSE + Robotics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=7',
      linkedin: '#',
    },
    {
      name: 'Efraz Rahman',
      specialization: 'CE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=8',
      linkedin: '#',
    },
  ]

  const mechanicalTeam = [
    {
      name: 'John Akladus',
      specialization: 'Aerospace',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=9',
      linkedin: '#',
    },
    {
      name: 'Dane Jarvis',
      specialization: 'Robotics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=10',
      linkedin: '#',
    },
    {
      name: 'Vishnu Yadagani',
      specialization: 'Aerospace',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=11',
      linkedin: '#',
    },
  ]

  const electronicsTeam = [
    {
      name: 'Kevin Yuan',
      specialization: 'CE + Robotics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=2',
      linkedin: '#',
    },
    {
      name: 'Jeffery Wang',
      specialization: 'Electrical',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&sig=3',
      linkedin: '#',
    },
  ]

  const businessTeam = [
    {
      name: 'Tyler Bredernitz',
      specialization: 'BBA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&sig=1',
      linkedin: '#',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 px-6 lg:px-12 bg-umich-blue">
        <div className="max-w-5xl">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Meet the Team</h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
              The students building the future of autonomous robotics
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Software Team */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-umich-maize">Software</h2>
            </FadeIn>
            <Stagger>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 justify-items-center">
                {softwareTeam.map((member, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <TeamMember {...member} />
                  </SlideUp>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Mechanical Team */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-umich-maize">Mechanical</h2>
            </FadeIn>
            <Stagger>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
                {mechanicalTeam.map((member, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <TeamMember {...member} />
                  </SlideUp>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Electronics Team */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-umich-maize">Electrical</h2>
            </FadeIn>
            <Stagger>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
                {electronicsTeam.map((member, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <TeamMember {...member} />
                  </SlideUp>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Business Team */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-umich-maize">Business</h2>
            </FadeIn>
            <Stagger>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
                {businessTeam.map((member, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <TeamMember {...member} />
                  </SlideUp>
                ))}
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-umich-blue py-16 md:py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-umich-maize">Join Our Team</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              We're always looking for passionate students who want to push the 
              boundaries of autonomous robotics. Whether you're interested in mechanical 
              design, electrical systems, software development, or operations, there's a 
              place for you on our team.
            </p>
            <Link
              href="mailto:contact@marc-robotics.org"
              className="inline-block px-8 py-4 bg-umich-maize text-umich-blue font-semibold hover:bg-[#FFD700] transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
