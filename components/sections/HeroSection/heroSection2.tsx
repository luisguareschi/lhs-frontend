"use client";

import { AnimatedGradient } from "@/components/common/animatedGradient";
import Navbar from "@/components/common/navbar/navbar";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection2 = () => {
  const { t } = useTranslation();
  return (
    <div className="relative flex h-screen w-full flex-col bg-white">
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-20 md:px-5">
        <div className="w-full">
          <AnimatedGradient className="flex w-full flex-col items-center justify-center gap-10 py-20 xl:py-10 md:gap-7 md:p-7">
            <h1 className="max-w-[900px] text-center text-6xl font-bold capitalize leading-normal text-white xl:text-5xl md:text-4xl">
              1 Luxembourg Hispanic American Services
            </h1>
            <h2 className="text-balance text-center text-xl font-light leading-normal text-white md:text-base">
              {t("hero.description")}
            </h2>
            <div className="flex gap-3">
              <Button
                size="lg"
                className="rounded-full bg-white transition-all hover:bg-white hover:ring-2 hover:ring-white/20 active:scale-95"
                variant="secondary"
              >
                {t("Contact us")}
              </Button>
            </div>
          </AnimatedGradient>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 font-light leading-normal text-slate-600">
          Scroll down to see more
          <ChevronsDown className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
