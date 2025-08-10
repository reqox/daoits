import clsx from 'clsx';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import { DescriptionAppImage } from '@/shared/assets/images';

export const Description = () => {
  const { t } = useTranslation('services');
  return (
    <section className={clsx(styles['description'])}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <div className={styles['description__body']}>
          <h2 className={styles['description-title']}>
            {t('app.description.title')}
          </h2>
          <div className={styles['description-text']}>
            <p>{t('app.description.text.1')}</p>
            <p>{t('app.description.text.2')}</p>
          </div>
        </div>
        <img
          src={DescriptionAppImage}
          alt=""
          className={styles['description-image']}
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
    </section>
  );
};
