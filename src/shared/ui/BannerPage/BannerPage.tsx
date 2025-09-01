import clsx from 'clsx';
import styles from './BannerPage.module.scss';
import type { FC, ReactNode } from 'react';
import { BannerAbstractImage } from '@/shared/assets/images';
import { motion, type Variants } from 'framer-motion';

interface BannerPageProps {
  title: string;
  children?: ReactNode;
}

export const BannerPage: FC<BannerPageProps> = ({ title, children }) => {
  const imgVariants: Variants = {
    animation: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  return (
    <section className={clsx(styles['banner'])}>
      <div className={clsx(styles['banner__inner'], 'container')}>
        <motion.img
          className={clsx(styles['banner-image'])}
          src={BannerAbstractImage}
          alt=""
          width={100}
          height={100}
          variants={imgVariants}
          animate={'animation'}
        />
        <div className={styles['banner__body']}>
          <h1
            className={styles['banner-title']}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h1>
          {children}
        </div>
      </div>
    </section>
  );
};
