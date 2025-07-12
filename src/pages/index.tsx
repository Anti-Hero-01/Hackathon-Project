import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrowseSection from "@/components/BrowseSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BrowseSection />
      <HowItWorksSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
