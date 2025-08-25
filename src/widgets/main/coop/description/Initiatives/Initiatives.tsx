import clsx from 'clsx';
import styles from './Initiatives.module.scss';
import { useTranslation } from 'react-i18next';
import { InfoCard } from '@/shared/ui';

export const Initiatives = () => {
  const { t } = useTranslation('coop');

  const initiativesList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`descriptionPage.initiatives.list.${i}.title`),
      body: t(`descriptionPage.initiatives.list.${i}.body`),
    };
  });

  return (
    <section className={styles['initiatives']}>
      <div className={clsx(styles['initiatives__inner'], 'container')}>
        <div className={styles['initiatives__title']}>
          <h2
            className={styles['initiatives__title-title']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.initiatives.title'),
            }}
          ></h2>
          <div
            className={styles['initiatives__title-subtitle']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.initiatives.subtitle'),
            }}
          ></div>
        </div>
        <ul className={styles['initiatives-list']}>
          {initiativesList.map((item) => (
            <li key={item.title} className={styles['initiatives-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
