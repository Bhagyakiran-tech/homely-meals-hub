import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FoodVarietySection from "@/components/FoodVarietySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FoodVarietySection />
        <HowItWorksSection />
        <AboutUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;