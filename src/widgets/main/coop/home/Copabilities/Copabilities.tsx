import clsx from 'clsx';
import styles from './Copabilities.module.scss';
import { useTranslation } from 'react-i18next';
import { CoopCopabilitiesImage } from '@/shared/assets/images';
import { AnimatedSection, FullWidthImage } from '@/shared/ui';

export const Copabilities = () => {
  const { t } = useTranslation('coop');

  const copabilitiesList = [
    {
      title: t('copabilities.list.1.title'),
      description: [
        t('copabilities.list.1.description.1'),
        t('copabilities.list.1.description.2'),
        t('copabilities.list.1.description.3'),
        t('copabilities.list.1.description.4'),
      ],
    },
    {
      title: t('copabilities.list.2.title'),
      description: [
        t('copabilities.list.2.description.1'),
        t('copabilities.list.2.description.2'),
        t('copabilities.list.2.description.3'),
        t('copabilities.list.2.description.4'),
      ],
    },
  ];

  return (
    <AnimatedSection className={styles['copabilities']}>
      <div className={clsx(styles['copabilities__inner'], 'container')}>
        <h2
          className={styles['copabilities-title']}
          dangerouslySetInnerHTML={{ __html: t('copabilities.title') }}
        ></h2>
        <FullWidthImage srcImg={CoopCopabilitiesImage} />
        <ul className={styles['copabilities-list']}>
          {copabilitiesList.map((item) => (
            <li key={item.title} className={styles['copabilities__item']}>
              <h3
                className={styles['copabilities__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <ul className={styles['copabilities__item-list']}>
                {item['description'].map((subItem) => (
                  <li
                    key={subItem}
                    className={styles['copabilities__item-item']}
                  >
                    <p dangerouslySetInnerHTML={{ __html: subItem }}></p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
