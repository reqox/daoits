import { asv, asvView } from '@/shared/lib';
import { motion, type Variants, type ViewportOptions } from 'framer-motion';
import type { FC, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  viewport?: ViewportOptions;
}

export const AnimatedSection: FC<AnimatedSectionProps> = ({
  children,
  className,
  variants = asv,
  viewport = asvView,
}) => {
  return (
    <motion.section
      className={className}
      variants={variants}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={viewport}
    >
      {children}
    </motion.section>
  );
};
