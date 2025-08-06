import { Link } from 'react-router-dom';
import './AccentButton.scss';
import type { FC, ReactNode } from 'react';

interface AccentButtonProps {
  to: string;
  children: ReactNode;
}

export const AccentButton: FC<AccentButtonProps> = ({ to, children }) => {
  return (
    <Link to={to} className="accentbutton">
      {children}
    </Link>
  );
};
