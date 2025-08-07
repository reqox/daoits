import clsx from 'clsx';
import styles from './Preview.module.scss';
import { PreviewCardPage } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { Preview1Image } from '@/shared/assets/images';

export const Preview = () => {
  const { t } = useTranslation('services');
  return (
    <section className={styles['preview']}>
      <div className={clsx(styles['preview__inner'], 'container')}>
        <ul className={styles['preview-list']}>
          <li className={styles['preview-item']}>
            <PreviewCardPage
              title={t('preview.card.1.title')}
              description={t('preview.card.1.description')}
              srcImg={Preview1Image}
              alt={t('preview.card.1.alt')}
              buttonText={t('preview.button.text')}
            />
          </li>
          <li className={styles['preview-item']}>
            <PreviewCardPage
              title={t('preview.card.2.title')}
              description={t('preview.card.2.description')}
              srcImg={Preview1Image}
              alt={t('preview.card.2.alt')}
              buttonText={t('preview.button.text')}
            />
          </li>
          <li className={styles['preview-item']}>
            <PreviewCardPage
              title={t('preview.card.3.title')}
              description={t('preview.card.3.description')}
              srcImg={Preview1Image}
              alt={t('preview.card.3.alt')}
              buttonText={t('preview.button.text')}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
