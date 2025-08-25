import clsx from 'clsx';
import styles from './GlobalUp.module.scss';
import { useTranslation } from 'react-i18next';
import { FullWidthImage, InfoCard, InfoLink } from '@/shared/ui';
import { BlockchainGlobalUpImage } from '@/shared/assets/images';

export const GlobalUp = () => {
  const { t } = useTranslation('blockchain');

  const globalList = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`globalup.list.${i}.title`),
      body: t(`globalup.list.${i}.body`),
    };
  });

  return (
    <section className={styles['global']}>
      <div className={clsx(styles['global__inner'], 'container')}>
        <h2
          className={styles['global-title']}
          dangerouslySetInnerHTML={{ __html: t('globalup.title') }}
        ></h2>
        <FullWidthImage srcImg={BlockchainGlobalUpImage} />
        <ul className={styles['global-list']}>
          {globalList.map((item, idx) => (
            <li key={idx} className={styles['global-item']}>
              <InfoCard title={item.title} body={item.body} />
            </li>
          ))}
          <li className={styles['global-item']}>
            <InfoLink
              description={t('globalup.description')}
              button={t('globalup.button')}
              to=""
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
