import clsx from 'clsx';
import styles from './ForUs.module.scss';
import { useTranslation } from 'react-i18next';
import { ForUsImage } from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const ForUs = () => {
  const { t } = useTranslation('services');
  return (
    <AnimatedSection className={styles['for']}>
      <div className={clsx(styles['for__inner'], 'container')}>
        <div className={styles['for__body']}>
          <h2 className={styles['for__body-title']}>{t('app.for.title')}</h2>
          <div
            className={styles['for__body-description']}
            dangerouslySetInnerHTML={{ __html: t('app.for.description') }}
          ></div>
        </div>
        <img
          src={ForUsImage}
          alt=""
          className={styles['for-image']}
          width={100}
          height={100}
        />
      </div>
    </AnimatedSection>
  );
};
