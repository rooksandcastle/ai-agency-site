import React from 'react';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

const WhoWeArePage = () => {
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
                Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Are</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Meet the team behind ethical AI transformation. Our story, mission, and the psychology-informed approach that sets us apart.
              </p>
            </motion.div>
          </div>

          {/* Detailed About Section */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Our Story & Mission */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🏢</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Our Story & Mission</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🚀 How We Started</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Rooks & Castle was founded on a simple observation: most AI implementations fail not because of technical limitations, but because they ignore human psychology. Traditional consultants focus on technology-first solutions, leaving teams frustrated and resistant to change.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We saw small businesses watching competitors gain advantages through automation while feeling locked out by complexity and cost. We knew there had to be a better way.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🎯 Our Mission</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    To make advanced AI automation accessible, ethical, and genuinely useful for small and medium businesses. We believe every business should have access to the operational efficiency that AI can provide, regardless of technical expertise or budget.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our goal is to create AI solutions that feel like a trusted partner rather than a replacement, enhancing human potential instead of diminishing it.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-green-400 mb-4">📊 Our Impact So Far</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-gray-400 text-sm">Businesses Transformed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">£2M+</div>
                    <div className="text-gray-400 text-sm">In Client Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-gray-400 text-sm">Adoption Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-gray-400 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Backgrounds & Expertise */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">👥</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Team Backgrounds & Expertise</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-lg font-bold text-white mb-3">AI & Technical Specialists</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our technical team brings deep expertise in machine learning, automation platforms (n8n, Zapier, Make), and custom AI development. Combined 15+ years in enterprise AI implementation.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-lg font-bold text-white mb-3">Business Psychologists</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Behavioral science experts who understand change management, team dynamics, and what makes technology adoption successful. Masters in Organizational Psychology.
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-lg font-bold text-white mb-3">Business Consultants</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Former management consultants from McKinsey, BCG, and Deloitte who understand business operations, process optimisation, and ROI measurement.
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Our diverse backgrounds mean we approach every project with both technical excellence and deep understanding of human factors that determine success.
              </p>
            </div>

            {/* Company Values & Ethics */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">⚖️</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Company Values & Ethics</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🛡️ Our Core Values</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>Transparency:</strong> No black boxes. You understand exactly how your AI systems work.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>Human-Centered:</strong> AI supports people, never replaces them.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>Accessibility:</strong> Advanced AI shouldn't be limited to Fortune 500 companies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">•</span>
                      <span><strong>Results-Focused:</strong> We measure success by your business outcomes, not technical complexity.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🌍 Ethical Framework</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We align our work with international AI ethics frameworks including the EU AI Act, IEEE 2857™, GDPR, and NIST AI Risk Management Framework.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Privacy-by-design principles</li>
                    <li>• Algorithmic fairness and bias prevention</li>
                    <li>• Complete audit trails and explainability</li>
                    <li>• Regular ethical impact assessments</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3 text-center">🤝 Our Promise</h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  We commit to responsible AI development that enhances human potential, respects privacy, and maintains full transparency in our processes and decision-making.
                </p>
              </div>
            </div>

            {/* Psychology-Informed Approach */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🧠</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Psychology-Informed Approach</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🔬 The Science Behind Our Method</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We apply cognitive behavioural principles, change management theory, and organisational psychology to ensure AI adoption success. Our approach is based on peer-reviewed research in technology acceptance and behavioural change.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Technology Acceptance Model (TAM) application</li>
                    <li>• Kotter's 8-Step Change Process</li>
                    <li>• Cognitive Load Theory optimisation</li>
                    <li>• Social Learning Theory implementation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">💡 Practical Applications</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    This isn't just theory—we use these insights to design AI systems that feel intuitive, reduce cognitive burden, and actually improve job satisfaction rather than creating stress.
                  </p>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Gradual complexity introduction</li>
                    <li>• Personalized training pathways</li>
                    <li>• Resistance pattern identification</li>
                    <li>• Motivation-driven design choices</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4 text-center">📈 Measurable Outcomes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-white">95%</div>
                    <div className="text-gray-400 text-sm">User Adoption Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">40%</div>
                    <div className="text-gray-400 text-sm">Reduced Training Time</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">85%</div>
                    <div className="text-gray-400 text-sm">Report Job Satisfaction Increase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why We're Different */}
            <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
              <div className="text-6xl mb-6 text-center">🌟</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Why We're Different</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">🚫 Traditional AI Consultants</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Technology-first approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Complex, enterprise-focused solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>High upfront costs and long contracts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Limited post-implementation support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">✗</span>
                      <span>Ignore human factors and change management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">✅ Rooks & Castle Approach</h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>People-first, psychology-informed design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>SMB-focused, accessible solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Pay-for-results model, starting at £10/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Ongoing partnership and optimisation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span>Team training and adoption support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Our Unique Value Proposition</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We're the only AI consultancy that combines technical expertise with behavioural science to create solutions that teams actually love using.
                  We don't just implement technology—we transform how people work, making their jobs easier and more fulfilling.
                </p>
              </div>
            </div>
          </motion.div>


          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Meet the Team?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl hover:from-green-300 hover:to-green-400 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Meeting →
              </Link>
              <Link
                to="/#assessment"
                className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
              >
                Start Free Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;