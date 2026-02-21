'use client'

import { motion } from 'framer-motion'

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-white/5 border border-white/10 px-8 py-3 rounded-full shadow-lg flex items-center gap-8"
    >
      {/* LOGO */}
      <button
        onClick={scrollToTop}
        className="font-bold tracking-wide text-yellow-400 cursor-pointer hover:scale-105 transition"
      >
        NEXUS
      </button>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-6 text-sm text-gray-300">
        <button
          onClick={() => scrollToSection('about')}
          className="hover:text-white"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('events')}
          className="hover:text-white"
        >
          Events
        </button>
        <button
          onClick={() => scrollToSection('community')}
          className="hover:text-white"
        >
          Community
        </button>
        <button
          onClick={() => scrollToSection('opportunities')}
          className="hover:text-white"
        >
          Opportunities
        </button>
      </div>

      <button className="ml-4 px-5 py-2 rounded-full bg-yellow-500 text-black text-sm font-semibold hover:bg-yellow-400 transition">
        Login
      </button>
    </motion.nav>
  )
}
