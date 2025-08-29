import clsx from 'clsx';
import styles from './Prospects.module.scss';
import type { FC } from 'react';
import { FullWidthImage, InfoCard } from '@/shared/ui';

interface card {
  title: string;
  body: string;
}

interface iProspects {
  title: string;
  srcImg: string;
  card: card[];
}

export const Prospects: FC<iProspects> = ({ title, srcImg, card }) => {
  return (
    <section className={styles['prospects']}>
      <div className={clsx(styles['prospects__inner'], 'container')}>
        <h2
          className={styles['prospects-title']}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <FullWidthImage srcImg={srcImg} />
        <ul className={styles['prospects-list']}>
          {card.map((item, id) => (
            <li key={id} className={styles['prospects-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
