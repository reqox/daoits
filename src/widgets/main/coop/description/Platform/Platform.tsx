import { useTranslation } from 'react-i18next';
import styles from './Platform.module.scss';
import clsx from 'clsx';
import { InfoCard } from '@/shared/ui';

export const Platform = () => {
  const { t } = useTranslation('coop');

  const platformList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      body: t(`descriptionPage.platform.list.${i}`),
    };
  });

  return (
    <section className={styles['platform']}>
      <div className={clsx(styles['platform__inner'], 'container')}>
        <h2
          className={styles['platform-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.platform.title'),
          }}
        ></h2>
        <ul className={styles['platform-list']}>
          {platformList.map((i) => (
            <li key={i.body}>
              <InfoCard body={i.body} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
