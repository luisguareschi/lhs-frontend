"use client";

import { useEffect, useState } from "react";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";

const OverlayNavbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { scrollY, scrollDirection } = useWindowScroll();

  useEffect(() => {
    if (scrollY > 100 && scrollDirection === "up") {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [scrollY, scrollDirection]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="fixed left-0 top-0 z-50 w-full bg-white shadow-xl"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.2 }}
        >
          <Navbar variant="overlay" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OverlayNavbar;
