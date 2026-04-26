import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import VisualPanel from '../components/VisualPanel';

const industries = [
  {
    title: 'Hospitality',
    subtitle: 'Hotels & Guest Services',
    tag: 'HOSPITALITY',
    description:
      'Automated reservation handling, guest FAQ, check-in coordination, and review requests.',
    features: [
      'Automated reservation handling',
      '24/7 guest FAQ',
      'Check-in coordination',
      'Review request automation',
    ],
    href: '/industries/restaurants',
  },
  {
    title: 'Beauty & Wellness',
    subtitle: 'Salons & Barbers',
    tag: 'BEAUTY & WELLNESS',
    description:
      'Online & phone booking, appointment reminders, cancellation handling, and loyalty follow-ups.',
    features: [
      'Online & phone booking',
      'Appointment reminders',
      'Cancellation handling',
      'Loyalty follow-ups',
    ],
    href: '/contact',
  },
  {
    title: 'Restaurants & Cafés',
    subtitle: null,
    tag: 'RESTAURANTS',
    description:
      'Reservation & table management, dietary enquiries, event bookings, and review requests.',
    features: [
      'Reservation management',
      'Dietary enquiry handling',
      'Event bookings',
      'Review requests',
    ],
    href: '/industries/restaurants',
  },
  {
    title: 'Property & Co-hosting',
    subtitle: 'Estate Agents & Short-Let',
    tag: 'PROPERTY',
    description:
      'Viewing bookings, tenant & guest communication, Airbnb management, and maintenance routing.',
    features: [
      'Viewing bookings',
      'Tenant & guest comms',
      'Airbnb management',
      'Maintenance routing',
    ],
    href: '/industries/property',
  },
  {
    title: 'Dental & Healthcare',
    subtitle: null,
    tag: 'HEALTHCARE',
    description:
      'New patient registration, appointment reminders & recalls, treatment enquiries, and GDPR compliance.',
    features: [
      'New patient registration',
      'Appointment recalls',
      'Treatment enquiries',
      'GDPR-compliant flows',
    ],
    href: '/contact',
  },
  {
    title: 'Trades & Home Services',
    subtitle: null,
    tag: 'TRADES',
    description:
      'Call capture for busy tradespeople, quote follow-ups, job scheduling, and out-of-hours coverage.',
    features: [
      'Out-of-hours call capture',
      'Quote follow-ups',
      'Job scheduling',
      'Lead qualification',
    ],
    href: '/industries/trades',
  },
];

const IndustryCard = ({ industry, index }) => (
  <Reveal delay={index * 0.07}>
    <motion.div
      className="group bg-brand-surface border border-brand-border rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Image with gradient overlay */}
      <VisualPanel
        title={industry.title}
        subtitle={industry.subtitle || industry.tag}
        tone={index % 3 === 0 ? 'emerald' : index % 3 === 1 ? 'cyan' : 'violet'}
        className="h-[280px] rounded-none border-x-0 border-t-0 group-hover:brightness-110 transition-[filter] duration-300"
      />

      {/* Card content */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        {/* Tag */}
        <span className="font-accent text-[10px] tracking-[0.2em] uppercase text-premium-green font-semibold">
          {industry.tag}
        </span>

        {/* Title + subtitle */}
        <div>
          <h2 className="text-lg font-semibold text-text-primary leading-snug">
            {industry.title}
          </h2>
          {industry.subtitle && (
            <p className="text-xs text-text-secondary mt-0.5">{industry.subtitle}</p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">{industry.description}</p>

        {/* Feature bullets */}
        <ul className="space-y-1.5 flex-1">
          {industry.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-premium-green flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <a
          href={industry.href}
          className="inline-flex items-center gap-1 text-sm text-premium-green hover:text-premium-green/80 font-medium mt-2 transition-colors duration-200"
        >
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.div>
  </Reveal>
);

const Industries = () => {
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min';
  const handleCalendly = () => window.open(calendlyLink, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-24 pb-20">
        {/* ── Hero ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-5 mb-16">
          <Reveal>
            <span className="inline-block font-accent text-xs tracking-[0.35em] uppercase text-premium-green font-semibold border border-premium-green/30 bg-premium-green/10 px-4 py-1.5 rounded-full">
              Who we serve
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-text-primary">
              Built for your industry
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              We've deployed AI systems across 6 sectors — purpose-built playbooks for real
              operational problems.
            </p>
          </Reveal>
        </section>

        {/* ── 6-card grid ── */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <IndustryCard key={industry.tag} industry={industry} index={idx} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <Reveal>
          <section className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="bg-brand-surface border border-brand-border rounded-2xl px-8 py-12 text-center space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">
                Don't see your industry?
              </h2>
              <p className="text-text-secondary max-w-md mx-auto">
                We build custom AI systems for any service business. Let's talk about your specific
                workflow.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <GlowButton onClick={handleCalendly} className="inline-flex justify-center">
                  Book a free strategy call
                </GlowButton>
                <GlowButton
                  as="a"
                  href="/solutions"
                  variant="secondary"
                  className="inline-flex justify-center"
                >
                  See all solutions
                </GlowButton>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
};

export default Industries;
