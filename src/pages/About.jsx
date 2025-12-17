import React from 'react';
import Navigation from '../components/Navigation';
import Reveal from '../components/motion/Reveal';
import GlowButton from '../components/motion/GlowButton';
import AboutSignatureSection from '../components/AboutSignatureSection';

const About = () => (
  <div className="min-h-screen bg-brand-bg text-text-primary">
    <Navigation />
    <main className="pt-28 pb-24 space-y-16 max-w-6xl mx-auto px-6 md:px-10">
      <Reveal className="space-y-5 text-center md:text-left">
        <p className="text-xs tracking-[0.4em] text-premium-green uppercase">About</p>
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Rooks & Castle</h1>
          <p className="text-text-secondary text-base max-w-2xl">
            Practical AI systems for real-world service businesses. Calm, confident, human.
          </p>
        </div>
      </Reveal>

      <section className="space-y-10">
        <Reveal className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-brand-surface/70 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-4 h-full">
            <h2 className="text-xl font-semibold">What we believe</h2>
            <ul className="space-y-3 text-sm text-text-secondary">
              {['Clarity beats hype', 'Trust beats flash', 'Usefulness beats cleverness'].map((copy) => (
                <li key={copy} className="flex gap-3">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-premium-green" />
                  {copy}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-surface/70 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-4 h-full">
            <h2 className="text-xl font-semibold">How we work</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Small senior team, embedded with owners. We map ROI, build systems, teach your staff, then iterate.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              No bloat, no interns pretending to be strategists—just people who ship and stick around long enough to make sure it works.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <section className="bg-brand-surface/80 border border-white/5 rounded-[32px] p-6 sm:p-10 space-y-8">
            <AboutSignatureSection />
          </section>
        </Reveal>
      </section>

      <Reveal className="text-center space-y-4">
        <div className="max-w-2xl mx-auto space-y-3">
          <p className="text-text-secondary text-sm">See how we scope, deploy, and evolve systems without drama.</p>
          <GlowButton as="a" href="/about/process">See the process</GlowButton>
        </div>
      </Reveal>
    </main>
  </div>
);

export default About;
