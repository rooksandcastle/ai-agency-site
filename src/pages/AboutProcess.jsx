import React from 'react';
import Navigation from '../components/Navigation';
import Reveal from '../components/motion/Reveal';

const steps = [
  {
    title: 'Free consultation',
    description: '15-minute call where we understand how you get work today and what outcome matters most.',
  },
  {
    title: 'We build the system',
    description: 'We design, implement, and integrate your website, listings, lead capture, and automations end-to-end.',
  },
  {
    title: 'We improve it',
    description: 'We monitor results, tweak workflows, and stay on until it delivers consistent value.',
  },
];

const AboutProcess = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 space-y-12 max-w-5xl mx-auto px-6 md:px-10">
      <Reveal className="text-center space-y-4">
        <p className="text-xs tracking-[0.4em] uppercase text-premium-green">About</p>
        <h1 className="text-4xl font-semibold">How it works</h1>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Calm, structured, transparent. No templates, no jargon, no surprises.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <Reveal key={step.title} delay={idx * 0.05} className="border border-white/5 rounded-2xl p-6 bg-brand-surface/60 space-y-2">
            <p className="text-sm font-semibold text-premium-green">Step {idx + 1}</p>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-sm text-text-secondary">{step.description}</p>
          </Reveal>
        ))}
      </div>
    </main>
  </div>
);

export default AboutProcess;
