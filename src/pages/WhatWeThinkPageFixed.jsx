import React from 'react';
import BackButton from '../components/BackButton';
import useScreenSize from '../hooks/useScreenSize';

const WhatWeThinkPageFixed = () => {
  const { isMobile, isDesktop } = useScreenSize();

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
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Think</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Our insights, thought leadership, and deep thinking about the future of ethical AI in business.
              </p>
            </div>
          </div>

          {/* Detailed Insights Section */}
          <div className="space-y-16 animate-fadeIn">
            {isMobile ? (
              // Mobile Version - Shorter, more focused content
              <>
                {/* Core Philosophy - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">🧠</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Our AI Philosophy</h2>

                  <div className="text-center mb-6">
                    <p className="text-gray-300 leading-relaxed">
                      We create AI that enhances human capabilities without replacing human judgment.
                      Our psychology-informed approach ensures high adoption and real results.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="text-sm font-bold text-green-400 mb-1">Human-Centered</h4>
                      <p className="text-gray-400 text-xs">AI that works with people</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔍</div>
                      <h4 className="text-sm font-bold text-green-400 mb-1">Transparent</h4>
                      <p className="text-gray-400 text-xs">No black boxes</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚖️</div>
                      <h4 className="text-sm font-bold text-green-400 mb-1">Ethical</h4>
                      <p className="text-gray-400 text-xs">Responsible deployment</p>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <h4 className="text-sm font-bold text-green-400 mb-1">Proven</h4>
                      <p className="text-gray-400 text-xs">Research-backed results</p>
                    </div>
                  </div>
                </div>

                {/* Key Beliefs - Mobile */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-6">
                  <div className="text-5xl mb-4 text-center">💡</div>
                  <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">What We Believe</h2>

                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span className="text-sm">AI should enhance human decision-making, not replace it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span className="text-sm">Every business can benefit from thoughtful automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span className="text-sm">Technology adoption requires understanding human psychology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      <span className="text-sm">Ethical considerations must be built in from the start</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              // Desktop Version - Full detailed content
              <>
                {/* AI Insights & Thought Leadership */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">🧠</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">AI Insights & Thought Leadership</h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">🎯 Human-Centered AI Design</h3>
                        <p className="text-gray-300 leading-relaxed">
                          AI should amplify human capabilities, not replace human judgement. Our approach prioritises tools that enhance decision-making while maintaining human oversight and control.
                        </p>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">🔍 Transparency & Explainability</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Every AI system we implement comes with clear explanations of how decisions are made. No black boxes, no mysterious algorithms - just transparent, understandable automation.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-gray-800/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">⚖️ Ethical Implementation</h3>
                        <p className="text-gray-300 leading-relaxed">
                          We believe in responsible AI deployment that considers bias, fairness, and societal impact. Our implementations are designed to promote equity and avoid harm.
                        </p>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4">📊 Data-Driven Results</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Every recommendation is backed by psychology research and real-world testing. We measure what matters and optimise for genuine business outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Philosophy */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">💡</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">Our Business Philosophy</h2>

                  <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Psychology-Informed Technology</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        We don't just build AI tools - we create solutions that work with human psychology, not against it.
                        Our approach ensures high adoption rates and genuine productivity improvements.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                      <div className="text-center">
                        <div className="text-3xl mb-4">🎓</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">Research-Based</h4>
                        <p className="text-gray-400 text-sm">Every solution is grounded in cognitive science and behavioural research</p>
                      </div>

                      <div className="text-center">
                        <div className="text-3xl mb-4">🤝</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">Human-First</h4>
                        <p className="text-gray-400 text-sm">Technology serves people, not the other way around</p>
                      </div>

                      <div className="text-center">
                        <div className="text-3xl mb-4">📈</div>
                        <h4 className="text-lg font-bold text-green-400 mb-2">Results-Driven</h4>
                        <p className="text-gray-400 text-sm">Measurable improvements in efficiency and outcomes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industry Perspective */}
                <div className="bg-gray-900/30 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 lg:p-12">
                  <div className="text-6xl mb-6 text-center">🌍</div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-green-400 mb-8 text-center">The Future of AI in Business</h2>

                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        We're not interested in replacing humans with machines. We're passionate about creating AI that makes people more effective,
                        creative, and fulfilled in their work.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">What We Believe</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            AI should enhance human decision-making, not replace it
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Every business can benefit from thoughtful automation
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Technology adoption requires understanding human psychology
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Ethical considerations must be built in from the start
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Transparent AI systems you can understand and trust
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Implementation support that ensures real adoption
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Ongoing optimisation based on actual usage data
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-400 mr-2">•</span>
                            Ethical standards that protect your team and customers
                          </li>
                        </ul>
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

export default WhatWeThinkPageFixed;