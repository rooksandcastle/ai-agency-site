import React from 'react';
import Navigation from '../components/Navigation';
import Reveal from '../components/motion/Reveal';

const Research = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-6 md:px-10 space-y-8">
      <Reveal className="space-y-4">
        <p className="text-xs tracking-[0.4em] uppercase text-premium-green">Research</p>
        <h1 className="text-4xl font-semibold">Notes, experiments, and guides</h1>
        <p className="text-text-secondary">Placeholder space for future essays and implementation write-ups.</p>
      </Reveal>
    </main>
  </div>
);

export default Research;
