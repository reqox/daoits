import type { Variants, ViewportOptions } from 'framer-motion';

export const viewport: ViewportOptions = {
  once: true,
  amount: 0.3,
};

export const animateScrollVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
