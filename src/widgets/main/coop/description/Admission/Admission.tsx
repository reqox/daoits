import clsx from 'clsx';
import styles from './Admission.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Admission = () => {
  const { t } = useTranslation('coop');

  const admissionList = [
    {
      title: t('descriptionPage.admission.card.1.title'),
      description: t('descriptionPage.admission.card.1.description'),
    },
    {
      title: t('descriptionPage.admission.card.2.title'),
      description: t('descriptionPage.admission.card.2.description'),
    },
    {
      title: t('descriptionPage.admission.card.3.title'),
      description: t('descriptionPage.admission.card.3.description'),
    },
    {
      title: t('descriptionPage.admission.card.4.title'),
      description: t('descriptionPage.admission.card.4.description'),
    },
    {
      title: t('descriptionPage.admission.card.5.title'),
      description: t('descriptionPage.admission.card.5.description'),
    },
  ];

  return (
    <AnimatedSection className={styles['admission']}>
      <div className={clsx(styles['admission__inner'], 'container')}>
        <div className={styles['admission__title']}>
          <h2 className={styles['admission__title-title']}>
            {t('descriptionPage.admission.title')}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.admission.subtitle'),
            }}
            className={styles['admission__title-subtitle']}
          ></div>
        </div>
        <ul className={styles['admission-list']}>
          {admissionList.map((item, index) => (
            <li key={item.title} className={styles['admission-item']}>
              <InfoCard
                title={`${index + 1}. ${item.title}`}
                body={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
