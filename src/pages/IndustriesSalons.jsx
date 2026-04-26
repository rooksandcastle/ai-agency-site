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

const painPoints = [
  'Calls during peak hours go unanswered — and peak hours are when everyone wants to book',
  'No-shows waste appointment slots you could have filled',
  'Following up on enquiries means staying late or forgetting entirely',
  'A receptionist costs £25,000+ a year — not realistic for most salons',
];

const whatWeBuilt = [
  {
    title: 'AI Receptionist',
    body: `Answers calls in your salon's name. Books into your existing system. Handles common questions about pricing, availability, and services — without you or your staff having to stop.`,
  },
  {
    title: 'No-Show Reduction',
    body: 'Automated reminders go out 24 hours before every appointment. Simple to confirm or cancel. Cancellations free up the slot so you can fill it.',
  },
  {
    title: 'Rebooking & Follow-Up',
    body: 'After every appointment, a follow-up goes out. Feedback, rebooking prompt, or a loyalty offer — whatever fits your business. Clients feel looked after. You fill the diary.',
  },
];

const stages = [
  {
    step: '01',
    title: 'Discovery (Week 1)',
    body: 'We find out how you handle bookings, where enquiries fall through, and what your busiest periods look like. We map it before building anything.',
  },
  {
    step: '02',
    title: 'Build & Test (Weeks 2–3)',
    body: 'We set up the AI receptionist with your services, prices, and tone. Connect it to your booking system. Test everything with you before a single real call is handled.',
  },
  {
    step: '03',
    title: 'Live & Grow (Ongoing)',
    body: 'Go live. We monitor performance, tune responses, and report back monthly. As your business grows, the system grows with it.',
  },
];

const stats = [
  { value: '40%', label: 'Fewer no-shows with automated reminders (industry average)' },
  { value: '12+', label: 'Hours saved weekly on booking admin for a 3–5 chair salon' },
  { value: '3', label: 'Calls answered, 2 booked — while you were mid-appointment' },
];

const IndustriesSalons = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <Navigation onCalendlyClick={handleCalendly} fixed={false} />

      <main className="pt-0">
        {/* Header image */}
        <div className="relative overflow-hidden" style={{ height: "clamp(300px,44vw,520px)" }}>
          <img src="/media/Industries/Salon_1.png" alt="Salons and Personal Services"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.72) saturate(0.55)" }} />
          <div aria-hidden className="absolute bottom-0 inset-x-0 h-36"
            style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }} />
        </div>

        {/* Hero */}
        <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
            Salons & Personal Services
          </p>
          <h1
            className="text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em] text-text-primary mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
          >
            You're with a client.<br />
            The phone rings.<br />
            <span className="text-premium-green">You ignore it.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            That's the right call — your client deserves your full attention. But the person who just
            rang? They booked somewhere else. We make sure that never costs you again.
          </p>
          <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
        </section>

        {/* Reality */}
        <section className="py-16 bg-brand-surface/40 border-y border-brand-border">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              You're running back-to-back appointments. The desk is busy, you can't always get to the
              phone, and you're not about to ask a junior to start handling bookings. So calls get
              missed, slots stay empty, and you don't even know how many people tried.
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
            What's actually happening
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
              Three systems built for salons
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
              Your chair is your most valuable asset. Stop leaving it empty.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              30 minutes. No pressure. We'll show you exactly how it works for your salon.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndustriesSalons;
