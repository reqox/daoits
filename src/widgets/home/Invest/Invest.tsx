import { useTranslation } from 'react-i18next';
import './Invest.scss';
import { InfoLink } from '@/shared/ui';
import { InvestFehuImage } from '@/shared/assets/images';

export const Invest = () => {
  const { t } = useTranslation('home');
  return (
    <section className={'invest'}>
      <div className="invest__inner container">
        <div className="invest__main">
          <div className="invest__body">
            <h2 className="invest__body-title">{t('invest.title')}</h2>
            <div className="invest__body-description">
              <p>{t('invest.description.1')}</p>
              <p>{t('invest.description.2')}</p>
              <p>{t('invest.description.3')}</p>
            </div>
          </div>
          <img
            src={InvestFehuImage}
            alt=""
            className="invest-image"
            loading="lazy"
          />
        </div>
        <InfoLink
          to={'#'}
          description={t('invest.button.title')}
          button={t('invest.button.main')}
        />
      </div>
    </section>
  );
};
