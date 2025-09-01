import clsx from 'clsx';
import styles from './Ready.module.scss';
import { useTranslation } from 'react-i18next';
import { AccentButton, AnimatedSection } from '@/shared/ui';

export const Ready = () => {
  const { t } = useTranslation('services');
  return (
    <AnimatedSection className={styles['ready']}>
      <div className={clsx(styles['ready__inner'], 'container')}>
        <div className={styles['ready__invite']}>
          <h2 className={styles['ready-title']}>
            {t('app.ready.title.invite')}
          </h2>
          <div className={styles['ready-subtitle']}>
            {t('app.ready.subtitle')}
          </div>
          <AccentButton to="#">{t('app.ready.button')}</AccentButton>
        </div>
        <div className={styles['ready__description']}>
          <h3 className={styles['ready__description-title']}>
            {t('app.ready.title.description')}
          </h3>
          <div className={styles['ready__description-text']}>
            {t('app.ready.description')}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
