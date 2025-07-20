import "./Header.scss";
import { useTheme } from "@/shared/hooks";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { toggleTheme } = useTheme();
  const { i18n, t } = useTranslation("home");

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    return i18n.changeLanguage(newLang);
  };

  return (
    <header className={"header"}>
      <button type="button" className="header-button" onClick={toggleTheme}>
        {t("button.changeTheme")}
      </button>
      <button type="button" className="header-button" onClick={toggleLang}>
        {t("button.changeLang")}
      </button>
    </header>
  );
};
