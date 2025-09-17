import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const WhatWeDoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black">
      {/* White Back Button - Top Left */}
      <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
        <BackButton to="/" />
      </div>

      {/* Header */}
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Do</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive AI solutions, implementation processes, and service packages designed specifically for your business needs.
              </p>
            </motion.div>
          </div>

          {/* Detailed Services Section */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Services & Packages */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">📦</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Services & Packages</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Starter Package</h3>
                  <div className="text-green-400 text-2xl font-bold mb-4">£10-50/month</div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Basic workflow automation</li>
                    <li>• Email & communication setup</li>
                    <li>• Simple data processing</li>
                    <li>• Monthly check-ins</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-6 border border-green-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Growth Package</h3>
                  <div className="text-green-400 text-2xl font-bold mb-4">£200-800/month</div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Advanced AI agents</li>
                    <li>• Customer service automation</li>
                    <li>• Data analytics & insights</li>
                    <li>• Team training & support</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Package</h3>
                  <div className="text-green-400 text-2xl font-bold mb-4">Custom Pricing</div>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Full digital transformation</li>
                    <li>• Custom AI development</li>
                    <li>• Integration with existing systems</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                All packages include our psychology-informed implementation approach, ensuring your team actually adopts and benefits from the AI tools we implement. No black boxes, complete transparency in pricing and processes.
              </p>
            </div>

            {/* Implementation Process */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">⚙️</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Implementation Process</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl mx-auto mb-4">1</div>
                  <h3 className="text-xl font-bold text-white mb-4">Discovery & Assessment</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We start with a comprehensive business analysis and team psychology assessment. Understanding your processes, pain points, and team dynamics before proposing any solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl mx-auto mb-4">2</div>
                  <h3 className="text-xl font-bold text-white mb-4">Design & Development</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Custom AI solution design based on your specific needs. We build, test, and refine the automation workflows with your feedback at every step.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl mx-auto mb-4">3</div>
                  <h3 className="text-xl font-bold text-white mb-4">Training & Launch</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive team training and gradual rollout. We ensure everyone is comfortable and confident with the new systems before full deployment.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Our process typically takes 4-12 weeks depending on complexity, with ongoing support and optimization included in all packages.
              </p>
            </div>

            {/* Industry Specializations */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🏭</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Industry Specializations</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">🎓 Education</h3>
                  <p className="text-gray-300 text-sm">Student engagement systems, administrative automation, personalized learning paths, and performance tracking solutions.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">⚖️ Legal Services</h3>
                  <p className="text-gray-300 text-sm">Document automation, client intake processes, case management, and compliance tracking systems.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">🏪 Small Businesses & Services</h3>
                  <p className="text-gray-300 text-sm">Appointment scheduling, customer communication, payment processing, inventory management, and service delivery optimization.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">🛒 E-commerce & Retail</h3>
                  <p className="text-gray-300 text-sm">Inventory automation, customer service chatbots, personalized marketing, and supply chain optimization.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">🏥 Healthcare</h3>
                  <p className="text-gray-300 text-sm">Appointment scheduling, patient communication, record management, and compliance automation.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">💼 Professional Services</h3>
                  <p className="text-gray-300 text-sm">Project management, client reporting, time tracking, and proposal generation automation.</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Each industry has unique workflows and compliance requirements. Our experience across sectors helps us implement AI solutions that respect industry standards and regulations.
              </p>
            </div>

            {/* Pricing & ROI */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">💰</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Pricing & ROI Information</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">💡 Typical ROI Examples</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <span className="text-green-400 font-semibold">5 hours/week saved</span> on admin tasks</li>
                    <li>• <span className="text-green-400 font-semibold">30% faster</span> customer response times</li>
                    <li>• <span className="text-green-400 font-semibold">£2,000-£8,000/month</span> in operational savings</li>
                    <li>• <span className="text-green-400 font-semibold">95% accuracy</span> in automated processes</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">📊 Cost Breakdown</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• <span className="text-green-400 font-semibold">Free assessment</span> & consultation</li>
                    <li>• <span className="text-green-400 font-semibold">Pay only after ROI</span> is demonstrated</li>
                    <li>• <span className="text-green-400 font-semibold">No hidden costs</span> or setup fees</li>
                    <li>• <span className="text-green-400 font-semibold">Cancel anytime</span> after 90 days</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                We believe in earning your business through results. Most clients see positive ROI within 60-90 days, with the automation paying for itself and generating additional savings.
              </p>
            </div>

            {/* How We Work With Clients */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🤝</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">How We Work With Clients</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🧠 Psychology-Informed Approach</h3>
                  <p className="text-gray-300 mb-4">
                    We understand that technology adoption is fundamentally about people, not just processes. Our approach considers team dynamics, resistance patterns, and motivation factors.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Change readiness assessment</li>
                    <li>• Personalized training approaches</li>
                    <li>• Gradual implementation strategies</li>
                    <li>• Ongoing psychological support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🔄 Ongoing Partnership</h3>
                  <p className="text-gray-300 mb-4">
                    This isn't a one-and-done consulting project. We become your ongoing AI partner, continuously optimizing and expanding your automation capabilities.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Monthly optimization reviews</li>
                    <li>• Quarterly strategy sessions</li>
                    <li>• 24/7 technical support</li>
                    <li>• Continuous improvement mindset</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                We believe in partnership over consulting. Your success is our success, and we're committed to growing with your business as your automation needs evolve.
              </p>
            </div>
          </motion.div>



          {/* Case Studies & Projects - Coming Soon */}
          <motion.div
            className="mt-16 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="text-6xl mb-6">📊</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-6">Case Studies & Projects</h2>
                <p className="text-xl text-gray-300 mb-6">
                  Real results from real businesses.
                </p>
                <div className="text-2xl font-bold text-green-400">Coming Soon</div>
                <p className="text-gray-400 mt-2">We'll be adding detailed case studies and project examples soon.</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#assessment"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl hover:from-green-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Assessment →
              </Link>
              <Link
                to="/#contact"
                className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;