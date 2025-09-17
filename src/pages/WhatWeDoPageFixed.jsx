import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import useScreenSize from '../hooks/useScreenSize';

const WhatWeDoPageFixed = () => {
  const { isMobile } = useScreenSize();

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
            <div className="animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Do</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                We create AI automation that your team will actually adopt and use, driving real productivity improvements.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-16 animate-fadeIn">
            {isMobile ? (
              // Mobile Version - Shorter, focused content
              <>
                {/* Services Overview - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">🛠️</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Our Services</h2>

                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-400 mb-2">🎯 AI Strategy & Assessment</h4>
                      <p className="text-gray-400 text-xs">We identify the best AI opportunities for your business and create implementation roadmaps.</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-400 mb-2">⚙️ Custom AI Development</h4>
                      <p className="text-gray-400 text-xs">Psychology-informed AI solutions tailored to your specific workflows and team.</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-400 mb-2">📚 Training & Support</h4>
                      <p className="text-gray-400 text-xs">Comprehensive training ensures your team adopts and succeeds with new AI tools.</p>
                    </div>
                  </div>
                </div>

                {/* Industries - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">🏭</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Industries We Serve</h2>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">🎓</div>
                      <h4 className="text-xs font-bold text-green-400">Education</h4>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">🏥</div>
                      <h4 className="text-xs font-bold text-green-400">Healthcare</h4>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">🏪</div>
                      <h4 className="text-xs font-bold text-green-400">Small Business</h4>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">⚖️</div>
                      <h4 className="text-xs font-bold text-green-400">Legal</h4>
                    </div>
                  </div>
                </div>

                {/* Case Studies - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">📊</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Case Studies & Projects</h2>
                  <p className="text-gray-300 mb-4 text-center text-sm">
                    Real results from real businesses.
                  </p>
                  <div className="text-xl font-bold text-green-400 text-center">Coming Soon</div>
                  <p className="text-gray-400 mt-2 text-center text-xs">We'll be adding detailed case studies soon.</p>
                </div>
              </>
            ) : (
              // Desktop Version - Full detailed content
              <>
                {/* Our Services */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">🛠️</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Our Comprehensive Services</h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">🎯 AI Strategy & Assessment</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        We start by understanding your business processes, pain points, and goals. Our comprehensive assessment identifies the highest-impact AI opportunities and creates a practical implementation roadmap.
                      </p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Process analysis and optimisation opportunities</li>
                        <li>• ROI projections and feasibility studies</li>
                        <li>• Technology stack recommendations</li>
                        <li>• Implementation timeline and resource planning</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">⚙️ Custom AI Development</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Our psychology-informed development approach ensures AI solutions that your team will actually adopt and use effectively, maximising your return on investment.
                      </p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Workflow automation and optimisation</li>
                        <li>• Intelligent document processing</li>
                        <li>• Predictive analytics and insights</li>
                        <li>• Customer service automation</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">📚 Training & Change Management</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Technology is only as good as its adoption. Our comprehensive training programs ensure your team embraces and succeeds with new AI tools.
                      </p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• User training and onboarding</li>
                        <li>• Change management strategies</li>
                        <li>• Ongoing support and optimisation</li>
                        <li>• Performance monitoring and improvement</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">🔧 Integration & Implementation</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Seamless integration with your existing systems and workflows, minimising disruption while maximising efficiency gains.
                      </p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• API development and integration</li>
                        <li>• Legacy system modernization</li>
                        <li>• Data migration and cleanup</li>
                        <li>• Security and compliance assurance</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">📊 Analytics & Optimisation</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Continuous monitoring and optimisation to ensure your AI systems deliver sustained value and adapt to changing business needs.
                      </p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Performance tracking and KPI monitoring</li>
                        <li>• Usage analytics and adoption metrics</li>
                        <li>• Continuous improvement recommendations</li>
                        <li>• Scaling and expansion planning</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">🛡️ Ethics & Compliance</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Ensuring your AI implementations meet the highest standards of ethics, transparency, and regulatory compliance.
                      </p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        <li>• Bias detection and mitigation</li>
                        <li>• Transparency and explainability</li>
                        <li>• Privacy protection and data governance</li>
                        <li>• Regulatory compliance assurance</li>
                      </ul>
                    </div>
                  </div>
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
                      <p className="text-gray-300 text-sm">Appointment scheduling, customer communication, payment processing, inventory management, and service delivery optimisation.</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-white mb-3">🛒 E-commerce & Retail</h3>
                      <p className="text-gray-300 text-sm">Inventory automation, customer service chatbots, personalised marketing, and supply chain optimisation.</p>
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
                </div>

                {/* Case Studies & Projects - Coming Soon */}
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

                {/* CTA Section */}
                <div className="text-center mt-16">
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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPageFixed;