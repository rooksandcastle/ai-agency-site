import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import VisualPanel from "../components/VisualPanel";

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

          <div className="relative w-full max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
            {/* Eyebrow badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 bg-premium-green/10 border border-premium-green/25 rounded-full px-4 py-2 mb-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premium-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-premium-green" />
              </span>
              <span className="text-premium-green text-xs font-semibold tracking-wide">
                Out-of-hours phone coverage for your business
              </span>
            </motion.div>

            {/* Display headline */}
            <motion.h1
              className="text-[clamp(52px,7vw,96px)] leading-[.92] tracking-[-0.04em] text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            >
              <span className="block">Never miss</span>
              <span className="block">another</span>
              <span className="block text-premium-green">customer.</span>
            </motion.h1>

            {/* Italic subline */}
            <motion.p
              className="text-[clamp(18px,2.5vw,30px)] italic text-text-secondary tracking-[-0.02em] mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
            >
              Even when you can't answer.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-[17px] font-light leading-[1.75] text-text-secondary max-w-[520px] mx-auto mb-11"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
            >
              Every call answered. Every lead captured. Every booking automated — 24/7, for less than the cost of a part-time shift weekly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex gap-3 flex-wrap justify-center mb-14"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.22 }}
            >
              <CTAButton onClick={() => scrollToSection("how-it-works")}>
                See how it works →
              </CTAButton>
              <CTAButton variant="secondary" onClick={handleCalendly}>
                Book free strategy call
              </CTAButton>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              className="inline-flex border border-premium-green/20 rounded-2xl overflow-hidden bg-brand-surface"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.28 }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`px-6 py-5 text-center ${idx < stats.length - 1 ? 'border-r border-premium-green/15' : ''}`}
                >
                  <div className="text-2xl font-extrabold text-premium-green leading-none tracking-[-0.02em]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-text-secondary mt-1 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
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
            EDITORIAL STRIP 1 — Bellhop / 24/7 promise
        ================================================================ */}
        <div className="relative h-[420px] overflow-hidden">
          <VisualPanel
            title="Your business is now open 24/7"
            subtitle="Always-on call coverage for busy service teams"
            tone="emerald"
            className="h-full rounded-none border-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,9,0.92)_0%,rgba(8,12,9,0.45)_50%,rgba(8,12,9,0.85)_100%)]" />
          <div className="absolute inset-0 flex items-center px-10 sm:px-20">
            <div className="max-w-[560px]">
              <p
                className="text-[clamp(26px,3vw,40px)] font-extrabold italic leading-[1.2] text-text-primary mb-4 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "Your business is now open 24 hours a day, seven days a week."
              </p>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-premium-green">
                The Rooks &amp; Castle promise
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================
            SPLIT ROW 1 — Why AI / Dials (image left, content right)
        ================================================================ */}
        <div className="grid md:grid-cols-2 min-h-[480px]">
          <VisualPanel
            title="Control without complexity"
            subtitle="Systems built around your day-to-day workflow"
            tone="cyan"
            className="min-h-[300px] md:min-h-0 h-full rounded-none border-y-0 border-l-0"
          />
          <div
            className="flex flex-col justify-center px-10 sm:px-14 py-16"
            style={{ background: '#121a13' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-premium-green" />
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-premium-green">
                Why AI — now
              </p>
            </div>
            <h3
              className="text-[clamp(28px,3vw,42px)] font-black leading-[1.1] tracking-tight text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Your competitors are<br />already{' '}
              <span className="text-premium-green">using it</span>
            </h3>
            <p className="text-[15px] font-light leading-[1.8] text-text-secondary mb-4">
              62% of calls to small businesses go unanswered. Every missed call is a missed customer — a lead that went to your competitor instead of you.
            </p>
            <p className="text-[15px] font-light leading-[1.8] text-text-secondary mb-4">
              AI solves this for{' '}
              <strong className="text-text-primary font-semibold">less than a part-time wage</strong>.
              {' '}No bad days, no sick days, no lunch breaks. Just consistent, professional handling of every enquiry.
            </p>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-premium-green mt-2 transition-all duration-200 hover:gap-4"
            >
              See how it works →
            </a>
          </div>
        </div>

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
            SPLIT ROW 2 — About (content left, image right — reversed)
        ================================================================ */}
        <div id="about" className="grid md:grid-cols-2 min-h-[480px]">
          <div
            className="flex flex-col justify-center px-10 sm:px-14 py-16 order-2 md:order-1"
            style={{ background: '#121a13' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-px bg-premium-green" />
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-premium-green">
                About Rooks &amp; Castle
              </p>
            </div>
            <h3
              className="text-[clamp(28px,3vw,42px)] font-black leading-[1.1] tracking-tight text-text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Calm. Confident.<br />
              <span className="text-premium-green">Human.</span>
            </h3>
            <p className="text-[15px] font-light leading-[1.8] text-text-secondary mb-4">
              We build practical AI systems for real-world service businesses. We don't sell technology for technology's sake — we solve operational problems that cost you time, money, and customers.
            </p>
            <p className="text-[15px] font-light leading-[1.8] text-text-secondary mb-4">
              Based in the UK, working with trades, salons, restaurants, clinics, and property businesses. Our approach is{' '}
              <strong className="text-text-primary font-semibold">psychology-informed</strong>{' '}
              — we design for how people actually work.
            </p>
            <a
              href="/industries"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-premium-green mt-2 transition-all duration-200 hover:gap-4"
            >
              View all industries →
            </a>
          </div>
          <VisualPanel
            title="Human-first automation"
            subtitle="Practical AI that your team actually uses"
            tone="violet"
            className="order-1 md:order-2 min-h-[300px] md:min-h-0 h-full rounded-none border-y-0 border-r-0"
          />
        </div>

        {/* ================================================================
            EDITORIAL STRIP 2 — Child phone / final quote
        ================================================================ */}
        <div className="relative h-[420px] overflow-hidden">
          <VisualPanel
            title="Every lead gets handled"
            subtitle="No missed calls, no dropped enquiries"
            tone="amber"
            className="h-full rounded-none border-0"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,9,0.95)_0%,rgba(8,12,9,0.4)_50%,rgba(8,12,9,0.8)_100%)]" />
          <div className="absolute inset-0 flex items-center justify-end px-10 sm:px-20">
            <div className="max-w-[560px] text-right">
              <p
                className="text-[clamp(26px,3vw,40px)] font-extrabold italic leading-[1.2] text-text-primary mb-4 tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "Every missed call is a missed customer. We make sure that never happens."
              </p>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-premium-green">
                Rooks &amp; Castle — Founded in the UK
              </p>
            </div>
          </div>
        </div>

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
