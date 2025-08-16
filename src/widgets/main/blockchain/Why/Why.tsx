import clsx from 'clsx';
import styles from './Why.module.scss';
import { FullWidthImage } from '@/shared/ui';
import { BlockchainWhyImage } from '@/shared/assets/images';
import { useTranslation } from 'react-i18next';

export const Why = () => {
  const { t } = useTranslation('blockchain');

  const whyList = Array.from({ length: 6 }, (_, index) => {
    const i: number = index + 1;
    return {
      1: t(`why.list.${i}.1`),
      2: t(`why.list.${i}.2`),
      3: t(`why.list.${i}.3`),
    };
  });

  return (
    <section className={styles['why']}>
      <div className={clsx(styles['why__inner'], 'container')}>
        <h2
          className={styles['why-title']}
          dangerouslySetInnerHTML={{ __html: t('why.title') }}
        ></h2>
        <FullWidthImage srcImg={BlockchainWhyImage} />
        <ul className={styles['why-list']}>
          {whyList.map((item) => (
            <li key={item[1]} className={styles['why__item']}>
              <h3
                className={styles['why__item-title']}
                dangerouslySetInnerHTML={{ __html: item[1] }}
              ></h3>
              <div
                className={styles['why__item-blockhains']}
                dangerouslySetInnerHTML={{ __html: item[2] }}
              ></div>
              <h3
                className={styles['why__item-solution']}
                dangerouslySetInnerHTML={{ __html: item[3] }}
              ></h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
