import clsx from 'clsx';
import styles from './Application.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, FullWidthImage, InfoCard } from '@/shared/ui';
import { BlockchainApplicationImage } from '@/shared/assets/images';

export const Application = () => {
  const { t } = useTranslation('blockchain');

  const applicationList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`application.card.${i}.title`),
      body: t(`application.card.${i}.body`),
    };
  });

  return (
    <AnimatedSection className={styles['application']}>
      <div className={clsx(styles['application__inner'], 'container')}>
        <h2
          className={styles['application-title']}
          dangerouslySetInnerHTML={{ __html: t('application.title') }}
        ></h2>
        <FullWidthImage srcImg={BlockchainApplicationImage} />
        <ul className={styles['application-list']}>
          {applicationList.map((item) => (
            <li key={item.title} className={styles['application__item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
