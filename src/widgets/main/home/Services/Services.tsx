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
              title={t('services.card.web.title')}
              description={t('services.card.web.description')}
              to="services/web"
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={ServicesDecentralImage}
              title={t('services.card.app.title')}
              description={t('services.card.app.description')}
              to="services/app"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
