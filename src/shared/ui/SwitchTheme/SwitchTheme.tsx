import "./SwitchTheme.scss";
import clsx from "clsx";
import { useTheme } from "@/shared/hooks";

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type={"button"}
      className={clsx("button", { "button--dark": theme === "dark" })}
      onClick={toggleTheme}
    ></button>
  );
};
