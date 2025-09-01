import { useTranslation } from 'react-i18next';
import styles from './Solutions.module.scss';
import clsx from 'clsx';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Solutions = () => {
  const { t } = useTranslation('coop');

  const solutionsList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`descriptionPage.solutions.list.${i}.title`),
      body: t(`descriptionPage.solutions.list.${i}.body`),
    };
  });

  return (
    <AnimatedSection className={styles['solutions']}>
      <div className={clsx(styles['solutions__inner'], 'container')}>
        <div className={styles['solutions__title']}>
          <h2
            className={styles['solutions__title-title']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.solutions.title'),
            }}
          ></h2>
          <div className={styles['solutions__title-subtitle']}>
            <p
              dangerouslySetInnerHTML={{
                __html: t('descriptionPage.solutions.subtitle'),
              }}
            ></p>
          </div>
        </div>
        <ul className={styles['solutions-list']}>
          {solutionsList.map((item) => (
            <li key={item.title} className={styles['solutions-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
