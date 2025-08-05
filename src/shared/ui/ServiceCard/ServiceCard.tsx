import type { FC } from 'react';
import './ServiceCard.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
      <div className="servicecard__body">
        <img
          src={srcImg}
          alt=""
          className="servicecard__body-image"
          width={100}
          height={100}
          loading="lazy"
        />
        <h3 className="servicecard__body-title">{title}</h3>
        <div className="servicecard__body-description">{description}</div>
      </div>
      <Link to={'#'} className={'servicecard-button'}>
        {t('services.card.select')}
      </Link>
    </div>
  );
};
