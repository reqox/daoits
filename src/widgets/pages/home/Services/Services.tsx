import { ServiceCard } from '@/shared/ui';
import './Services.scss';
import {
  Services1Image,
  Services2Image,
  Services3Image,
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
              srcImg={Services3Image}
              title={t('services.card.1.title')}
              description={t('services.card.1.description')}
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={Services2Image}
              title={t('services.card.2.title')}
              description={t('services.card.2.description')}
            />
          </li>
          <li className="services-item">
            <ServiceCard
              srcImg={Services1Image}
              title={t('services.card.3.title')}
              description={t('services.card.3.description')}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
