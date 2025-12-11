import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Calendar, TrendingUp } from 'lucide-react';

const FollowUpService = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-brand-bg via-brand-surface/20 to-brand-bg overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-premium-green/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-premium-green/10 border border-premium-green/30 text-premium-green px-4 py-2 rounded-full text-sm font-semibold">
              ✨ NEW: Automated Follow-Up System
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Turn Trial Customers into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-green to-premium-green-light">
              Loyal Clients
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI receptionist doesn't just answer calls. It nurtures your leads with intelligent
            follow-up calls and texts to convert trial customers into bookings. Complete business automation for UK SMBs.
          </motion.p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl lg:text-3xl font-semibold text-text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Follow-Up Journey
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-premium-green/20 via-premium-green/50 to-premium-green/20"></div>

            {[
              {
                icon: Calendar,
                step: '1',
                title: 'Trial Completed',
                description: 'Customer finishes their trial (e.g., clinic appointment, service demo)'
              },
              {
                icon: MessageCircle,
                step: '2',
                title: 'Smart SMS',
                description: 'Automated text sent asking about their experience and offering next booking'
              },
              {
                icon: Phone,
                step: '3',
                title: 'AI Call',
                description: 'If no response, AI makes a friendly follow-up call to discuss booking'
              },
              {
                icon: TrendingUp,
                step: '4',
                title: 'Conversion',
                description: 'Customer books their next appointment. Revenue secured through automated follow-up.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative bg-brand-surface/80 backdrop-blur-xl border border-brand-border rounded-2xl p-6 hover:border-premium-green/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(16, 185, 129, 0.5)' }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-premium-green text-black rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-premium-green/30">
                  {item.step}
                </div>

                <div className="flex justify-center mb-4 mt-2">
                  <div className="w-12 h-12 bg-premium-green/10 rounded-xl flex items-center justify-center text-premium-green">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-text-primary mb-2 text-center">{item.title}</h4>
                <p className="text-sm text-text-secondary text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Perfect Timing',
              description: 'Follow-ups sent at optimal times based on customer behaviour and industry best practices.',
              stat: '3-7 days',
              statLabel: 'optimal window'
            },
            {
              title: 'Personalised Messages',
              description: 'AI references their specific trial, answers questions, and addresses concerns naturally.',
              stat: '85%',
              statLabel: 'engagement rate'
            },
            {
              title: 'Multi-Channel',
              description: 'Combines SMS and voice calls to reach customers on their preferred channel.',
              stat: '3x',
              statLabel: 'conversion boost'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-brand-surface/60 backdrop-blur-xl border border-brand-border rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-4xl font-black text-premium-green mb-2">{item.stat}</div>
              <div className="text-sm text-text-tertiary mb-4">{item.statLabel}</div>
              <h4 className="text-lg font-bold text-text-primary mb-3">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-text-secondary mb-6">
            Included with Professional and Enterprise Front Desk plans
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-green-gradient text-black font-bold rounded-xl hover:shadow-green-lg transition-all duration-300"
          >
            See Pricing & Get Started →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FollowUpService;
