"use client"

import React, { useEffect, useState } from "react"

import { motion } from "framer-motion"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update active tab based on current pathname
  useEffect(() => {
    const currentItem = items.find(item => {
      if (item.url === '/') {
        return pathname === '/'
      }
      return pathname.startsWith(item.url)
    })
    if (currentItem) {
      setActiveTab(currentItem.name)
    }
  }, [pathname, items])

  return (
    <div
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6 w-full flex justify-center",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-umich-blue/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg relative">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors z-10",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/10 rounded-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <motion.div 
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div 
                      className="absolute w-12 h-6 bg-primary/30 rounded-full blur-md -top-2 -left-2"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute w-8 h-6 bg-primary/30 rounded-full blur-md -top-1"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.div 
                      className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm top-0 left-2"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

