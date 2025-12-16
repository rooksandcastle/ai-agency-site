import React from 'react';
import Lottie from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const LottieAnimation = ({
  animationData,      // For .json files
  dotLottieSrc,       // For .lottie files
  loop = true,
  autoplay = true,
  className = '',
  style = {},
  speed = 1,
  withMotion = true,  // Wrap with Framer Motion
  motionProps = {},   // Custom motion props
  onComplete,
}) => {
  // Default motion properties for smooth entrance
  const defaultMotionProps = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
    ...motionProps,
  };

  // Lottie options for .json files
  const lottieOptions = {
    animationData,
    loop,
    autoplay,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Render .lottie format
  if (dotLottieSrc) {
    const content = (
      <DotLottieReact
        src={dotLottieSrc}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
        className={className}
        style={style}
      />
    );

    return withMotion ? (
      <motion.div {...defaultMotionProps}>
        {content}
      </motion.div>
    ) : content;
  }

  // Render .json format
  if (animationData) {
    const content = (
      <Lottie
        {...lottieOptions}
        className={className}
        style={{ ...style }}
        onComplete={onComplete}
        speed={speed}
      />
    );

    return withMotion ? (
      <motion.div {...defaultMotionProps}>
        {content}
      </motion.div>
    ) : content;
  }

  // Fallback if no animation provided
  return null;
};

export default LottieAnimation;
