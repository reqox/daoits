import clsx from 'clsx';
import styles from './Basics.module.scss';
import type { FC } from 'react';
import { FullWidthImage, InfoCard } from '@/shared/ui';

interface list {
  title: string;
  body: string;
}

interface iBasics {
  list: list[];
  title: string;
  srcImg: string;
}

export const Basics: FC<iBasics> = ({ list, title, srcImg }) => {
  return (
    <section className={styles['basics']}>
      <div className={clsx(styles['basics__inner'], 'container')}>
        <h2
          className={styles['basics-title']}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <FullWidthImage srcImg={srcImg} />
        <ul className={styles['basics-list']}>
          {list.map((item, id) => (
            <li key={id} className={styles['basics-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
