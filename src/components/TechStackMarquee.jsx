import React from 'react';

const logos = ['React', 'Next.js', 'Tailwind', 'Make', 'Zapier', 'Anthropic', 'Cohere', 'OpenAI', 'Slack', 'Linear'];

const TechStackMarquee = ({ className = '' }) => (
  <div className={`overflow-hidden border border-white/5 rounded-2xl bg-brand-surface/60 ${className}`}>
    <div className="flex gap-8 animate-scroll-slow hover:[animation-play-state:paused] px-6 py-3">
      {logos.concat(logos).map((logo, idx) => (
        <div key={`${logo}-${idx}`} className="py-4 px-5 text-sm font-semibold text-white/70 uppercase tracking-wide">
          {logo}
        </div>
      ))}
    </div>
    <style jsx>{`
      @keyframes scroll-slow {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-scroll-slow {
        animation: scroll-slow 25s linear infinite;
      }
    `}</style>
  </div>
);

export default TechStackMarquee;
