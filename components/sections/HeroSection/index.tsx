import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/navbar/navbar";
const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-slate-50">
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="flex max-w-[1500px] items-center justify-center gap-5 p-20 pt-36 md:p-5">
        <div className="flex h-full w-full flex-col gap-7 md:items-center">
          <h1 className="pr-5 text-6xl font-bold uppercase text-slate-800 xl:text-[2.7rem] xl:leading-[2.7rem] md:pr-0 md:text-center md:text-4xl">
            1 Luxembourg Hispanic American Services
          </h1>
          <h2 className="text-balance pr-10 text-lg font-light leading-normal text-slate-700 xl:text-sm md:pr-0 md:text-center">
            Soluciones estratégicas y asesoría especializada para empresas
            globales. Contactanos para mas información.
          </h2>
          <div className="mt-auto flex h-full justify-between gap-3">
            <div className="flex gap-3">
              <Button className="w-fit" size="lg">
                Contactanos
              </Button>
              <Button variant="ghost" className="w-fit" size="lg">
                Conoce mas
              </Button>
            </div>
            <div className="mt-auto aspect-square w-[15vw] rounded-[2rem] bg-slate-300 md:hidden" />
          </div>
        </div>
        <div className="h-full w-[35vw] min-w-[35vw] rounded-[2rem] bg-slate-300 md:hidden" />
      </div>
    </div>
  );
};

export default HeroSection;
