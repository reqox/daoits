import { ServiceCard } from '@/shared/ui';
import './Services.scss';
import {
  ServicesDecentralImage,
  // ServicesPromotionImage,
  ServicesWebImage,
} from '@/shared/assets/images';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation('home');

  return (
    <section className={'services'}>
      <div className="services__inner container">
        <div className="services__title">
          <h2 className="services__title-title">{t('services.title')}</h2>
          <div className="services__title-subtitle">
            {t('services.subtitle')}
          </div>
        </div>
        <ul className="services-list">
          <li className="services-item">
            <ServiceCard
              srcImg={ServicesWebImage}
              title={t('services.card.1.title')}
              description={t('services.card.1.description')}
              to="services/web"
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={ServicesDecentralImage}
              title={t('services.card.2.title')}
              description={t('services.card.2.description')}
              to="services/decentral"
            />
          </li>
          {/* <li className="services-item">
            <ServiceCard
              srcImg={ServicesPromotionImage}
              title={t('services.card.3.title')}
              description={t('services.card.3.description')}
              to="services/promotion"
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={ServicesPromotionImage}
              title={t('services.card.4.title')}
              description={t('services.card.4.description')}
              to="services/promotion"
            />
          </li> */}
        </ul>
      </div>
    </section>
  );
};
