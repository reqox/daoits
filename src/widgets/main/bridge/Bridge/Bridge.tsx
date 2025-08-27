import clsx from 'clsx';
import styles from './Bridge.module.scss';
import { BridgeImg } from '@/shared/assets/images/bridge';
import { useTranslation } from 'react-i18next';

export const Bridge = () => {
  const { t } = useTranslation('bridge');
  return (
    <section className={styles['bridge']}>
      <div className={clsx(styles['bridge__inner'], 'container')}>
        <img
          className={styles['bridge-image']}
          src={BridgeImg}
          alt={''}
          width={100}
          height={100}
          loading={'lazy'}
        />
        <div className={styles['bridge__body']}>
          <h2 className={styles['bridge-title']}>DeFiBridge</h2>
          <div className={styles['bridge-description']}>
            <p
              dangerouslySetInnerHTML={{ __html: t('bridge.description') }}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
};
