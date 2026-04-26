import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SEO from '../components/SEO';

const CALENDLY = 'https://calendly.com/rooksandcastle101/30min';

const services = [
  {
    number: '01',
    label: 'AI Front Desk',
    subtitle: '24/7 Phone Coverage',
    description: "Every call answered, every enquiry captured — even when you're on a job, with a client, or done for the day.",
    features: [
      'Answers calls in your name, with your tone',
      'Books directly into your calendar',
      'Sends you a text summary after every call',
      'Handles emergencies, questions, and bookings',
    ],
    href: '/services/ai-front-desk',
  },
  {
    number: '02',
    label: 'Workflow Automation',
    subtitle: 'Stop Doing Admin Twice',
    description: 'Quotes, invoices, reminders, follow-ups — the things eating your evenings. Automated. Running in the background.',
    features: [
      'Quotes and invoices sent automatically',
      'Lead follow-up without you chasing',
      'Connects to your existing tools',
      'Reminders so nothing slips through',
    ],
    href: '/services/workflow-automation',
  },
  {
    number: '03',
    label: 'Smart Follow-Up',
    subtitle: 'Stop Chasing, Start Closing',
    description: 'Most jobs are lost not because of the service — but because no one followed up. We build the sequences that do it automatically.',
    features: [
      'Enquiry follow-up sent at the right time',
      'Overdue invoice reminders, automatically',
      "Win back past customers who've gone quiet",
      'You get notified when someone responds',
    ],
    href: '/services/smart-follow-up',
  },
];

const Services = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <SEO title="R&C — Our Services" description="Explore our AI automation services designed for small businesses. Answer calls, automate workflows, and follow up with smart systems." path="/services" />

      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 md:px-10 text-center py-20">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
            Services
          </p>
          <h1
            className="text-[clamp(36px,5vw,72px)] leading-[1.05] tracking-[-0.03em] text-text-primary mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
          >
            Three systems.<br />
            <span className="text-premium-green">One result.</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Every service we build closes a gap where customers fall through — missed calls, lost leads,
            unpaid invoices. Simple, practical AI that runs in the background.
          </p>
        </section>

        {/* Service cards */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.number}
                className="bg-brand-surface border border-brand-border rounded-2xl p-7 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-4xl font-bold text-premium-green/20 leading-none select-none mb-5">
                  {service.number}
                </span>
                <h2 className="text-xl font-bold text-text-primary mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {service.label}
                </h2>
                <p className="text-sm text-premium-green font-medium mb-4">{service.subtitle}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 flex-1 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-premium-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm text-premium-green hover:text-premium-green/80 font-semibold transition-colors"
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
              Not sure where to start?
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Book a free 30-minute call. We'll listen first and tell you honestly what would have the biggest impact on your business.
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

export default Services;
