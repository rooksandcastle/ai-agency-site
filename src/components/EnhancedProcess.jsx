import React from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, staggerContainer, cardStagger, hoverScale } from './AnimationWrapper';

const EnhancedProcess = () => {
  const processes = [
    {
      step: "01",
      title: "Assessment",
      subtitle: "Psychology-Informed Discovery",
      description: "We map your current call and booking process to identify where AI saves the most time. Then we calculate your specific ROI so you know exactly what to expect.",
      features: [
        "Map your current call/booking process",
        "Identify where AI saves most time",
        "Calculate ROI specific to your business",
        "Design for team adoption (not just tech)"
      ],
      icon: "📋",
      duration: "Week 1",
      deliverables: "Process map, ROI projection, implementation plan"
    },
    {
      step: "02",
      title: "Implementation",
      subtitle: "Ethical AI Deployment",
      description: "We build your custom AI front desk and integrate it with your calendar and systems. Then we train your team to work alongside it smoothly.",
      features: [
        "Build your custom AI front desk",
        "Integrate with your calendar/systems",
        "Train your team for smooth adoption",
        "Test with real scenarios from your business"
      ],
      icon: "⚙️",
      duration: "Weeks 2-4",
      deliverables: "Live AI front desk, team training, documentation"
    },
    {
      step: "03",
      title: "Optimisation",
      subtitle: "Continuous Improvement",
      description: "We monitor performance and results, then optimise based on real data. Guaranteed ROI or we troubleshoot until it works.",
      features: [
        "Monitor performance and results",
        "Regular optimisation based on data",
        "Guaranteed ROI or we fix it",
        "Monthly reports on calls captured & revenue saved"
      ],
      icon: "📈",
      duration: "Ongoing",
      deliverables: "ROI tracking, monthly optimisations, performance reports"
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
              Simple 3-Step Process
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 font-display">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-green-400">
              It Works
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From discovery to deployment to optimisation—we handle everything.
            <br />
            <span className="text-green-400 font-semibold">You focus on your business, we make sure your AI Front Desk delivers results</span>
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