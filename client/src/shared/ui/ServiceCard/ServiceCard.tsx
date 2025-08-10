import type { FC } from 'react';
import './ServiceCard.scss';
import { useTranslation } from 'react-i18next';
import { AccentButton } from '../AccentButton/AccentButton';

interface ServiceCardProps {
  srcImg: string;
  title: string;
  description: string;
  to: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  srcImg,
  title,
  description,
  to,
}) => {
  const { t } = useTranslation('home');

  return (
    <div className={'servicecard'}>
      <img
        src={srcImg}
        alt=""
        className="servicecard-image"
        width={100}
        height={100}
        loading="lazy"
      />
      <div className="servicecard__info">
        <h3 className="servicecard__info-title">{title}</h3>
        <div className="servicecard__info-description">{description}</div>
      </div>
      <AccentButton to={to}>{t('services.card.select')}</AccentButton>
    </div>
  );
};
