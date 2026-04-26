import React from 'react';

const tones = {
  emerald: 'from-emerald-500/30 via-emerald-400/10 to-transparent',
  cyan: 'from-cyan-500/25 via-blue-500/10 to-transparent',
  violet: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  amber: 'from-amber-500/25 via-orange-500/10 to-transparent',
};

const VisualPanel = ({
  title,
  subtitle,
  tone = 'emerald',
  className = '',
}) => {
  const gradient = tones[tone] || tones.emerald;

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-brand-surface ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_45%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" aria-hidden="true" />
      <div className="relative h-full min-h-[220px] p-6 sm:p-8 flex flex-col justify-end">
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/70">Visual Placeholder</p>
        <h3 className="text-xl sm:text-2xl font-semibold text-white mt-2">{title}</h3>
        {subtitle ? <p className="text-sm text-text-secondary mt-2 max-w-md">{subtitle}</p> : null}
      </div>
    </div>
  );
};

export default VisualPanel;
