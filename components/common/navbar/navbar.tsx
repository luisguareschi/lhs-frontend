"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./menuItems";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="w-full h-28 flex justify-between items-center px-20">
      <div className="w-full flex justify-start">
        <Image src="/logo-color.png" alt="logo" height={1} width={160} />
      </div>
      <div className="w-full flex justify-center gap-7">
        {menuItems.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className="text-slate-800 font-medium hover:text-primary-600 py-1 transition-all w-max"
          >
            {t(item.title)}
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
