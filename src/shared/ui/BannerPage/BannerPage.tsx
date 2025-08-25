import clsx from 'clsx';
import styles from './BannerPage.module.scss';
import type { FC, ReactNode } from 'react';
import { BannerAbstractImage } from '@/shared/assets/images';
import { motion } from 'motion/react';

interface BannerPageProps {
  title: string;
  children?: ReactNode;
}

export const BannerPage: FC<BannerPageProps> = ({ title, children }) => {
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
