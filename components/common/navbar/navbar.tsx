"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./menuItems";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher";
import Sidebar from "./sidebar";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="flex h-28 min-h-28 w-full items-center justify-between px-20 md:h-20 md:px-5">
      <div className="flex w-full justify-start">
        <Image src="/logo-color.png" alt="logo" height={1} width={160} />
      </div>
      <div className="flex w-full justify-center gap-7 sm:hidden">
        {menuItems.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className="w-max py-1 font-medium text-slate-800 transition-all hover:text-primary-600"
          >
            {t(item.title)}
          </Link>
        ))}
      </div>
      <div className="flex w-full justify-end sm:hidden">
        <LanguageSwitcher />
      </div>
      <div className="hidden sm:block">
        <Sidebar />
      </div>
    </header>
  );
};

export default Navbar;
