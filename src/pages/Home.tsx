
import HeroSection from "../components/sections/Hero";
import FeaturesSection from "../components/sections/FeaturesSection";
import ServicesSection from "../components/sections/ServicesSection";
import BecauseWeCareSection from "../components/sections/BecauseWeCareSection";
import Footer from "../components/navbar/Footer";

const Home = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <BecauseWeCareSection />
      <Footer />
    </div>
  );
};

export default Home;
