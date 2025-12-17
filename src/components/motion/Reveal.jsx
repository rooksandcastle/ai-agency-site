import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, className = '', delay = 0, as: Component = 'div', ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
    viewport={{ once: true, amount: 0.2 }}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
