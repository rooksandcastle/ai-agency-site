import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-100">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold">
        Welcome to AI Agency
      </motion.h1>
      <p className="mt-4 text-lg">We help businesses adopt AI successfully.</p>
      <a href="/bookings" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl">
        Book a Consultation
      </a>
    </section>
  )
}