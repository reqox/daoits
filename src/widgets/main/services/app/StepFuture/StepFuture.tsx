import clsx from 'clsx';
import styles from './StepFuture.module.scss';
import { useTranslation } from 'react-i18next';
import { StepImage } from '@/shared/assets/images';
import { AnimatedSection } from '@/shared/ui';

export const StepFuture = () => {
  const { t } = useTranslation('services');

  const stepList = [
    t('app.step.list.1'),
    t('app.step.list.2'),
    t('app.step.list.3'),
    t('app.step.list.4'),
  ];

  return (
    <AnimatedSection className={styles['step']}>
      <div className={clsx(styles['step__inner'], 'container')}>
        <div className={styles['step__title']}>
          <h2 className={styles['step__title-title']}>{t('app.step.title')}</h2>
          <div className={styles['step__title-subtitle']}>
            {t('app.step.subtitle')}
          </div>
        </div>
        <div className={styles['step__body']}>
          <ul className={styles['step-list']}>
            {stepList.map((item, index) => (
              <li key={index} className={styles['step__item']}>
                <h3 className={styles['step__item-title']}>{item}</h3>
              </li>
            ))}
          </ul>
          <img
            className={styles['step-image']}
            src={StepImage}
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};
