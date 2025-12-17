import React from 'react';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import Navigation from '../components/Navigation';

const Section = ({ title, children }) => (
  <Reveal className="bg-brand-surface/80 border border-white/5 rounded-3xl p-8 space-y-4">
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    {children}
  </Reveal>
);

const ImageSlot = () => (
  <div className="w-full h-64 rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-sm text-white/40">
    Future illustration
  </div>
);

const SolutionAiDesk = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation />
      <main className="pt-28 pb-20 space-y-16 max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-xs tracking-[0.35em] text-premium-green uppercase">Solutions</p>
            <h1 className="text-4xl font-semibold text-white">AI Desk</h1>
            <p className="text-text-secondary">
              Our AI Desk captures enquiries, books appointments, and keeps every conversation organised so your team never misses an opportunity.
            </p>
            <GlowButton as="a" href="/contact">Book a consultation</GlowButton>
          </div>
          <ImageSlot />
        </Reveal>

        <Section title="The Problem & Solution">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Problem</h3>
              <p className="text-text-secondary text-sm">Calls happen while you are on jobs, inboxes pile up, and enquiries fall through the cracks.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Solution</h3>
              <p className="text-text-secondary text-sm">AI Desk answers instantly, captures detail, and hands over qualified leads with context.</p>
            </div>
          </div>
          <ImageSlot />
        </Section>

        <Section title="Features">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
            {['Call capture + routing', 'Scripted FAQs in your tone', 'Appointment + calendar sync', 'SMS + email summaries', 'Escalation workflows', 'CRM ready exports'].map((item) => (
              <div key={item} className="border border-white/10 rounded-2xl p-4">
                {item}
              </div>
            ))}
          </div>
          <ImageSlot />
        </Section>

        <Section title="Use cases">
          <ul className="space-y-3 text-sm text-text-secondary">
            {['24/7 receptionist for clinics', 'Out-of-hours capture for trades', 'Property viewing bookings', 'Restaurant call overflow'].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ImageSlot />
        </Section>

        <Reveal className="text-center space-y-4">
          <p className="text-text-secondary">See it in action and understand the setup timeline.</p>
          <GlowButton as="a" href="/contact">Talk to us</GlowButton>
        </Reveal>
      </main>
    </div>
  );
};

export default SolutionAiDesk;
