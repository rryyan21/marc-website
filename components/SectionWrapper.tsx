import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
}

export default function SectionWrapper({
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`py-16 md:py-24 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

