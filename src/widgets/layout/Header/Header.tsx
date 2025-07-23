import "./Header.scss";
import { useTranslation } from "react-i18next";
import { LogoSvg } from "@/shared/assets/icons";
import {
  BurgerButton,
  BurgerMenu,
  NavigationMenu,
  SwitchTheme,
} from "@/shared/ui";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import { useScroll } from "@/shared/hooks";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { i18n, t } = useTranslation("header");
  const isScrolled = useScroll(40, 100);
  const toggleLang = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    return i18n.changeLanguage(newLang);
  };
  return (
    <header className={clsx("header", isActive && "header--hidden")}>
      <div className={"header__inner container"}>
        <div
          className={clsx(
            "header__actions hidden-tablet",
            isScrolled && "header__actions--hidden",
          )}
        >
          <a className="header__email" href={"mailto:daoitscom@gmail.com"}>
            <span className="header__email-text">daoitscom@gmail.com</span>
          </a>
          <div className="header__interaction">
            <SwitchTheme />
            <a
              href={`https://t.me/${import.meta.env.VITE_TELEGRAM}`}
              className="header__interaction-link"
              aria-label={t("attr.sendTg")}
              title={t("attr.sendTg")}
            ></a>
            <button
              type="button"
              className="header__interaction-lang"
              onClick={toggleLang}
              aria-label={t("attr.changeLang")}
            >
              {t("interaction.lang")}
            </button>
            <a href="#contact-us" className="header__interaction-accent">
              <span className="header__interaction-accent-text">
                {t("interaction.contactUs")}
              </span>
            </a>
          </div>
        </div>
        <div className="header__navigation">
          <NavLink to={"/"} className={"header__navigation-logo"}>
            <img
              className={clsx(
                "header__navigation-image",
                isActive && "header__navigation-image--hidden",
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
