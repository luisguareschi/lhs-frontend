import ContactSection from "@/components/sections/ContactSection";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
