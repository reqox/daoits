import { AnimatedSection, InfoCard } from '@/shared/ui';
import './AboutUs.scss';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation('home');
  return (
    <AnimatedSection className={'about'}>
      <div className="about__inner container">
        <div className="about__title">
          <h2 className="about__title-main">{t('about.title')}</h2>
          <div className="about__title-subtitle">{t('about.subtitle')}</div>
        </div>
        <div className="about__body">
          <InfoCard
            title={t('about.card.1.title')}
            body={t('about.card.1.body')}
          />
          <InfoCard
            title={t('about.card.2.title')}
            body={t('about.card.2.body')}
          />
          <InfoCard
            title={t('about.card.3.title')}
            body={t('about.card.3.body')}
          />
          <InfoCard
            title={t('about.card.4.title')}
            body={t('about.card.4.body')}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};
