import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import { Icons } from '../icons';

const stats = [
  { value: '40%', label: 'Calls go unanswered', detail: "When you're on site or with clients", icon: Icons.Call },
  { value: '67%', label: "Won't leave voicemail", detail: 'They call your competitor instead', icon: Icons.Message },
  { value: '£150', label: 'Average job value', detail: '10 missed calls = £1,500 lost weekly', icon: Icons.Insight },
];

const capabilities = [
  { title: 'Out-of-Hours Coverage', icon: Icons.Clock },
  { title: 'Intelligent Call-Back System', icon: Icons.Workflow },
  { title: 'Custom Business Greetings', icon: Icons.Message },
  { title: 'Real-Time AI Insights', icon: Icons.Insight },
  { title: 'Instant SMS Notifications', icon: Icons.Inbox },
  { title: 'Multiple Task Handling', icon: Icons.Operations },
];

const workflowSteps = [
  { title: 'Incoming Call', description: 'Customers reach your number at any hour.', icon: Icons.Call },
  { title: 'AI Engages', description: 'AI answers instantly with your script and tone.', icon: Icons.Support },
  { title: 'Instant Notification', description: 'Receive SMS/email with context and urgency.', icon: Icons.Inbox },
  { title: 'You Follow Up', description: "You take over when you're ready with all details.", icon: Icons.Message },
];

const caseStudies = [
  {
    title: 'Dental Clinic',
    scenario: 'High volume of enquiries outside reception hours.',
    process: 'AI receptionist triages calls, books preliminary appointments, and captures patient questions.',
    followUp: 'Dentist receives summaries each morning for personalised follow-up.',
    result: 'Reduced no-shows by 32% and filled late cancellations faster.',
  },
  {
    title: 'HVAC Company',
    scenario: 'Engineers miss calls while on-site leading to lost jobs.',
    process: 'AI captures job details, urgency, and location while staff finish current work.',
    followUp: 'SMS + dashboard notifications route the best technician automatically.',
    result: 'Added £8k in monthly direct work without extra marketing spend.',
  },
  {
    title: 'Laser Clinic',
    scenario: 'Consult enquiries drop when the front desk is busy.',
    process: 'AI answers FAQs, books consults, and sends prep instructions immediately.',
    followUp: 'Team reviews same-day summaries and confirms payment details.',
    result: '40% more consult bookings with zero extra headcount.',
  },
];

const followUpSteps = [
  { title: 'Lead captured and categorised', icon: Icons.Checklist },
  { title: 'Personalised reminder sent automatically', icon: Icons.Calendar },
  { title: 'AI escalates if no response within 48 hours', icon: Icons.Shield },
  { title: 'You pick up the conversation once they reply', icon: Icons.Message },
];

const followUpStats = [
  { title: '3–7 days optimal window', icon: Icons.Clock },
  { title: '85% engagement rate', icon: Icons.Insight },
  { title: '3x conversion boost', icon: Icons.Growth },
];

const formatCurrency = (value) => `£${Math.round(value).toLocaleString()}`;

const AiFrontDesk = () => {
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min';
  const [missedCalls, setMissedCalls] = useState(10);
  const [avgJobValue, setAvgJobValue] = useState(150);
  const [conversionRate, setConversionRate] = useState(40);

  const handleCalendly = () => window.open(calendlyLink, '_blank');

  const weeklyLoss = missedCalls * (conversionRate / 100) * avgJobValue;
  const monthlyLoss = weeklyLoss * 4.33;
  const yearlyLoss = weeklyLoss * 52;

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation onCalendlyClick={handleCalendly} />
      <main className="pt-28 pb-20 space-y-16">
        <section className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <p className="text-xs tracking-[0.4em] text-premium-green uppercase">AI Front Desk</p>
          <h1 className="text-4xl sm:text-5xl font-semibold">Never Lose a Customer to a Missed Call Again</h1>
          <p className="text-lg text-text-secondary">
            Your 24/7 AI Receptionist and Call Answering Service for UK Small Businesses. Automated call handling, appointment booking,
            and missed call recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton onClick={handleCalendly}>Book Your Free AI Assessment</GlowButton>
            <GlowButton variant="secondary" onClick={handleCalendly}>
              See Live Demo
            </GlowButton>
          </div>
          <p className="text-sm text-text-tertiary">GDPR Compliant • UK-Based & Regulated • Full Setup in 2 Weeks</p>
          <p className="text-xs text-text-tertiary">Starting from £50/month (final setup depends on call volume)</p>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10">
          <Reveal className="text-center mb-6">
            <h2 className="text-2xl font-semibold">The Hidden Cost of Missed Calls</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {stats.map((item, idx) => {
              const StatIcon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  delay={idx * 0.05}
                  className="border border-brand-border rounded-2xl p-6 bg-brand-surface/70 text-center space-y-3"
                >
                  <div className="flex justify-center">
                    <StatIcon className="w-6 h-6 text-premium-green" />
                  </div>
                  <p className="text-4xl font-semibold text-premium-green">{item.value}</p>
                  <p className="mt-2 text-lg">{item.label}</p>
                  <p className="text-sm text-text-secondary">{item.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">What Your AI Receptionist Can Handle</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((capability, idx) => {
              const CapabilityIcon = capability.icon;
              return (
                <Reveal
                  key={capability.title}
                  delay={idx * 0.05}
                  className="border border-brand-border rounded-2xl p-5 bg-brand-surface/60 flex items-start gap-3 hover:-translate-y-1 transition-transform duration-300"
                >
                  <CapabilityIcon className="w-5 h-5 text-premium-green mt-0.5" />
                  <div>
                    <p className="font-semibold">{capability.title}</p>
                    <p className="text-sm text-text-secondary mt-2">Always-on support tuned to your tone, workflows, and tools.</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">How It Works</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-4">
            {workflowSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <Reveal
                  key={step.title}
                  delay={index * 0.05}
                  className="border border-brand-border rounded-2xl p-5 bg-brand-surface/60 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-text-tertiary">Step {index + 1}</p>
                    <StepIcon className="w-5 h-5 text-premium-green" />
                  </div>
                  <p className="font-semibold mt-2">{step.title}</p>
                  <p className="text-sm text-text-secondary mt-2">{step.description}</p>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <h2 className="text-2xl font-semibold">Real-World Examples</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {caseStudies.map((study) => (
              <div key={study.title} className="border border-brand-border rounded-2xl p-5 bg-brand-surface/70 space-y-3">
                <p className="text-sm text-text-tertiary uppercase tracking-wide">{study.title}</p>
                <div>
                  <p className="font-semibold">Scenario</p>
                  <p className="text-sm text-text-secondary">{study.scenario}</p>
                </div>
                <div>
                  <p className="font-semibold">AI Process</p>
                  <p className="text-sm text-text-secondary">{study.process}</p>
                </div>
                <div>
                  <p className="font-semibold">Follow-up</p>
                  <p className="text-sm text-text-secondary">{study.followUp}</p>
                </div>
                <div>
                  <p className="font-semibold">Result</p>
                  <p className="text-sm text-text-secondary">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 md:px-10 space-y-6">
          <h2 className="text-2xl font-semibold">Automated Follow-Up System</h2>
          <p className="text-text-secondary">
            The AI keeps nurturing every lead so your team only steps in when the customer is ready. No aggressive scripts—just reliable,
            polite follow-ups that feel human.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase text-text-tertiary">The Follow-Up Journey</p>
              {followUpSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <Reveal key={step.title} delay={idx * 0.05} className="border border-brand-border rounded-2xl p-4 bg-brand-surface/60 flex items-start gap-3">
                    <StepIcon className="w-5 h-5 text-premium-green mt-0.5" />
                    <p className="font-semibold">{step.title}</p>
                  </Reveal>
                );
              })}
            </div>
            <div className="space-y-3">
              {followUpStats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <Reveal key={stat.title} delay={idx * 0.05} className="border border-brand-border rounded-2xl p-4 bg-brand-surface/60">
                    <div className="flex items-center gap-3">
                      <StatIcon className="w-5 h-5 text-premium-green" />
                      <p className="font-semibold">{stat.title}</p>
                    </div>
                    <p className="text-sm text-text-secondary mt-1">Measured across current deployments.</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 md:px-10 space-y-6">
          <h2 className="text-2xl font-semibold">Revenue Loss Calculator</h2>
          <div className="border border-brand-border rounded-3xl p-6 bg-brand-surface/80 space-y-6">
            <div className="space-y-4">
              <label className="block text-sm">Missed calls per week: {missedCalls}</label>
              <input
                type="range"
                min="1"
                max="50"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full accent-premium-green"
              />
              <label className="block text-sm">Average job value (£)</label>
              <input
                type="number"
                min="50"
                max="2000"
                value={avgJobValue}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-premium-green"
              />
              <label className="block text-sm">Call conversion rate: {conversionRate}%</label>
              <input
                type="range"
                min="10"
                max="100"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-premium-green"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-brand-border rounded-2xl p-4 bg-black/30">
                <p className="text-sm text-text-tertiary">Monthly loss</p>
                <p className="text-2xl font-semibold mt-1">{formatCurrency(monthlyLoss)}</p>
              </div>
              <div className="border border-brand-border rounded-2xl p-4 bg-black/30">
                <p className="text-sm text-text-tertiary">Yearly loss</p>
                <p className="text-2xl font-semibold mt-1">{formatCurrency(yearlyLoss)}</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary">
              Industry average: UK small businesses miss 30–40% of incoming calls when owners are on the job.
            </p>
            <p className="text-xs text-text-tertiary">
              AI Front Desk investment: £50–£150/month depending on call volume and integrations.
            </p>
          </div>
        </section>

        <Reveal className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-4">
          <h2 className="text-3xl font-semibold">Ready to stop losing money?</h2>
          <p className="text-text-secondary">No pressure. Clear advice. If it's not a fit, we'll tell you.</p>
          <GlowButton onClick={handleCalendly}>Book Your Free AI Assessment</GlowButton>
        </Reveal>
      </main>
    </div>
  );
};

export default AiFrontDesk;
