import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="py-20 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-green-400 uppercase tracking-wider bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
              Trusted by UK Businesses
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real Results from <span className="text-green-400">Real Businesses</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join UK small businesses capturing more leads with AI
          </motion.p>
        </div>

        <motion.div
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-green-500/30 rounded-3xl p-12 lg:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 rounded-full mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(34, 197, 94, 0.2)',
                '0 0 40px rgba(34, 197, 94, 0.4)',
                '0 0 20px rgba(34, 197, 94, 0.2)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Users className="w-12 h-12 text-green-400" />
          </motion.div>

          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Testimonials Coming Soon
          </h3>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            We are currently onboarding our first cohort of UK businesses. Check back soon to see their success stories.
          </p>

          <div className="inline-flex items-center gap-2 text-green-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Launching Q1 2025</span>
          </div>
        </motion.div>

        <motion.p
          className="text-center text-gray-400 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Be among the first to experience AI front desk built for UK businesses.
        </motion.p>
      </div>
    </section>
  );
};

export default SocialProof;
