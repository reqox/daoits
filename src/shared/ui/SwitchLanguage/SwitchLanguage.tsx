import "./SwitchLanguage.scss";
import { useTranslation } from "react-i18next";

export const SwitchLanguage = () => {
  const { i18n, t } = useTranslation("header");
  const toggleLang = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    return i18n.changeLanguage(newLang);
  };
  return (
    <button
      type="button"
      className="switchlanguage"
      onClick={toggleLang}
      aria-label={t("attr.changeLang")}
    >
      {t("interaction.lang")}
    </button>
  );
};
