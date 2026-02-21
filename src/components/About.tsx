'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative z-20 py-32 px-6 max-w-6xl mx-auto text-center bg-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold"
      >
        What is <span className="text-yellow-400">KIIT Nexus</span>?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto"
      >
        KIIT Nexus is a campus-exclusive digital ecosystem connecting students,
        builders and innovators inside KIIT.
      </motion.p>
    </section>
  )
}
