import clsx from 'clsx';
import styles from './Architecture.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/shared/ui';

export const Architecture = () => {
  const { t } = useTranslation('coop');
  return (
    <AnimatedSection className={styles['architecture']}>
      <div className={clsx(styles['architecture__inner'], 'container')}>
        <h2
          className={styles['architecture-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.architecture.title'),
          }}
        ></h2>
        <div className={styles['architecture-text']}>
          <p
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.architecture.text.1'),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.architecture.text.2'),
            }}
          ></p>
          <p
            dangerouslySetInnerHTML={{
              __html: t('descriptionPage.architecture.text.3'),
            }}
          ></p>
        </div>
      </div>
    </AnimatedSection>
  );
};
