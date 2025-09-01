import clsx from 'clsx';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import { WebDescriptionImage } from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const Description = () => {
  const { t } = useTranslation('services');
  return (
    <AnimatedSection className={styles['description']}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <div className={styles['description__body']}>
          <h2 className={styles['description-title']}>
            {t('web.description.title')}
          </h2>
          <div className={styles['description-text']}>
            <p>{t('web.description.text.1')}</p>
            <p>{t('web.description.text.2')}</p>
          </div>
        </div>
        <img
          className={styles['description-image']}
          src={WebDescriptionImage}
          alt={''}
          width={100}
          height={100}
          loading={'lazy'}
        />
      </div>
    </AnimatedSection>
  );
};
