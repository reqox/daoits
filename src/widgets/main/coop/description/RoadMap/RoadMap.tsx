import clsx from 'clsx';
import styles from './RoadMap.module.scss';
import { useTranslation } from 'react-i18next';
import { InfoCard } from '@/shared/ui';

export const RoadMap = () => {
  const { t } = useTranslation('coop');

  const roadmapList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`descriptionPage.roadmap.list.${i}.title`),
      body: t(`descriptionPage.roadmap.list.${i}.body`),
    };
  });

  return (
    <section className={styles['roadmap']}>
      <div className={clsx(styles['roadmap__inner'], 'container')}>
        <div className={styles['roadmap__title']}>
          <h2
            className={styles['roadmap__title-title']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.roadmap.title'),
            }}
          ></h2>
          <div
            className={styles['roadmap__title-subtitle']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.roadmap.subtitle'),
            }}
          ></div>
        </div>
        <ul className={styles['roadmap-list']}>
          {roadmapList.map((item) => (
            <li key={item.title} className={styles['roadmap-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
