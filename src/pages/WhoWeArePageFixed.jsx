import React from 'react';
import BackButton from '../components/BackButton';
import useScreenSize from '../hooks/useScreenSize';

const WhoWeArePageFixed = () => {
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
                Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Are</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Meet the team behind psychology-informed AI automation that businesses actually adopt and use.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-16 animate-fadeIn">
            {isMobile ? (
              // Mobile Version - Shorter, focused content
              <>
                {/* Our Story - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">🚀</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Our Story</h2>

                  <div className="text-center mb-6">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      We're a team of AI specialists and psychology researchers who believe technology should work with human nature, not against it.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-400 mb-2">Why We Started</h4>
                      <p className="text-gray-400 text-xs">Too many AI tools are built for engineers, not end users. We change that.</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-green-400 mb-2">Our Approach</h4>
                      <p className="text-gray-400 text-xs">Psychology-first design ensures high adoption and real productivity gains.</p>
                    </div>
                  </div>
                </div>

                {/* Values - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">⭐</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Our Values</h2>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">🎯</div>
                      <h4 className="text-xs font-bold text-green-400">Human-First</h4>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">⚖️</div>
                      <h4 className="text-xs font-bold text-green-400">Ethical</h4>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">🔍</div>
                      <h4 className="text-xs font-bold text-green-400">Transparent</h4>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                      <div className="text-xl mb-1">📊</div>
                      <h4 className="text-xs font-bold text-green-400">Results-Driven</h4>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Desktop Version - Full detailed content
              <>
                {/* Our Story */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">🚀</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Our Story</h2>

                  <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                      <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        We started Rooks & Castle because we were frustrated with AI tools that looked impressive in demos but failed in real-world use.
                        The problem wasn't the technology—it was the complete disregard for human psychology in the design process.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gray-800/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">🎓 The Problem We Saw</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Brilliant AI systems gathering dust because they were designed by engineers for engineers, not for the real people who needed to use them every day.
                          Adoption rates were dismal, and businesses weren't seeing the ROI they were promised.
                        </p>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">💡 Our Solution</h3>
                        <p className="text-gray-300 leading-relaxed">
                          We combined cutting-edge AI with behavioural psychology research to create systems that people actually want to use.
                          Our psychology-informed approach ensures high adoption rates and genuine productivity improvements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Team & Expertise */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">👥</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Our Team & Expertise</h2>

                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        Our diverse team brings together expertise in AI development, cognitive psychology, user experience design, and business strategy.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-4xl mb-4">🤖</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">AI Engineering</h4>
                        <p className="text-gray-400 text-sm">Building robust, scalable AI systems that integrate seamlessly with existing workflows</p>
                      </div>

                      <div className="text-center">
                        <div className="text-4xl mb-4">🧠</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">Psychology Research</h4>
                        <p className="text-gray-400 text-sm">Understanding human behaviour to design AI that people actually want to use</p>
                      </div>

                      <div className="text-center">
                        <div className="text-4xl mb-4">🎨</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">UX Design</h4>
                        <p className="text-gray-400 text-sm">Creating intuitive interfaces that make complex AI feel simple and approachable</p>
                      </div>

                      <div className="text-center">
                        <div className="text-4xl mb-4">📈</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">Business Strategy</h4>
                        <p className="text-gray-400 text-sm">Ensuring AI implementations deliver measurable ROI and sustainable value</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Values & Principles */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">⭐</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Our Values & Principles</h2>

                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Core Values</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">🎯</span>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Human-Centered Design</h4>
                              <p className="text-gray-400 text-sm">Every solution starts with understanding the people who will use it</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">⚖️</span>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Ethical AI Development</h4>
                              <p className="text-gray-400 text-sm">Building AI that promotes fairness, transparency, and human wellbeing</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">🔍</span>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Radical Transparency</h4>
                              <p className="text-gray-400 text-sm">No black boxes—you understand how and why our AI makes decisions</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Working Principles</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">📊</span>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Evidence-Based Approach</h4>
                              <p className="text-gray-400 text-sm">Every recommendation backed by research and real-world testing</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">🚀</span>
                            <div>
                              <h4 className="text-white font-semibold mb-1">Iterative Improvement</h4>
                              <p className="text-gray-400 text-sm">Continuous optimisation based on user feedback and performance data</p>
                            </div>
                          </div>

                          <div className="flex items-start">
                            <span className="text-green-400 mr-3 mt-1">🤝</span>
                            <div>
                              <h4 className="text-white font-semibold mb-1">True Partnership</h4>
                              <p className="text-gray-400 text-sm">We're invested in your long-term success, not just the initial implementation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">🏆</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Why Choose Rooks & Castle</h2>

                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        We're not just another AI consultancy. We're specialists in creating AI that people actually use and love.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center bg-gray-800/30 rounded-xl p-6">
                        <div className="text-3xl mb-4">📈</div>
                        <h4 className="text-lg font-bold text-green-400 mb-3">Proven Results</h4>
                        <p className="text-gray-400 text-sm">Our psychology-informed approach consistently delivers higher adoption rates and better ROI than traditional AI implementations</p>
                      </div>

                      <div className="text-center bg-gray-800/30 rounded-xl p-6">
                        <div className="text-3xl mb-4">🔬</div>
                        <h4 className="text-lg font-bold text-green-400 mb-3">Research-Backed</h4>
                        <p className="text-gray-400 text-sm">Every solution is grounded in peer-reviewed research from cognitive science, behavioural psychology, and human-computer interaction</p>
                      </div>

                      <div className="text-center bg-gray-800/30 rounded-xl p-6">
                        <div className="text-3xl mb-4">🎯</div>
                        <h4 className="text-lg font-bold text-green-400 mb-3">Industry-Specific</h4>
                        <p className="text-gray-400 text-sm">We understand the unique challenges of education, healthcare, and small businesses, tailoring solutions to your specific context</p>
                      </div>
                    </div>
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

export default WhoWeArePageFixed;