import React from 'react';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import Navigation from '../components/Navigation';

const bullet = (copy) => (
  <li key={copy} className="flex gap-3 text-sm text-text-secondary">
    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
    <span>{copy}</span>
  </li>
);

const IndustriesTrades = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 space-y-12 max-w-5xl mx-auto px-6 md:px-10">
      <Reveal className="space-y-4">
        <p className="text-xs tracking-[0.4em] uppercase text-premium-green">Industries</p>
        <h1 className="text-4xl font-semibold">Trades & Home Services</h1>
        <p className="text-text-secondary">
          Combined playbook for plumbers, electricians, HVAC, and home-service teams who need enquiries while they are on the tools.
        </p>
      </Reveal>

      <Reveal className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Where it helps</h2>
          <ul className="space-y-3">
            {[
              'Missed calls while on jobs',
              'Reliance on lead brokers or subcontracting platforms',
              'Quotes lost in email threads',
              'No direct booking/dispatch visibility',
            ].map(bullet)}
          </ul>
        </div>
        <div className="rounded-3xl bg-white/5 border border-dashed border-white/15 h-64 flex items-center justify-center text-white/40 text-sm">
          Image / workflow placeholder
        </div>
      </Reveal>

      <Reveal className="grid md:grid-cols-2 gap-6">
        <div className="bg-brand-surface/70 border border-white/5 rounded-2xl p-6 space-y-3">
          <h3 className="text-xl font-semibold">System</h3>
          <ul className="space-y-2">
            {[
              'Call + WhatsApp capture routed to the right engineer',
              'AI Desk follow-up for quotes + deposits',
              'Day sheets with urgent/normal priorities',
            ].map(bullet)}
          </ul>
        </div>
        <div className="bg-brand-surface/70 border border-white/5 rounded-2xl p-6 space-y-3">
          <h3 className="text-xl font-semibold">Signals we track</h3>
          <ul className="space-y-2">
            {[
              'Jobs booked per week',
              'Response time on urgent enquiries',
              'Conversion from quote to job',
            ].map(bullet)}
          </ul>
        </div>
      </Reveal>

      <Reveal className="text-center space-y-4">
        <p className="text-text-secondary">Ready to see the end-to-end workflow?</p>
        <GlowButton as="a" href="/contact" className="inline-flex">
          Talk to the team
        </GlowButton>
      </Reveal>
    </main>
  </div>
);

export default IndustriesTrades;
