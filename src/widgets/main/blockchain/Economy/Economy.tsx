import clsx from 'clsx';
import styles from './Economy.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Economy = () => {
  const { t } = useTranslation('blockchain');
  return (
    <AnimatedSection className={styles['economy']}>
      <div className={clsx(styles['economy__inner'], 'container')}>
        <h2
          className={styles['economy-title']}
          dangerouslySetInnerHTML={{ __html: t('economy.title') }}
        ></h2>
        <div className={styles['economy__body']}>
          <ul className={styles['economy-list']}>
            <li className={styles['economy__item']}>
              <h3
                className={styles['economy__item-title']}
                dangerouslySetInnerHTML={{
                  __html: t('economy.algorithm.title'),
                }}
              ></h3>
              <div className={styles['economy__item-body']}>
                <InfoCard
                  title={t('economy.algorithm.card.1.title')}
                  body={t('economy.algorithm.card.1.body')}
                />
                <InfoCard
                  title={t('economy.algorithm.card.2.title')}
                  body={t('economy.algorithm.card.2.body')}
                />
              </div>
            </li>
            <li className={styles['economy__item']}>
              <h3
                className={styles['economy__item-title']}
                dangerouslySetInnerHTML={{
                  __html: t('economy.balance.title'),
                }}
              ></h3>
              <div className={styles['economy__item-body']}>
                <InfoCard
                  title={t('economy.balance.card.1.title')}
                  body={t('economy.balance.card.1.body')}
                />
                <InfoCard
                  title={t('economy.balance.card.2.title')}
                  body={t('economy.balance.card.2.body')}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};
