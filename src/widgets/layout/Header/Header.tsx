import "./Header.scss";
import { useTheme } from "@/shared/hooks";

export const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header className={"header"}>
      <button type="button" className="header-button" onClick={toggleTheme}>
        Изменить тему
      </button>
    </header>
  );
};
