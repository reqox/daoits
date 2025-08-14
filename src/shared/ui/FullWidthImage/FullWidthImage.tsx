import type { FC } from 'react';
import styles from './FullWidthImage.module.scss';

interface FullWidthImageProps {
  srcImg: string;
}

export const FullWidthImage: FC<FullWidthImageProps> = ({ srcImg }) => {
  return (
    <img
      className={styles['image']}
      src={srcImg}
      alt={''}
      width={100}
      height={100}
      loading={'lazy'}
    />
  );
};
