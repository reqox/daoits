import clsx from 'clsx';
import styles from './Cycle.module.scss';
import { InfoCard } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

export const Cycle = () => {
  const { t } = useTranslation('coop');
  return (
    <section className={styles['cycle']}>
      <div className={clsx(styles['cycle__inner'], 'container')}>
        <h2
          className={styles['cycle-title']}
          dangerouslySetInnerHTML={{ __html: t('descriptionPage.cycle.title') }}
        ></h2>
        <div className={styles['cycle__body']}>
          <p
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.cycle.text.1'),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.cycle.text.2'),
            }}
          ></p>
          <InfoCard
            title={t('descriptionPage.cycle.card.title')}
            body={t('descriptionPage.cycle.card.body')}
          />
        </div>
      </div>
    </section>
  );
};
