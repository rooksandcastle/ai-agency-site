import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, staggerContainer, cardStagger, hoverScale } from './AnimationWrapper';

const EnhancedProcess = () => {
  const processes = [
    {
      step: "01",
      title: "Learning About Your Business",
      subtitle: "Teaching Your Assistant How You Work",
      description: "We learn about your business - your processes, your documents, your way of doing things - so we can build a digital assistant that fits perfectly.",
      features: [
        "Review your current processes",
        "Understand your team's workflow",
        "Learn your company language",
        "Map out what tasks take too much time"
      ],
      icon: "🧠",
      duration: "1-2 weeks",
      deliverables: "Clear picture of your business, list of opportunities"
    },
    {
      step: "02",
      title: "Building Your Digital Assistant",
      subtitle: "Creating Your New Team Member",
      description: "We build a smart digital assistant trained on your business. Like hiring someone who instantly knows your company and how you like things done.",
      features: [
        "Build your custom digital assistant",
        "Train it on your specific business",
        "Connect it to your existing tools",
        "Make it easy for your team to use"
      ],
      icon: "🤖",
      duration: "2-4 weeks",
      deliverables: "Working digital assistant, ready to use"
    },
    {
      step: "03",
      title: "Getting Smarter Over Time",
      subtitle: "Your Assistant Learns and Improves",
      description: "Your digital assistant learns from every interaction, getting better at helping your business. Like a new employee who gets more helpful every day.",
      features: [
        "Learns from daily use",
        "Gets better at understanding your needs",
        "Updates its knowledge automatically",
        "Shows you how much time it's saving"
      ],
      icon: "📈",
      duration: "Ongoing",
      deliverables: "Continuously improving assistant, monthly progress reports"
    }
  ];

  return (
    <section id="process" className="py-32 bg-gradient-to-br from-cyber-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-green/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={scrollReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm mb-6"
            variants={scrollReveal}
          >
            <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse mr-3" />
            <span className="text-green-400 font-medium text-sm tracking-wide uppercase">
              How We Build Your Digital Assistant
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 font-display">
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-green-400">
              Your Business
            </span> to Digital Employee
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We turn your company knowledge into a smart digital assistant that works alongside your team.
            <br />
            <span className="text-green-400 font-semibold">Like hiring someone who knows your business and never takes a day off</span>
          </p>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processes.map((process, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={cardStagger}
            >
              {/* Connection Line */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-400/50 to-transparent z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full" />
                </div>
              )}

              {/* Card */}
              <motion.div
                className="bg-gray-900/30 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8 h-full relative overflow-hidden group-hover:border-green-500/30 transition-all duration-500"
                {...hoverScale}
                whileHover={{ y: -10 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-2xl font-black text-cyber-black shadow-lg shadow-green-500/25"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {process.step}
                    </motion.div>

                    <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      {process.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {process.title}
                  </h3>

                  <h4 className="text-green-400 font-semibold text-lg mb-4">
                    {process.subtitle}
                  </h4>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center mb-6 p-3 bg-green-500/10 rounded-xl">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3" />
                    <span className="text-green-400 font-medium text-sm">
                      Duration: {process.duration}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-semibold text-green-400 mb-3">
                      What's Included:
                    </div>
                    {process.features.map((feature, featureIdx) => (
                      <motion.div
                        key={featureIdx}
                        className="flex items-start text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIdx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="border-t border-gray-800 pt-4">
                    <div className="text-xs font-semibold text-gray-400 mb-2">
                      KEY DELIVERABLES
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {process.deliverables}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-green-500/10 to-cyber-green/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-green-500/20"
          variants={scrollReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "95%", label: "Team Adoption", subtext: "Average across all clients" },
              { number: "15+", label: "Hours Saved", subtext: "Average per week per employee" },
              { number: "2-6", label: "Weeks to Live", subtext: "Average implementation time" },
              { number: "24/7", label: "AI Monitoring", subtext: "Continuous optimisation" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          variants={scrollReveal}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-bold text-lg rounded-2xl shadow-2xl shadow-green-500/25 hover:shadow-green-500/40"
            {...hoverScale}
            onClick={() => document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Transformation →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedProcess;