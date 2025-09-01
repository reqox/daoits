import { useTranslation } from 'react-i18next';
import styles from './Innovations.module.scss';
import clsx from 'clsx';
import { AnimatedSection } from '@/shared/ui';

export const Innovations = () => {
  const { t } = useTranslation('blockchain');

  const innovationsList = Array.from({ length: 4 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`innovations.list.${i}.title`),
      body: t(`innovations.list.${i}.body`),
    };
  });

  return (
    <AnimatedSection className={styles['innovations']}>
      <div className={clsx(styles['innovations__inner'], 'container')}>
        <h2 className={styles['innovations-title']}>
          {t('innovations.title')}
        </h2>
        <ul className={styles['innovations-list']}>
          {innovationsList.map((item) => (
            <li key={item.title} className={styles['innovations__item']}>
              <h3
                className={styles['innovations__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <div
                className={styles['innovations__item-body']}
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
