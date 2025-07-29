import { DescriptionChartImage } from '@/shared/assets/images';
import './Description.scss';
import { useTranslation } from 'react-i18next';

export const Description = () => {
  const { t } = useTranslation('home');
  return (
    <section className={'description'}>
      <div className="description__inner container">
        <div className="description__body">
          <ul className="description__body-list">
            <li className="description__body-item">
              <div className="description__body-icon"></div>
              <div className="description__body-text">
                {t('description.text_1')}
              </div>
            </li>
            <li className="description__body-item">
              <div className="description__body-icon"></div>
              <div className="description__body-text">
                {t('description.text_2')}
              </div>
            </li>
            <li className="description__body-item">
              <div className="description__body-icon"></div>
              <div className="description__body-text">
                {t('description.text_3')}
              </div>
            </li>
          </ul>
          <div className="description__images">
            <div className="description__images-text">
              {t('description.reliability')}
            </div>
            <img
              src={DescriptionChartImage}
              alt=""
              className="description__images-chart"
              width={100}
              height={100}
              loading={'lazy'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
