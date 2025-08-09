import clsx from 'clsx';
import styles from './About.module.scss';
import { useTranslation } from 'react-i18next';
import { NumberedList } from '@/shared/ui';

export const About = () => {
  const { t } = useTranslation('services');
  const AboutList = [
    {
      title: t('app.about.list.1.title'),
      description: t('app.about.list.1.description'),
    },
    {
      title: t('app.about.list.2.title'),
      description: t('app.about.list.2.description'),
    },
    {
      title: t('app.about.list.3.title'),
      description: t('app.about.list.3.description'),
    },
    {
      title: t('app.about.list.4.title'),
      description: t('app.about.list.4.description'),
    },
    {
      title: t('app.about.list.5.title'),
      description: t('app.about.list.5.description'),
    },
  ];
  return (
    <section className={styles['about']}>
      <div className={clsx(styles['about__inner'], 'container')}>
        <h2 className={styles['about-title']}>{t('app.about.title')}</h2>
        <NumberedList list={AboutList} />
      </div>
    </section>
  );
};
