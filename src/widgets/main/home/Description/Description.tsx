import {
  DescriptionChartImage,
  DescriptionHomeIcon1Image,
  DescriptionHomeIcon2Image,
  DescriptionHomeIcon3Image,
} from '@/shared/assets/images';
import './Description.scss';
import { useTranslation } from 'react-i18next';
import { AnimatedSection, SquareIcon } from '@/shared/ui';

export const Description = () => {
  const { t } = useTranslation('home');
  return (
    <AnimatedSection className={'description'}>
      <div className="description__inner container">
        <h2
          className={'description-title'}
          dangerouslySetInnerHTML={{ __html: t('description.title') }}
        ></h2>
        <div className="description__body">
          <ul className="description__body-list">
            <li className="description__body-item">
              <SquareIcon srcImg={DescriptionHomeIcon1Image} />
              <div className="description__body-text">
                {t('description.text_1')}
              </div>
            </li>
            <li className="description__body-item">
              <SquareIcon srcImg={DescriptionHomeIcon2Image} />
              <div className="description__body-text">
                {t('description.text_2')}
              </div>
            </li>
            <li className="description__body-item">
              <SquareIcon srcImg={DescriptionHomeIcon3Image} />
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
    </AnimatedSection>
  );
};
