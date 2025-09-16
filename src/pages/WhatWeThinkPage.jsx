import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatWeThinkPage = () => {
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
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Think</span>
            </h1>


            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our insights, thought leadership, and deep thinking about the future of ethical AI in business.
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
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">AI Insights & Thought Leadership</h3>
              <p className="text-gray-400">
                Deep dives into AI trends, emerging technologies, and how they're reshaping business landscapes.
                Our perspective on ethical AI implementation and responsible automation.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Case Studies & Success Stories</h3>
              <p className="text-gray-400">
                Real-world examples of AI transformations, ROI analysis, and lessons learned from
                working with businesses across different industries and scales.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Industry Analysis & Trends</h3>
              <p className="text-gray-400">
                Market analysis, regulatory updates, and predictions about where AI is heading.
                How different industries are adopting automation and what it means for your business.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Ethical AI Framework</h3>
              <p className="text-gray-400">
                Our approach to responsible AI development, compliance with EU AI Act, GDPR,
                and industry standards. Why ethics isn't just compliance—it's competitive advantage.
              </p>
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
              to="/#contact"
              className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
            >
              Get Notified When Live
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeThinkPage;