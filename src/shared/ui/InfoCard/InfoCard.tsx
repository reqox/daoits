import type { FC } from 'react';
import './InfoCard.scss';

interface InfoCardProps {
  title?: string;
  body: string;
}

export const InfoCard: FC<InfoCardProps> = ({ title, body }) => {
  return (
    <div className="infocard">
      {title && <h3 className="infocard-title">{title}</h3>}
      <div className="infocard-body">{body}</div>
    </div>
  );
};
