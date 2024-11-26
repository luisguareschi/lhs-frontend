"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./menuItems";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../languageSwitcher";
import Sidebar from "./sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  variant?: "overlay";
}

const Navbar = ({ variant }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header
      className={cn(
        "flex h-28 min-h-28 w-full items-center justify-between px-20 md:h-20 md:px-5",
        variant === "overlay" && "h-24 min-h-24",
      )}
    >
      <div className="flex w-full justify-start">
        <Image src="/logo-color.png" alt="logo" height={1} width={160} />
      </div>
      <div className="flex w-full justify-center gap-2 sm:hidden">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.title}>
            <Button
              variant="text"
              size="default"
              className="w-max text-slate-800 hover:bg-primary-100 hover:text-primary-600 active:scale-95"
            >
              {t(item.title)}
            </Button>
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
