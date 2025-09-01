import clsx from 'clsx';
import styles from './Functions.module.scss';
import { useTranslation } from 'react-i18next';
import {
  BridgeFunc1Img,
  BridgeFunc2Img,
  BridgeFunc3Img,
  BridgeFunc4Img,
  BridgeFunc5Img,
  BridgeFunc6Img,
  BridgeFunc7Img,
  BridgeFunc8Img,
} from '@/shared/assets/images/bridge';
import { AnimatedSection } from '@/shared/ui';

export const Functions = () => {
  const { t } = useTranslation('bridge');

  const srcImg = [
    BridgeFunc1Img,
    BridgeFunc2Img,
    BridgeFunc3Img,
    BridgeFunc4Img,
    BridgeFunc5Img,
    BridgeFunc6Img,
    BridgeFunc7Img,
    BridgeFunc8Img,
    BridgeFunc8Img,
  ];

  const funcId = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <AnimatedSection className={styles['functions']}>
      <div className={clsx(styles['functions__inner'], 'container')}>
        <h2 className={styles['functions-title']}>{t('functions.title')}</h2>
        <ul className={styles['functions-list']}>
          {funcId.map((id) => {
            const list = t(`functions.${id}.list`, {
              defaultValue: [],
              returnObjects: true,
            }) as string[];

            return (
              <li key={id} className={styles['functions__item']}>
                <div className={styles['functions__body']}>
                  <h3
                    className={styles['functions__body-title']}
                    dangerouslySetInnerHTML={{
                      __html: t(`functions.${id}.title`),
                    }}
                  ></h3>
                  <ul className={styles['functions__body-list']}>
                    {list.map((subItem, idx) => (
                      <li key={idx} className={styles['functions__body-item']}>
                        <p dangerouslySetInnerHTML={{ __html: subItem }}></p>
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  className={styles['functions__item-image']}
                  src={srcImg[id - 1]}
                  alt={''}
                  width={100}
                  height={100}
                  loading={'lazy'}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedSection>
  );
};
