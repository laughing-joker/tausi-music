import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AlbumSection from "@/components/AlbumSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AlbumSection />
      </main>
    </div>
  );
};

export default Index;
