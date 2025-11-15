'use client'

import { FlickeringGrid } from '@/components/ui/flickering-grid'

export default function HomeFlickering() {
  return (
    <div className="relative min-h-screen w-full" style={{ pointerEvents: 'none' }}>
      {/* Flickering Grid Background - Fixed position, covers entire viewport */}
      <div className="fixed inset-0 z-0" style={{ width: '100vw', height: '100vh', pointerEvents: 'auto' }}>
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={6}
          color="#FFCB05" // UMich Maize
          maxOpacity={0.15}
          flickerChance={0.1}
        />
      </div>

      {/* Content - Above background */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap">
            MARC
          </h1>
          <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl mx-auto leading-relaxed">
            Building autonomous robots at the University of Michigan for the annual Advanced Robotics Competition.
          </p>
        </div>
      </div>
    </div>
  )
}

