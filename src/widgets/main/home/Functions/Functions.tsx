import { useTranslation } from 'react-i18next';
import './Functions.scss';
import { AnimatedSection, InfoCard } from '@/shared/ui';

export const Functions = () => {
  const { t } = useTranslation('home');
  return (
    <AnimatedSection className={'functions'}>
      <div className="functions__inner container">
        <h2 className="functions-title">{t('functions.title')}</h2>
        <div className="functions__body">
          <InfoCard
            title={t('functions.card.1.title')}
            body={t('functions.card.1.body')}
          />
          <InfoCard
            title={t('functions.card.2.title')}
            body={t('functions.card.2.body')}
          />
          <InfoCard
            title={t('functions.card.3.title')}
            body={t('functions.card.3.body')}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};
