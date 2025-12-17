import React from 'react';
import Navigation from '../components/Navigation';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';

const SectionCard = ({ title, children }) => (
  <div className="bg-brand-surface/70 border border-white/5 rounded-3xl p-6 space-y-3">
    <h3 className="text-xl font-semibold">{title}</h3>
    {children}
  </div>
);

const IndustriesProperty = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 space-y-12 max-w-5xl mx-auto px-6 md:px-10">
      <Reveal className="space-y-4 text-center">
        <p className="text-xs tracking-[0.4em] text-premium-green uppercase">Industries</p>
        <h1 className="text-4xl font-semibold">Property & Airbnb Management</h1>
        <p className="text-text-secondary">Systems for co-hosts, estate agents, and boutique property operators.</p>
      </Reveal>

      <Reveal className="grid md:grid-cols-2 gap-6">
        <SectionCard title="Airbnb Co-hosting">
          <ul className="text-sm text-text-secondary space-y-2">
            {['Guest screening + messaging', 'Automated stay instructions + upsells', 'Maintenance tickets routed instantly'].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard title="Estate Agents">
          <ul className="text-sm text-text-secondary space-y-2">
            {['Viewing booking + qualification','Vendor updates + reminders','Buyer nurturing workflows'].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </Reveal>

      <Reveal className="rounded-3xl border border-dashed border-white/15 bg-white/5 h-64 flex items-center justify-center text-sm text-white/40">
        Visual placeholder
      </Reveal>

      <Reveal className="text-center space-y-4">
        <p className="text-text-secondary">We map your existing tools — no rip-and-replace.</p>
        <GlowButton as="a" href="/contact" className="inline-flex">
          Discuss property systems
        </GlowButton>
      </Reveal>
    </main>
  </div>
);

export default IndustriesProperty;
