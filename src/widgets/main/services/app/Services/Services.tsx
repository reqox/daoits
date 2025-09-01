import { useTranslation } from 'react-i18next';
import styles from './Services.module.scss';
import clsx from 'clsx';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Services = () => {
  const { t } = useTranslation('services');
  const servicesList = [
    {
      title: t('app.services.card.1.title'),
      body: t('app.services.card.1.body'),
    },
    {
      title: t('app.services.card.2.title'),
      body: t('app.services.card.2.body'),
    },
    {
      title: t('app.services.card.3.title'),
      body: t('app.services.card.3.body'),
    },
    {
      title: t('app.services.card.4.title'),
      body: t('app.services.card.4.body'),
    },
    {
      title: t('app.services.card.5.title'),
      body: t('app.services.card.5.body'),
    },
    {
      title: t('app.services.card.6.title'),
      body: t('app.services.card.6.body'),
    },
  ];
  return (
    <AnimatedSection className={styles['services']}>
      <div className={clsx(styles['services__inner'], 'container')}>
        <h2 className={styles['services-title']}>{t('app.services.title')}</h2>
        <ul className={styles['services-list']}>
          {servicesList.map((item) => (
            <li key={item.title} className={styles['services-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
