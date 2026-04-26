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

const painPoints = [
  "A new enquiry comes in while you're on a client call — you see it 4 hours later and they've moved on",
  'Proposals go out, then silence. You mean to follow up but it slips',
  'Invoices sit unpaid because sending reminders feels awkward',
  "You want to look professional and responsive — but there's only one of you",
];

const whatWeBuilt = [
  {
    title: 'Instant Enquiry Response',
    body: 'New enquiry hits your inbox or phone — an immediate, professional response goes back. Not a generic autoresponder. A contextual message that buys you time and keeps the lead warm.',
  },
  {
    title: 'Proposal & Quote Follow-Up',
    body: 'Sent a proposal and heard nothing? A timed follow-up sequence goes out automatically — professional, not pushy. You get notified the moment they respond.',
  },
  {
    title: 'Invoice & Payment Automation',
    body: 'Invoice sent. Reminder scheduled. You get paid on time without having to chase or have the conversation.',
  },
];

const stages = [
  {
    step: '01',
    title: 'Workflow Review (Week 1)',
    body: `We look at your current enquiry and client journey. Where do leads go cold? Where are invoices getting stuck? Where are you spending time you shouldn't be?`,
  },
  {
    step: '02',
    title: 'Build (Weeks 2–3)',
    body: 'We build the automations around your existing tools — your email, calendar, or invoicing software. You review and approve everything before it touches a real client.',
  },
  {
    step: '03',
    title: 'Run & Refine (Ongoing)',
    body: 'The system runs in the background. You focus on clients. We check in monthly, adjust what needs adjusting, and make sure nothing falls through.',
  },
];

const stats = [
  { value: '< 1 min', label: 'Average response time to new enquiries (automated)' },
  { value: '80%', label: 'Of deals require 5+ follow-ups — most consultants send 1' },
  { value: '1 in 4', label: 'Invoices are paid late without automated reminders' },
];

const IndustriesConsultants = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <SEO title="AI for Consultants & Self-Employed | Rooks & Castle" description="You can't be doing the work and chasing it at the same time. We automate enquiry responses, proposal follow-ups, and invoice reminders." path="/industries/consultants" />
      <Navigation onCalendlyClick={handleCalendly} fixed={false} />

      <main className="pt-0">
        {/* Header image */}
        <div className="relative overflow-hidden" style={{ height: "clamp(300px,44vw,520px)" }}>
          <img src="/media/Industries/Consultant_1.png" alt="Consultants and Professionals"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.72) saturate(0.55)" }} />
          <div aria-hidden className="absolute bottom-0 inset-x-0 h-36"
            style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }} />
        </div>

        {/* Hero */}
        <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
            Consultants & Self-Employed
          </p>
          <h1
            className="text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em] text-text-primary mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
          >
            You can't be doing the work<br />
            <span className="text-premium-green">and chasing it at the same time.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            When you're heads-down on a client, the next client isn't getting a response. Slow replies,
            missed enquiries, and late invoices are costing you more than you think. We sort that.
          </p>
          <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
        </section>

        {/* Reality */}
        <section className="py-16 bg-brand-surface/40 border-y border-brand-border">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              You're good at what you do. But you're also the salesperson, the admin team, and the
              accounts department. Enquiries come in at the wrong time. Invoices go out late.
              Follow-ups don't happen. You end up working evenings not on your craft — but on the
              stuff around it.
            </p>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">The reality</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What's eating your time
          </h2>
          <ul className="space-y-4">
            {painPoints.map((p) => (
              <li key={p} className="flex gap-3 items-start text-text-secondary">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-premium-green flex-shrink-0" />
                <span className="text-base leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* What we build */}
        <section className="py-20 bg-brand-surface/30">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">What we build</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-12"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Three systems for sole operators
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whatWeBuilt.map((f) => (
                <div key={f.title} className="bg-brand-surface border border-brand-border rounded-2xl p-7">
                  <h3 className="text-lg font-bold text-text-primary mb-3">{f.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">The process</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            How we get you set up
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((s, idx) => (
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
        </section>

        {/* Stats */}
        <section className="py-20 bg-brand-surface/40 border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="text-4xl font-extrabold text-premium-green mb-2">{s.value}</div>
                <p className="text-sm text-text-secondary leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              You didn't go self-employed to spend your evenings chasing people.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              30 minutes. No pressure. We'll show you exactly where time is slipping and what we'd automate first.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndustriesConsultants;
