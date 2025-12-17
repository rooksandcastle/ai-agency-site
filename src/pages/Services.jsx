import React from 'react';
import Navigation from '../components/Navigation';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import { Icons } from '../icons';

const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => (
  <GlowButton variant={variant} onClick={onClick} className={className}>
    {children}
  </GlowButton>
);

const featuredAiService = {
  label: 'FEATURED AI SERVICE',
  title: 'AI Front Desk (AI Receptionist)',
  headline: 'Never lose a customer to a missed call again.',
};

const serviceBlocks = [
  {
  title: 'Foundation & Digital Presence',
  icon: Icons.Strategy,
    cta: 'Discuss your foundation →',
    bullets: [
      'Website Development (a site designed to turn visitors into booked clients)',
      'AI Strategy Session (a 90-minute plan to find the fastest cash-producing AI opportunities)',
      'Getting listed on Google Business, Yelp and other directories (making sure local customers find you first)',
      'Online Business Checkup (a simple audit to make sure your website is fast and search engines like it)',
      'Appointment and Booking Management (setting up the system to take bookings 24/7)',
      'Legal & Privacy Shield (ensuring your digital presence meets all privacy rules so you avoid fines and build trust)',
    ],
  },
  {
    title: 'Growth & Customer Acquisition',
    icon: Icons.Growth,
    cta: 'Discuss your growth →',
    bullets: [
      'AI Lead Generation (running targeted online ads that send ready-to-buy customers straight to your sales agent)',
      'Lead Magnet Setup (automating the giveaway of a free guide or tip sheet to collect emails and start selling)',
      'AI Social Media Content (content that keeps your social pages active and engaged without you lifting a finger)',
      "Automated Follow-Up (sending a sequence of emails/texts to leads that didn't book immediately, pulling them back to your sales agent)",
    ],
  },
  {
    title: 'Intelligent Operations & Efficiency',
    icon: Icons.Operations,
    cta: 'Discuss your operations →',
    bullets: [
      'AI Sales Assistant (an agent that calls your old customers with special offers to reactivate them and bring in quick cash)',
      'Automated Quoting/Proposal Generator (saving your staff hours by drafting accurate job quotes based on customer input)',
      "Business Analytics Dashboard (a simple screen that shows you exactly where your profit is coming from and where you're wasting money)",
      'Staff Productivity Snapshot (seeing who on your team is performing best and where your bottlenecks are, all in one easy view)',
      'Google Review Agent (a smart system that asks happy customers for a 5-star review, boosting your online reputation automatically)',
      'Internal AI Help Desk (giving your staff instant, accurate answers to complex questions by training an AI on all your manuals and documents)',
    ],
  },
];

const SolutionsOverview = () => {
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min';

  const handleCalendly = () => {
    window.open(calendlyLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation onCalendlyClick={handleCalendly} />
      <main className="pt-24 pb-16">
        <section className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-5 mb-14">
          <Reveal>
            <h1 className="text-4xl sm:text-[46px] font-bold leading-tight">Services built for busy owners</h1>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto">
              We handle the tech and marketing setup end-to-end — you focus on the work.
            </p>
            <CTAButton onClick={handleCalendly} className="inline-flex justify-center">
              Book a free consultation
            </CTAButton>
          </Reveal>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
          <Reveal className="bg-brand-surface/80 border border-premium-green/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-4">
              <Icons.Call className="w-8 h-8 text-premium-green" />
              <div className="text-left">
                <p className="text-xs tracking-[0.4em] uppercase text-premium-green">{featuredAiService.label}</p>
                <h3 className="text-2xl font-semibold text-white mt-1">{featuredAiService.title}</h3>
                <p className="text-sm text-text-secondary mt-2">
                  {featuredAiService.headline} Learn how it works for your business in our detailed overview.
                </p>
              </div>
            </div>
            <CTAButton variant="secondary" onClick={() => window.location.assign('/ai-front-desk')}>
              View AI Front Desk
            </CTAButton>
          </Reveal>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Three simple systems</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceBlocks.map((system, idx) => {
              const ServiceIcon = system.icon;
              return (
                <Reveal
                  key={system.title}
                  delay={idx * 0.05}
                  className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-center gap-3 text-premium-green mb-3">
                    <ServiceIcon className="w-5 h-5 text-premium-green" />
                    <p className="text-xs tracking-[0.35em] uppercase text-white/60">{system.title}</p>
                  </div>
                <ul className="text-text-secondary text-sm space-y-2 flex-1">
                  {system.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleCalendly}
                  className="mt-5 text-sm font-semibold text-premium-green hover:text-premium-green-light transition-colors inline-flex items-center gap-2"
                >
                  {system.cta}
                </button>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 md:px-10 mt-16 bg-brand-surface/80 border border-brand-border rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Not sure where to start?</h3>
          <p className="text-text-secondary mb-6">
            Book a free consultation and we'll recommend the simplest next step.
          </p>
          <CTAButton onClick={handleCalendly}>Book a free consultation</CTAButton>
        </section>
      </main>
    </div>
  );
};

export default SolutionsOverview;
