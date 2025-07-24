import "./Banner.scss";
import { useTranslation } from "react-i18next";

export const Banner = () => {
  const { t } = useTranslation("home");
  return (
    <section className={"banner"}>
      <div className="banner__inner container">
        <h1 className="banner-title">{t("title")}</h1>
        <div className="banner__subtitle">
          <div className="banner__subtitle-description">
            <p>{t("banner.world")}</p>
            <p>
              <span className={"its"}>ITS</span> – {t("banner.company")}
            </p>
            <p>
              <span className={"its"}>ITS</span> — {t("banner.ecosystem")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
