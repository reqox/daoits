import { useEffect, useState } from "react";

type UseScroll = (show: number, hide: number) => boolean;

export const useScroll: UseScroll = (show, hide) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!isScrolled && scrollY > hide) {
        setIsScrolled(true);
      } else if (isScrolled && scrollY < show) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, hide, isScrolled]);

  return isScrolled;
};
