import { useTranslation } from 'react-i18next';
import styles from './Banner.module.scss';
import { BridgeWalletPng } from '@/shared/assets/images/bridge';

export const Banner = () => {
  const { t } = useTranslation('bridge');
  return (
    <section className={styles['banner']}>
      <div className={styles['banner__inner']}>
        <div className={styles['banner__title']}>
          <h3 className={styles['banner__title-bridgeName']}>DeFiBridge</h3>
          <h1
            className={styles['banner__title-title']}
            dangerouslySetInnerHTML={{ __html: t('banner.title') }}
          ></h1>
        </div>
        <img
          className={styles['banner-image']}
          src={BridgeWalletPng}
          alt={t('banner.alt')}
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
