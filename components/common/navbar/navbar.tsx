"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./menuItems";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <header className="w-full h-28 grid grid-cols-3 items-center justify-items-center px-20">
      <div className="w-full flex justify-start">
        <Image src="/logo-color.png" alt="logo" height={1} width={160} />
      </div>
      <div className="w-full flex justify-center gap-5">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.title}>
            {t(item.title)}
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <button onClick={handleChangeLanguage}>LANG SWITCHER</button>
      </div>
    </header>
  );
};

export default Navbar;
