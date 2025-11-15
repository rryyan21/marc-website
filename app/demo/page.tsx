'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DotScreenShader = dynamic(
  () => import('@/components/ui/dot-shader-background').then((mod) => ({ default: mod.DotScreenShader })),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-umich-blue" />
  }
)

export default function DemoPage() {
  return (
    <div className="h-screen w-screen flex flex-col gap-8 items-center justify-center relative overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-umich-blue" />}>
        <DotScreenShader />
      </Suspense>
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
          MICHIGAN ADVANCED ROBOTICS
        </h1>
        <p className="text-lg md:text-xl font-light text-center text-white mix-blend-exclusion max-w-2xl leading-relaxed pointer-events-none mt-8">
          Building autonomous robots at the University of Michigan.
        </p>
      </div>
    </div>
  )
}
