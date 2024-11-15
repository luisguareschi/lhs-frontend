import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="h-full grid grid-cols-2 gap-10 justify-items-center items-center p-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-slate-800 text-5xl font-bold text-balance leading-[60px]">
            1 Luxembourg Hispanic American Services.
          </h1>
          <h2 className="text-slate-700 text-lg font-light text-balance leading-normal">
            Soluciones estratégicas y asesoría especializada para empresas
            globales. Contactanos para mas información.
          </h2>
          <Button className="w-fit" size="lg">
            Contactanos
          </Button>
        </div>
        <div>Logo here</div>
      </div>
    </div>
  );
};

export default HeroSection;
