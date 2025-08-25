import './BurgerButton.scss';
import * as React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

interface iBurgerButton {
  isActive: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<iBurgerButton> = ({
  isActive,
  onClick,
}) => {
  const { t } = useTranslation('header');
  return (
    <button
      type={'button'}
      className={clsx('burger visible-tablet', isActive && 'burger--active')}
      onClick={onClick}
      aria-label={clsx(isActive ? t('attr.closeMenu') : t('attr.openMenu'))}
      aria-expanded={isActive}
      aria-controls={'mobile-menu'}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};
