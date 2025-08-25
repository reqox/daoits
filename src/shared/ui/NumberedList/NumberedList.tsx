import type { FC } from 'react';
import styles from './NumberedList.module.scss';

interface List {
  title: string;
  description: string;
}

interface NumberedListProps {
  list: Array<List>;
}

export const NumberedList: FC<NumberedListProps> = ({ list }) => {
  return (
    <ul className={styles['list']}>
      {list.map((item, index) => (
        <li key={item.title} className={styles['list__item']}>
          <h3 className={styles['list__item-title']}>
            <span>{(index + 1).toString().padStart(2, '0')}</span>
            <span>{item.title}</span>
          </h3>
          <div className={styles['list__item-description']}>
            {item.description}
          </div>
        </li>
      ))}
    </ul>
  );
};
