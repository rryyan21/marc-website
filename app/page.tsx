'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DotScreenShader = dynamic(
  () => import('@/components/ui/dot-shader-background').then((mod) => ({ default: mod.DotScreenShader })),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-umich-blue z-0" />
  }
)

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-umich-blue" style={{ pointerEvents: 'none' }}>
      {/* Background Shader - Fixed position, covers entire viewport, receives all pointer events */}
      <div className="fixed inset-0 z-0 bg-umich-blue" style={{ width: '100vw', height: '100vh', pointerEvents: 'auto' }}>
        <Suspense fallback={<div className="absolute inset-0 bg-umich-blue" />}>
          <DotScreenShader />
        </Suspense>
      </div>

      {/* Content - Above background, allows pointer events to pass through */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 pointer-events-none">
        <div className="text-center space-y-8 pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
            MARC
          </h1>
          <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl mx-auto leading-relaxed pointer-events-none">
            Building autonomous robots at the University of Michigan for the annual Advanced Robotics Competition.
          </p>
        </div>
      </div>
    </div>
  )
}
