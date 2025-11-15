'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Sponsor {
  name: string
  logo: string
  website?: string
}

interface SponsorTierProps {
  title: string
  sponsors: Sponsor[]
  className?: string
}

export default function SponsorTier({
  title,
  sponsors,
  className = '',
}: SponsorTierProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h3 className="text-2xl font-bold mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={index}
            href={sponsor.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center h-32 bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={150}
              height={80}
              className="object-contain max-w-full max-h-full filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </motion.a>
        ))}
      </div>
    </div>
  )
}

