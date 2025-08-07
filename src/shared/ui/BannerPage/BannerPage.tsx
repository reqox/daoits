import clsx from 'clsx';
import styles from './BannerPage.module.scss';
import type { FC } from 'react';
import { BannerAbstractImage } from '@/shared/assets/images';
import { motion } from 'motion/react';

interface BannerPageProps {
  title: string;
}

export const BannerPage: FC<BannerPageProps> = ({ title }) => {
  return (
    <section className={clsx(styles['banner'])}>
      <div className={clsx(styles['banner__inner'], 'container')}>
        <motion.img
          className={clsx(styles['banner-image'])}
          src={BannerAbstractImage}
          alt=""
          width={100}
          height={100}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <h1 className={clsx(styles['banner-title'])}>{title}</h1>
      </div>
    </section>
  );
};
