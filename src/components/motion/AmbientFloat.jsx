import React from 'react';
import { motion } from 'framer-motion';

const AmbientFloat = ({ children, className = '', duration = 18 }) => (
  <motion.div
    className={className}
    initial={{ scale: 1 }}
    animate={{ scale: 1.02 }}
    transition={{ duration, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export default AmbientFloat;
