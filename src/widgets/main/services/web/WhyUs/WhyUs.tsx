import clsx from 'clsx';
import styles from './WhyUs.module.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, InfoCard } from '@/shared/ui';
import {
  WhyUsIcon1Svg,
  WhyUsIcon2Svg,
  WhyUsIcon3Svg,
  WhyUsIcon4Svg,
  WhyUsIcon5Svg,
  WhyUsIcon6Svg,
} from '@/shared/assets/icons/web';

export const WhyUs = () => {
  const { t } = useTranslation('services');

  const whyList = [
    {
      title: t('web.whyus.list.1.title'),
      body: t('web.whyus.list.1.body'),
      srcImg: WhyUsIcon1Svg,
    },
    {
      title: t('web.whyus.list.2.title'),
      body: t('web.whyus.list.2.body'),
      srcImg: WhyUsIcon2Svg,
    },
    {
      title: t('web.whyus.list.3.title'),
      body: t('web.whyus.list.3.body'),
      srcImg: WhyUsIcon3Svg,
    },
    {
      title: t('web.whyus.list.4.title'),
      body: t('web.whyus.list.4.body'),
      srcImg: WhyUsIcon4Svg,
    },
    {
      title: t('web.whyus.list.5.title'),
      body: t('web.whyus.list.5.body'),
      srcImg: WhyUsIcon5Svg,
    },
    {
      title: t('web.whyus.list.6.title'),
      body: t('web.whyus.list.6.body'),
      srcImg: WhyUsIcon6Svg,
    },
  ];

  return (
    <AnimatedSection className={styles['why']}>
      <div className={clsx(styles['why__inner'], 'container')}>
        <h2 className={styles['why-title']}>{t('web.whyus.title')}</h2>
        <ul className={styles['why-list']}>
          {whyList.map((item) => (
            <li key={item.title} className={styles['why-item']}>
              <InfoCard
                title={item.title}
                body={item.body}
                srcImg={item.srcImg}
              />
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
};
