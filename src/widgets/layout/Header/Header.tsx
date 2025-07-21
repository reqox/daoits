import "./Header.scss";
import { useTranslation } from "react-i18next";
import { LogoSvg } from "@/shared/assets/icons";
import { NavigationMenu, SwitchTheme } from "@/shared/ui";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const { i18n, t } = useTranslation("header");
  const toggleLang = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    return i18n.changeLanguage(newLang);
  };
  return (
    <header className={"header"}>
      <div className={"header__inner container"}>
        <div className="header__actions">
          <a className="header__email" href={"mailto:daoitscom@gmail.com"}>
            <span className="header__email-text">daoitscom@gmail.com</span>
          </a>
          <div className="header__interaction">
            <SwitchTheme />
            <a
              href="https://t.me/daoits"
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
            <a href="#" className="header__interaction-accent">
              <span className="header__interaction-accent-text">
                {t("interaction.contactUs")}
              </span>
            </a>
          </div>
        </div>
        <div className="header__navigation">
          <NavLink to={"/"} className={"header__navigation-logo"}>
            <img
              className="header__navigation-image"
              src={LogoSvg}
              alt="Logo ITS"
              width={100}
              height={75}
              loading="lazy"
            />
          </NavLink>
          <NavigationMenu />
        </div>
      </div>
    </header>
  );
};
