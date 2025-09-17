import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackButton = ({ to = '/', className = '', children = 'Back' }) => {
  return (
    <Link to={to} className="focus:outline-none focus:ring-2 focus:ring-green-400/50 rounded-xl">
      <motion.div
        className={`flex items-center space-x-2 px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 group touch-manipulation min-h-[48px] ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium">{children}</span>
      </motion.div>
    </Link>
  );
};

export default BackButton;