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
        className="cursor-pointer text-slate-800 transition-all active:scale-95"
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
            className="fixed left-0 top-0 z-50 h-full w-full bg-black/50"
            onClick={handleOutSideClick}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="fixed right-0 top-0 flex h-full w-72 flex-col bg-slate-200 p-5 text-slate-700"
              onClick={handleInsideClick}
            >
              <div className="flex w-full flex-row items-center justify-end">
                <X
                  className="size-8 cursor-pointer transition-all active:scale-95"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-5">
                {menuItems.map((item, index) => (
                  <>
                    <Link
                      href={item.path}
                      key={item.title}
                      className="w-max py-1 font-medium transition-all"
                    >
                      {t(item.title)}
                    </Link>
                    {index !== menuItems.length - 1 && (
                      <div
                        className="h-[1px] w-[60%] bg-black/20"
                        key={index}
                      />
                    )}
                  </>
                ))}
              </div>
              <div className="mb-5 flex w-full flex-col items-center justify-center gap-10">
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
