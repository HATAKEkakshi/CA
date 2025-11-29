import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils';

interface WaveTextProps {
  children: string;
  className?: string;
}

export const WaveText: React.FC<WaveTextProps> = ({ children, className }) => {
  const letters = children.split('');

  return (
    <span className={cn("inline-block", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
};