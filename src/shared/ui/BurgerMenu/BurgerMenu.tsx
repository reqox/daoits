import "./BurgerMenu.scss";
import clsx from "clsx";
import * as React from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LogoSvg } from "@/shared/assets/icons";
import { NavigationMenu } from "@/shared/ui";
import { useTranslation } from "react-i18next";

interface iBurgerMenu {
  isOpen: boolean;
  f: () => void;
}

export const BurgerMenu: React.FC<iBurgerMenu> = ({ isOpen, f }) => {
  const { t } = useTranslation("header");
  const bodyRef = useRef(document.body);
  useEffect(() => {
    const style = bodyRef.current.style;
    if (isOpen) {
      style.height = "100svh";
      style.overflow = "hidden";
    } else {
      style.height = "auto";
      style.overflow = "auto";
    }
    return () => {
      style.height = "auto";
      style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div
      id={"mobile-menu"}
      className={clsx("menu visible-tablet", isOpen && "menu--open")}
      aria-hidden={!isOpen}
    >
      <div className="menu__inner">
        <NavLink to={"/"} className="menu__logo">
          <img
            className="menu__logo-image"
            src={LogoSvg}
            alt="Logo ITS"
            width="100"
            height="100"
            loading="lazy"
            onClick={f}
          />
        </NavLink>
        <div className="menu__main">
          <div className="menu__main-title">{t("burger.menu.navigation")}</div>
          <NavigationMenu f={f} />
        </div>
        <div className="menu__extra">
          <div className="menu__settings">
            <div className="menu__settings-title">
              {t("burger.menu.settings")}
            </div>
            <div className="menu__settings__language">
              <div className="menu__settings__language-info">
                {t("burger.menu.language")}
              </div>
              <div className="menu__settings__language-main">
                {/*<SwitchButton />*/}
              </div>
            </div>
            <div className="menu__settings__theme">
              <div className="menu__settings__settings-info">
                {t("burger.menu.theme")}
              </div>
              <div className="menu__settings__settings-main">
                {/*<SwitchButton />*/}
              </div>
            </div>
          </div>
          <div className="menu__telegram">
            <a
              href={`https://t.me/${import.meta.env.VITE_TELEGRAM}`}
              className="menu__telegram-link"
            >
              {t("burger.menu.contactUs")}
            </a>
          </div>
          <div className="menu__contact-us">
            <a href="#contact-us" className="menu__contact-us-link">
              {t("burger.menu.contactUs")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
