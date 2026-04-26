import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Plus } from "lucide-react";
import SEO from '../components/SEO';

const CALENDLY = "https://calendly.com/rooksandcastle101/30min";
const E = [0.22, 1, 0.36, 1];

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "24/7", label: "AI coverage" },
  { value: "67%", label: "Won't leave voicemail" },
  { value: "15h+", label: "Admin saved weekly" },
  { value: "2–3w", label: "To go live" },
];

const services = [
  {
    number: "01",
    title: "AI Front Desk",
    subtitle: "24/7 Phone Coverage",
    features: [
      "Answers every call, day, night, and weekend",
      "Books directly into your calendar — no manual input",
      "Sends you a text summary the moment a call ends",
      "Recovers missed enquiries with automatic follow-up",
    ],
    href: "/services/ai-front-desk",
  },
  {
    number: "02",
    title: "Workflow Automation",
    subtitle: "Stop Doing Admin Twice",
    features: [
      "Quotes and invoices sent automatically after each job",
      "Leads followed up professionally without you chasing",
      "Connects to your existing calendar, CRM, and inbox",
      "Reminders and notifications so nothing falls through",
    ],
    href: "/services/workflow-automation",
  },
  {
    number: "03",
    title: "Smart Follow-Up",
    subtitle: "Stop Chasing, Start Closing",
    features: [
      "Enquiry went quiet? Automated follow-up sends itself",
      "Invoice overdue? Polite reminders go out automatically",
      "Win back past customers at exactly the right moment",
      "You get notified the moment someone responds",
    ],
    href: "/services/smart-follow-up",
  },
];

const steps = [
  {
    step: "01",
    title: "Free strategy call",
    body: "30 minutes. We map your call flow, find where leads slip, and tell you what we'd build first.",
  },
  {
    step: "02",
    title: "We build the system",
    body: "We configure everything end-to-end. You review each stage, we refine — then we go live together.",
  },
  {
    step: "03",
    title: "We keep it sharp",
    body: "We monitor performance, tune responses, and support you as you grow. No set-and-forget.",
  },
];

const industries = [
  {
    label: "Trades & Home Services",
    desc: "Every call answered when you're under a sink.",
    img: "/media/Industries/Trades_1.png",
    href: "/industries/trades",
  },
  {
    label: "Salons & Personal Services",
    desc: "The phone rings. You're with a client. We handle it.",
    img: "/media/Industries/Salon_1.png",
    href: "/industries/salons",
  },
  {
    label: "Consultants & Professionals",
    desc: "Client work done. The next client still gets a reply.",
    img: "/media/Industries/Consultant_1.png",
    href: "/industries/consultants",
  },
];

const faqs = [
  {
    q: "Will it actually answer like a real person?",
    a: "Yes. The AI is trained on your business, uses your tone, and handles common scenarios without sounding robotic. Most callers can't tell the difference.",
  },
  {
    q: "What happens to calls the AI can't handle?",
    a: "It escalates to a real team member or takes a message with the caller's details. No call is dropped or left without a response.",
  },
  {
    q: "How long does setup take?",
    a: "Most clients are live within 2–3 weeks. The timeline depends on the complexity of your call flows and how many integrations we connect.",
  },
  {
    q: "Can it work with our existing booking or CRM system?",
    a: "Yes. We integrate with the tools you already use — or recommend simple, proven alternatives if you're starting from scratch.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No lock-in. We earn your business month to month because the system keeps delivering value.",
  },
];

// ─── Utility components ────────────────────────────────────────────────────────

const CTAButton = ({ children, variant = "primary", onClick, className = "" }) => {
  const base = "px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premium-green";
  const style = variant === "secondary"
    ? "border border-white/20 text-white/80 hover:border-premium-green/50 hover:text-white"
    : "bg-green-gradient text-gray-900 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.85)] hover:shadow-[0_25px_55px_-25px_rgba(16,185,129,0.9)]";
  return (
    <motion.button className={`${base} ${style} ${className}`} onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}>
      {children}
    </motion.button>
  );
};

// Single element scroll reveal
const Reveal = ({ children, delay = 0, x = 0, y = 36, className = "" }) => (
  <motion.div className={className}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.72, ease: E, delay }}>
    {children}
  </motion.div>
);

// Stagger container
const Stagger = ({ children, className = "", gap = 0.1 }) => (
  <motion.div className={className}
    initial="hidden" whileInView="visible"
    viewport={{ once: true, margin: "-70px" }}
    variants={{ visible: { transition: { staggerChildren: gap } } }}>
    {children}
  </motion.div>
);

// Stagger child
const SI = ({ children, className = "" }) => (
  <motion.div className={className}
    variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: E } } }}>
    {children}
  </motion.div>
);

// FAQ accordion item
const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-border">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[15px] font-semibold text-text-primary group-hover:text-white transition-colors">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.22 }}
          className="flex-shrink-0 text-premium-green">
          <Plus className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: E }}
            className="overflow-hidden">
            <p className="text-sm text-text-secondary leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

const CallCaptureHome = () => {
  const location = useLocation();
  const handleCalendly = () => window.open(CALENDLY, "_blank");
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary font-body overflow-x-hidden">
      <SEO title="R&C — AI Automations for Small Businesses" description="Never miss another customer. AI systems that answer calls, book appointments, and capture leads 24/7 — built for small businesses." path="/" />
      <Navigation onCalendlyClick={handleCalendly} />

      <main>

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

          {/* ambient orb */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] w-[800px] h-[800px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(16,185,129,0.13) 0%, transparent 68%)", filter: "blur(90px)" }} />
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-bg to-transparent" />
          </div>

          <div className="relative w-full max-w-4xl mx-auto px-6 md:px-10 pt-36 pb-28 text-center">

            {/* badge */}
            <motion.div className="inline-flex items-center gap-2.5 bg-premium-green/10 border border-premium-green/20 rounded-full px-4 py-2 mb-10"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: E }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inset-0 rounded-full bg-premium-green opacity-75" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-premium-green" />
              </span>
              <span className="text-premium-green text-[11px] font-semibold tracking-[0.06em]">Your business is now open 24/7</span>
            </motion.div>

            {/* heading — each line staggers in */}
            <div className="mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900 }}>
              {[
                { text: "Every call answered.", color: "text-text-primary" },
                { text: "Every lead", color: "text-text-primary" },
                { text: "captured.", color: "text-premium-green" },
              ].map((line, i) => (
                <motion.span key={line.text}
                  className={`block text-[clamp(52px,7.5vw,100px)] leading-[0.91] tracking-[-0.04em] ${line.color}`}
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: E, delay: 0.08 + i * 0.1 }}>
                  {line.text}
                </motion.span>
              ))}
            </div>

            {/* italic subline */}
            <motion.p
              className="text-[clamp(17px,2.2vw,24px)] italic text-text-secondary tracking-[-0.02em] mb-7"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 }}
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: E, delay: 0.38 }}>
              Even when you can't answer.
            </motion.p>

            {/* body */}
            <motion.p className="text-[15px] font-light leading-[1.85] text-text-secondary max-w-[460px] mx-auto mb-10"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: E, delay: 0.48 }}>
              When you're on a job, with a client, or done for the day — your phone keeps working.
              Our AI answers calls, takes details, and books directly into your calendar.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex gap-3 flex-wrap justify-center mb-14"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: E, delay: 0.56 }}>
              <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
              <CTAButton variant="secondary" onClick={() => scrollTo("how-it-works")}>See how it works</CTAButton>
            </motion.div>

            {/* stats pill */}
            <motion.div
              className="inline-grid grid-cols-4 divide-x divide-premium-green/10 border border-premium-green/15 rounded-2xl overflow-hidden bg-brand-surface/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: E, delay: 0.64 }}>
              {stats.map((s) => (
                <div key={s.label} className="px-5 py-4 text-center">
                  <div className="text-[22px] font-extrabold text-premium-green leading-none tracking-tight">{s.value}</div>
                  <div className="text-[10px] text-text-secondary mt-1.5 font-medium tracking-wide leading-tight">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* scroll mouse */}
          <motion.button onClick={() => scrollTo("editorial-1")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            <span className="text-[9px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
              <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
                <rect x="0.75" y="0.75" width="12.5" height="20.5" rx="6.25" stroke="currentColor" strokeWidth="1.5"/>
                <motion.rect x="6" y="4" width="2" height="4" rx="1" fill="currentColor"
                  animate={{ y: [0, 7, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
              </svg>
            </motion.div>
          </motion.button>
        </section>


        {/* ─── EDITORIAL STRIP 1 — Bellhop ─────────────────────────────────── */}
        <div id="editorial-1" className="relative overflow-hidden" style={{ height: "clamp(320px,42vw,520px)" }}>
          <img src="/media/Home%20Page/carousel-bellhop.png" alt="" aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
            style={{ filter: "brightness(0.38) saturate(0.4)" }} />
          {/* directional fade — strong left, light right */}
          <div aria-hidden className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(15,15,15,0.98) 0%, rgba(15,15,15,0.7) 45%, rgba(15,15,15,0.2) 100%)" }} />

          <div className="absolute inset-0 flex items-center">
            <div className="w-full max-w-6xl mx-auto px-10 md:px-16">
              <Reveal>
                <span className="inline-block text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-5">
                  The Rooks &amp; Castle promise
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-[clamp(22px,3.8vw,54px)] font-black italic leading-[1.1] text-text-primary tracking-tight max-w-[600px]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  "Your business shouldn't<br />go quiet at 5pm."
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-5 text-[14px] text-text-secondary leading-relaxed max-w-[400px]">
                  67% of callers won't leave a voicemail. They ring the next person on the list.
                  We make sure that next person is still you.
                </p>
              </Reveal>
            </div>
          </div>
        </div>


        {/* ─── SERVICES GRID ───────────────────────────────────────────────── */}
        <section id="services" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <Reveal className="max-w-2xl mb-16">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-3">What we do</p>
              <h2 className="text-[clamp(30px,4vw,50px)] font-black text-text-primary leading-[1.05] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Three systems.<br />One result.
              </h2>
              <p className="mt-4 text-[15px] text-text-secondary leading-relaxed">
                Every service removes a gap where customers fall through — missed calls, lost leads, unpaid invoices.
                Simple systems that run in the background.
              </p>
            </Reveal>

            <Stagger className="grid md:grid-cols-3 gap-5" gap={0.12}>
              {services.map((s) => (
                <SI key={s.number}>
                  <motion.div
                    className="group relative bg-brand-surface border border-brand-border rounded-2xl p-7 flex flex-col h-full overflow-hidden transition-colors duration-300 hover:border-premium-green/25"
                    whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                    {/* subtle hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 50% 120%, rgba(16,185,129,0.07) 0%, transparent 70%)" }} />
                    <span className="text-[56px] font-black text-premium-green/12 leading-none select-none mb-6 block">
                      {s.number}
                    </span>
                    <h3 className="text-[17px] font-bold text-text-primary mb-1">{s.title}</h3>
                    <p className="text-[11px] font-bold text-premium-green tracking-[0.1em] uppercase mb-5">{s.subtitle}</p>
                    <ul className="flex-1 space-y-3 text-sm text-text-secondary mb-7">
                      {s.features.map((f) => (
                        <li key={f} className="flex gap-3 items-start">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-premium-green flex-shrink-0" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={s.href}
                      className="self-start text-sm font-bold text-premium-green flex items-center gap-1.5 hover:gap-3 transition-all duration-200">
                      Learn more <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                    </a>
                  </motion.div>
                </SI>
              ))}
            </Stagger>
          </div>
        </section>


        {/* ─── DIALS SPLIT — Why AI Now ────────────────────────────────────── */}
        <div className="grid md:grid-cols-2" style={{ minHeight: "clamp(440px,55vw,600px)" }}>

          {/* image side */}
          <div className="relative overflow-hidden min-h-[280px] md:min-h-0">
            <motion.img
              src="/media/Home%20Page/carousel-dials.png" alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.5) saturate(0.45)" }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: E }} />
            {/* blend edge into text panel */}
            <div aria-hidden className="absolute inset-0 md:hidden"
              style={{ background: "linear-gradient(to top, rgba(17,17,17,0.9) 0%, transparent 60%)" }} />
            <div aria-hidden className="hidden md:block absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 55%, #111 100%)" }} />
          </div>

          {/* text side */}
          <div className="flex flex-col justify-center px-10 md:px-14 py-16 bg-[#111]">
            <Reveal delay={0.05}>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-6 h-px bg-premium-green" />
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-premium-green">Why AI — now</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="text-[clamp(24px,3vw,42px)] font-black leading-[1.08] tracking-tight text-text-primary mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Your competitors are<br />already{" "}
                <span className="text-premium-green">using it.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[14px] font-light leading-[1.85] text-text-secondary mb-4">
                67% of callers won't leave a voicemail — they ring someone else. Every missed call is a missed
                customer, a lead that went to your competitor instead.
              </p>
            </Reveal>
            <Reveal delay={0.27}>
              <p className="text-[14px] font-light leading-[1.85] text-text-secondary mb-7">
                AI solves this for{" "}
                <strong className="text-text-primary font-semibold">less than a part-time wage</strong>.
                No bad days, no sick days, no lunch breaks.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <button onClick={() => scrollTo("how-it-works")}
                className="self-start text-[13px] font-bold text-premium-green flex items-center gap-2 hover:gap-3 transition-all duration-200">
                See how it works →
              </button>
            </Reveal>
          </div>
        </div>


        {/* ─── INDUSTRIES VISUAL ───────────────────────────────────────────── */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <Reveal className="mb-12">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-3">Industries</p>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-black text-text-primary leading-[1.06] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Built for the way<br />you actually work
              </h2>
            </Reveal>

            <Stagger className="grid md:grid-cols-3 gap-4" gap={0.1}>
              {industries.map((ind) => (
                <SI key={ind.label}>
                  <motion.a href={ind.href}
                    className="group relative flex rounded-2xl overflow-hidden"
                    style={{ aspectRatio: "4/5" }}
                    whileHover="hover">
                    {/* image */}
                    <motion.img
                      src={ind.img} alt={ind.label}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ filter: "brightness(0.5) saturate(0.45)" }}
                      variants={{ hover: { scale: 1.04 } }}
                      transition={{ duration: 0.6, ease: E }} />
                    {/* gradient */}
                    <div aria-hidden className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.5) 45%, rgba(10,10,10,0.1) 100%)" }} />
                    {/* top-right accent dot */}
                    <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-premium-green opacity-60 group-hover:opacity-100 transition-opacity" />
                    {/* text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-premium-green mb-2">Explore</p>
                      <h3 className="text-[16px] font-bold text-white leading-snug mb-2">{ind.label}</h3>
                      <p className="text-xs text-white/55 leading-relaxed mb-4">{ind.desc}</p>
                      <motion.span
                        className="inline-flex items-center text-[11px] font-bold text-premium-green gap-1.5"
                        variants={{ hover: { x: 4 } }}
                        transition={{ duration: 0.2 }}>
                        Learn more →
                      </motion.span>
                    </div>
                  </motion.a>
                </SI>
              ))}
            </Stagger>
          </div>
        </section>


        {/* ─── HOW IT WORKS ────────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 md:py-32 bg-brand-surface/20 border-y border-brand-border">
          <div className="max-w-6xl mx-auto px-6 md:px-10">

            <Reveal className="text-center mb-16">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-3">The process</p>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-black text-text-primary leading-[1.06] tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                How it works
              </h2>
              <p className="mt-4 text-[15px] text-text-secondary max-w-xl mx-auto leading-relaxed">
                A calm, structured process — no jargon, no surprises, and no lock-in until you're happy.
              </p>
            </Reveal>

            <Stagger className="grid md:grid-cols-3 gap-5" gap={0.12}>
              {steps.map((s) => (
                <SI key={s.step}>
                  <div className="bg-brand-surface border border-brand-border rounded-2xl p-7 h-full">
                    <div className="text-[52px] font-black text-premium-green/12 leading-none select-none mb-5">{s.step}</div>
                    <h3 className="text-[16px] font-bold text-text-primary mb-3">{s.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{s.body}</p>
                  </div>
                </SI>
              ))}
            </Stagger>
          </div>
        </section>


        {/* ─── ABOUT SPLIT — hero2 ─────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2" style={{ minHeight: "clamp(420px,52vw,580px)" }}>

          {/* text */}
          <div className="flex flex-col justify-center px-10 md:px-14 py-16 bg-[#111] order-2 md:order-1">
            <Reveal delay={0.05}>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-6 h-px bg-premium-green" />
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-premium-green">About Rooks &amp; Castle</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <h3 className="text-[clamp(24px,3vw,40px)] font-black leading-[1.08] tracking-tight text-text-primary mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Calm. Confident.<br />
                <span className="text-premium-green">Human.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[14px] font-light leading-[1.85] text-text-secondary mb-4">
                We build practical AI systems for real-world service businesses. We don't sell technology
                for technology's sake — we solve the operational problems that cost you time, money, and customers.
              </p>
            </Reveal>
            <Reveal delay={0.27}>
              <p className="text-[14px] font-light leading-[1.85] text-text-secondary mb-8">
                Based in the UK. Built for trades, salons, and professional services.{" "}
                <strong className="text-text-primary font-semibold">Direct, honest, and human.</strong>
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
            </Reveal>
          </div>

          {/* image */}
          <div className="relative overflow-hidden min-h-[280px] md:min-h-0 order-1 md:order-2">
            <motion.img
              src="/media/Home%20Page/hero%202.jpg" alt="" aria-hidden
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.42) saturate(0.4)" }}
              initial={{ scale: 1.08 }} whileInView={{ scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.2, ease: E }} />
            <div aria-hidden className="absolute inset-0 md:hidden"
              style={{ background: "linear-gradient(to top, rgba(17,17,17,0.9) 0%, transparent 60%)" }} />
            <div aria-hidden className="hidden md:block absolute inset-0"
              style={{ background: "linear-gradient(to left, transparent 55%, #111 100%)" }} />
          </div>
        </div>


        {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
        <section id="faqs" className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-6 md:px-10">
            <Reveal className="text-center mb-12">
              <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-3">Questions</p>
              <h2 className="text-[clamp(28px,3.8vw,48px)] font-black text-text-primary tracking-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                The honest answers
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
              </div>
            </Reveal>
          </div>
        </section>


        {/* ─── FINAL CTA — image background ───────────────────────────────── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden">
                {/* bg image */}
                <img
                  src="/media/Home%20Page/97d5798c663abf255d60b624752d9e2a0cd830b5c17205f4c618964768f6f9b8%40Carousel.png"
                  alt="" aria-hidden
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={{ filter: "brightness(0.3) saturate(0.35)" }} />
                {/* overlays */}
                <div aria-hidden className="absolute inset-0" style={{ background: "rgba(10,10,10,0.55)" }} />
                <div aria-hidden className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.14) 0%, transparent 65%)" }} />

                <Stagger className="relative px-8 md:px-20 py-20 md:py-24 text-center" gap={0.12}>
                  <SI>
                    <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-premium-green mb-4">Get started</p>
                  </SI>
                  <SI>
                    <h2 className="text-[clamp(28px,4.5vw,60px)] font-black text-text-primary mb-4 tracking-tight leading-[1.02]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      Let's set your business<br />up properly.
                    </h2>
                  </SI>
                  <SI>
                    <p className="text-[15px] text-text-secondary max-w-md mx-auto leading-relaxed mb-10">
                      30 minutes. No pressure. We'll tell you exactly what you'd get and whether it makes sense for your business.
                    </p>
                  </SI>
                  <SI>
                    <CTAButton onClick={handleCalendly}>Book a Free Call →</CTAButton>
                  </SI>
                </Stagger>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CallCaptureHome;
