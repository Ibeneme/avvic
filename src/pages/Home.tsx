
import HeroSection from "../components/sections/Hero";
import FeaturesSection from "../components/sections/FeaturesSection";
import ServicesSection from "../components/sections/ServicesSection";
import BecauseWeCareSection from "../components/sections/BecauseWeCareSection";


const Home = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <BecauseWeCareSection />
    </div>
  );
};

export default Home;
