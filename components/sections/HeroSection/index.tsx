import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/navbar/navbar";
const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col justify-center items-center relative">
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      <div className="flex justify-center items-center p-20 pt-36 gap-5 md:p-5 max-w-[1500px]">
        <div className="flex flex-col gap-7 h-full w-full md:items-center">
          <h1 className="text-slate-800 text-6xl font-bold uppercase pr-5 xl:text-[2.7rem] xl:leading-[2.7rem] md:pr-0 md:text-4xl md:text-center">
            1 Luxembourg Hispanic American Services
          </h1>
          <h2 className="text-slate-700 text-lg font-light text-balance leading-normal xl:text-sm pr-10 md:pr-0 md:text-center">
            Soluciones estratégicas y asesoría especializada para empresas
            globales. Contactanos para mas información.
          </h2>
          <div className="flex justify-between gap-3 mt-auto h-full">
            <div className="flex gap-3">
              <Button className="w-fit" size="lg">
                Contactanos
              </Button>
              <Button variant="ghost" className="w-fit" size="lg">
                Conoce mas
              </Button>
            </div>
            <div className="bg-slate-300 rounded-[2rem] aspect-square w-[15vw] mt-auto md:hidden" />
          </div>
        </div>
        <div className="bg-slate-300 rounded-[2rem] h-full w-[35vw] min-w-[35vw] md:hidden" />
      </div>
    </div>
  );
};

export default HeroSection;
