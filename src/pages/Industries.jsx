import React from 'react';
import Navigation from '../components/Navigation';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import { Icons } from '../icons';

const groups = [
  {
    title: 'Trades & Home Services',
    description: 'Plumbers, electricians, HVAC, and field teams that miss calls while on site.',
    icon: Icons.Trades,
    href: '/industries/trades',
  },
  {
    title: 'Property & Co-hosting',
    description: 'Airbnb co-hosts, estate agents, boutique property operators.',
    icon: Icons.Property,
    href: '/industries/property',
  },
  {
    title: 'Restaurants & Hospitality',
    description: 'Booking-led venues wanting AI phone agents + reservation systems.',
    icon: Icons.People,
    href: '/industries/restaurants',
  },
];

const Industries = () => {
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min';
  const handleCalendly = () => window.open(calendlyLink, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation onCalendlyClick={handleCalendly} />
      <main className="pt-24 pb-16 space-y-12 max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="text-center space-y-4">
          <p className="text-xs tracking-[0.4em] uppercase text-premium-green">Industries</p>
          <h1 className="text-4xl sm:text-[46px] font-bold leading-tight">Systems built for service businesses</h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            If your business runs on calls, enquiries, or bookings, these playbooks keep customers warm while you work.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <Reveal key={group.title} delay={idx * 0.05} className="bg-brand-surface/80 border border-white/5 rounded-3xl p-6 space-y-3 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3">
                <group.icon className="w-6 h-6 text-premium-green" />
                <h2 className="text-xl font-semibold">{group.title}</h2>
              </div>
              <p className="text-sm text-text-secondary">{group.description}</p>
              <GlowButton as="a" href={group.href} variant="secondary" className="mt-4 inline-flex">
                View playbook
              </GlowButton>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center space-y-4">
          <p className="text-text-secondary">Not sure where you fit? We’ll map it on a quick call.</p>
          <GlowButton onClick={handleCalendly} className="inline-flex justify-center">Book a free consultation</GlowButton>
        </Reveal>
      </main>
    </div>
  );
};

export default Industries;
