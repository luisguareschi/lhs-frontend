import { useEffect, useState } from "react";
import useBreakpoints from "./useBreakpoints";

export const useWindowScroll = () => {
  const breakpoints = useBreakpoints();
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("");
  const offset = !breakpoints.sm ? 0 : 0;

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > previousScrollY + offset) {
        setScrollDirection("down");
      } else if (currentScrollY < previousScrollY - offset) {
        setScrollDirection("up");
      }

      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset, breakpoints.sm]);

  return {
    scrollY,
    scrollDirection: scrollDirection as "up" | "down",
  };
};
