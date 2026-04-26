import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

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
  { value: '80%', label: 'Of sales need 5+ follow-ups — most businesses give up after 1' },
  { value: '60–90', label: 'Days is the window where past customers would rebook — if someone reached out' },
  { value: '1 in 4', label: "Invoices are paid late when there's no automatic reminder" },
];

const features = [
  {
    title: 'Enquiry follow-up',
    body: 'Someone asked for a quote and went silent. The system sends a timely, professional message — by SMS or email — without you having to remember.',
  },
  {
    title: 'Payment reminders',
    body: 'Invoice overdue? Reminders go out automatically, at the right intervals, in your tone. No awkward conversations needed.',
  },
  {
    title: 'Win back past customers',
    body: `We identify customers who haven't come back and send them a re-engagement message at exactly the right moment.`,
  },
];

const steps = [
  {
    step: '01',
    title: 'We identify the gaps',
    body: 'Where are you losing people? After the first enquiry? After the quote? After the job? We map it out before building anything.',
  },
  {
    step: '02',
    title: 'We build the sequences',
    body: 'Timed messages, personalised to each stage of the customer journey. Tested before anything goes live.',
  },
  {
    step: '03',
    title: 'It runs itself',
    body: 'You get notified when someone responds. Everything else is handled. More conversions, less chasing.',
  },
];

const whoFor = [
  `Anyone who's ever lost a job because they forgot to follow up`,
  'Businesses with invoices that take weeks to get paid',
  `Service providers with past customers who've gone quiet`,
];

const SmartFollowUp = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-0">
        {/* Hero — image behind the text */}
        <section className="relative overflow-hidden">
          <img src="/media/Services/Smart%20Follow%20up.webp" alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.28) saturate(0.35)" }} />
          <div aria-hidden className="absolute inset-0" style={{ background: "rgba(10,10,10,0.45)" }} />
          <div aria-hidden className="absolute bottom-0 inset-x-0 h-40"
            style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }} />
          <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center pt-28 md:pt-36 pb-20 md:pb-28">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
              Smart Follow-Up
            </p>
            <h1
              className="text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em] text-text-primary mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
            >
              Stop chasing.<br />
              <span className="text-premium-green">Start closing.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
              Most jobs are lost not because of the service — but because no one followed up.
              We build automated sequences that chase leads, send reminders, and re-engage past customers.
              You focus on delivery.
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
            Three follow-up systems that run themselves
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
              We build it. It runs. You close.
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
            If you've ever said "I meant to follow up"
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
              The job you lost last week — someone else didn't follow up either.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              30 minutes. No pressure. We`ll map exactly where you're losing customers and what we`d automate first.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SmartFollowUp;
