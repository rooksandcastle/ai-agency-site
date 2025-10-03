import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, staggerContainer, scrollReveal, hoverScale } from './AnimationWrapper';

const PremiumHero = ({ onCalendlyClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive elements
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 pt-32">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 via-purple-400/10 to-green-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-purple-500/15 via-blue-500/10 to-green-500/15 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Additional atmospheric layers */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Interactive mouse follower */}
        <motion.div
          className="fixed w-6 h-6 bg-cyber-green/30 rounded-full blur-sm pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        {/* Enhanced grid overlay with depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        {/* Top fade for navigation */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyber-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Premium Typography with Framer Motion */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >

          {/* Main Headline - Enhanced Typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-none"
          >
            <span className="block text-white mb-2 font-display">Never Miss Another</span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-green-400 to-green-500 animate-pulse-glow">
                Customer
              </span>
            </span>
          </motion.h1>

          {/* Premium Value Proposition */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-white/20 rounded-full backdrop-blur-md mb-8"
          >
            <span className="text-white font-medium text-lg">Out-of-Hours Phone Coverage for Your Business</span>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-4"
          >
            Every call is answered professionally, every lead is captured, every booking is automated. 24/7—even when you can't.
          </motion.p>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-6"
          >
            Essential operational infrastructure for modern small businesses
          </motion.p>

          {/* Psychological Hook */}
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-base text-gray-300 leading-relaxed">
              Your business is now open 24/7. For less than the cost of one part-time shift weekly.
            </p>
          </motion.div>

          {/* Premium CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
          >
            {/* Primary CTA */}
            <motion.button
              {...hoverScale}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl overflow-hidden shadow-2xl shadow-green-500/25"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center">
                See How It Works
                <motion.span
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              {...hoverScale}
              className="group px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
              onClick={onCalendlyClick}
            >
              Book Free Strategy Call
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            className="pt-12"
          >
            <motion.div
              className="flex flex-col items-center text-gray-500"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHero;