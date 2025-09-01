import clsx from 'clsx';
import styles from './Conditions.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Conditions = () => {
  const { t } = useTranslation('coop');

  const conditionsList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`descriptionPage.conditions.list.${i}.title`),
      body: t(`descriptionPage.conditions.list.${i}.body`),
    };
  });

  return (
    <AnimatedSection className={styles['conditions']}>
      <div className={clsx(styles['conditions__inner'], 'container')}>
        <h2
          className={styles['conditions-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.conditions.title'),
          }}
        ></h2>
        <div className={styles['conditions-subtitle']}>
          <p
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.conditions.subtitle'),
            }}
          ></p>
        </div>
        <div className={styles['conditions__body']}>
          <div
            className={styles['conditions-description']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.conditions.list.description'),
            }}
          ></div>
          <ul className={styles['conditions-list']}>
            {conditionsList.map((item) => (
              <li key={item.title} className={styles['conditions-item']}>
                <InfoCard title={item.title} body={item.body} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};
