import './Header.scss';
import { useTranslation } from 'react-i18next';
import { LogoSvg } from '@/shared/assets/icons';
import {
  BurgerButton,
  BurgerMenu,
  NavigationMenu,
  SwitchLanguage,
  SwitchTheme,
  TelegramLink,
} from '@/shared/ui';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { useScroll } from '@/shared/hooks';

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { t } = useTranslation('header');
  const isScrolled = useScroll(40, 100);
  return (
    <header className={clsx('header', isActive && 'header--hidden')}>
      <div className={'header__inner container'}>
        <div
          className={clsx(
            'header__actions hidden-tablet',
            isScrolled && 'header__actions--hidden',
          )}
        >
          <a className="header__email" href={'mailto:daoitscom@gmail.com'}>
            <span className="header__email-text">daoitscom@gmail.com</span>
          </a>
          <div className="header__interaction">
            <SwitchTheme />
            <TelegramLink />
            <SwitchLanguage />
            <a href="#contact-us" className="header__interaction-accent">
              <span className="header__interaction-accent-text">
                {t('interaction.contactUs')}
              </span>
            </a>
          </div>
        </div>
        <div className="header__navigation">
          <NavLink to={'/'} className={'header__navigation-logo'}>
            <img
              className={clsx(
                'header__navigation-image',
                isActive && 'header__navigation-image--hidden',
              )}
              src={LogoSvg}
              alt="Logo ITS"
              width={100}
              height={75}
            />
          </NavLink>
          <NavigationMenu isHidden={true} />
          <BurgerButton
            onClick={() => setIsActive(!isActive)}
            isActive={isActive}
          />
          <BurgerMenu isOpen={isActive} f={() => setIsActive(!isActive)} />
        </div>
      </div>
    </header>
  );
};
