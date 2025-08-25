import type { FC } from 'react';
import styles from './SquareIcon.module.scss';

interface SquareIconProps {
  srcImg: string;
}

export const SquareIcon: FC<SquareIconProps> = ({ srcImg }) => {
  return (
    <div className={styles['icon']}>
      <img
        className={styles['icon-image']}
        src={srcImg}
        alt={''}
        width={100}
        height={100}
        loading={'lazy'}
      />
    </div>
  );
};
