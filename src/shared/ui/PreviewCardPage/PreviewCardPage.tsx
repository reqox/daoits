import type { FC } from 'react';
import styles from './PreviewCardPage.module.scss';
import { AccentButton } from '../AccentButton/AccentButton';

interface PreviewCardPageProps {
  title: string;
  description: string;
  srcImg: string;
  alt: string;
  buttonText: string;
}

export const PreviewCardPage: FC<PreviewCardPageProps> = ({
  title,
  description,
  buttonText,
  srcImg,
  alt,
}) => {
  return (
    <div className={styles['previewCard']}>
      <div className={styles['previewCard__body']}>
        <h2 className={styles['previewCard-title']}>{title}</h2>
        <div className={styles['previewCard-description']}>
          <p>{description}</p>
        </div>
        <div className={styles['previewCard-button']}>
          <AccentButton to={'#'}>{buttonText}</AccentButton>
        </div>
      </div>
      <img
        src={srcImg}
        alt={alt}
        className={styles['previewCard-image']}
        width={100}
        height={100}
      />
    </div>
  );
};
