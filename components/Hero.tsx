'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const DotScreenShader = dynamic(
  () => import('@/components/ui/dot-shader-background').then((mod) => ({ default: mod.DotScreenShader })),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-umich-blue" />
  }
)

interface HeroProps {
  title: string
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
}

export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-umich-blue" />}>
        <DotScreenShader />
      </Suspense>
      
      <div className="relative z-10 text-left px-6 sm:px-8 lg:px-12 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className="px-6 py-3 bg-umich-maize text-umich-blue font-medium hover:bg-[#FFD700] transition-colors"
              >
                {ctaPrimary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className="px-6 py-3 border border-umich-maize text-umich-maize font-medium hover:bg-umich-maize/10 transition-colors"
              >
                {ctaSecondary.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
