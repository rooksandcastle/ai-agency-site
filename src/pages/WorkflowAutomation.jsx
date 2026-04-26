import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SEO from "../components/SEO";
const CALENDLY = 'https://calendly.com/rooksandcastle101/30min';

const CTAButton = ({ children, onClick, className = '' }) => (
  <motion.button
    className={`px-6 py-3 rounded-full font-semibold bg-green-gradient text-gray-900 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.85)] hover:shadow-[0_25px_55px_-25px_rgba(16,185,129,0.9)] transition-all duration-200 ${className}`}
    onClick={onClick}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.97 }}
  >
    {children}
  </motion.button>
);

const stats = [
  { value: '11hrs', label: 'Average weekly admin for small business owners' },
  { value: '30%', label: 'Of quotes never get followed up — no time' },
  { value: '1 in 4', label: 'Invoices paid late without automatic reminders' },
];

const features = [
  {
    title: 'Quotes and invoices, sent automatically',
    body: `Job finished? Quote or invoice goes out without you having to remember. Reminders follow if payment doesn't arrive.`,
  },
  {
    title: 'Lead follow-up on autopilot',
    body: `Someone enquired but went quiet? The system chases them — professionally, at the right time — so you don't have to.`,
  },
  {
    title: 'Your tools, connected',
    body: 'We plug into what you already use: your calendar, your CRM, your inbox. No new software to learn unless you need it.',
  },
];

const steps = [
  {
    step: '01',
    title: 'We map your workflow',
    body: 'We look at where your time goes and where things fall through the gaps. Quoting, chasing, invoicing, confirming — we spot what to automate first.',
  },
  {
    step: '02',
    title: 'We build and connect',
    body: 'We set up the automations and link them to your existing tools. You test it, we refine it, then we go live.',
  },
  {
    step: '03',
    title: 'It runs in the background',
    body: 'Once live, it just works. You get notified when something needs your attention. Everything else handles itself.',
  },
];

const whoFor = [
  'Tradespeople spending evenings on quotes and invoices',
  'Service businesses with leads that go cold because follow-up is manual',
  'Self-employed professionals who want to look bigger than they are',
];

const WorkflowAutomation = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <SEO title="Workflow Automation | Rooks & Castle" description="The admin that eats your evenings — automated. Quotes, invoices, scheduling, and follow-ups that run themselves." path="/services/workflow-automation" />
      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-0">
        {/* Hero — image behind the text */}
        <section className="relative overflow-hidden">
          <img src="/media/Services/Workflow%20Automation.webp" alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.28) saturate(0.35)" }} />
          <div aria-hidden className="absolute inset-0" style={{ background: "rgba(10,10,10,0.45)" }} />
          <div aria-hidden className="absolute bottom-0 inset-x-0 h-40"
            style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }} />
          <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center pt-28 md:pt-36 pb-20 md:pb-28">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
              Workflow Automation
            </p>
            <h1
              className="text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em] text-text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
            >
              Stop doing the same<br />
              <span className="text-premium-green">admin tasks twice.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Quotes, invoices, reminders, lead follow-ups — the things eating your evenings.
              We build the systems that handle them automatically, so you can focus on actual work.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-brand-surface/40 border-y border-brand-border py-14">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="text-4xl font-extrabold text-premium-green mb-2">{s.value}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">What it does</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Admin that handles itself
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                <h3 className="text-lg font-bold text-text-primary mb-3">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-brand-surface/30">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">How it works</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-12"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three steps to running on autopilot
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s, idx) => (
                <motion.div
                  key={s.step}
                  className="bg-brand-surface border border-brand-border rounded-2xl p-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="text-4xl font-bold text-premium-green/20 leading-none mb-5 select-none">{s.step}</div>
                  <h3 className="text-lg font-bold text-text-primary mb-3">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">Who it's for</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Built for people doing everything themselves
          </h2>
          <ul className="space-y-4">
            {whoFor.map((item) => (
              <li key={item} className="flex gap-3 items-start text-text-secondary">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-premium-green flex-shrink-0" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-brand-surface/30">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The admin isn't going to do itself.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              We'll show you exactly where your time is going and what we'd automate first.
              30 minutes. No pressure.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WorkflowAutomation;
