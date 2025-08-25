import clsx from 'clsx';
import styles from './Roadmap.module.scss';
import { useTranslation } from 'react-i18next';

export const Roadmap = () => {
  const { t } = useTranslation('blockchain');

  const roadmapList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 2024;
    return {
      title: `${i}`,
      description: t(`roadmap.${i}`),
    };
  });

  return (
    <section className={styles['roadmap']}>
      <div className={clsx(styles['roadmap__inner'], 'container')}>
        <h2
          className={styles['roadmap-title']}
          dangerouslySetInnerHTML={{ __html: t('roadmap.title') }}
        ></h2>
        <ul className={styles['roadmap-list']}>
          {roadmapList.map((item, idx) => (
            <li key={idx} className={styles['roadmap__item']}>
              <h2 className={styles['roadmap__item-title']}>{item.title}</h2>
              <h3
                className={styles['roadmap__item-description']}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
