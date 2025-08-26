import './NavigationMenu.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as React from 'react';
import clsx from 'clsx';
import { NavigationLinks } from '@/shared/lib';

interface iNavigationMenu {
  f?: () => void;
}

export const NavigationMenu: React.FC<iNavigationMenu> = ({ f }) => {
  const { t } = useTranslation('header');

  return (
    <nav className={clsx('navigation')} aria-label={'navigation menu'}>
      <ul className={'navigation-list'}>
        {NavigationLinks.map((item) => (
          <li key={item.to} className={'navigation-item'}>
            <NavLink
              to={item.to}
              className={'navigation-link'}
              aria-haspopup={item.dropdown ? 'true' : undefined}
              onClick={f}
            >
              {t(item.title)}
            </NavLink>

            {item.dropdown && (
              <div
                className={'navigation__dropdown'}
                aria-label={t(item.title)}
                role={'menu'}
              >
                {item.dropdown.map((subItem) => (
                  <NavLink
                    key={subItem.to}
                    to={subItem.to}
                    className={'navigation__dropdown-link'}
                    role={'menuitem'}
                  >
                    {t(subItem.title)}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
