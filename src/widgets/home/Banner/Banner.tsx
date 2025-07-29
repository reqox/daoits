import { BannerImage } from '@/shared/assets/images';
import './Banner.scss';
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation('home');
  return (
    <section className={'banner'}>
      <div className="banner__inner container">
        <div className="banner__main">
          <h1 className="banner-title">{t('title')}</h1>
          <div className="banner__subtitle">
            <div className="banner__subtitle-description">
              <p>{t('banner.world')}</p>
              <p>
                <span className={'its'}>ITS</span> – {t('banner.company')}
              </p>
              <p>
                <span className={'its'}>ITS</span> — {t('banner.ecosystem')}
              </p>
            </div>
          </div>
        </div>
        <img
          src={BannerImage}
          alt=""
          className="banner-image"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};
