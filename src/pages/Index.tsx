import Header from "@/components/Header";
import BackgroundGrid from "@/components/BackgroundGrid";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import IntroSection from "@/components/IntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToSection from "@/components/HowToSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <BackgroundGrid />
        <HeroSection />
        <TechStack />
        <IntroSection />
        <BenefitsSection />
        <HowToSection />
        <FeaturesSection />
        <ShowcaseSection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;