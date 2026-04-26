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
  { value: '67%', label: "Of callers won't leave a voicemail — they ring someone else" },
  { value: '£150', label: 'Average job value — 10 missed calls is £1,500 gone' },
  { value: '40%', label: 'Of calls to trades businesses go unanswered during working hours' },
];

const whatItDoes = [
  {
    title: 'Answers every call',
    body: 'Day, night, weekend. No voicemail. No missed opportunity. Your AI picks up with your name, your tone, your script.',
  },
  {
    title: 'Books the appointment',
    body: 'It checks your calendar, offers available slots, and confirms the booking — without you touching your phone.',
  },
  {
    title: 'Keeps you in the loop',
    body: 'The moment a call ends, you get a text summary. Name, number, what they need, how urgent. You stay in control.',
  },
];

const steps = [
  {
    step: '01',
    title: 'We set it up',
    body: 'We learn your business: your services, your hours, your most common questions. We build and test the system. You approve it.',
  },
  {
    step: '02',
    title: 'You go live',
    body: 'Calls forward to your AI. It answers, handles the conversation, and books or takes a message. You get a summary every time.',
  },
  {
    step: '03',
    title: 'We keep it sharp',
    body: `We monitor how it performs, update responses, and tune it as your business grows. You're never left to figure it out alone.`,
  },
];

const whoFor = [
  `Sole traders and small teams who can't always answer the phone`,
  'Service businesses where every missed call is a missed job',
  `Anyone paying for leads they can't convert because no one picks up`,
];

const AiFrontDesk = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <SEO title="R&C — AI Front Desk" description="Never miss another customer. Our AI answers calls, books appointments, and captures leads 24/7 — built for small businesses." path="/services/ai-front-desk" />
      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-0">
        {/* Hero — image behind the text */}
        <section className="relative overflow-hidden">
          <img src="/media/Services/AI%20FRONT%20DESK%20HEADER.jpg" alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.28) saturate(0.35)" }} />
          <div aria-hidden className="absolute inset-0" style={{ background: "rgba(10,10,10,0.45)" }} />
          <div aria-hidden className="absolute bottom-0 inset-x-0 h-40"
            style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }} />
          <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center pt-28 md:pt-36 pb-20 md:pb-28">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
              AI Front Desk
            </p>
            <h1
              className="text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em] text-text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
            >
              Every call answered.<br />
              <span className="text-premium-green">Every enquiry captured.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              When you're on the job, with a client, or just done for the day — your phone keeps working.
              Our AI answers calls, takes details, and books directly into your calendar.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>

        {/* Stats strip */}
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

        {/* What it does */}
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">What it does</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your phone never stops working
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whatItDoes.map((f) => (
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
              Live in 2–3 weeks. Managed after that.
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
            Built for businesses that can't afford to miss a call
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
              Your business shouldn't go quiet at 5pm.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              30 minutes. No pressure. We`ll tell you exactly what you'd get and whether it`s right for your business.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AiFrontDesk;
