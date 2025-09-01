import clsx from 'clsx';
import styles from './Refusal.module.scss';
import { useTranslation } from 'react-i18next';
import { CoopRefusalImage } from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const Refusal = () => {
  const { t } = useTranslation('coop');
  return (
    <AnimatedSection className={styles['refusal']}>
      <div className={clsx(styles['refusal__inner'], 'container')}>
        <h2
          className={styles['refusal-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.refusal.title'),
          }}
        ></h2>
        <div className={styles['refusal__body']}>
          <div className={styles['refusal__text']}>
            <p
              dangerouslySetInnerHTML={{
                __html: t('descriptionPage.refusal.text.1'),
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: t('descriptionPage.refusal.text.2'),
              }}
            ></p>
          </div>
          <img
            className={styles['refusal-image']}
            src={CoopRefusalImage}
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
