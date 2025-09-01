import clsx from 'clsx';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import {
  BlockchainDescriptionCard1Image,
  BlockchainDescriptionCard2Image,
  BlockchainDescriptionImage,
} from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const Description = () => {
  const { t } = useTranslation('blockchain');

  const cardList = [
    {
      title: t(`description.card.1.title`),
      subtitle: t(`description.card.1.subtitle`),
      srcImg: BlockchainDescriptionCard1Image,
    },
    {
      title: t(`description.card.2.title`),
      subtitle: t(`description.card.2.subtitle`),
      srcImg: BlockchainDescriptionCard2Image,
    },
  ];

  return (
    <AnimatedSection className={styles['description']}>
      <div className={clsx(styles['description__inner'], 'container')}>
        <h2
          className={styles['description__title']}
          dangerouslySetInnerHTML={{ __html: t('description.title') }}
        ></h2>
        <div className={styles['description__wrap']}>
          <div className={styles['description__body']}>
            <img
              className={styles['description__body-image']}
              src={BlockchainDescriptionImage}
              alt={''}
              width={100}
              height={100}
              loading={'lazy'}
            />
            <div className={styles['description__body-text']}>
              <p
                dangerouslySetInnerHTML={{ __html: t('description.body.1') }}
              ></p>
              <p
                dangerouslySetInnerHTML={{ __html: t('description.body.2') }}
              ></p>
            </div>
          </div>
          <div className={styles['description__accent']}>
            {cardList.map((item) => (
              <div key={item.title} className={styles['description__card']}>
                <h3
                  className={styles['description__card-title']}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h3>
                <div className={styles['description__card-subtitle']}>
                  <p dangerouslySetInnerHTML={{ __html: item.subtitle }}></p>
                </div>
                <img
                  className={styles['description__card-image']}
                  src={item.srcImg}
                  alt={''}
                  width={100}
                  height={100}
                  loading={'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
