import clsx from 'clsx';
import styles from './History.module.scss';
import type { FC } from 'react';

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
    <section className={styles['history']}>
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
            <li key={id} className={styles['history__item']}>
              <h3
                className={styles['history__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <ul className={styles['history__item-list']}>
                {item.body.map((text, idx) => (
                  <li key={idx} className={styles['history__item-item']}>
                    <p dangerouslySetInnerHTML={{ __html: text }}></p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
