import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-umich-blue/80 border-t border-white/5 backdrop-blur-sm pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="pointer-events-none">
            <h3 className="text-lg font-bold mb-2">MARC</h3>
            <p className="text-sm text-white/60">
              Michigan Advanced Robotics Competition
            </p>
            <p className="text-sm text-white/60 mt-1">
              University of Michigan
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/competition" className="text-sm text-white/60 hover:text-umich-maize transition-colors pointer-events-auto">
              Competition
            </Link>
            <Link href="/team" className="text-sm text-white/60 hover:text-umich-maize transition-colors pointer-events-auto">
              Team
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/50 pointer-events-none">
          <p>&copy; {new Date().getFullYear()} MARC</p>
        </div>
      </div>
    </footer>
  )
}
