import './Header.scss';
import { useTranslation } from 'react-i18next';
import { LogoPng } from '@/shared/assets/icons';
import {
  BurgerButton,
  BurgerMenu,
  NavigationList,
  SwitchLanguage,
  SwitchTheme,
  TelegramLink,
} from '@/shared/ui';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useOpen, useScroll } from '@/shared/hooks';

export const Header = () => {
  const { isOpen, toggleOpen } = useOpen();
  const { t } = useTranslation('header');
  const isScrolled = useScroll(40, 100);
  return (
    <header className={clsx('header', isOpen && 'header--hidden')}>
      <div className={'header__inner container'}>
        {!isScrolled && (
          <div className={clsx('header__actions hidden-tablet')}>
            <a
              className="header__email"
              href={`mailto:${import.meta.env.VITE_EMAIL}`}
            >
              <span className="header__email-text">
                {import.meta.env.VITE_EMAIL}
              </span>
            </a>
            <div className="header__interaction">
              <SwitchTheme />
              <TelegramLink />
              <SwitchLanguage />
              <a href="#" className="header__interaction-accent">
                <span className="header__interaction-accent-text">
                  {t('interaction.coop')}
                </span>
              </a>
            </div>
          </div>
        )}
        <div className="header__navigation">
          <NavLink to={'/'} className={'header__navigation-logo'}>
            <img
              className={clsx(
                'header__navigation-image',
                isOpen && 'header__navigation-image--hidden',
              )}
              src={LogoPng}
              alt="Logo ITS"
              width={100}
              height={75}
            />
          </NavLink>
          <NavigationList />
          <BurgerButton onClick={toggleOpen} isActive={isOpen} />
          <BurgerMenu isOpen={isOpen} f={toggleOpen} />
        </div>
      </div>
    </header>
  );
};
