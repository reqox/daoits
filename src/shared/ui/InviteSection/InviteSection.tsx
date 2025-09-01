import type { FC, ReactNode } from 'react';
import styles from './InviteSection.module.scss';
import clsx from 'clsx';
import { AnimatedSection } from '../AnimatedSection/AnimatedSection';

interface iInvite {
  title: string;
  subtitle: string;
  srcImg: string;
  children: ReactNode;
}

export const InviteSection: FC<iInvite> = ({
  title,
  subtitle,
  srcImg,
  children,
}) => {
  return (
    <AnimatedSection className={styles['invite']}>
      <div className={clsx(styles['invite__inner'], 'container')}>
        <div className={styles['invite__body']}>
          <div className={styles['invite__description']}>
            <h2
              className={styles['invite-title']}
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <div
              className={styles['invite-subtitle']}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            ></div>
          </div>
          <img
            className={styles['invite-image']}
            src={srcImg}
            alt={''}
            width={100}
            height={100}
            loading={'lazy'}
          />
        </div>
        <div className={styles['invite__actions']}>{children}</div>
      </div>
    </AnimatedSection>
  );
};
