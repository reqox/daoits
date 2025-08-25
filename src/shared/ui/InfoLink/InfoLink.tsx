import type { FC } from 'react';
import './InfoLink.scss';
import { AccentButton } from '@/shared/ui';

interface InfoLinkProps {
  to: string;
  description: string;
  button: string;
}

export const InfoLink: FC<InfoLinkProps> = ({ to, description, button }) => {
  return (
    <div className={'infolink'}>
      <div className="infolink-description">{description}</div>
      <AccentButton to={to}>{button}</AccentButton>
    </div>
  );
};
