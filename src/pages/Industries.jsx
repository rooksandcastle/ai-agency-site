import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const CALENDLY = 'https://calendly.com/rooksandcastle101/30min';

const industries = [
  {
    label: 'Trades & Home Services',
    subtitle: 'Plumbers · Electricians · HVAC · Builders',
    description: "You can't answer the phone when you're under a sink. But your next customer doesn't know that. We make sure every call gets answered, every lead gets captured.",
    features: ['Out-of-hours call answering', 'Quote follow-up automation', 'Job scheduling & booking', 'Instant SMS notifications'],
    href: '/industries/trades',
  },
  {
    label: 'Salons & Personal Services',
    subtitle: 'Hair · Beauty · Nails · Massage · Aesthetics',
    description: "You're with a client. The phone rings. You ignore it. That's the right call — but the person who just rang booked somewhere else. We fix that.",
    features: ['AI receptionist for bookings', 'No-show reduction reminders', 'Rebooking & loyalty follow-up', 'Works with your existing system'],
    href: '/industries/salons',
  },
  {
    label: 'Consultants & Professionals',
    subtitle: 'Consultants · Coaches · Accountants · Freelancers',
    description: "When you're heads-down on a client, the next client isn't getting a response. Slow replies and late invoices are costing you more than you think.",
    features: ['Instant enquiry responses', 'Proposal follow-up sequences', 'Invoice & payment automation', 'Professional image at any size'],
    href: '/industries/consultants',
  },
];

const Industries = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 text-center py-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
            Industries
          </p>
          <h1
            className="text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-[-0.03em] text-text-primary mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
          >
            AI built for the way<br />
            <span className="text-premium-green">you actually work</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            We've built systems for three types of business. Each one is different. Each one has the
            same problem — customers falling through the gaps. We close those gaps.
          </p>
        </section>

        {/* Industry cards */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.label}
                className="bg-brand-surface border border-brand-border rounded-2xl p-7 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-premium-green mb-3">
                  {industry.subtitle}
                </p>
                <h2 className="text-xl font-bold text-text-primary mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {industry.label}
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{industry.description}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-premium-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={industry.href}
                  className="inline-flex items-center gap-1 text-sm text-premium-green hover:text-premium-green/80 font-semibold transition-colors duration-200"
                >
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="bg-brand-surface border border-brand-border rounded-2xl px-8 py-12 text-center space-y-6">
            <h2
              className="text-2xl sm:text-3xl font-bold text-text-primary"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Not sure which fits you?
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Book a free 30-minute call. We'll listen first and tell you honestly what would work for your business.
            </p>
            <motion.button
              className="px-6 py-3 rounded-full font-semibold bg-green-gradient text-gray-900 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.85)] transition-all duration-200"
              onClick={handleCalendly}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Free Call →
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Industries;
