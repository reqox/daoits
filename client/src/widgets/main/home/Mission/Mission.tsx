import { useTranslation } from 'react-i18next';
import './Mission.scss';
import { InfoCard } from '@/shared/ui';

export const Mission = () => {
  const { t } = useTranslation('home');
  return (
    <section className="mission">
      <div className="mission__inner container">
        <h2 className="mission-title">{t('mission.title')}</h2>
        <div className="mission__body">
          <InfoCard
            title={`${t('mission.card.1.title')}`}
            body={t('mission.card.1.body')}
          />
          <InfoCard
            title={`${t('mission.card.2.title')}`}
            body={t('mission.card.2.body')}
          />
          <InfoCard
            title={`${t('mission.card.3.title')}`}
            body={t('mission.card.3.body')}
          />
        </div>
      </div>
    </section>
  );
};
