import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Users, Lock, Heart, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'GDPR Compliant',
      description: 'Full UK data protection compliance. Your customer data never leaves UK servers.',
      badge: 'UK Regulated'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'AI Your Team Will Love',
      description: 'Psychology-informed design means your staff actually want to work with it, not around it.',
      badge: 'Human-Centred'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'AI Customers Trust',
      description: 'Natural, empathetic conversations that feel personalnot robotic. UK accent, UK cultural understanding.',
      badge: 'Customer-First'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Transparent AI',
      description: 'No black boxes. You see exactly how decisions are made and can adjust at any time.',
      badge: 'Ethics-First'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Done-For-You Service',
      description: 'Full setup in 2 weeks. We handle everythingfrom custom scripts to integration testing.',
      badge: 'White Glove'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'UK-Based Partner',
      description: 'Real humans in the UK. Support during your business hours, not 3am Pacific time.',
      badge: 'Local Support'
    }
  ];

  return (
    <section className="py-20 bg-brand-bg relative" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-premium-green uppercase tracking-wider bg-premium-green/10 px-4 py-2 rounded-full border border-premium-green/20">
              The UK Advantage
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why UK Businesses Choose <span className="text-premium-green">Rooks & Castle</span>
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're not another US SaaS platform. We're your UK-based AI partner, building systems
            your team and customers will actually love.
          </motion.p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-2xl p-8 hover:border-premium-green/50 transition-all duration-500 relative overflow-hidden cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.15)'
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-premium-green/0 to-premium-green/0 group-hover:from-premium-green/5 group-hover:to-premium-green/10 transition-all duration-500 rounded-2xl" />

              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold text-premium-green bg-premium-green/10 px-3 py-1 rounded-full border border-premium-green/20">
                  {item.badge}
                </span>
              </div>

              {/* Icon with Breathing Animation */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-premium-green/20 to-premium-green-dark/10 rounded-2xl flex items-center justify-center text-premium-green mb-6 relative z-10"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.2)',
                    '0 0 30px rgba(16, 185, 129, 0.4)',
                    '0 0 20px rgba(16, 185, 129, 0.2)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {item.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-premium-green transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-premium-green/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/5 to-green-500/10 border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Unlike US competitors,</strong> we understand UK business culture,
              employment law, and data protection standards. Your AI systems aren't just compliant—they're
              built for how UK businesses actually work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>ICO Registered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>UK-Based Servers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Human Oversight</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>2-Week Setup</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
