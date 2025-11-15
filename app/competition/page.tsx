'use client'

import SectionWrapper from '@/components/SectionWrapper'
import FadeIn from '@/components/animations/FadeIn'
import SlideUp from '@/components/animations/SlideUp'
import Stagger from '@/components/animations/Stagger'
import Image from 'next/image'
import Link from 'next/link'

export default function Competition() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-5xl">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">The Competition</h1>
            <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
              Autonomous robotics competitions that push the boundaries of what's possible
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What is the Competition Section */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">What is the Competition?</h2>
            </FadeIn>
            <SlideUp>
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  The Michigan Advanced Robotics Competition (MARC) is an annual autonomous 
                  robotics competition that challenges teams to design, build, and program 
                  robots capable of navigating complex environments and completing intricate 
                  tasks without human intervention.
                </p>
                <p>
                  Teams compete across multiple categories including autonomous navigation, 
                  object manipulation, obstacle avoidance, and real-time decision making. 
                  The competition tests every aspect of robotics: mechanical design, electrical 
                  systems, software architecture, sensor integration, and AI algorithms.
                </p>
                <p>
                  Each competition presents unique challenges that require innovative solutions. 
                  Robots must operate in dynamic environments, adapt to changing conditions, 
                  and make intelligent decisions in real-time. This makes the competition an 
                  excellent platform for students to apply theoretical knowledge to practical 
                  engineering challenges.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Competition Format */}
      <section className="bg-[#003d73] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">Competition Format</h2>
            </FadeIn>
            <Stagger>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SlideUp delay={0}>
                  <div className="p-6 border border-white/10 rounded-lg bg-umich-blue/30">
                    <h3 className="text-2xl font-semibold mb-4 text-umich-maize">Autonomous Navigation</h3>
                    <p className="text-white/80 leading-relaxed">
                      Robots must navigate through complex courses with obstacles, varying 
                      terrain, and dynamic elements using only onboard sensors and AI.
                    </p>
                  </div>
                </SlideUp>
                <SlideUp delay={0.1}>
                  <div className="p-6 border border-white/10 rounded-lg bg-umich-blue/30">
                    <h3 className="text-2xl font-semibold mb-4 text-umich-maize">Task Completion</h3>
                    <p className="text-white/80 leading-relaxed">
                      Robots are required to complete specific tasks such as object manipulation, 
                      precision placement, and multi-step operations autonomously.
                    </p>
                  </div>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <div className="p-6 border border-white/10 rounded-lg bg-umich-blue/30">
                    <h3 className="text-2xl font-semibold mb-4 text-umich-maize">Real-Time Adaptation</h3>
                    <p className="text-white/80 leading-relaxed">
                      Teams must demonstrate that their robots can adapt to unexpected 
                      conditions and make intelligent decisions under uncertainty.
                    </p>
                  </div>
                </SlideUp>
                <SlideUp delay={0.3}>
                  <div className="p-6 border border-white/10 rounded-lg bg-umich-blue/30">
                    <h3 className="text-2xl font-semibold mb-4 text-umich-maize">Technical Presentation</h3>
                    <p className="text-white/80 leading-relaxed">
                      Teams present their design process, technical innovations, and 
                      engineering solutions to judges and peers.
                    </p>
                  </div>
                </SlideUp>
              </div>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Sub-Teams Section */}
      <section className="bg-umich-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Sub-Teams</h2>
            <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto">
              Our team is organized into specialized sub-teams, each focusing on critical 
              aspects of robot development
            </p>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Mechanical Team */}
            <SlideUp>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-umich-blue rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Mechanical</h3>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    The Mechanical sub-team is responsible for the physical design and fabrication 
                    of our robots. This includes chassis design, structural components, drivetrain 
                    systems, and all mechanical assemblies.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white/80"><strong className="text-white">Key Responsibilities:</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                      <li>CAD design and 3D modeling of robot components</li>
                      <li>Material selection and structural analysis</li>
                      <li>Manufacturing and assembly of mechanical systems</li>
                      <li>Integration of sensors and actuators</li>
                      <li>Testing and optimization of mechanical performance</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
                    alt="Mechanical team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideUp>

            {/* Electrical Team */}
            <SlideUp delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-umich-blue rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Electrical</h3>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    The Electrical sub-team designs and implements all electronic systems, including 
                    power distribution, sensor integration, motor control, and communication systems.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white/80"><strong className="text-white">Key Responsibilities:</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                      <li>PCB design and circuit board fabrication</li>
                      <li>Power system design and battery management</li>
                      <li>Sensor integration (LiDAR, cameras, IMU, etc.)</li>
                      <li>Motor controllers and actuator systems</li>
                      <li>Electrical safety and system reliability</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
                    alt="Electrical team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideUp>

            {/* Software Team */}
            <SlideUp delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-umich-blue rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Software</h3>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    The Software sub-team develops the AI, navigation algorithms, sensor fusion, 
                    and control systems that enable autonomous operation.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white/80"><strong className="text-white">Key Responsibilities:</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                      <li>Autonomous navigation and path planning algorithms</li>
                      <li>Computer vision and object detection</li>
                      <li>Sensor fusion and SLAM (Simultaneous Localization and Mapping)</li>
                      <li>Real-time control systems and state machines</li>
                      <li>Testing, simulation, and debugging tools</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&sig=2"
                    alt="Software team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideUp>

            {/* Operations Team */}
            <SlideUp delay={0.3}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-umich-blue rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-umich-maize" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">Operations</h3>
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed mb-4">
                    The Operations sub-team handles project management, logistics, outreach, 
                    and ensures smooth coordination between all sub-teams.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white/80"><strong className="text-white">Key Responsibilities:</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                      <li>Project planning and timeline management</li>
                      <li>Budget management and resource allocation</li>
                      <li>Sponsor relations and fundraising</li>
                      <li>Team recruitment and onboarding</li>
                      <li>Competition logistics and travel coordination</li>
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden lg:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&sig=3"
                    alt="Operations team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="bg-[#003d73] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">How to Get Started</h2>
            </FadeIn>
            <Stagger>
              <div className="space-y-8">
                <SlideUp delay={0}>
                  <div className="p-8 border border-white/10 rounded-lg bg-umich-blue/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-umich-maize">1</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Attend an Information Session</h3>
                        <p className="text-white/90 leading-relaxed">
                          Join us at the beginning of each semester for information sessions where 
                          we introduce the team, explain the competition, and answer questions. Check 
                          our social media or email for session dates and locations.
                        </p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp delay={0.1}>
                  <div className="p-8 border border-white/10 rounded-lg bg-umich-blue/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-umich-maize">2</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Choose Your Sub-Team</h3>
                        <p className="text-white/90 leading-relaxed">
                          Based on your interests and skills, choose a sub-team to join. You can 
                          participate in Mechanical, Electrical, Software, or Operations. Don't 
                          worry if you're not sure—you can always switch or contribute to multiple 
                          teams as you learn more.
                        </p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp delay={0.2}>
                  <div className="p-8 border border-white/10 rounded-lg bg-umich-blue/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-umich-maize">3</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Start with Onboarding</h3>
                        <p className="text-white/90 leading-relaxed">
                          New members go through an onboarding process where you'll learn about 
                          our tools, workflows, and current projects. You'll be paired with 
                          experienced team members who will help you get up to speed.
                        </p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp delay={0.3}>
                  <div className="p-8 border border-white/10 rounded-lg bg-umich-blue/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-umich-maize">4</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Contribute to Projects</h3>
                        <p className="text-white/90 leading-relaxed">
                          Start working on real projects! Whether it's designing a component, 
                          writing code, or helping with logistics, you'll be contributing to 
                          actual competition robots from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
                <SlideUp delay={0.4}>
                  <div className="p-8 border border-white/10 rounded-lg bg-umich-blue/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-umich-maize">5</div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-3">Get in Touch</h3>
                        <p className="text-white/90 leading-relaxed mb-4">
                          Ready to join? Reach out to us via email or attend our next meeting. 
                          We're always looking for passionate students who want to push the 
                          boundaries of autonomous robotics.
                        </p>
                        <Link
                          href="mailto:contact@marc-robotics.org"
                          className="inline-block px-6 py-3 bg-umich-maize text-umich-blue font-medium hover:bg-[#FFD700] transition-colors"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </Stagger>
          </div>
        </div>
      </section>
    </>
  )
}
