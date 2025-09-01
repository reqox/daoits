import { AnimatedSection, InfoCard } from '@/shared/ui';
import './Projecting.scss';
import { useTranslation } from 'react-i18next';

export const Projecting = () => {
  const { t } = useTranslation('home');
  return (
    <AnimatedSection className={'projecting'}>
      <div className="projecting__inner container">
        <h2 className="projecting-title">{t('projecting.title')}</h2>
        <InfoCard body={t('projecting.card.1')} />
        <InfoCard body={t('projecting.card.2')} />
        <InfoCard body={t('projecting.card.3')} />
        <InfoCard body={t('projecting.card.4')} />
        <InfoCard body={t('projecting.card.5')} />
      </div>
    </AnimatedSection>
  );
};
