import React, { useState, useEffect, useRef } from 'react';
import GlowButton from '../components/motion/GlowButton';
import Navigation from '../components/Navigation';
import { Linkedin, Twitter, Instagram, MessageCircle, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/108562997/admin/dashboard/', icon: Linkedin },
  { label: 'X', href: 'https://x.com/rooksandcastle?s=21', icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com/rooksandcastle', icon: Instagram },
  { label: 'WhatsApp', href: 'https://wa.me/447533595684', icon: MessageCircle },
];

const helpOptions = ['Foundation', 'Growth', 'Operations', 'AI Front Desk'];

const initialFormState = {
  name: '',
  email: '',
  businessName: '',
  industry: '',
  employees: '',
  website: '',
  helpNeeds: [],
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState('');
  const [isCalendlyModalOpen, setCalendlyModalOpen] = useState(false);
  const twitterTimelineRef = useRef(null);
  const location = useLocation();
  const calendlyLink = 'https://calendly.com/rooksandcastle101/30min';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleNeed = (value) => {
    setForm((prev) => {
      const exists = prev.helpNeeds.includes(value);
      return {
        ...prev,
        helpNeeds: exists ? prev.helpNeeds.filter((item) => item !== value) : [...prev.helpNeeds, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact form — Rooks & Castle');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness name: ${form.businessName || 'Not provided'}\nIndustry: ${
        form.industry || 'Not provided'
      }\nNumber of employees: ${form.employees || 'Not provided'}\nWebsite: ${form.website || 'Not provided'}\nNeeds: ${
        form.helpNeeds.length ? form.helpNeeds.join(', ') : 'Not specified'
      }\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@rooksandcastle.co.uk?subject=${subject}&body=${body}`;
    setStatus('Thanks for reaching out. One of our consultants will be in touch shortly to discuss next steps.');
    setForm(initialFormState);
  };

  const handleBook = () => window.open(calendlyLink, '_blank');

  useEffect(() => {
    if (!twitterTimelineRef.current) return;

    const renderTimeline = () => {
      requestAnimationFrame(() => {
        if (window.twttr?.widgets) {
          window.twttr.widgets.load(twitterTimelineRef.current);
        }
      });
    };

    const scriptId = 'twitter-wjs';

    if (window.twttr?.widgets) {
      renderTimeline();
      return;
    }

    const existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        script.dataset.loaded = 'true';
        renderTimeline();
      };
      document.body.appendChild(script);
    } else if (existingScript && !existingScript.dataset.loaded) {
      existingScript.addEventListener('load', () => {
        existingScript.dataset.loaded = 'true';
        renderTimeline();
      }, { once: true });
    } else {
      renderTimeline();
    }

    return () => {};
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-bg text-text-primary">
      <Navigation onCalendlyClick={handleBook} />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-sm font-semibold tracking-wide text-premium-green uppercase">Contact</p>
            <h1 className="text-4xl font-bold">Talk to Rooks & Castle</h1>
            <p className="text-text-secondary text-sm sm:text-base">
              Three simple ways to reach us — all visible without scrolling.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 items-start">
            <div className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 sm:p-7 space-y-4 h-full">
              <div className="space-y-1.5">
                <p className="text-xs tracking-[0.3em] uppercase text-premium-green">Book</p>
                <h2 className="text-2xl font-semibold">Consultation</h2>
                <p className="text-sm text-text-secondary">
                  30-minute session to map intake, systems, and wins we can deliver first.
                </p>
              </div>
              <GlowButton onClick={() => setCalendlyModalOpen(true)} className="w-full justify-center md:hidden">
                Book on Calendly
              </GlowButton>
              <GlowButton onClick={handleBook} className="w-full justify-center hidden md:flex">
                Book on Calendly
              </GlowButton>
              <div className="rounded-xl border border-white/10 bg-brand-bg/70 overflow-hidden hidden md:block">
                <iframe
                  title="Calendly booking"
                  src="https://calendly.com/rooksandcastle101/30min"
                  className="w-full"
                  height="520"
                  frameBorder="0"
                />
              </div>
            </div>

            <div className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 sm:p-7 space-y-4 h-full">
              <div className="space-y-2">
                <p className="text-xs tracking-[0.3em] uppercase text-premium-green">Form</p>
                <h2 className="text-2xl font-semibold">Send details</h2>
                <p className="text-sm text-text-secondary">
                  Tell us what’s happening and we’ll reply with next steps and timelines.
                </p>
              </div>
              <form className="space-y-3 text-sm" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-secondary mb-1" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-1" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-secondary mb-1" htmlFor="businessName">Business name</label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      value={form.businessName}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-1" htmlFor="industry">Industry</label>
                    <input
                      id="industry"
                      name="industry"
                      type="text"
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-text-secondary mb-1" htmlFor="employees">Employees</label>
                    <input
                      id="employees"
                      name="employees"
                      type="text"
                      value={form.employees}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-1" htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={form.website}
                      onChange={handleChange}
                      className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-text-secondary mb-1">What do you need help with?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {helpOptions.map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 bg-brand-bg border border-brand-border rounded-xl px-3 py-2 cursor-pointer hover:border-premium-green/60"
                      >
                        <input
                          type="checkbox"
                          name="helpNeeds"
                          value={option}
                          checked={form.helpNeeds.includes(option)}
                          onChange={() => handleToggleNeed(option)}
                          className="text-premium-green focus:ring-premium-green"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-text-secondary mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-3 py-2 focus:outline-none focus:border-premium-green"
                  />
                </div>
                <GlowButton type="submit" className="w-full justify-center">
                  Send message
                </GlowButton>
                {status && <p className="text-xs text-premium-green text-center">{status}</p>}
              </form>
            </div>

            <div className="bg-brand-surface/80 border border-brand-border rounded-2xl p-6 sm:p-7 space-y-4 h-full flex flex-col">
              <div className="space-y-2">
                <p className="text-xs tracking-[0.3em] uppercase text-premium-green">Follow</p>
                <h2 className="text-2xl font-semibold">Stay connected</h2>
                <p className="text-sm text-text-secondary">
                  Add us on your channel of choice or drop a line directly.
                </p>
              </div>
              <div className="space-y-3 text-sm text-text-secondary">
                <div>
                  <p className="font-semibold text-text-primary">Email</p>
                  <a href="mailto:hello@rooksandcastle.co.uk" className="hover:text-white">hello@rooksandcastle.co.uk</a>
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Phone / WhatsApp</p>
                  <a href="tel:+447533595684" className="hover:text-white">+44 (0)7533595684</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-text-secondary">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href || '#'} aria-label={link.label} className="hover:text-white">
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div
                ref={twitterTimelineRef}
                className="mt-4 rounded-xl border border-white/10 bg-brand-bg/60 overflow-hidden max-h-[360px]"
              >
                <a
                  className="twitter-timeline"
                  data-theme="dark"
                  data-chrome="noheader nofooter noborders transparent"
                  data-tweet-limit="3"
                  href="https://twitter.com/rooksandcastle"
                >
                  Tweets by Rooks & Castle
                </a>
              </div>
              <div className="mt-auto text-xs text-text-tertiary">
                We reply same-day during UK hours and share regular ops breakdowns on LinkedIn + X.
              </div>
            </div>
          </div>
        </div>
      </main>
      {isCalendlyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 py-6">
          <div className="relative w-full max-w-3xl h-[90vh] rounded-3xl border border-white/10 bg-brand-bg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setCalendlyModalOpen(false)}
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              title="Calendly booking modal"
              src="https://calendly.com/rooksandcastle101/30min"
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
