import styles from './BurgerMenu.module.scss';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SwitchLanguage, SwitchTheme } from '@/shared/ui';
import { useTranslation } from 'react-i18next';
import { NavigationLinks } from '@/shared/lib';
import clsx from 'clsx';
import { LogoPng } from '@/shared/assets/icons';

interface iBurgerMenu {
  isOpen: boolean;
  f: () => void;
}

export const BurgerMenu: React.FC<iBurgerMenu> = ({ isOpen, f }) => {
  const { t } = useTranslation('header');
  const { t: tc } = useTranslation();
  const bodyRef = useRef(document.body);

  useEffect(() => {
    const style = bodyRef.current.style;
    if (isOpen) {
      style.overflow = 'hidden';
    } else {
      style.overflow = 'auto';
    }
    return () => {
      style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        f();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, f]);

  return (
    <div className={clsx(styles['menu'], isOpen && styles['menu--opened'])}>
      <div className={styles['menu__inner']}>
        <div className={styles['menu__header']}>
          <NavLink to={'/'} className={styles['menu__header-link']}>
            <img
              className={styles['menu__header-logo']}
              src={LogoPng}
              alt={''}
              width={100}
              height={100}
              loading={'lazy'}
            />
          </NavLink>
        </div>
        <div className={styles['menu__main']}>
          <nav className={styles['menu__navigation']}>
            <div
              className={clsx(
                styles['menu__navigation-title'],
                styles['menu__main-title'],
              )}
              dangerouslySetInnerHTML={{
                __html: t('burger.menu.navigation'),
              }}
            ></div>
            <div className={styles['menu__scroll']}>
              <ul className={styles['menu__navigation-list']}>
                {NavigationLinks.map((item, id) => (
                  <li key={id} className={styles['menu__navigation-item']}>
                    <NavLink
                      to={item.to}
                      className={styles['menu__navigation-link']}
                      onClick={f}
                    >
                      {tc(item.title)}
                    </NavLink>
                    {item.dropdown && (
                      <ul className={styles['menu__dropdown-list']}>
                        {item.dropdown.map((subItem, idx) => (
                          <li
                            key={idx}
                            className={styles['menu__dropdown-item']}
                          >
                            <NavLink
                              className={styles['menu__dropdown-link']}
                              to={subItem.to}
                              onClick={f}
                            >
                              {tc(subItem.title)}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>{' '}
            </div>
          </nav>
          <div className={styles['menu__settings']}>
            <div
              className={clsx(
                styles['menu__settings-title'],
                styles['menu__main-title'],
              )}
              dangerouslySetInnerHTML={{ __html: t('burger.menu.settings') }}
            ></div>
            <div className={styles['menu__lang']}>
              <div
                className={styles['menu__lang-title']}
                dangerouslySetInnerHTML={{
                  __html: t('burger.menu.language'),
                }}
              ></div>
              <SwitchLanguage />
            </div>
            <div className={styles['menu__theme']}>
              <div
                className={styles['menu__theme-title']}
                dangerouslySetInnerHTML={{ __html: t('burger.menu.theme') }}
              ></div>
              <SwitchTheme />
            </div>
          </div>
        </div>
        <div className={styles['menu__footer']}>
          <a
            href={import.meta.env.VITE_TELEGRAM}
            className={clsx(
              styles['menu__footer-telegram'],
              styles['menu__footer-link'],
            )}
            dangerouslySetInnerHTML={{ __html: t('burger.menu.telegram') }}
          ></a>
          <a
            href="#"
            className={clsx(
              styles['menu__footer-contact'],
              styles['menu__footer-link'],
            )}
            dangerouslySetInnerHTML={{ __html: t('burger.menu.coop') }}
          ></a>
        </div>
      </div>
    </div>
  );
};
