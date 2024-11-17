"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "./menuItems";

const Navbar = () => {
  return (
    <header className="w-full h-28 grid grid-cols-3 items-center justify-items-center px-20">
      <div className="w-full flex justify-start">
        <Image src="/logo-color.png" alt="logo" height={1} width={160} />
      </div>
      <div className="w-full flex justify-center gap-5">
        {menuItems.map((item) => (
          <Link href={item.path} key={item.title}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-end">LANG SWITCHER</div>
    </header>
  );
};

export default Navbar;
