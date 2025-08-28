import type { FC } from 'react';
import styles from './Stability.module.scss';
import clsx from 'clsx';
import { FullWidthImage, InfoCard } from '@/shared/ui';

interface list {
  title: string;
  body: string;
}

interface advantages {
  title: string;
  body: string[];
}

interface iStability {
  title: string;
  subtitle: string;
  advantages: advantages;
  srcImg: string;
  list: list[];
}

export const Stability: FC<iStability> = ({
  title,
  subtitle,
  advantages,
  srcImg,
  list,
}) => {
  return (
    <section className={styles['stability']}>
      <div className={clsx(styles['stability__inner'], 'container')}>
        <div className={styles['stability__title']}>
          <h2
            className={styles['stability__title-title']}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <div
            className={styles['stability__title-subtitle']}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></div>
          <ul className={styles['stability-list']}>
            {list.map((item, id) => (
              <li key={id} className={styles['stability-item']}>
                <InfoCard body={item.body} title={item.title} />
              </li>
            ))}
          </ul>
          <FullWidthImage srcImg={srcImg} />
          <div className={styles['stability__advantages']}>
            <h3
              className={styles['stability__advantages-title']}
              dangerouslySetInnerHTML={{ __html: advantages.title }}
            ></h3>
            <ul className={styles['stability__advantages-list']}>
              {advantages.body.map((text, id) => (
                <li key={id} className={styles['stability__advantages-item']}>
                  <p dangerouslySetInnerHTML={{ __html: text }}></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
