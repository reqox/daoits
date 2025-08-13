import { useTranslation } from 'react-i18next';
import styles from './Description.module.scss';
import clsx from 'clsx';

export const Description = () => {
  const { t } = useTranslation('coop');
  return (
    <section className={styles['description']}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <p
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.description.1'),
          }}
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.description.2'),
          }}
        ></p>
        <p
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.description.3'),
          }}
        ></p>
      </div>
    </section>
  );
};
