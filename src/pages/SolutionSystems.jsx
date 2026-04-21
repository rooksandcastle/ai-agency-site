import React from 'react';
import GlowButton from '../components/motion/GlowButton';
import Reveal from '../components/motion/Reveal';
import Navigation from '../components/Navigation';

const SystemBlock = ({ title, description, align = 'left', image, imageAlt }) => (
  <Reveal className={`grid md:grid-cols-2 gap-10 items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className="space-y-3">
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
    <div className="w-full h-64 rounded-3xl overflow-hidden">
      <img src={image} alt={imageAlt} className="w-full h-full object-cover object-top" />
    </div>
  </Reveal>
);

const SolutionSystems = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-20 space-y-16 max-w-6xl mx-auto px-6 md:px-10">
      <Reveal className="text-center space-y-4">
        <p className="text-xs tracking-[0.4em] text-premium-green uppercase">Systems</p>
        <h1 className="text-4xl font-semibold">Get Found. Get Chosen. Get Paid.</h1>
        <p className="text-text-secondary max-w-3xl mx-auto">
          Three focused systems that make marketing and operations tangible for service businesses.
        </p>
      </Reveal>

      <div className="space-y-12">
        <SystemBlock
          title="Get Found"
          description="Landing pages, listings, and local SEO tuned so people find you first."
          image="/media/Abstract/ai-creation.jpg"
          imageAlt="AI connecting with businesses to get found online"
        />
        <SystemBlock
          title="Get Chosen"
          description="Proof, follow-up, and trust builders that keep enquiries warm."
          align="right"
          image="/media/Industries/property-ai-agent.png"
          imageAlt="AI voice agent helping property business get chosen"
        />
        <SystemBlock
          title="Get Paid"
          description="Automated quoting, reminders, and payment nudges tied into your workflows."
          image="/media/Industries/welcome-ai-agent.png"
          imageAlt="AI agent managing bookings and payments"
        />
      </div>

      <Reveal className="bg-brand-surface/80 border border-white/5 rounded-3xl p-8 space-y-4">
        <h2 className="text-2xl font-semibold">What’s included</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-text-secondary">
          {['Discovery + ROI plan', 'Design + build', 'Integrations + automation', 'Team onboarding', 'Measurement + optimisation'].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <GlowButton as="a" href="/contact" className="mt-4 inline-flex">
          Discuss systems
        </GlowButton>
      </Reveal>
    </main>
  </div>
);

export default SolutionSystems;
