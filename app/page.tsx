import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import HeroSection2 from "@/components/sections/HeroSection/heroSection2";

const Home = () => {
  return (
    <main className="h-full w-full">
      {/* <HeroSection /> */}
      <HeroSection2 />
      <ContactSection />
    </main>
  );
};

export default Home;
