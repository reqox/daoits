import type { FC } from 'react';
import './ServiceCard.scss';
import { useTranslation } from 'react-i18next';
import { AccentButton } from '../AccentButton/AccentButton';

interface ServiceCardProps {
  srcImg: string;
  title: string;
  description: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  srcImg,
  title,
  description,
}) => {
  const { t } = useTranslation('home');

  return (
    <div className={'servicecard'}>
      <div className="servicecard-image--wrap">
        <img
          src={srcImg}
          alt=""
          className="servicecard-image"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <div className="servicecard__info">
        <h3 className="servicecard__info-title">{title}</h3>
        <div className="servicecard__info-description">{description}</div>
      </div>
      <AccentButton to={'#'}>{t('services.card.select')}</AccentButton>
    </div>
  );
};
