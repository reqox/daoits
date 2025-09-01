import clsx from 'clsx';
import styles from './Model.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, FullWidthImage, InfoCard } from '@/shared/ui';
import { CoopModelImage } from '@/shared/assets/images';

export const Model = () => {
  const { t } = useTranslation('coop');

  const modelList = Array.from({ length: 9 }, (_, index) => {
    const i = index + 1;
    return {
      title: t(`descriptionPage.model.list.${i}.title`),
      description: t(`descriptionPage.model.list.${i}.description`),
    };
  });

  return (
    <AnimatedSection className={styles['model']}>
      <div className={clsx(styles['model__inner'], 'container')}>
        <div className={styles['model__title']}>
          <h2
            className={styles['model__title-title']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.model.title'),
            }}
          ></h2>
          <div
            className={styles['model__title-subtitle']}
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.model.subtitle'),
            }}
          ></div>
        </div>
        <ul className={styles['model-list']}>
          {modelList.map((item) => (
            <li key={item.title} className={styles['model-item']}>
              <InfoCard title={item.title} body={item.description} />
            </li>
          ))}
        </ul>
        <FullWidthImage srcImg={CoopModelImage} />
      </div>
    </AnimatedSection>
  );
};
