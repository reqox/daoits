import clsx from 'clsx';
import styles from './Advantage.module.scss';
import { useTranslation } from 'react-i18next';

export const Advantage = () => {
  const { t } = useTranslation('coop');

  const advantageList = [
    {
      title: t('advantage.list.1.title'),
      description: [
        t('advantage.list.1.description.1'),
        t('advantage.list.1.description.2'),
        t('advantage.list.1.description.3'),
      ],
    },
    {
      title: t('advantage.list.2.title'),
      description: [
        t('advantage.list.2.description.1'),
        t('advantage.list.2.description.2'),
        t('advantage.list.2.description.3'),
      ],
    },
    {
      title: t('advantage.list.3.title'),
      description: [
        t('advantage.list.3.description.1'),
        t('advantage.list.3.description.2'),
        t('advantage.list.3.description.3'),
      ],
    },
    {
      title: t('advantage.list.4.title'),
      description: [
        t('advantage.list.4.description.1'),
        t('advantage.list.4.description.2'),
        t('advantage.list.4.description.3'),
      ],
    },
  ];

  return (
    <section className={styles['advantage']}>
      <div className={clsx(styles['advantage__inner'], 'container')}>
        <h2
          className={styles['advantage-title']}
          dangerouslySetInnerHTML={{ __html: t('advantage.title') }}
        ></h2>
        <ul className={styles['advantage-list']}>
          {advantageList.map((item) => (
            <li key={item.title} className={styles['advantage__item']}>
              <h3
                className={styles['advantage__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <ul className={styles['advantage__item-list']}>
                {item['description'].map((subItem) => (
                  <li key={subItem} className={styles['advantage__item-item']}>
                    <p dangerouslySetInnerHTML={{ __html: subItem }}></p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
