import clsx from 'clsx';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import { BridgeDiagramPng } from '@/shared/assets/images/bridge';
import { AnimatedSection } from '@/shared/ui';

export const Description = () => {
  const { t } = useTranslation('bridge');
  return (
    <AnimatedSection className={styles['description']}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <div className={styles['description__body']}>
          <h3 className={styles['description-title']}>DeFiBridge</h3>
          <div className={styles['description__text']}>
            <p
              dangerouslySetInnerHTML={{ __html: t('description.text.1') }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: t('description.text.2') }}
            ></p>
          </div>
        </div>
        <img
          className={styles['description-image']}
          src={BridgeDiagramPng}
          alt={''}
          width={100}
          height={100}
          loading={'lazy'}
        />
      </div>
    </AnimatedSection>
  );
};
