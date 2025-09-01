import clsx from 'clsx';
import styles from './History.module.scss';
import type { FC } from 'react';
import { AnimatedSection } from '@/shared/ui';

interface card {
  title: string;
  body: string[];
}

interface iHistory {
  title: string;
  subtitle: string;
  card: card[];
}

export const History: FC<iHistory> = ({ title, subtitle, card }) => {
  return (
    <AnimatedSection className={styles['history']}>
      <div className={clsx(styles['history__inner'], 'container')}>
        <div className={styles['history__title']}>
          <h2
            className={styles['history__title-title']}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div
            className={styles['history__title-subtitle']}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></div>
        </div>
        <ul className={styles['history-list']}>
          {card.map((item, id) => (
            <li
              key={id}
              className={clsx(
                styles['history__item'],
                id === card.length - 1 &&
                  card.length % 2 !== 0 &&
                  styles['history__item--odd'],
              )}
            >
              <h3
                className={styles['history__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <ul className={styles['history__item-list']}>
                {item.body.map((text, idx) => (
                  <li
                    key={idx}
                    className={clsx(
                      styles['history__item-item'],
                      item.body.length === 1 &&
                        styles['history__item-item--one'],
                    )}
                  >
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
