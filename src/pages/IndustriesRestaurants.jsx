import React from 'react';
import Navigation from '../components/Navigation';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';

const IndustriesRestaurants = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 space-y-12 max-w-5xl mx-auto px-6 md:px-10">
      <Reveal className="space-y-4 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-premium-green">Industries</p>
        <h1 className="text-4xl font-semibold">Restaurants & Hospitality</h1>
        <p className="text-text-secondary">Booking systems, AI voice agents, and follow-up flows tuned for reservation-led venues.</p>
      </Reveal>

      <Reveal className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-sm text-text-secondary">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Booking Stack</h2>
            <ul className="space-y-2">
              {['AI phone agent captures bookings + card guarantees','Instant confirmation SMS + email','Waitlist + cancellation automations'].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Voice Agent</h2>
            <p>Helps guests confirm dietary notes, deposits, and private dining requests without staff interruption.</p>
          </div>
        </div>
        <div className="h-64 rounded-3xl border border-dashed border-white/15 bg-white/5 flex items-center justify-center text-white/40 text-sm">
          Photo placeholder
        </div>
      </Reveal>

      <Reveal className="text-center space-y-4">
        <p className="text-text-secondary">Blend the AI agent with your front-of-house scripts.</p>
        <GlowButton as="a" href="/contact" className="inline-flex">
          Book a walkthrough
        </GlowButton>
      </Reveal>
    </main>
  </div>
);

export default IndustriesRestaurants;
