import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { menuItems } from "./menuItems";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import LanguageSwitcher from "../languageSwitcher";
import Image from "next/image";

const Sidebar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOutSideClick = () => {
    setOpen(false);
  };

  const handleInsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="text-slate-800 cursor-pointer active:scale-95 transition-all"
        onClick={() => setOpen(!open)}
      >
        <Menu className="size-8" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-50"
            onClick={handleOutSideClick}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 right-0 w-72 h-full bg-slate-200 p-5 flex flex-col text-slate-700"
              onClick={handleInsideClick}
            >
              <div className="w-full flex flex-row justify-end items-center">
                <X
                  className="size-8 cursor-pointer active:scale-95 transition-all"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="w-full flex flex-col gap-5 h-full justify-center items-center">
                {menuItems.map((item, index) => (
                  <>
                    <Link
                      href={item.path}
                      key={item.title}
                      className="font-medium py-1 transition-all w-max"
                    >
                      {t(item.title)}
                    </Link>
                    {index !== menuItems.length - 1 && (
                      <div
                        className="w-[60%] h-[1px] bg-black/20"
                        key={index}
                      />
                    )}
                  </>
                ))}
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-10 mb-5">
                <LanguageSwitcher />
                <Image
                  src="/logo-white.png"
                  alt="logo"
                  width={120}
                  height={1}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
