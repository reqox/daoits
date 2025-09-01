import clsx from 'clsx';
import styles from './Global.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/shared/ui';

export const Global = () => {
  const { t } = useTranslation('blockchain');

  const globalList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`global.list.${i}.title`),
      description: t(`global.list.${i}.description`),
    };
  });

  return (
    <AnimatedSection className={styles['global']}>
      <div className={clsx(styles['global__inner'], 'container')}>
        <h2
          className={styles['global-title']}
          dangerouslySetInnerHTML={{ __html: t('global.title') }}
        ></h2>
        <ul className={styles['global-list']}>
          {globalList.map((item, idx) => (
            <li key={idx} className={styles['global__item']}>
              <h3
                className={styles['global__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <div
                className={styles['global__item-description']}
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
