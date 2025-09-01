import type { FC } from 'react';
import styles from './Future.module.scss';
import clsx from 'clsx';
import { AnimatedSection } from '@/shared/ui';

interface list {
  title: string;
  body: string;
}

interface iFuture {
  title: string;
  subtitle: string;
  list: list[];
}

export const Future: FC<iFuture> = ({ title, subtitle, list }) => {
  return (
    <AnimatedSection className={styles['future']}>
      <div className={clsx(styles['future__inner'], 'container')}>
        <div className={styles['future__title']}>
          <h2
            className={styles['future__title-title']}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div
            className={styles['future__title-subtitle']}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></div>
        </div>
        <ul className={styles['future-list']}>
          {list.map((item, id) => (
            <li key={id} className={styles['future__item']}>
              <h3
                className={styles['future__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <div
                className={styles['future__item-body']}
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
