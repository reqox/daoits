import clsx from 'clsx';
import styles from './Mission.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Mission = () => {
  const { t } = useTranslation('blockchain');

  const missionList = Array.from({ length: 4 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`mission.card.${i}.title`),
      body: t(`mission.card.${i}.body`),
    };
  });

  return (
    <AnimatedSection className={styles['mission']}>
      <div className={clsx(styles['mission__inner'], 'container')}>
        <h2
          className={styles['mission-title']}
          dangerouslySetInnerHTML={{ __html: t('mission.title') }}
        ></h2>
        <ul className={styles['mission-list']}>
          {missionList.map((item) => (
            <li key={item.title} className={styles['mission-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
