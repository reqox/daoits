import "./NavigationMenu.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as React from "react";
import clsx from "clsx";

interface DropdownItem {
  title: string;
  to: string;
}

interface NavigationItem {
  title: string;
  to: string;
  dropdown?: DropdownItem[];
}

interface iNavigationMenu {
  isHidden?: boolean;
  f?: () => void;
}

export const NavigationMenu: React.FC<iNavigationMenu> = ({ isHidden, f }) => {
  const { t } = useTranslation("header");

  const navigationItems: NavigationItem[] = [
    {
      title: t("navigation.coop.title"),
      to: "coop",
    },
    {
      title: t("navigation.services.title"),
      to: "services",
      dropdown: [
        { title: t("navigation.services.dropdown.app"), to: "services/app" },
        { title: t("navigation.services.dropdown.web"), to: "services/web" },
        {
          title: t("navigation.services.dropdown.promotion"),
          to: "services/promotion",
        },
      ],
    },
    {
      title: t("navigation.developments.title"),
      to: "developments",
      dropdown: [
        {
          title: t("navigation.developments.dropdown.defibridge"),
          to: "developments/defibridge",
        },
        {
          title: t("navigation.developments.dropdown.economy"),
          to: "developments/economy",
        },
        {
          title: t("navigation.developments.dropdown.feonyx"),
          to: "developments/feonyx",
        },
      ],
    },
    {
      title: t("navigation.blockchain.title"),
      to: "blockchain",
    },
    {
      title: t("navigation.tokenomics.title"),
      to: "tokenomics",
      dropdown: [
        {
          title: t("navigation.tokenomics.dropdown.ifehu"),
          to: "tokenomics/ifehu",
        },
        {
          title: t("navigation.tokenomics.dropdown.investor"),
          to: "tokenomics/investor",
        },
      ],
    },
  ];

  return (
    <nav
      className={clsx("navigation", isHidden && "navigation--mobile-hidden")}
      aria-label={"navigation menu"}
    >
      <ul className={"navigation-list"}>
        {navigationItems.map((item) => (
          <li key={item.to} className={"navigation-item"}>
            <NavLink
              to={item.to}
              className={"navigation-link"}
              aria-haspopup={item.dropdown && !isHidden ? "true" : undefined}
              onClick={f}
            >
              {item.title}
            </NavLink>

            {item.dropdown && (
              <div
                className={"navigation__dropdown"}
                aria-label={item.title}
                role={"menu"}
              >
                {item.dropdown.map((subItem) => (
                  <NavLink
                    key={subItem.to}
                    to={subItem.to}
                    className={"navigation__dropdown-link"}
                    role={"menuitem"}
                  >
                    {subItem.title}
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
