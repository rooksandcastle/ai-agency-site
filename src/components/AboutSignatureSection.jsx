import React from 'react';
import VisualPanel from './VisualPanel';

const AboutSignatureSection = ({ className = '' }) => (
  <div className={`grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] items-center ${className}`}>
    <div className="space-y-6 text-left">
      <div className="space-y-2">
        <p className="text-xs tracking-[0.4em] text-premium-green uppercase">COMPANY / WHO WE ARE</p>
        <h2 className="text-3xl font-bold text-white">Built for the shift that’s already happening</h2>
      </div>
      <div className="space-y-4 text-text-secondary text-sm">
        <p>
          Small service businesses are entering a new standard. Customers now expect fast responses, clear booking, and professional follow-up — even from local teams.
        </p>
        <p>
          Rooks & Castle builds practical AI systems that quietly handle enquiries, scheduling, and admin in the background. The result is fewer missed leads, less manual work, and a business that runs with the confidence of a larger firm — without losing the human touch.
        </p>
      </div>
      <div>
        <p className="text-xs font-semibold text-white/70 uppercase tracking-[0.2em] mb-3">Outcomes</p>
        <ul className="space-y-2 text-sm text-text-secondary">
          {[
            'Faster responses and fewer lost enquiries',
            'Bookings and follow-ups that run automatically',
            'Less admin, more time on real work',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-premium-green" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-text-secondary/80">Best fit: trades, property teams, clinics, and hospitality.</p>
    </div>

    <VisualPanel
      title="Built for real operations"
      subtitle="Clarity, trust, and practical systems that scale with your team"
      tone="emerald"
      className="h-full min-h-[240px]"
    />
  </div>
);

export default AboutSignatureSection;
