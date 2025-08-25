import clsx from 'clsx';
import styles from './Conclusion.module.scss';
import { useTranslation } from 'react-i18next';
import { InfoCard } from '@/shared/ui';
import { CoopConclusionImage } from '@/shared/assets/images';

export const Conclusion = () => {
  const { t } = useTranslation('coop');

  const conclusionText = Array.from({ length: 3 }, (_, index) => {
    const i: number = index + 1;
    return {
      text: t(`descriptionPage.conclusion.text.${i}`),
    };
  });

  return (
    <section className={styles['conclusion']}>
      <div className={clsx(styles['conclusion__inner'], 'container')}>
        <h2
          className={styles['conclusion-title']}
          dangerouslySetInnerHTML={{
            __html: t('descriptionPage.conclusion.title'),
          }}
        ></h2>
        <div className={styles['conclusion__body']}>
          <div className={styles['conclusion__body-main']}>
            {conclusionText.map((item) => (
              <div
                key={item.text}
                dangerouslySetInnerHTML={{ __html: item.text }}
              ></div>
            ))}
            <InfoCard
              title={t('descriptionPage.conclusion.card.title')}
              body={t('descriptionPage.conclusion.card.body')}
            />
          </div>
          <img
            className={styles['conclusion__body-image']}
            src={CoopConclusionImage}
            alt={''}
            width={100}
            height={100}
            loading={'lazy'}
          />
        </div>
      </div>
    </section>
  );
};
