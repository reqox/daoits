import clsx from 'clsx';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/shared/ui';

export const Description = () => {
  const { t } = useTranslation('economy');
  return (
    <AnimatedSection className={styles['description']}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <h2
          className={styles['description-title']}
          dangerouslySetInnerHTML={{ __html: t('description.title') }}
        ></h2>
        <div className={styles['description-body']}>
          <p dangerouslySetInnerHTML={{ __html: t('description.body') }}></p>
        </div>
      </div>
    </AnimatedSection>
  );
};
