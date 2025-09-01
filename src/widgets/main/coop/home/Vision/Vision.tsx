import clsx from 'clsx';
import styles from './Vision.module.scss';
import { useTranslation } from 'react-i18next';
import { CoopVisionImage } from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const Vision = () => {
  const { t } = useTranslation('coop');
  return (
    <AnimatedSection className={styles['vision']}>
      <div className={clsx(styles['vision__inner'], 'container')}>
        <h2
          className={styles['vision-title']}
          dangerouslySetInnerHTML={{ __html: t('vision.title') }}
        ></h2>
        <div className={styles['vision__body']}>
          <div className="vision__text">
            <p dangerouslySetInnerHTML={{ __html: t('vision.text.1') }}></p>
            <p dangerouslySetInnerHTML={{ __html: t('vision.text.2') }}></p>
          </div>
          <img
            className={styles['vision-image']}
            src={CoopVisionImage}
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
