import { AccentButton, BannerPage } from '@/shared/ui';
import styles from './Banner.module.scss';
import { useTranslation } from 'react-i18next';
import {
  CoopBannerCaseIcon,
  CoopBannerDownloadIcon,
  CoopBannerStarIcon,
} from '@/shared/assets/icons/coop';

export const Banner = () => {
  const { t } = useTranslation('coop');

  const buttonList = [
    {
      title: t('descriptionPage.list.1.title'),
      to: '#',
      srcImg: CoopBannerCaseIcon,
    },
    {
      title: t('descriptionPage.list.2.title'),
      to: '#',
      srcImg: CoopBannerStarIcon,
    },
    {
      title: t('descriptionPage.list.3.title'),
      to: '#',
      srcImg: CoopBannerDownloadIcon,
    },
  ];

  return (
    <BannerPage title={t('descriptionPage.title')}>
      <ul className={styles['banner-list']}>
        {buttonList.map((item) => (
          <li key={item.title} className={styles['banner__item']}>
            <AccentButton to={item.to}>
              <div className={styles['banner__item-body']}>
                <img
                  className={styles['banner__item-image']}
                  src={item.srcImg}
                  alt={''}
                  width={24}
                  height={24}
                />
                <div className={styles['banner__item-title']}>{item.title}</div>
              </div>
            </AccentButton>
          </li>
        ))}
      </ul>
    </BannerPage>
  );
};
