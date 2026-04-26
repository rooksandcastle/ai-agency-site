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
  `You're on a job and a customer rings about an emergency — they move on before you can call back`,
  `You're spending evenings writing quotes that never get followed up`,
  `You miss calls at 7am and 7pm because that's when customers actually ring`,
  'You rely on lead platforms that take 10–15% and send you price-shopping customers',
];

const whatWeBuilt = [
  {
    title: 'AI Front Desk',
    body: 'Answers every call in your name. Takes job details, captures urgency, books you in, and texts you a summary. Works 24/7 including weekends.',
  },
  {
    title: 'Quote & Invoice Automation',
    body: `Job done — invoice goes out. No chasing, no late nights. Automatic reminders follow if payment doesn't arrive on time.`,
  },
  {
    title: 'Smart Follow-Up',
    body: 'Enquiry went cold? The system sends a professional follow-up at the right time. You close more jobs without lifting a finger.',
  },
];

const stages = [
  {
    step: '01',
    title: 'Audit (Week 1)',
    body: 'We look at how calls and enquiries currently reach you, where jobs are being lost, and what your busiest hours are. Free, no obligation.',
  },
  {
    step: '02',
    title: 'Build (Weeks 2–3)',
    body: 'We set up your AI with your exact services, hours, and tone. We build quote and follow-up automations. You test everything before it goes live.',
  },
  {
    step: '03',
    title: 'Live + Optimise (Ongoing)',
    body: `Your system goes live. We monitor calls, refine responses, and tune performance monthly. You get a regular summary of what it's doing for your business.`,
  },
];

const stats = [
  { value: '67%', label: "Of callers won't leave a voicemail — they ring the next person" },
  { value: '£1,500+', label: 'Lost weekly for a typical trades business from missed calls' },
  { value: '2–3w', label: 'Typical setup time from first call to going live' },
];

const IndustriesTrades = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <SEO title="AI for Trades & Home Services | Rooks & Castle" description="You can't answer the phone when you're under a sink. We make sure every call is captured, every job followed up, and every invoice gets paid." path="/industries/trades" />
      <Navigation onCalendlyClick={handleCalendly} fixed={false} />

      <main className="pt-0">
        {/* Header image */}
        <div className="relative overflow-hidden" style={{ height: "clamp(300px,44vw,520px)" }}>
          <img src="/media/Industries/Trades_1.png" alt="Trades and Home Services"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.72) saturate(0.55)" }} />
          <div aria-hidden className="absolute bottom-0 inset-x-0 h-36"
            style={{ background: "linear-gradient(to top, #0F0F0F 0%, transparent 100%)" }} />
        </div>

        {/* Hero */}
        <section className="py-20 md:py-28 max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-4">
            Trades & Home Services
          </p>
          <h1
            className="text-[clamp(40px,6vw,80px)] leading-[1] tracking-[-0.03em] text-text-primary mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
          >
            You can't answer the phone<br />
            <span className="text-premium-green">when you're under a sink.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
            But your next customer doesn't know that. They call once, hear a voicemail, and ring
            someone who picks up. We make sure that doesn't happen.
          </p>
          <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
        </section>

        {/* Reality */}
        <section className="py-16 bg-brand-surface/40 border-y border-brand-border">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              You're good at the job. The van's full, the diary's busy, you're earning. But every day
              you miss 2 or 3 calls you never know about. At £150 a job, that's £300–£450 walking out
              the door — every single day.
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
              Three systems built for trades
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
              Your competitors are missing these calls too. Be the one who answers.
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              30 minutes. No pressure. We'll show you exactly how it works for your trade.
            </p>
            <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndustriesTrades;
