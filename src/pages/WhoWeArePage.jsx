import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhoWeArePage = () => {
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
              Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Are</span>
            </h1>


            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Meet the team behind ethical AI transformation. Our story, mission, and the psychology-informed approach that sets us apart.
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
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Our Story & Mission</h3>
              <p className="text-gray-400">
                How we started, why we're passionate about ethical AI, and our mission to make
                advanced automation accessible to small and medium businesses worldwide.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Team Backgrounds & Expertise</h3>
              <p className="text-gray-400">
                Meet our diverse team of AI specialists, business psychologists, and automation experts.
                Learn about our combined decades of experience in technology and human behavior.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Company Values & Ethics</h3>
              <p className="text-gray-400">
                Our commitment to responsible AI development, transparency in our processes,
                and putting human needs at the center of every automation solution.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Psychology-Informed Approach</h3>
              <p className="text-gray-400">
                How we apply behavioral science and cognitive psychology to create AI solutions
                that people actually want to use and that improve workplace satisfaction.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 md:col-span-2">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Why We're Different</h3>
              <p className="text-gray-400">
                Unlike traditional AI consultants who focus on technology-first solutions, we start with understanding
                your people, processes, and business psychology. We believe the best AI implementations are the ones
                that enhance human potential rather than replace it.
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
              Meet Us Today
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;