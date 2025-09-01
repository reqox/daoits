import clsx from 'clsx';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import { CoopDescriptionImage } from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const Description = () => {
  const { t } = useTranslation('coop');
  return (
    <AnimatedSection className={styles['description']}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <h2
          className={styles['description-title']}
          dangerouslySetInnerHTML={{ __html: t('description.title') }}
        ></h2>
        <div className={styles['description__body']}>
          <div className={styles['description-text']}>
            <p
              dangerouslySetInnerHTML={{ __html: t('description.text.1') }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: t('description.text.2') }}
            ></p>
          </div>
          <img
            className={styles['description-image']}
            src={CoopDescriptionImage}
            alt={''}
            width={100}
            height={100}
            loading={'lazy'}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};
