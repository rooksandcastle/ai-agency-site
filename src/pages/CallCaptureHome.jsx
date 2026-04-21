import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";

// ---------------------------------------------------------------------------
// Reusable button component
// ---------------------------------------------------------------------------
const CTAButton = ({ children, variant = "primary", onClick, className = "" }) => {
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premium-green focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";
  const styles =
    variant === "secondary"
      ? "border border-white/20 text-white/80 bg-transparent hover:border-premium-green/60 hover:text-white"
      : "bg-green-gradient text-gray-900 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.85)] hover:shadow-[0_25px_55px_-25px_rgba(16,185,129,0.9)]";

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

// ---------------------------------------------------------------------------
// Static layout constants
// ---------------------------------------------------------------------------
const sectionWrapper = "py-16 sm:py-20";

const stats = [
  { value: "24/7", label: "AI coverage" },
  { value: "95%", label: "Team adoption" },
  { value: "15h+", label: "Saved weekly" },
  { value: "2–6w", label: "Time to live" },
];

const services = [
  {
    number: "01",
    title: "AI Front Desk",
    subtitle: "24/7 Phone Coverage",
    features: [
      "Answers every inbound call, day or night",
      "Books appointments directly into your calendar",
      "Qualifies leads and routes urgent calls to your team",
      "Recovers missed enquiries with automatic follow-up",
    ],
    cta: "Learn more →",
    href: "/ai-front-desk",
  },
  {
    number: "02",
    title: "Workflow Automation",
    subtitle: "Operations on Autopilot",
    features: [
      "Auto-replies, reminders, and quote workflows",
      "Lead qualification, routing, and team notifications",
      "CRM integration with your existing tools",
      "Admin bottleneck removal so your team stays focused",
    ],
    cta: "Learn more →",
    href: "/solutions/systems",
  },
  {
    number: "03",
    title: "Property Co-hosting",
    subtitle: "Short-Let Management",
    features: [
      "Guest communication handled around the clock",
      "Automated check-in instructions and key handover",
      "Dynamic pricing and listing optimisation",
      "Maintenance co-ordination and review management",
    ],
    cta: "Learn more →",
    href: "/industries/property",
  },
];

const steps = [
  {
    step: "01",
    title: "Free strategy call",
    description:
      "A focused 30-minute session to understand how you currently handle calls, where leads are slipping away, and what outcome matters most to you.",
  },
  {
    step: "02",
    title: "We build the system",
    description:
      "We configure your AI front desk, automations, and integrations end-to-end. You review each stage, we refine, then we go live together.",
  },
  {
    step: "03",
    title: "We keep it sharp",
    description:
      "We monitor performance, tune responses, and support your team as your business grows — so the system keeps delivering results long-term.",
  },
];

const faqs = [
  {
    q: "Will it actually answer like a real person?",
    a: "Yes. The AI is trained on your business, uses your tone, and handles the most common call scenarios without sounding robotic. Most callers can't tell the difference.",
  },
  {
    q: "What happens to calls the AI can't handle?",
    a: "It escalates to a real team member or takes a message with the caller's details. No call is dropped or left without a response.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within 2–6 weeks. The timeline depends on the complexity of your call flows and how many integrations we connect.",
  },
  {
    q: "Can it work with our existing booking or CRM system?",
    a: "Yes. We integrate with the tools you already use — or recommend simple, proven alternatives if you're starting from scratch.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No lock-in. We earn your business month to month because the system keeps delivering value, not because of a contract.",
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
const CallCaptureHome = () => {
  const calendlyLink = "https://calendly.com/rooksandcastle101/30min";
  const ambientVideoRef = useRef(null);
  const location = useLocation();

  const handleCalendly = () => {
    window.open(calendlyLink, "_blank");
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to hash on navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [location.hash]);

  // Robust ambient video autoplay
  useEffect(() => {
    const videoEl = ambientVideoRef.current;
    if (!videoEl) return;

    const tryPlay = () => {
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    tryPlay();

    const handleInteraction = () => {
      tryPlay();
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body">
      <Navigation onCalendlyClick={handleCalendly} />

      <main className="pt-0">
        {/* ================================================================
            HERO SECTION
        ================================================================ */}
        <section
          id="home"
          className="relative overflow-hidden min-h-screen flex items-center"
          style={{ background: "#0F0F0F" }}
        >
          {/* Radial green gradient blob */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 40%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
            {/* subtle top vignette */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-brand-bg via-transparent to-transparent" />
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* ── Left column ── */}
              <motion.div
                className="md:col-span-6 space-y-8"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Eyebrow badge */}
                <div className="inline-flex items-center gap-2.5 bg-premium-green/10 border border-premium-green/25 rounded-full px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-premium-green" />
                  </span>
                  <span className="text-premium-green text-xs font-semibold tracking-wide">
                    Out-of-hours AI coverage
                  </span>
                </div>

                {/* Display headline — Playfair Display */}
                <h1
                  className="text-[42px] sm:text-[54px] lg:text-[64px] leading-[1.1] tracking-tight text-text-primary"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Never miss another
                  <br />
                  <span className="text-premium-green">customer</span>
                </h1>

                {/* Sub-headline — Manrope light */}
                <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed max-w-md">
                  Even when you can't answer — your AI front desk captures
                  every call, qualifies every lead, and books every appointment.
                </p>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton onClick={() => scrollToSection("how-it-works")}>
                    See how it works
                  </CTAButton>
                  <CTAButton variant="secondary" onClick={handleCalendly}>
                    Book free strategy call
                  </CTAButton>
                </div>

                {/* Stats bar */}
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-2 border-t border-white/8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-0.5">
                      <span className="text-2xl font-bold text-premium-green leading-none">
                        {stat.value}
                      </span>
                      <span className="text-xs text-text-secondary tracking-wide">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── Right column — ambient video card ── */}
              <motion.div
                className="md:col-span-6 w-full"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
              >
                <div className="relative rounded-[32px] bg-white/5 backdrop-blur-2xl p-1.5 shadow-[0_45px_90px_-60px_rgba(16,185,129,0.55)]">
                  <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] rounded-[28px] overflow-hidden">
                    <motion.div
                      className="absolute inset-0 rounded-[28px] overflow-hidden"
                      initial={{ scale: 1 }}
                      animate={{ scale: 1.02 }}
                      transition={{
                        duration: 16,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
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
                        style={{ filter: "saturate(1.05) contrast(1.05)" }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================================================================
            SERVICES SECTION — 3 numbered cards
        ================================================================ */}
        <section id="services" className={`${sectionWrapper} bg-brand-surface/30`}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">
                What we do
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Three systems, one result
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Every service we offer is built to remove the gaps where customers
                fall through — phone, operations, and property.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.number}
                  className="bg-brand-surface border border-brand-border rounded-2xl p-7 flex flex-col"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl font-bold text-premium-green/20 leading-none select-none">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-premium-green font-medium mb-5">
                    {service.subtitle}
                  </p>
                  <ul className="flex-1 space-y-2.5 text-sm text-text-secondary">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex gap-2.5 items-start">
                        <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-premium-green flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="mt-6 self-start text-sm font-semibold text-premium-green hover:text-premium-green-light transition-colors"
                  >
                    {service.cta}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            HOW IT WORKS — 3-step process
        ================================================================ */}
        <section id="how-it-works" className={sectionWrapper}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">
                The process
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                How it works
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                A calm, structured process — no jargon, no surprises, and no lock-in
                until you're happy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  className="bg-brand-surface border border-brand-border rounded-2xl p-7"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  /* stagger */
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="text-4xl font-bold text-premium-green/20 leading-none mb-5 select-none">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            FAQ SECTION
        ================================================================ */}
        <section id="faqs" className={`${sectionWrapper} bg-brand-surface/30`}>
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green mb-3">
                Questions
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                FAQs
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Short answers to the things most people ask before getting started.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-brand-surface border border-brand-border rounded-2xl p-6"
                >
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            ABOUT BLURB
        ================================================================ */}
        <section id="about" className={sectionWrapper}>
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center space-y-5">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-premium-green">
              Who we are
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-text-primary"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              About Rooks &amp; Castle
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We're a UK-based AI systems team for service businesses that don't
              have time — or patience — for jargon-heavy agencies. You get
              practical build-outs, clear documentation, and systems your team
              can actually run with.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Built for trades, HVAC, clinics, estate agents, consultants, and
              any business that needs enquiries handled with zero drama.
            </p>
          </div>
        </section>

        {/* ================================================================
            FINAL CTA SECTION
        ================================================================ */}
        <section className={`${sectionWrapper} bg-brand-surface/30`}>
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="relative max-w-4xl mx-auto text-center bg-brand-surface border border-brand-border rounded-3xl p-10 sm:p-14 overflow-hidden">
              {/* subtle glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                />
              </div>

              <div className="relative space-y-6">
                <h2
                  className="text-3xl sm:text-4xl font-bold text-text-primary"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Let's set your business up properly.
                </h2>
                <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
                  Book a free strategy call and we'll map out the simplest system
                  to stop you missing customers — starting this week.
                </p>
                <CTAButton onClick={handleCalendly}>
                  Book free strategy call
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CallCaptureHome;
