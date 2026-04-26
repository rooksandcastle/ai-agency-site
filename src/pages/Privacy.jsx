import React from 'react';
import Navigation from '../components/Navigation';

const Privacy = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-6 md:px-10 space-y-6">
      <p className="text-xs tracking-[0.35em] uppercase text-premium-green">Legal</p>
      <h1 className="text-4xl font-semibold">Privacy Policy</h1>
      <div className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 space-y-4 text-text-secondary text-sm leading-relaxed">
        <p>
          We only collect the information needed to provide consultations and deliver services.
          This includes contact details you submit through our forms and communication channels.
        </p>
        <p>
          Your data is handled securely, never sold to third parties, and used strictly for service delivery,
          support, and relevant updates.
        </p>
        <p>
          For data access, correction, or deletion requests, contact us at hello@rooksandcastle.co.uk.
        </p>
      </div>
    </main>
  </div>
);

export default Privacy;
