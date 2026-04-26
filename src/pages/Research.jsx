import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const CALENDLY = 'https://calendly.com/rooksandcastle101/30min';
const E = [0.22, 1, 0.36, 1];

const posts = [
  {
    tag: 'AI Operations',
    title: 'Why 67% of your customers leave without a voicemail',
    desc: 'The psychology behind unanswered calls and the operational cost of the missed ring. What the data says and what you can do about it.',
    date: 'Apr 2026',
  },
  {
    tag: 'Automation',
    title: 'The 11-hour week: where small business admin time actually goes',
    desc: 'A breakdown of how the average sole trader spends their non-billable hours — and the five systems that eliminate most of it.',
    date: 'Mar 2026',
  },
  {
    tag: 'Case Study',
    title: 'How a plumber in Manchester answered 40% more calls in 2 weeks',
    desc: 'A real deployment. Real numbers. What we built, how long it took, and what changed for the business owner.',
    date: 'Feb 2026',
  },
];

const Research = () => {
  const handleCalendly = () => window.open(CALENDLY, '_blank');

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <Navigation onCalendlyClick={handleCalendly} />

      {/* Hero image strip */}
      <div className="relative overflow-hidden" style={{ height: "clamp(280px,42vw,480px)" }}>
        <img src="/media/Research/thinker.webp" alt="" aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.35) saturate(0.4)" }} />
        <div aria-hidden className="absolute inset-0"
          style={{ background: "linear-gradient(105deg, rgba(15,15,15,0.97) 0%, rgba(15,15,15,0.65) 50%, rgba(15,15,15,0.25) 100%)" }} />
        <div className="absolute inset-0 flex items-end pb-10 px-10 md:px-16">
          <div>
            <motion.p
              className="text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-3"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: E }}>
              Research
            </motion.p>
            <motion.h1
              className="text-[clamp(22px,4vw,52px)] font-black italic text-text-primary leading-tight max-w-[580px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: E, delay: 0.08 }}>
              Notes, experiments, and honest guides.
            </motion.h1>
          </div>
        </div>
      </div>

      <main className="pt-0 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-20 space-y-6">
          {posts.map((p, i) => (
            <motion.article key={p.title}
              className="group border border-brand-border rounded-2xl p-8 bg-brand-surface hover:border-premium-green/25 transition-colors duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: E, delay: i * 0.08 }}
              whileHover={{ y: -4 }}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-premium-green">{p.tag}</span>
                <span className="text-xs text-text-secondary">{p.date}</span>
              </div>
              <h2 className="text-[18px] font-bold text-text-primary mb-3 group-hover:text-white transition-colors leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {p.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
              <p className="mt-5 text-xs font-bold text-premium-green opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Coming soon →
              </p>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Research;
