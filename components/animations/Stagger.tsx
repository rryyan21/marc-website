'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Stagger({
  children,
  delay = 0.1,
  className = '',
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        visible: {
          transition: {
            staggerChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

