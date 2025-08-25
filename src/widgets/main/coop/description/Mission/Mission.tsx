import clsx from 'clsx';
import styles from './Mission.module.scss';
import { useTranslation } from 'react-i18next';
import { CoopMissionImage } from '@/shared/assets/images';

export const Mission = () => {
  const { t } = useTranslation('coop');
  return (
    <section className={styles['mission']}>
      <div className={clsx(styles['mission__inner'], 'container')}>
        <h2
          className={styles['mission-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.mission.title'),
          }}
        ></h2>
        <div className={styles['mission__body']}>
          <div className={styles['mission__main']}>
            <p
              dangerouslySetInnerHTML={{
                __html: t('descriptionPage.mission.text.1'),
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: t('descriptionPage.mission.text.2'),
              }}
            ></p>
          </div>
          <img
            className={styles['mission-image']}
            src={CoopMissionImage}
            alt={''}
            width={100}
            height={100}
            loading={'lazy'}
          />
        </div>
      </div>
    </section>
  );
};
