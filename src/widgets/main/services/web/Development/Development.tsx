import clsx from 'clsx';
import styles from './Development.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Development = () => {
  const { t } = useTranslation('services');
  const developmentList = [
    {
      title: t('web.development.list.1.title'),
      body: t('web.development.list.1.body'),
    },
    {
      title: t('web.development.list.2.title'),
      body: t('web.development.list.2.body'),
    },
    {
      title: t('web.development.list.3.title'),
      body: t('web.development.list.3.body'),
    },
    {
      title: t('web.development.list.4.title'),
      body: t('web.development.list.4.body'),
    },
    {
      title: t('web.development.list.5.title'),
      body: t('web.development.list.5.body'),
    },
  ];
  return (
    <AnimatedSection className={styles['development']}>
      <div className={clsx(styles['development__inner'], 'container')}>
        <h2 className={styles['development-title']}>
          {t('web.development.title')}
        </h2>
        <ul className={styles['development-list']}>
          {developmentList.map((item) => (
            <li key={item.title} className={styles['development-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
