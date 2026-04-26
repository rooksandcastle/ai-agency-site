import React from 'react';
import Navigation from '../components/Navigation';

const Accessibility = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-6 md:px-10 space-y-6">
      <p className="text-xs tracking-[0.35em] uppercase text-premium-green">Accessibility</p>
      <h1 className="text-4xl font-semibold">Accessibility Statement</h1>
      <div className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 space-y-4 text-text-secondary text-sm leading-relaxed">
        <p>
          We aim to make this site usable for all visitors by supporting keyboard navigation,
          clear contrast, and responsive layouts across devices.
        </p>
        <p>
          If you experience any accessibility issues, please email hello@rooksandcastle.co.uk and
          we will prioritise a fix.
        </p>
      </div>
    </main>
  </div>
);

export default Accessibility;
