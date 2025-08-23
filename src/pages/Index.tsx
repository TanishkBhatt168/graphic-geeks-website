import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { FacultySection } from "@/components/FacultySection";
import { MembersSection } from "@/components/MembersSection";
import { EventsSection } from "@/components/EventsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <FacultySection />
        <MembersSection />
        <EventsSection />
        <SkillsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;