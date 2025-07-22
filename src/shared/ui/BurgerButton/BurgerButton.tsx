import "./BurgerButton.scss";
import { useState } from "react";
import clsx from "clsx";

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <button
      type={"button"}
      className={clsx("burger visible-mobile", isOpen && "burger--open")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};
