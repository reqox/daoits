import "./BurgerButton.scss";
import * as React from "react";
import clsx from "clsx";

interface iBurgerButton {
  isActive: boolean;
  onClick: () => void;
}

export const BurgerButton: React.FC<iBurgerButton> = ({
  isActive,
  onClick,
}) => {
  return (
    <button
      type={"button"}
      className={clsx("burger visible-mobile", isActive && "burger--active")}
      onClick={onClick}
      aria-label={`${isActive ? "Закрыть" : "Открыть"} меню`}
      aria-expanded={isActive}
      aria-controls={"mobile-menu"}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};
