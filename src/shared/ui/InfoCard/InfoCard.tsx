import type { FC } from 'react';
import './InfoCard.scss';

interface InfoCardProps {
  title?: string;
  body: string;
  srcImg?: string;
}

export const InfoCard: FC<InfoCardProps> = ({ title, body, srcImg }) => {
  return (
    <div className="infocard">
      {title && (
        <div className="infocard__title">
          {srcImg && (
            <img
              src={srcImg}
              alt=""
              className="infocard-image"
              width={30}
              height={30}
            />
          )}
          <h3 className="infocard-title">{title}</h3>
        </div>
      )}
      <div className="infocard-body">
        <p>{body}</p>
      </div>
    </div>
  );
};
