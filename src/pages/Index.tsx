import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GamesSection } from "@/components/GamesSection";
import { DigitalSection } from "@/components/DigitalSection";
import { LabsSection } from "@/components/LabsSection";
import { SocialHub } from "@/components/SocialHub";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GamesSection />
        <DigitalSection />
        <LabsSection />
        <SocialHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
