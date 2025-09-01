import clsx from 'clsx';
import styles from './Blockchain.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Blockchain = () => {
  const { t } = useTranslation('blockchain');

  const blockchainList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`blockchain.list.${i}.title`),
      body: t(`blockchain.list.${i}.body`),
    };
  });

  return (
    <AnimatedSection className={styles['blockchain']}>
      <div className={clsx(styles['blockchain__inner'], 'container')}>
        <div className={styles['blockchain__title']}>
          <h2
            className={styles['blockchain__title-title']}
            dangerouslySetInnerHTML={{ __html: t('blockchain.title') }}
          ></h2>
          <div
            className={styles['blockchain__title-subtitle']}
            dangerouslySetInnerHTML={{ __html: t('blockchain.subtitle') }}
          ></div>
        </div>
        <ul className={styles['blockchain-list']}>
          {blockchainList.map((item, idx) => (
            <li key={idx} className={styles['blockchain-item']}>
              <InfoCard body={item.body} title={item.title} />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
