const HeroSection = () => {
  return (
    <div
      className="w-full h-screen relative"
      style={{ backgroundImage: "url(luxembourg-bg.png)" }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 w-full h-full p-20">
        <div className="h-full grid grid-cols-2 gap-10 justify-items-center items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-slate-50 text-5xl font-bold text-balance leading-[60px]">
              1 Luxembourg Hispanic American Services.
            </h1>
            <h2 className="text-slate-200 text-lg font-light text-balance leading-normal">
              Soluciones estratégicas y asesoría especializada para empresas
              globales. Contactanos para mas información.
            </h2>
          </div>
          <div>Logo here</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
