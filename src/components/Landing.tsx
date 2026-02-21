'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { FiExternalLink, FiUsers, FiUser } from 'react-icons/fi'
import Members from './Members'
import Glow from './Glow'

const HERO_IMAGES = [
  'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408454/SHRIMI_MEMBER_ML_mdn7yf.png',
  'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408453/IPSIT_DAS_LEAD_MARKETING_mpoklh.png',
  'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408452/ANUSKA_SINHA_MEMBER_WEB_DEV_tipyrt.png',
  'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408451/ARYAN_KUMAR_LEAD_OPERATIONS_obmshf.png',
]

const GROUP_PHOTO =
  'https://res.cloudinary.com/da9zvp0mu/image/upload/v1771408401/ANUSHREE_SAXENA_MEMBER_WEB_DEV_aqh1wt.png'

// ============================================
// PARTICLE NETWORK BACKGROUND
// ============================================
function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<any[]>([])
  const mouse = useRef({ x: -9999, y: -9999 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.size = Math.random() * 1.5 + 0.5
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }
      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,0.4)'
        ctx.fill()
      }
    }

    particles.current = Array.from({ length: 280 }, () => new Particle())
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.current.forEach((p) => {
        p.update()
        p.draw()
      })
      particles.current.forEach((p1, i) => {
        particles.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x,
            dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.1 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
        const dx = p1.x - mouse.current.x,
          dy = p1.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouse.current.x, mouse.current.y)
          ctx.strokeStyle = `rgba(255,194,14,${0.45 * (1 - dist / 180)})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

// ============================================
// UNIQUE NAVBAR
// ============================================
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Members', id: 'members' },
    { label: 'Opportunities', id: 'opportunities' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-10 transition-all duration-700 ${
          scrolled
            ? 'py-4 bg-black/85 backdrop-blur-2xl border-b border-[#FFC20E]/10'
            : 'py-7 bg-transparent'
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border border-[#FFC20E]/50"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-[3px] rounded-full border border-[#FFC20E]/20"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />
            <span className="relative z-10 text-[#FFC20E] font-black text-[9px] tracking-tight">
              NX
            </span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-[#FFC20E] font-black text-base tracking-[0.2em]"
              style={{ fontFamily: 'monospace' }}
            >
              KIIT
            </span>
            <span
              className="text-white font-black text-base tracking-[0.2em]"
              style={{ fontFamily: 'monospace' }}
            >
              NEXUS
            </span>
          </div>
        </button>

        {/* LINKS — pill-style floating strip */}
        <div className="flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-2 py-1.5 backdrop-blur-md">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollTo(link.id)
                setActiveLink(link.id)
              }}
              className={`relative px-5 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full ${
                activeLink === link.id
                  ? 'text-black bg-[#FFC20E]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
              style={{ fontFamily: 'monospace' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* LOGIN */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden group border border-[#FFC20E]/70 text-[#FFC20E] text-xs font-bold tracking-[0.2em] uppercase px-7 py-2.5 rounded-sm transition-all duration-300 hover:text-black"
          style={{ fontFamily: 'monospace' }}
        >
          <motion.div
            className="absolute inset-0 bg-[#FFC20E]"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          />
          <span className="relative z-10">Login ↗</span>
        </motion.button>
      </motion.nav>

      {/* MOBILE */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <span
          className="text-[#FFC20E] font-black text-sm tracking-[0.2em]"
          style={{ fontFamily: 'monospace' }}
        >
          NEXUS
        </span>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 flex flex-col gap-1.5"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={
              menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-5 h-px bg-white"
          />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-14 left-0 right-0 z-40 bg-black border-b border-[#FFC20E]/10 overflow-hidden flex flex-col items-center py-8 gap-6"
          >
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-gray-300 hover:text-[#FFC20E] text-xs tracking-widest uppercase transition-colors"
                style={{ fontFamily: 'monospace' }}
              >
                {l.label}
              </button>
            ))}
            <button
              className="border border-[#FFC20E] text-[#FFC20E] text-xs px-8 py-2.5 tracking-widest uppercase"
              style={{ fontFamily: 'monospace' }}
            >
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ============================================
// SCROLLING TICKER
// ============================================
function Ticker() {
  const items = [
    'KIIT NEXUS',
    'BUILD · SHIP · REPEAT',
    'CAMPUS-EXCLUSIVE',
    'WHERE AMBITION MEETS OPPORTUNITY',
    'JOIN THE ECOSYSTEM',
    'INNOVATE · CONNECT · GROW',
  ]
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-4 border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-xs font-bold tracking-[0.3em] uppercase text-white/30"
            style={{ fontFamily: 'monospace' }}
          >
            {item}
            <span className="text-[#FFC20E]/50 text-base">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ============================================
// SPOTLIGHT BUTTON
// ============================================
interface SpotlightButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  overlayColor?: string
}
function SpotlightButton({
  children,
  onClick,
  className = '',
  overlayColor = 'rgba(255,255,255,0.2)',
}: SpotlightButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    btnRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`)
    btnRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }
  return (
    <motion.button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`relative overflow-hidden group ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(140px circle at var(--x) var(--y), ${overlayColor}, transparent 80%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

// ============================================
// HERO — COMPLETELY REDESIGNED
// ============================================
function Hero({ imgIndex }: { imgIndex: number }) {
  const { scrollY } = useScroll()
  const yText = useTransform(scrollY, [0, 500], [0, -80])
  const yImg = useTransform(scrollY, [0, 500], [0, 60])
  const opacity = useTransform(scrollY, [0, 350], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-end pb-0"
    >
      {/* FULL BG IMAGE — right-side bleed */}
      <motion.div
        className="absolute right-0 top-0 h-full w-[55%] z-0"
        style={{ y: yImg }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={HERO_IMAGES[imgIndex]}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="w-full h-full object-cover object-top"
          />
        </AnimatePresence>
        {/* left fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        {/* bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      {/* GRAIN OVERLAY on image */}
      <div
        className="absolute right-0 top-0 h-full w-[55%] z-[1] pointer-events-none opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px',
        }}
      />

      {/* TEXT CONTENT */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 w-full px-8 md:px-16 lg:px-24 pb-24 pt-40"
      >
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-[#FFC20E]" />
          <span
            className="text-[#FFC20E] text-xs font-bold tracking-[0.35em] uppercase"
            style={{ fontFamily: 'monospace' }}
          >
            KIIT University · Est. 2024
          </span>
        </motion.div>

        {/* MAIN HEADLINE — staggered line-by-line */}
        <div className="overflow-hidden">
          {['WHERE', 'AMBITION', 'MEETS'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.div
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6 + i * 0.12,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span
                  className={`block text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[0.88] tracking-tight ${
                    i === 1 ? 'text-[#FFC20E]' : 'text-white'
                  }`}
                  style={{
                    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                  }}
                >
                  {word}
                </span>
              </motion.div>
            </div>
          ))}
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.96,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="block text-[clamp(3.5rem,9vw,8.5rem)] font-black leading-[0.88] tracking-tight text-transparent"
                style={{
                  fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
                }}
              >
                OPPORTUNITY
              </span>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          {/* DESCRIPTION */}
          <p
            className="text-gray-400 text-sm leading-relaxed max-w-xs"
            style={{ fontFamily: 'monospace' }}
          >
            A campus-exclusive digital ecosystem connecting builders, dreamers &
            innovators at KIIT.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <SpotlightButton
              className="px-7 py-3.5 bg-[#FFC20E] text-black font-bold text-sm tracking-widest uppercase rounded-sm shadow-[0_0_35px_rgba(255,194,14,0.5)]"
              overlayColor="rgba(255,255,255,0.4)"
              onClick={() =>
                document
                  .getElementById('about')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Enter Nexus
            </SpotlightButton>
            <SpotlightButton
              className="px-7 py-3.5 border border-white/20 text-white font-medium text-sm tracking-widest uppercase rounded-sm backdrop-blur-sm"
              overlayColor="rgba(255,194,14,0.15)"
            >
              Explore ↓
            </SpotlightButton>
          </div>

          {/* LIVE DOT */}
          <div className="hidden sm:flex items-center gap-2 ml-auto">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC20E] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFC20E]" />
            </span>
            <span
              className="text-gray-500 text-[10px] tracking-widest uppercase"
              style={{ fontFamily: 'monospace' }}
            >
              System Online
            </span>
          </div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
        >
          <span
            className="text-white/20 text-[10px] tracking-[0.3em] uppercase"
            style={{ fontFamily: 'monospace' }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#FFC20E]/60 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* IMAGE INDEX DOTS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2"
      >
        {HERO_IMAGES.map((_, i) => (
          <div
            key={i}
            className={`w-px transition-all duration-500 ${i === imgIndex ? 'h-8 bg-[#FFC20E]' : 'h-3 bg-white/20'}`}
          />
        ))}
      </motion.div>
    </section>
  )
}

// ============================================
// ABOUT SECTION — inline (no separate file)
// ============================================
function About() {
  return (
    <section
      id="about"
      className="relative z-20 py-40 px-8 md:px-16 lg:px-24 bg-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#FFC20E]" />
              <span
                className="text-[#FFC20E] text-xs font-bold tracking-[0.3em] uppercase"
                style={{ fontFamily: 'monospace' }}
              >
                About
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-black text-white leading-tight mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What is
              <br />
              <span className="text-[#FFC20E]">KIIT Nexus</span>?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              KIIT Nexus is a campus-exclusive digital ecosystem connecting
              students, builders and innovators inside KIIT. We build real
              products, ship them, and help each other grow.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { num: '50+', label: 'Active Members' },
            { num: '10+', label: 'Live Projects' },
            { num: '3+', label: 'Domains' },
            { num: '∞', label: 'Opportunities' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-6 border border-white/5 rounded-xl bg-white/[0.02] hover:border-[#FFC20E]/20 transition-colors duration-300"
            >
              <div
                className="text-4xl font-black text-[#FFC20E] mb-1"
                style={{ fontFamily: 'monospace' }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs text-gray-500 uppercase tracking-widest"
                style={{ fontFamily: 'monospace' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================
// GROUP PHOTO
// ============================================
function GroupPhoto() {
  return (
    <section className="relative w-full bg-black py-10 px-6 md:px-16 flex justify-center z-20">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl h-[400px] md:h-[600px] overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
      >
        <img
          src={GROUP_PHOTO}
          alt="KIIT Nexus Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-10 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-4xl md:text-6xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Built by Students,
              <br />
              for Students
            </h3>
            <p className="text-gray-300 text-base max-w-lg">
              Join a community of builders, dreamers, and doers shaping the
              future at KIIT.
            </p>
          </motion.div>
        </div>
        {/* Skewed border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFC20E]" />
      </motion.div>
    </section>
  )
}

// ============================================
// PROJECTS
// ============================================
const projectData = [
  {
    title: 'KIIT QUEST',
    description:
      'The ultimate gamified campus exploration experience. Complete quests, find hidden spots, and top the leaderboard.',
    tech: ['Flutter', 'Node.js', 'MongoDB'],
    status: 'Live',
    link: 'https://kiit-quest-web.vercel.app/',
    logo: '/kiit-quest-logo.png',
    isFeatured: true,
    author: 'Abhishek Dhal',
    isTeam: false,
  },
  {
    title: 'Campus Connect',
    description:
      'A real-time student networking ecosystem built to enhance collaboration and mentorship across campus.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    status: 'Ongoing',
    link: '#',
    logo: null,
    author: 'TEAM CodeHunters',
    isTeam: true,
  },
  {
    title: 'AI Resume Scanner',
    description:
      'Machine-learning powered resume analysis system for smarter internship and placement preparation.',
    tech: ['Python', 'FastAPI', 'TensorFlow'],
    status: 'Ongoing',
    link: '#',
    logo: null,
    author: 'Team NovaX',
    isTeam: true,
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-32 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#FFC20E]" />
          <span
            className="text-[#FFC20E] text-xs font-bold tracking-[0.3em] uppercase"
            style={{ fontFamily: 'monospace' }}
          >
            Projects
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="text-5xl md:text-7xl font-black text-white leading-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Be Project Ready
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1.5px rgba(255,194,14,0.6)' }}
            >
              For Placements
            </span>
          </h2>
          <p
            className="text-gray-500 text-sm max-w-xs"
            style={{ fontFamily: 'monospace' }}
          >
            Real products built by Nexus members. Ship something meaningful.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`group relative p-8 border transition-all duration-500 overflow-hidden flex flex-col rounded-2xl backdrop-blur-xl
              ${
                project.isFeatured
                  ? 'bg-[#FFC20E]/8 border-[#FFC20E]/30 hover:border-[#FFC20E]/70'
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
              }`}
          >
            {project.isFeatured && (
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFC20E]/15 rounded-full blur-3xl" />
            )}
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                {project.logo ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-14 h-14 rounded-xl overflow-hidden border border-[#FFC20E]/40 shadow-[0_0_15px_rgba(255,194,14,0.15)] hover:scale-105 transition-transform"
                  >
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </a>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                    <div className="w-5 h-5 bg-gradient-to-tr from-[#FFC20E] to-[#b08600] rounded-full" />
                  </div>
                )}
                <span
                  className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm border ${
                    project.status === 'Live'
                      ? 'bg-[#FFC20E] text-black border-[#FFC20E]'
                      : 'bg-white/5 text-gray-500 border-white/5'
                  }`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FFC20E] transition-colors flex items-center gap-2">
                {project.title}
                {project.link !== '#' && (
                  <FiExternalLink className="text-xs opacity-40" />
                )}
              </h3>
              <div className="flex items-center gap-2 mb-4 text-xs text-gray-600 uppercase tracking-wide">
                {project.isTeam ? <FiUsers /> : <FiUser />}
                <span style={{ fontFamily: 'monospace' }}>
                  {project.author}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[10px] bg-black/50 border border-white/8 text-gray-500 rounded-sm"
                    style={{ fontFamily: 'monospace' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pt-5 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-neutral-800 border border-black/80 flex items-center justify-center text-[9px] text-gray-600"
                    >
                      U{i}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  target={project.link !== '#' ? '_blank' : '_self'}
                  className={`text-xs font-bold flex items-center gap-1.5 hover:gap-3 transition-all ${project.isFeatured ? 'text-[#FFC20E]' : 'text-white/50 hover:text-white'}`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {project.isFeatured ? 'LAUNCH APP' : 'DETAILS'} <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// ============================================
// MAIN LANDING
// ============================================
export default function Landing() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-black text-white selection:bg-[#FFC20E]/30">
      <ParticlesBackground />
      <Glow />
      <Navbar />

      <Hero imgIndex={index} />
      <Ticker />
      <About />
      <GroupPhoto />
      <Projects />
      <Members />
    </div>
  )
}
