import "./BurgerMenu.scss";
import clsx from "clsx";
import * as React from "react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { LogoSvg } from "@/shared/assets/icons";
import { NavigationMenu } from "@/shared/ui";

interface iBurgerMenu {
  isOpen: boolean;
}

export const BurgerMenu: React.FC<iBurgerMenu> = ({ isOpen }) => {
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
          />
        </NavLink>
        <NavigationMenu />
      </div>
    </div>
  );
};
