import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

/**
 * A reusable component that fades in its children when they scroll into the viewport.
 * Uses motion/react for high-performance animations and standard compliance.
 */
const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '',
  duration = 0.8
}) => {
  // Map directions to initial motion states
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay / 1000, // Convert ms to s for motion
        ease: [0.21, 0.47, 0.32, 0.98], // Custom cubic-bezier for a premium feel
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default React.memo(FadeIn);