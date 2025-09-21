import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TechnologySection from "@/components/TechnologySection";
import ImpactSection from "@/components/ImpactSection";
import LocationsSection from "@/components/LocationSection";
import AboutSection from "@/components/AboutUsSection";
import Footer from "@/components/Footer";
import ChatButton from "@/components/chatButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <LocationsSection/>
        <IndustriesSection />
        <AboutSection/>
        <TechnologySection />
        <ImpactSection />
      </main>
        <ChatButton />
      <Footer />
    </div>
  );
};

export default Index;