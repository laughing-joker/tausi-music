import { Button } from "@/components/ui/button";
import playIcon3D from "@/assets/play-icon-3d.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Kijito cha utulivu
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light">
                Experience tranquility through music
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-3 rounded-full"
              >
                Explore Album
              </Button>
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8 py-3 rounded-full"
              >
                Book Now
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Play Icon */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={playIcon3D} 
                alt="Play Music" 
                className="w-64 h-64 lg:w-80 lg:h-80 drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;