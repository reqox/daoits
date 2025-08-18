import { useTranslation } from 'react-i18next';
import styles from './Tech.module.scss';
import clsx from 'clsx';
import {
  BlockchainTech1Image,
  BlockchainTech2Image,
  BlockchainTech3Image,
  BlockchainTech4Image,
  BlockchainTech5Image,
  BlockchainTech6Image,
  BlockchainTech7Image,
  BlockchainTech8Image,
} from '@/shared/assets/images';

export const Tech = () => {
  const { t } = useTranslation('blockchain');

  const srcImg = [
    BlockchainTech1Image,
    BlockchainTech2Image,
    BlockchainTech3Image,
    BlockchainTech4Image,
    BlockchainTech5Image,
    BlockchainTech6Image,
    BlockchainTech7Image,
    BlockchainTech8Image,
  ];
  const techId = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className={styles['tech']}>
      <div className={clsx(styles['tech__inner'], 'container')}>
        <div className={styles['tech__title']}>
          <h2
            className={styles['tech__title-title']}
            dangerouslySetInnerHTML={{ __html: t('tech.title') }}
          ></h2>
          <div
            className={styles['tech__title-subtitle']}
            dangerouslySetInnerHTML={{ __html: t('tech.subtitle') }}
          ></div>
        </div>

        <ul className={styles['tech-list']}>
          {techId.map((id) => {
            const advantage = t(`tech.advantage.${id}`, {
              defaultValue: [],
              returnObjects: true,
            }) as string[];
            const features = t(`tech.features.${id}`, {
              defaultValue: [],
              returnObjects: true,
            }) as string[];

            return (
              <li key={id} className={styles['tech-item']}>
                <div className={styles['tech__body']}>
                  <h3
                    className={styles['tech__body-title']}
                    dangerouslySetInnerHTML={{
                      __html: t(`tech.list.${id}.title`),
                    }}
                  ></h3>
                  <div
                    className={styles['tech__body-subtitle']}
                    dangerouslySetInnerHTML={{
                      __html: t(`tech.list.${id}.subtitle`),
                    }}
                  ></div>

                  {Array.isArray(advantage) && advantage.length > 0 && (
                    <div className={styles['tech__description']}>
                      <div
                        className={styles['tech__description-title']}
                        dangerouslySetInnerHTML={{
                          __html: t('tech.advantage.title'),
                        }}
                      ></div>
                      <ul className={styles['tech__description-list']}>
                        {(
                          t(`tech.advantage.${id}`, {
                            returnObjects: true,
                          }) as string[]
                        ).map((text, idx) => (
                          <li
                            key={idx}
                            className={styles['tech__description-item']}
                          >
                            <p dangerouslySetInnerHTML={{ __html: text }}></p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {Array.isArray(features) && features.length > 0 && (
                    <div className={styles['tech__description']}>
                      <div
                        className={styles['tech__description-title']}
                        dangerouslySetInnerHTML={{
                          __html: t('tech.features.title'),
                        }}
                      ></div>
                      <ul className={styles['tech__description-list']}>
                        {(
                          t(`tech.features.${id}`, {
                            returnObjects: true,
                          }) as string[]
                        ).map((text, idx) => (
                          <li
                            key={idx}
                            className={styles['tech__description-item']}
                          >
                            <p dangerouslySetInnerHTML={{ __html: text }}></p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <img
                  className={styles['tech-image']}
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
    </section>
  );
};
