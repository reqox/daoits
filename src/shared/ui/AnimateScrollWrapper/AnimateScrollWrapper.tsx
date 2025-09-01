/* import { AnimatePresence, motion } from 'framer-motion';
import type { FC, ReactNode } from 'react';
import React from 'react';

interface iAnimate {
  children: ReactNode;
}

export const AnimateScrollWrapper: FC<iAnimate> = ({ children }) => {
  const child = React.Children.only(children);

  return (
    <AnimatePresence>
      <motion.div>
        {React.cloneElement(child, {
          ...child.props,
        })}
      </motion.div>
    </AnimatePresence>
  );
};
 */
