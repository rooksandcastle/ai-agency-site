import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'border border-[var(--blue-border)] text-[var(--blue-soft)] bg-transparent hover:bg-[var(--blue-faint)] shadow-[var(--blue-glow)]',
  secondary: 'border border-white/20 text-white/80 hover:border-white/35 hover:bg-white/5 hover:text-white',
};

const GlowButton = ({ children, variant = 'primary', className = '', as: Component = 'button', ...props }) => {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      className={`relative inline-flex items-center justify-center rounded-[16px] px-6 py-3 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-soft)] focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default GlowButton;
