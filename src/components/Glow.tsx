'use client'

import { useEffect, useRef } from 'react'

export default function Glow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let x = 0,
      y = 0
    let tx = 0,
      ty = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const animate = () => {
      x += (tx - x) * 0.07
      y += (ty - y) * 0.07

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(700px at ${tx}px ${ty}px, rgba(212,175,55,0.18), transparent 65%)`
      }
      if (trailRef.current) {
        trailRef.current.style.background = `radial-gradient(400px at ${x}px ${y}px, rgba(255,194,14,0.08), transparent 60%)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* instant glow — follows cursor directly */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 transition-none"
      />
      {/* laggy ambient trail */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed inset-0 z-0 transition-none"
      />
      {/* subtle noise grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </>
  )
}
