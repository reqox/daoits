import clsx from 'clsx';
import styles from './Management.module.scss';
import { useTranslation } from 'react-i18next';
import { InfoCard } from '@/shared/ui';
import {
  BlockchainManagement1Icon,
  BlockchainManagement2Icon,
} from '@/shared/assets/icons/blockchain';

export const Management = () => {
  const { t } = useTranslation('blockchain');

  const managementList = [
    {
      title: t('management.card.1.title'),
      body: t('management.card.1.body'),
      img: BlockchainManagement1Icon,
    },
    {
      title: t('management.card.2.title'),
      body: t('management.card.2.body'),
      img: BlockchainManagement2Icon,
    },
  ];

  return (
    <section className={styles['management']}>
      <div className={clsx(styles['management__inner'], 'container')}>
        <h2
          className={styles['management-title']}
          dangerouslySetInnerHTML={{ __html: t('management.title') }}
        ></h2>
        <ul className={styles['management-list']}>
          {managementList.map((item, id) => (
            <li key={id} className={styles['management-item']}>
              <InfoCard title={item.title} body={item.body} srcImg={item.img} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
