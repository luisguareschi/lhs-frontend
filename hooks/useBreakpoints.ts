import { useEffect, useState } from "react";
import config from "@/tailwind.config";

const DefaultBreakpoints = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  "2xl": false,
  "3xl": false,
};

const useBreakpoints = () => {
  const [breakpoints, setBreakpoints] = useState(DefaultBreakpoints);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoints({
        xs: width < parseInt(config.theme.screens.sm.max),
        sm:
          width >= parseInt(config.theme.screens.sm.max) &&
          width < parseInt(config.theme.screens.md.max),
        md:
          width >= parseInt(config.theme.screens.md.max) &&
          width < parseInt(config.theme.screens.lg.max),
        lg:
          width >= parseInt(config.theme.screens.lg.max) &&
          width < parseInt(config.theme.screens.xl.max),
        xl:
          width >= parseInt(config.theme.screens.xl.max) &&
          width < parseInt(config.theme.screens["2xl"].max),
        "2xl":
          width >= parseInt(config.theme.screens["2xl"].max) &&
          width < parseInt(config.theme.screens["3xl"].max),
        "3xl": width >= parseInt(config.theme.screens["3xl"].max),
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoints;
};

export default useBreakpoints;
