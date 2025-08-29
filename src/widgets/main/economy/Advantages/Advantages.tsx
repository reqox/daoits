import clsx from 'clsx';
import styles from './Advantages.module.scss';
import type { FC } from 'react';
import { InfoCard } from '@/shared/ui';

interface card {
  title: string;
  body: string;
}

interface iAdvantages {
  title: string;
  card: card[];
}

export const Advantages: FC<iAdvantages> = ({ title, card }) => {
  return (
    <section className={styles['advantages']}>
      <div className={clsx(styles['advantages__inner'], 'container')}>
        <h2 className={styles['advantages-title']}>{title}</h2>
        <ul className={styles['advantages-list']}>
          {card.map((item, id) => (
            <li key={id} className={styles['advantages-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
