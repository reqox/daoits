import clsx from 'clsx';
import styles from './Advantages.module.scss';
import { useTranslation } from 'react-i18next';
import {
  BridgeAdvantages1Icon,
  BridgeAdvantages2Icon,
  BridgeAdvantages3Icon,
  BridgeAdvantages4Icon,
} from '@/shared/assets/icons/bridge';

export const Advantages = () => {
  const { t } = useTranslation('bridge');

  const list = Array.from({ length: 4 }, (_, index) => {
    const i: number = index + 1;
    return {
      title: t(`advantages.list.${i}.title`),
      body: t(`advantages.list.${i}.body`),
    };
  });

  const srcIcon = [
    BridgeAdvantages1Icon,
    BridgeAdvantages2Icon,
    BridgeAdvantages3Icon,
    BridgeAdvantages4Icon,
  ];

  return (
    <section className={styles['advantages']}>
      <div className={clsx(styles['advantages__inner'], 'container')}>
        <h2 className={styles['advantages-title']}>{t('advantages.title')}</h2>
        <ul className={styles['advantages-list']}>
          {list.map((item, id) => (
            <li key={id} className={styles['advantages__item']}>
              <div className={styles['advantages__image']}>
                <img
                  className={styles['advantages__image-icon']}
                  src={srcIcon[id]}
                  alt={''}
                  width={100}
                  height={100}
                  loading={'lazy'}
                />
              </div>
              <h3
                className={styles['advantages__item-title']}
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <div className={styles['advantages__item-description']}>
                <p dangerouslySetInnerHTML={{ __html: item.body }}></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
