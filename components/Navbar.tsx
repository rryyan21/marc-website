'use client'

import { Home, Trophy, Users } from 'lucide-react'
import { NavBar } from '@/components/ui/tubelight-navbar'

export default function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Competition', url: '/competition', icon: Trophy },
    { name: 'Team', url: '/team', icon: Users },
  ]

  return <NavBar items={navItems} />
}
