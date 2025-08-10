import clsx from 'clsx';
import styles from './NotFound.module.scss';
import { useTranslation } from 'react-i18next';
import { AccentButton } from '@/shared/ui';

export const NotFound = () => {
  const { t } = useTranslation('');
  return (
    <section className={styles['notfound']}>
      <div className={clsx(styles['notfound__inner'], 'container')}>
        <h1 className={styles['notfound__code']}>404</h1>
        <h2 className={styles['notfound__title']}>
          {t('notfound.pageNotFound')}
        </h2>
        <AccentButton to={'/'}>{t('notfound.link')}</AccentButton>
      </div>
    </section>
  );
};
