import clsx from 'clsx';
import styles from './About.module.scss';
import { useTranslation } from 'react-i18next';

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
        <ul className={styles['about-list']}>
          {AboutList.map((item, index) => (
            <li key={item.title} className={styles['about__item']}>
              <h3 className={styles['about__item-title']}>
                <span>{(index + 1).toString().padStart(2, '0')}</span>
                <span>{item.title}</span>
              </h3>
              <div className={styles['about__item-description']}>
                {item.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
