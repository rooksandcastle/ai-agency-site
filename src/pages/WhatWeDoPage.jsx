import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatWeDoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-black via-gray-900 to-cyber-dark">
      {/* Header */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Do</span>
            </h1>


            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Comprehensive AI solutions, implementation processes, and service packages designed specifically for your business needs.
            </p>
          </motion.div>

          {/* Preview Content */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Services & Packages</h3>
              <p className="text-gray-400">
                Detailed breakdown of our AI automation services, from one-off implementations to
                ongoing digital transformation partnerships. Transparent pricing for every business size.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Implementation Process</h3>
              <p className="text-gray-400">
                Step-by-step walkthrough of how we work with you, from initial assessment through
                deployment and ongoing support. No black boxes—complete transparency.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Industry Specializations</h3>
              <p className="text-gray-400">
                Deep dives into how we approach AI automation for different industries: healthcare,
                legal services, retail, manufacturing, and professional services.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Pricing & ROI Information</h3>
              <p className="text-gray-400">
                Transparent pricing models, ROI calculators, and real examples of cost savings
                and efficiency gains our clients have achieved through AI automation.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 md:col-span-2">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">How We Work With Clients</h3>
              <p className="text-gray-400">
                Our collaborative approach to AI implementation. How we ensure your team is comfortable
                with new systems, provide training, and maintain ongoing support. Partnership, not just consulting.
              </p>
            </div>
          </motion.div>

          {/* Service Preview Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Smart Communication Hub</h4>
              <p className="text-gray-400 text-sm">AI-powered customer service and communication automation</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Process Automation</h4>
              <p className="text-gray-400 text-sm">Streamline repetitive tasks and workflows</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Data Intelligence</h4>
              <p className="text-gray-400 text-sm">Turn your business data into actionable insights</p>
            </div>
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/"
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl hover:from-green-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
            >
              ← Return to Homepage
            </Link>

            <Link
              to="/#assessment"
              className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
            >
              Book Free Assessment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;