import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useEffect, useRef } from "react";


const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base =
    'px-6 py-3 rounded-[16px] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premium-green focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg';
  const styles =
    variant === 'secondary'
      ? 'border border-white/15 text-white/80 bg-transparent hover:border-premium-green/60 hover:text-white'
      : 'bg-green-gradient text-gray-900 shadow-[0_18px_40px_-22px_rgba(34,197,94,0.85)] hover:shadow-[0_25px_55px_-25px_rgba(34,197,94,0.9)]';

  return (
    <motion.button
      className={`${base} ${styles} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

const sectionWrapper = 'py-10 sm:py-12';

const CallCaptureHome = () => {
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min';
  const ambientVideoRef = useRef(null);

  const handleCalendly = () => {
    window.open(calendlyLink, '_blank');
  };

  const handleBookRoute = () => {
    window.location.href = '/book';
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 0);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const videoEl = ambientVideoRef.current;
    if (!videoEl) return;

    const tryPlay = () => {
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    };

    tryPlay();

    const handleInteraction = () => {
      tryPlay();
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const services = [
    {
      title: 'Get Found',
      subtitle: 'Make it obvious and easy to contact you',
      cta: 'Discuss your foundation →',
      bullet: [
        'Website or landing page designed to convert',
        'Professional domain, email, and contact routes',
        'Google Business Profile, Yelp, and local directories set up correctly',
        'On-page SEO and schema basics for service businesses',
      ],
    },
    {
      title: 'Get Leads',
      subtitle: 'Generate and capture enquiries consistently',
      cta: 'Discuss your growth →',
      bullet: [
        'Local and targeted lead generation campaigns',
        'Landing pages optimised for calls and quote requests',
        'Call, form, and quote capture tied into a simple CRM pipeline',
        "Follow-up and reminders so enquiries don't go cold",
      ],
    },
    {
      title: 'Run Smoothly',
      subtitle: 'Automate the "busy work" with AI',
      cta: 'Discuss your operations →',
      bullet: [
        'AI voice and chat options for missed calls and website visitors',
        'Auto replies, reminders, and quote/booking workflows',
        'Lead qualification, routing, and notifications for you and your team',
        'Insanely practical ops automation that removes admin bottlenecks',
      ],
    },
  ];

  const aiFrontDeskTeaser = {
    title: 'AI Front Desk (AI Receptionist)',
    description: 'A dedicated 24/7 AI receptionist that answers calls, books appointments, and recovers missed enquiries for UK service businesses.',
  };

  const steps = [
    {
      title: 'Free consultation',
      description: '15-minute call where we learn how you get work today, what blockers you have, and what outcome you want.',
    },
    {
      title: 'We build the system',
      description: 'We set up your website, listings, lead capture, and automations end-to-end. You review, we refine, then launch.',
    },
    {
      title: 'We improve it',
      description: 'We monitor, tweak, and support your system as enquiries come in so you keep getting results.',
    },
  ];

  const faqs = [
    {
      q: 'Do I need to understand SEO or AI?',
      a: 'No. We set everything up and explain it in plain English, so you focus on running the business.',
    },
    {
      q: 'What kind of businesses do you help?',
      a: 'HVAC, trades, dental and private clinics, estate agents, consultants, and other service businesses that rely on enquiries.',
    },
    {
      q: 'How fast can we get results?',
      a: 'Most clients have their website, listings, and capture systems live within a few weeks.',
    },
    {
      q: 'Can you work with our existing tools?',
      a: 'Yes. We integrate with CRMs, phones, and booking tools you already use—or recommend simple ones if you prefer.',
    },
    {
      q: 'Is there a long-term contract?',
      a: 'No long-term lock-in. We stay on only if the systems keep delivering value.',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation onCalendlyClick={handleCalendly} />
      <main className="pt-0">
        <section
          id="home"
          className={`${sectionWrapper} hero-noise relative overflow-hidden min-h-[70vh]`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-gray-900 to-brand-bg" aria-hidden="true"></div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[620px] bg-gradient-to-b from-premium-green/20 via-transparent to-brand-bg blur-[220px]" aria-hidden="true"></div>
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-brand-bg via-transparent to-transparent" aria-hidden="true"></div>
          <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-14 flex items-center min-h-[70vh]">
            <div className="grid md:grid-cols-12 gap-10 items-start w-full">
              <motion.div
                className="md:col-span-7 xl:col-span-6 space-y-6 text-center md:text-left"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-premium-green uppercase">
                  SYSTEMS FOR REAL-WORLD SERVICE BUSINESSES
                </p>
                <h1 className="text-[36px] sm:text-[46px] lg:text-[54px] font-semibold leading-tight text-white/95 tracking-tight">
                  Automations that helps small businesses
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-premium-green via-premium-green-light to-white">
                    get found, get chosen, and get paid.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-white/70 max-w-2xl md:max-w-xl mx-auto md:mx-0 leading-relaxed md:leading-[1.9]">
                  We set up your website, automate social media marketing, local SEO listings, lead capture, and AI automation — so customers reach you fast and you look professional.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-start gap-4 sm:gap-5">
                  <CTAButton onClick={handleCalendly} className="shadow-[0_25px_60px_-30px_rgba(34,197,94,0.8)]">
                    Book a free consultation
                  </CTAButton>
                  <CTAButton variant="secondary" onClick={() => scrollToSection('services')} className="backdrop-blur-sm">
                    See what we do
                  </CTAButton>
                </div>
              </motion.div>

              <motion.div
                className="md:col-span-5 xl:col-span-6 w-full"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              >
                <div className="relative rounded-[32px] bg-white/5 backdrop-blur-2xl p-1 sm:p-2 shadow-[0_45px_90px_-60px_rgba(7,255,176,0.65)]">
                  <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] rounded-[28px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-[28px] overflow-hidden"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.02 }}
                      transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                    >
                      <video
                        ref={ambientVideoRef}
                        className="h-full w-full object-cover rounded-[28px]"
                        src="/video/claude_login.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={{ filter: 'saturate(1.05) contrast(1.05)' }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="services" className={`${sectionWrapper} bg-gray-900/30`}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">What we do</h2>
              <p className="text-text-secondary max-w-3xl mx-auto">
                We build the only three systems a service business needs: be found, be trusted, and respond faster than the competition.
              </p>
            </div>
            <div className="mb-8">
              <div className="bg-brand-surface/70 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-text-tertiary uppercase tracking-wide">Featured system</p>
                  <h3 className="text-2xl font-semibold text-white mt-1">{aiFrontDeskTeaser.title}</h3>
                  <p className="text-sm text-text-secondary mt-2 max-w-2xl">{aiFrontDeskTeaser.description}</p>
                </div>
                <a
                  href="/ai-front-desk"
                  className="px-5 py-3 border border-premium-green/40 rounded-xl text-sm font-semibold text-premium-green hover:text-premium-green-light hover:border-premium-green transition-colors text-center"
                >
                  View AI Front Desk →
                </a>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  className="bg-brand-surface/70 border border-white/5 rounded-2xl p-6 flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-premium-green text-sm font-semibold mb-2">{service.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <ul className="text-sm text-text-secondary space-y-2 flex-1">
                    {service.bullet.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    variant="secondary"
                    className="mt-5 text-sm self-start"
                    onClick={handleBookRoute}
                  >
                    {service.cta}
                  </CTAButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className={sectionWrapper}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Who it's for (and not for)</h2>
              <p className="text-text-secondary max-w-3xl mx-auto">
                We're built for small and medium-sized service businesses who need customers to call, enquire, or book. If you want a
                slick website or a one-off marketing trick, this isn't it.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: 'Best for',
                  color: 'text-premium-green',
                  border: 'border-premium-green/40',
                  items: [
                    'Busy owners who need direct leads instead of subcontracting work',
                    "Teams missing calls because they're on the tools or in appointments",
                    'Service businesses that want systems, not just campaigns',
                  ],
                },
                {
                  title: 'Not for',
                  color: 'text-red-300',
                  border: 'border-red-500/40',
                  items: [
                    'People looking for a "quick hack" or a one-off marketing stunt',
                    'Businesses unwilling to follow up enquiries or invest in systems',
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="bg-brand-surface/60 border border-white/5 rounded-2xl p-6"
                >
                  <div className="text-xs text-text-tertiary uppercase tracking-wide mb-3">
                    {block.title === 'Best for' ? 'Ideal fit' : 'Important note'}
                  </div>
                  <h3 className={`text-2xl font-semibold mb-4 ${block.color}`}>{block.title}</h3>
                  <ul className="text-text-secondary space-y-3 text-sm leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className={`w-1.5 h-1.5 mt-2 rounded-full ${block.title === 'Best for' ? 'bg-premium-green' : 'bg-red-400'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className={`${sectionWrapper} bg-gray-900/30`}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">How it works</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              We run a calm, structured process. No templates, no jargon, no surprises.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div key={step.title} className="border border-white/5 rounded-2xl p-6 bg-brand-surface/60" whileHover={{ y: -4 }}>
                <div className="text-sm font-semibold text-premium-green mb-2">Step {idx + 1}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="faqs" className={sectionWrapper}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">FAQs</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">Short answers to common questions.</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-white/5 rounded-2xl p-6 bg-brand-surface/60">
                  <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-text-secondary">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={`${sectionWrapper} bg-gray-900/30`}>
          <div className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-4">
            <h2 className="text-3xl font-bold">About Rooks & Castle</h2>
            <p className="text-text-secondary text-sm max-w-3xl mx-auto">
              We're a UK-based AI systems team for service businesses that don't have time (or patience) for jargon-heavy agencies.
              You get practical build-outs, clear documentation, and systems your team can actually run with.
            </p>
            <p className="text-text-secondary text-sm max-w-3xl mx-auto">
              Built for plumbers, HVAC, clinics, property pros, consultants, and anyone who needs enquiries managed with zero drama.
            </p>
          </div>
        </section>

        <section className={sectionWrapper}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="max-w-4xl mx-auto text-center bg-brand-surface/75 border border-white/5 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold mb-4">Let's set your business up properly.</h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Book a free consultation and we'll recommend the simplest setup to help you get found, capture enquiries, and look more professional online.
            </p>
            <CTAButton onClick={handleCalendly}>Book a free consultation</CTAButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CallCaptureHome;
