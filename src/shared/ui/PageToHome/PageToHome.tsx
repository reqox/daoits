import styles from './PageToHome.module.scss';
import { AccentButton } from '../AccentButton/AccentButton';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

interface PageToHomeProps {
  title?: string;
  code: string;
}

export const PageToHome: FC<PageToHomeProps> = ({ title, code }) => {
  const { t } = useTranslation('');
  return (
    <section className={styles['page']}>
      <div className={clsx(styles['page__inner'], 'container')}>
        <h1 className={styles['page__code']}>{code}</h1>
        {title && <h2 className={styles['page__title']}>{title}</h2>}
        <AccentButton to={'/'}>{t('linkToHome')}</AccentButton>
      </div>
    </section>
  );
};
