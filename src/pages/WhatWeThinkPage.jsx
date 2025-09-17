import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const WhatWeThinkPage = () => {
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
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Think</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Our insights, thought leadership, and deep thinking about the future of ethical AI in business.
              </p>
            </motion.div>
          </div>

          {/* Detailed Insights Section */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* AI Insights & Thought Leadership */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🧠</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">AI Insights & Thought Leadership</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🚀 The Future of Small Business AI</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We believe the next decade will see AI become as fundamental to business operations as email and spreadsheets are today. The question isn't whether small businesses will adopt AI, but how quickly they can do so effectively.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Key trends we're watching: No-code AI platforms, psychology-informed UX design, regulatory compliance automation, and the rise of "AI-native" business models.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🎯 The Psychology of AI Adoption</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Most AI implementations fail not because of technical issues, but due to human resistance. We've identified the key psychological barriers that prevent successful adoption and developed frameworks to overcome them.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Fear of job displacement (reality: AI augments, doesn't replace)</li>
                    <li>• Cognitive overload from complex interfaces</li>
                    <li>• Lack of perceived control over automated systems</li>
                    <li>• Insufficient training and change management</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4 text-center">📝 Featured Insights</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">"The SMB AI Revolution"</h4>
                    <p className="text-gray-400 text-sm">Why small businesses will lead AI adoption</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">"Psychology-First AI Design"</h4>
                    <p className="text-gray-400 text-sm">Building systems people actually want to use</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">"Ethical AI for SMBs"</h4>
                    <p className="text-gray-400 text-sm">Responsible automation on any budget</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies & Success Stories */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">📊</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Case Studies & Success Stories</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">☕</div>
                  <h3 className="text-lg font-bold text-white mb-3">Coffee Shop Chain</h3>
                  <div className="text-green-400 font-bold mb-2">£4,200/month saved</div>
                  <p className="text-gray-300 text-sm mb-3">
                    Automated inventory management, staff scheduling, and customer loyalty programs across 12 locations.
                  </p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• 60% reduction in inventory waste</li>
                    <li>• 35% improvement in staff scheduling efficiency</li>
                    <li>• ROI achieved in 6 weeks</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">⚖️</div>
                  <h3 className="text-lg font-bold text-white mb-3">Legal Practice</h3>
                  <div className="text-green-400 font-bold mb-2">£18,000/year saved</div>
                  <p className="text-gray-300 text-sm mb-3">
                    Document automation, client intake processing, and case management workflows for 15-lawyer firm.
                  </p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• 75% faster document processing</li>
                    <li>• 90% reduction in admin errors</li>
                    <li>• Partners can focus on billable work</li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🛒</div>
                  <h3 className="text-lg font-bold text-white mb-3">E-commerce Startup</h3>
                  <div className="text-green-400 font-bold mb-2">£8,500/month saved</div>
                  <p className="text-gray-300 text-sm mb-3">
                    Customer service automation, inventory management, and personalized marketing for growing online retailer.
                  </p>
                  <ul className="text-gray-400 text-xs space-y-1">
                    <li>• 24/7 customer support coverage</li>
                    <li>• 40% increase in customer satisfaction</li>
                    <li>• Scaled from 2 to 12 employees without proportional admin increase</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Each case study demonstrates our psychology-first approach: all these businesses achieved 95%+ team adoption rates because we designed systems their staff actually wanted to use.
              </p>
            </div>

            {/* Industry Analysis & Trends */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🔍</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Industry Analysis & Trends</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">📈 Market Predictions 2024-2026</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>SMB AI spending will grow 300%</strong> as no-code solutions mature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>Psychology-informed design</strong> will become the competitive differentiator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>Regulatory compliance automation</strong> will drive enterprise AI adoption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>"AI-native" businesses</strong> will outperform traditional competitors by 40%</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🌍 Global Regulatory Landscape</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>EU AI Act (2024):</strong> World's first comprehensive AI regulation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>UK AI White Paper:</strong> Principles-based approach to AI governance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>GDPR implications:</strong> Data processing and consent for AI systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3">•</span>
                      <span><strong>Industry standards:</strong> IEEE, ISO, and NIST frameworks gaining adoption</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-4 text-center">🔮 Our Predictions</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  By 2026, businesses without AI integration will be like businesses without websites in 2010. The competitive advantage will shift from "having AI" to "having AI that people actually use effectively."
                </p>
              </div>
            </div>

            {/* Ethical AI Framework */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">⚖️</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Ethical AI Framework</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🛡️ Why Ethics = Competitive Advantage</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Ethical AI isn't just about compliance—it's about building systems that people trust, regulators approve, and customers prefer. Our ethical framework directly contributes to better business outcomes.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• 95% user adoption rate (vs 60% industry average)</li>
                    <li>• Zero compliance violations across all implementations</li>
                    <li>• Higher customer satisfaction and trust scores</li>
                    <li>• Future-proof against evolving regulations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🌐 Our Compliance Framework</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We align with international standards not just to meet requirements, but because they represent best practices that lead to better AI outcomes.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-green-400">EU AI Act</div>
                      <div className="text-gray-400">Risk Assessment</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-green-400">GDPR</div>
                      <div className="text-gray-400">Data Protection</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-green-400">IEEE 2857</div>
                      <div className="text-gray-400">Ethical Design</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="font-semibold text-green-400">NIST AI RMF</div>
                      <div className="text-gray-400">Risk Management</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-gray-400 text-sm">Explainable AI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-gray-400 text-sm">Data Breaches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-gray-400 text-sm">Audit Trail Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-gray-400 text-sm">Monitoring</div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Our ethical framework isn't a constraint on innovation—it's the foundation that enables sustainable, trustworthy AI that drives long-term business success.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Want to Discuss These Ideas?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl hover:from-green-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Book Strategy Session →
              </Link>
              <Link
                to="/#assessment"
                className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
              >
                Explore Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeThinkPage;