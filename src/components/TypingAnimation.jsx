import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = ({ text, className = '', delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Start typing after initial delay
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, 50); // Typing speed: 50ms per character

        return () => clearTimeout(timeout);
      } else {
        // Once typing is complete, hide cursor after 1 second
        const cursorTimeout = setTimeout(() => {
          setShowCursor(false);
        }, 1000);
        return () => clearTimeout(cursorTimeout);
      }
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, delay]);

  // Cursor blink effect
  useEffect(() => {
    if (!showCursor) return;

    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Blink speed

    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-premium-green ml-1 align-middle"
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0 }}
        />
      )}
    </span>
  );
};

export default TypingAnimation;
