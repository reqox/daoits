import { AccentButton } from '@/shared/ui';
import './Feonyx.scss';
import { useTranslation } from 'react-i18next';
import { FenonyxImage } from '@/shared/assets/images';

export const Feonyx = () => {
  const { t } = useTranslation('home');
  return (
    <section className={'feonyx'}>
      <div className="feonyx__inner container">
        <div className="feonyx__body">
          <h2 className="feonyx-title">{t('feonyx.title')}</h2>
          <div className="feonyx-description">
            <p>{t('feonyx.description.1')}</p>
            <p>{t('feonyx.description.2')}</p>
            <p>{t('feonyx.description.3')}</p>
          </div>
          <AccentButton to={'#'}>{t('feonyx.button')}</AccentButton>
        </div>
        <img
          src={FenonyxImage}
          alt=""
          className="feonyx-image"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
    </section>
  );
};
