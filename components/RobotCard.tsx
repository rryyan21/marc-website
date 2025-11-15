'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface RobotCardProps {
  name: string
  image: string
  tags: string[]
  description?: string
  onClick?: () => void
}

export default function RobotCard({
  name,
  image,
  tags,
  description,
  onClick,
}: RobotCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="relative bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        {description && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-xs font-medium rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-white/20 rounded-lg pointer-events-none"
      />
    </motion.div>
  )
}

